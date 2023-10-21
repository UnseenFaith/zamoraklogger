import { webpackImages, PointLike, RectLike, ImgRef, captureHoldFullRs, Rect } from "alt1";
import * as OCR from "alt1/ocr";

import * as font from "alt1/fonts/aa_8px_mono.js"

let imgs = webpackImages({
  bottom_right: require("../images/enrage_bottom_right.data.png"),
  top_left: require("../images/enrage_top_left.data.png"),
  percent: require("../images/enrage_percent.data.png")
})

export type ModalUI = {
	rect: RectLike,
	title: string,
	img: ImgRef
}

export namespace EnrageUIReader {
	export function find(img?: ImgRef) {
		if (!img) { img = captureHoldFullRs(); }
    let top = img.findSubimage(imgs.top_left)[0];
    if (!top) { return null; }
    let right = img.findSubimage(imgs.bottom_right)[0];
    if (!right) { return null; }
    let percent = img.findSubimage(imgs.percent, top.x, top.y, right.x - top.x, right.y - top.y)[0];
    if (!percent) { return null }

    let pixels = img.toData(top.x, top.y, right.x - top.x, right.y - top.y)

    let pos = OCR.findChar(pixels, font, [255, 255, 255], 0, 0, pixels.width, pixels.height)
    console.log(pos)
		//let enrage = OCR.readChar(pixels, font, [255, 255, 255], percent.x - 7, percent.y + 6, false);

    //console.log(enrage)

    return {
      rect: new Rect(top.x, top.y, right.x - top.x, right.y - top.y),
      title: "",
      img: img
    } as ModalUI;
	}
}