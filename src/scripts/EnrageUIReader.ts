import { webpackImages, PointLike, RectLike, ImgRef, captureHoldFullRs, Rect, captureHold, mixColor } from "alt1";
import * as OCR from "alt1/ocr";

let imgs = webpackImages({
  enrage: require("../images/enrage.data.png")
});

export type EnragePosition = {
	x: number,
  y: number,
  w: number,
  h: number,
  xos: number,
  yos: number
}

export namespace EnrageUIReader {
	export function find(img?: ImgRef) {
		if (!img) { img = captureHoldFullRs(); }
    let enrage = img.findSubimage(imgs.enrage)
    console.log(enrage)
    if (enrage.length == 0) return null;
    return {
      x: enrage[1].x + 5,
      y: enrage[1].y + 1,
      w: 100,
      h: 40,
      xos: 34,
      yos: 12
    } as EnragePosition;
	}

  export function read(pos: EnragePosition) {
    let img = captureHold(pos.x, pos.y, pos.w, pos.h)
    // alt1.overLayRect(mixColor(0, 255, 0), pos.x, pos.y, pos.w, pos.h, 2500, 1)
    let str = alt1.bindReadColorString(img.handle, "chat", mixColor(255, 255, 255), pos.xos, pos.yos)
    str = str.slice(0, str.length - 1);
    return parseInt(str)
  }
}