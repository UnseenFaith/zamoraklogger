(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("canvas"), (function webpackLoadOptionalExternalModule() { try { return require("sharp"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("electron/common"); } catch(e) {} }()));
	else if(typeof define === 'function' && define.amd)
		define(["canvas", "sharp", "electron/common"], factory);
	else if(typeof exports === 'object')
		exports["TestApp"] = factory(require("canvas"), (function webpackLoadOptionalExternalModule() { try { return require("sharp"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("electron/common"); } catch(e) {} }()));
	else
		root["TestApp"] = factory(root["canvas"], root["sharp"], root["electron/common"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_canvas__, __WEBPACK_EXTERNAL_MODULE_sharp__, __WEBPACK_EXTERNAL_MODULE_electron_common__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./images/eocbotleft.data.png":
/*!************************************!*\
  !*** ./images/eocbotleft.data.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAAAE4SURBVChTfZFNS8NAEIbfbrLpbto0ba0KWqTYQg89CMUKghf/mb/MkyB40IOIHxfRSimWSkNtkzTZrMlYbzUPzO7szs7wziy6g3PNnIY26/u60z/TKcgzZnIDGUIIqFiRnweLIwXGi3SwioL2PJglinCrLoIggFLR+vp/2CoIEab2x17vWK/djVAPKlqBGww68jEZDXOT2PJ7gUglZEnBAk/7mYzHaLR7G5NYtmTVsynZ5RJsx6HAcj7fmGQyvaLqYeCBGSY9zJIzatU6yeufnOLu6hLakmAFLiloOy4aO7s4aHXobKXfI0tlknd7c43u0QCfr88wtpvti0THWKS9eLMpmq1DyHTU3N3Cx/AdJVugUq7Am4ww+5r+TskSkmToKMTL4z2ElHh7ekBicpLl1mrwfR+tThc/Sc6HTgcfco4AAAAASUVORK5CYII=")

/***/ }),

/***/ "./images/eoctopleft.data.png":
/*!************************************!*\
  !*** ./images/eoctopleft.data.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAABmUExURQwaIxMiKhsrNCItNSs6RCMyPCg1Px8KCRolLCsODTQRDzNDTREdJEQaFkIUEzsTEgkVHEoVFEsaFUwcGlIeGjwZFVEkI2mAjXOLl2B2g1pvey09SBMYHFRmcRMlMDlLVyM6RgQSG8bROHQAAAAJbm9QRQAAAAAAAAAAAKGKctUAAABzSURBVBhXNcnbFsIgDETRtI3FIKSQBPBe/f+fFHE5T2evAYBpXhDxsODae3X/wRGdI0/kPXk4hd6Rt8iRISTnOYuIqkFKVNiymKl+sbGJZYvj8cKqVcfjiGNW5fpDabWUer4MtPlaarthx/0xT8+9vd7hA+tIB9rzLA2SAAAAAElFTkSuQmCC")

/***/ }),

/***/ "./images/eocx.data.png":
/*!******************************!*\
  !*** ./images/eocx.data.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAMAAAAcqPc3AAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAFKUExURQAAABkqMxIdIxMiKgQSGwINFAIVIUFTXyQyPAkVHRIgKCYtNUAJBn4xGKUyKNBaSj4JBicuNhMlMAwaIxEcISEnLz8IBe/FY+mcV8ZPQj8JByAkKBwwPGEKBJYlHeGQSP7KXEAKBzlLVyEmKzYGBYgaFNWDOvy/SSEuOTE6Q0sKB2sKB811Kvy0NXIKBgwYHjNDTQMJDBsnL0BETGMLCX4PCcVpG/upI2IMCgMDBBgmLzU5QWIKCJYwCPqgEr9eDjU9Ris6RAYMDxYiKWUWDWQWDTM5QDpOWixBTRwoMDE0OlsMDVoMDSsxOQcVHl1xfS09SAYNEBgkKlsLDCsuNUBQWg8dJic1QRItOwYRGDExNlwLDDY9RjlIUlNmcQweKSYuNTQ+RkxeagEFC0daZSM6RgoiLhokKktgbAIbJwQQFgwRFRMdIwAAAMy8RMYAAABudFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AoAU8MwAAAAlub1BFAAAAAAAAAAAAoYpy1QAAAa1JREFUKFMlkf9T00AQxe+ye/QWbdA8FdBr0GihWmgStYjWggWVICj1Wyl+i4opWvX//9VjfPNmduYzO/vezKq/OiDNZqZmZfbc+Xo4NxfWL1ycVRGTZXDN4tLlK/X5hcXFhfn61WuKyRkJ/uNGvHR9yTtu3FBwLJzYQG7eajTDcHllZTkMmw1lhdnUWmJu32k343h1bW01jpsdZVKBQYb87r37ne76g3XvbmdDsYAYyOTho97j/uZWt7u12d94ooRhWCgbpNs7vaf9jlf/2fNdZQFf05ItsL33Yr/tdfBy95WyTpPVdOh4iNdvem8b7YN370es7JCgB4dHGFMhx3sfPu5/+jyCVrnWMF9KcQxd4Hjn67fvIzitTiTTPyJUgWGKCuSScemQK2bKHFXMKYHLISWAx4ECs05kAi8GnSaYWOSoVIkJbJUlw2rA3KoxjoI8qCI1LlFGtUIDlOifAXwEKg3lyplfhSNMzFQnZ/l5WkWcqnFVFQ4li8lzgaVcrAafKn+FzjKn/jvsKP+dkoj1nCBIxQgk8k3EU9GBUX5Mp2yMYb9tTJoSt/6cmH+D5EJZGWljEQAAAABJRU5ErkJggg==")

/***/ }),

/***/ "./images/zamorakChest.data.png":
/*!**************************************!*\
  !*** ./images/zamorakChest.data.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports=(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js").ImageDetect.imageDataFromBase64)("iVBORw0KGgoAAAANSUhEUgAAANQAAAAKCAYAAADM6nBHAAAAAW5vUEUAYtdMlAAAAARub1BFAAAAAEEgjiIAAAAJbm9QRQAAAAAAAAAAAKGKctUAABJESURBVGhDbVkJmBXVlf5fvX3pHZpuFkEIS5CwCMEFmVFQURZlNTpqjEZlGDEjMmYkmZnoxCS4ZD6XQNwF94iiuAUBA82qKIsgEhWQRkC6gab7vX5bVb16Of+tvt3VjKe/+t6rqvvuPf//n3vuubd9yxaUFWdOz6C11Yd5/1GBA/U2oiED112XxZ49EWzfCuSKRfzTuT7Mn5/Ezh0BLHqyDI0nTHSt9GHm1BzGjLVAK0kUsW5DEM+8GFP9hVHEz24wwf5pxxr8SMQdbJQ2S18uhZnxIWnbyOZtzJ9dwLRprh9Lno9ixQdhOGZB/Y7+XHNtBtdeZar7744ZaqyifG9oMLBpcwSvvRKAEQ7ByZvKX/4mazqI+Hwwg4byhffXX2Nh7BgLcfEjIX20pg3s22fg/ofKVd/jLkrhlpvy6t3SF+KqX41/2rQshg411fPnX/arMYpWUb2nzbk5j4+3+bFzT1jdc0yfEcQN1yUxc0ZePWvnYHMYr7yUwNHmgsLfLR7BrKuTuHqW244Y6QONGFfXBbB8RUzdk5c5t9iKV/K16M8lWL/W9//wU8PdOwPY+nmoHT+fV5UHMO/OZix8II50JoSiYyk/Od61/5LE5MtNvPvXEJ4QnW+Q+01fFLBklY1xNV0xalQal0+04TgOutc6WLYsjLfeDyq/NOdGyK/uZ/80045ba0bczz0dQsYKQ5or/X92bbpd22NtuL/aH8Bdd0eVFuQkJThvm1+q+tH4P/4U2LsnpHwfOjiDBQsyKj4fejQC2/R30p++UBu2DweCyNtuzJ4en4yLTZuCePzpMAp2pJ3PubfaKj697Xz8Lv6sXR/Aq8ID8RtLloZw6CgUiLf3NSIvXDTnC4rUCZOTOClk06kDB1zCp9+TRV19M6LS4X3/24rqGgdjr/HjB1NtXDq3gDEXmFjyeDN6VNtqcPZPW7O1iNrJOdz9JweXSd8/GtOEk6alyCkzDDz9lCvKR184uHNJEo1Zl2CKQ3+efS6i7tlP9yl5VF9cwKif2li3y8IN16dx/8NJ+AM51UYHeizSEdgk98HfZ3CBTKab/xsYNK2AbtLHvEdM9OhjYdvxk8g5Nt7/MIrPviRVQvajzTiQzyr8u3aF8PaHboDzeX02q77TOB6Ty4QJJq6cnsWJdE6NSWOwMkHQOnFwaQ4Dz2+CKZOJ+HOCl4lItyNG+qcxzpHAevjBFlSG3STz56cC6pN8/deyJhzK5ZGRi0Z/4mFHaThRgiWVzyv8NAZfwchh+DAbC/6nBaFIXvHLwDmRLOChxa4P//5EBttPNOHYcT/e+RswsDSBvgPTKmh/83AAl9xmY/Ivimg0Mjhum2pM9kOjpsTvxU08v1rk4h42rhXJbE5NJrZ9eYmHnzbcb2zMY2dLUnHC+ORk/GB/E+ycOxEmXJrF1Bk5HEm7uPd85U7EGRKfWxvSMAWv1r8q4bRrc9Jy0JzJq/jgdXp8LqA20vbc8Wnloy/oU/q/+GK8Uzv6OJLa7LbUpH/0kRQKQRsGO92yxQ3WoQMBv13EeWcXlHMXjCrCKs2qGT5wRBLbZfYfTxYxtKIMV0608IN+BdwuAdlaKODcinJEG8rxwMNhlJUAF0xqQVPWaheSVhkMYm9dmfo+WsZozLoBwAzA7KqtJBREdbTjPiyAKJg29nN2eRkGFGvwyrNd8OLbPgwZUMSwi5JolczJMVvkk0STEN4zuM4eYePW39nY9o2FIVVlGFfbDcmdlVi7MYhTkrEoLq+oBLi2nom4wn8olUZZwA1iWu9oVPXLdzIKxo93JzM5qzjDnWx8z4vvtdH3L7dUqu+jRxRwJJdrx8+xtVXK/XnC6RmFLnhWVqCX3/HhrAEOBl3YAlva5+XSVip+VUt7Jh/2xTEvvEyCRt6NGSmJpbubWWl60tGGid5/fCiJM3r5FF8c32936FUbiahKIRQKoFBwMLi/+y4TS2Kg8FKWKsGnG0qRddwxqZPX+Ewb8exZ16H9UctExHD5pM/auoj253erwtZVVaiQ77TNm9yJMXRgEY6MQR05wcaMdOCvdPH8s1RJ22Q1bpT47B+LIyN9av292kRrkuo7dSPnjH9t3vgcJT7Wy4Sidlp/bV3CYaVNz2wFljxTjpfeMUSbIkaPS8FolEBaV+cu0bMuNmQGWxJ8Fpa/74K9alIBacmeFObtOp8aNCgBN2WSLZlDMreUiINL40pMXrs/dbPNjHGGcuh001ljzVYHDZmsuudk8QpNo7jsTwW4vPeKA0PKSSGWK4phFLHyTTd7XHERlFC008WdJJiSKWCtZJRBEgxM9Pw98b8kGbJbyPXLG6g0ik4fSv0SVP6OPuk32/Ids/FkSTBz73U5u3qKg8aM68fpZgh3evUiBy22i4/4ibfdJEg1/spoEO8v74zxdHw0lo66j6n05zfud/qTktWApt+zhJr9+wL69AAW/18SI4e7md+L3ywWFP7aQEjh/2S3m+RWLwqokottzRYf+sYiql9eOvF10osmeLQRd5OsiMSs9demm8VDNs4sSyj8H21xx2V85lFQsffGey7Xs+R7VhL62ZKc3vzQnbgB4cbLj9LmNC7Yr9bfaxo/fTzVNum1/l7T+jOO1r6bUM+ojRE2ZBLIcnn4Ox8uHu2DE7YwUjLA7N8VsEtKn1unidgRN7u/srqgMiEdqelWQEE6jPgN+AqyCoiYNBJ59DsDFaXAcdPsJJAtgTRW9ihc6e5f6kighBWp/E2y4P6eRnopjrdPr8mI6j3B8joovtM4ZqNnEnNsZhh+DuhfQJMkJ5Jd4llpiJ/ve8aiyJm2K4RMWG1q0spYXhza2JbPf3iWKZPVh2UbZA+13VCcJYO5dtLpozZbVgJmzJ2fuRyUBdxan/gpXLuJD1783DvQFK+nTT6y4/WPWqXEn9c2iT87/Mqf1qCbsPQYzPDPrSjiwSf9KJeK4p5f59D3h5n2QDyVKiIh3Hjxf73fjwW/DeOU8Hi97GsW3teqnttS1Xh95TNexO+18RNy+FT8Ie7qcFD1q/WnMf62vw688EQLbrnZRKqtvNu914cjbfGZCkgsDrNw2/2OxK0bn+SamP8i8dlNYkobfThLSlulzSazXRvNBY36a2M8z5DJt/2zoPKxa8iN9dP1d9oSotb/m0PqVmljlIfdDjduDKFvDx/my+ZrjWyymmWlWi/7CTaae2MeX31t4JsTFspkEJJHgc+U7FZR0hbMUbdspJWWFLHj74AlwaONZHz2ug+//EWufaWriUfbyfdmAMPvTpZo2H3G994AsiQj6cAg4C4SELQDRzim2x8vGtvpIGEpytWVxv7GnpPDytdbsXFlShHpC7rEccOtjb/PZGRPJH0EfX60yCpH0ysKn18zy1Qb9C+WGxgsSz+NKwRrcBr3UTRysEMCZp5w8OYaoFySU42UVRq/9pnGpOHFX1rp+k2MeVnVvJOPb+gH2/P5TyTYa2Rvu/cNf3uZdsVEE2kPLhq5qnuvBLdJ9q4Qbh6410bfIa7PnDQlbf1p/NRkw6YQrpoTwoeyl2AJNWCUS4hXf8aUr22y0Ih7m+D+1R0mVqwz1CrSPRRRpR6xadzcn/S50sKoGxys3JnDYSmHaXzPwwwVnzdbWLPOj5M5U+IzoeLzDnnG+Kw/ZaGrP9ipz59My6FWuPBqQy4KAfdwQ8c/fdz5hk9ps3xNEeUSn4PK4p3wa3OEN6/+TE40amPo7LB6vdvxz6f68ORbDqqkw42bgkhKaXCzzOpX1ziIS6CXRNy6tm6D+znlIslQ4jwDO9OaR1WNu/9aJu0T0l4TTbLOFLKWy8b+njukrDxHJo3HSa/lTUs5rGtrLabXcrJUNxfcfQ+zE+3JNx1EJeOzvZcAGldFkn+l+EuymRSI4fO2A4g7X0jhWFsANDS6Y1FAkuZrC3YjbOKwJBKucjSOTbz9ZfUbPgvoP9VG9cW2ZHeoTFjfmlH4NcdeDu6db2P6GJdDbZ1FczrhP3e42wcxhnmI8T2lCjH1OMOHgTKJRsyUvcQ0W22etT/H0u7erosEmDb69tnHMdx0l/giwz31YEepGpRV0ot/+KhWNWmzJ8N4YKFbglYL/kaehLXpr/yQPnMS8FzxaV7cv51nYarg5rvv05+B3NuOYdfaUkSDrg7E/9EWdytxk8Tn4uXCu7R7b4OsToKtIz4DCIl/Wn8mOWqjuKA24zu0OZh090Tfp819os0VEp80L/7TjfrzuTf+VNrLOyzvoMq+bXuL+OuOHKoiIew/bqFOVivaMytN1MYjqhM6+5e3omoPtXCuTJozOsqsW2/MYet2P/6wVJZfWfJPeUowkvX846VY/ynw8L1Svw9IK4F0JqYxU/qkfzrav2cWU6bYqnQ4lnYJ4Hu/vI9J3U5BfjTcxp2SVVbJPpCTuLvshUgCA45+0tjXwkfDOHhU9gsL/DjnPDfjsHYPeQ4galiiCRerJQPSFs411P6R/lEcrjqPvyS/k0TBMWhXyt7sY8H7bZOFsxMlGFJagg0yUTkZhwjRxK/b0rgyuxz48NCvTQwdYbXj1+2IkTI7WTcLnn+OD3PmpLBSkh4x9opGFf52a9tT8pp4sZRVsjk/dMrG+ZUVavOs/TlLxuIGW/bpyphgaMS8W8qc2f8ZUgGnrUGwU2/t37/9PI+M/HGcfn3cZwzElFQM2tgX+WYpFQl16MpV6Ske74v2xD1stKMSgFd/4iYWVgqThOt+ck/81H/jrrxKZozP1btN9Jb9lZU28Le2xM74rJEx6C9/Q/2nT7TxiWhDLkYKD7w2bHYrsSFD3ZNJrzE+Fy2Koe4TNz679m/thJ9GH/krrdUo2btxVVvVpo1/cHniHh7sBHw8agVerbPxTb2BPrEY4kLK14cMRMptPPduAf1icYSETIriWD6sWisCODnMu7GA6VPymHyZIzVyAHc9KvsB20DfeFz9f+HHMihLQzqye3cYW7ZHUF2bxy9ni7MlFnbuKEo7Rx3ldu/qw79e5ZZM111tY/Fzfuw5ZmLOdeK8TB6+ny3vJ08QwqbkcGbvAh5b6scdi3MSrCH0kL1QIiAT0vHJ9lXqYgVbNthC/opVfqQNE1dcWpDgsDDhUlOVp69LVlqxXrJZPIaorMCHDgN7DvB/Tw5uv0VW0wkmxp5XwEvLg3jkrTx6lcZRKtnzasE24woTJ1uKWLfFj26xhJR3QFVVEWPOsXHuMODoCfk+2m7ngLbnyxg2b5b2vSwpYSSoEibq94dx+eVZ1U5zMH2yg2nCa89egvGFAO54LIuuskcYXluLSZNT+PFwy+1Tkue3B2OYMT2HmVNNnGhxlD8xhBR+7c959KfBwZRLHPTp7ciE8iHZEJYsz1XXgNkSxAcbA+g/0FTZdlAioSYHD2O48o8eZeJ2Ka+4yb9wjIk/PBbBa7JvHCC8EXcsxv9pKYjKyI/Gzb8Dn0ew4eMAqttwl1c62LnLEK0F90hJhsQtK/3USbbi7I+COSI6Fhm7rDz8Dl6T+Pz2ME+BE5IMi9j3DRApa4tP8ZfrCPWfOdNSXBwXbeqEi65GxOWiskObA8ccXDIWKu50fH77tUx60aa6p4W7ZzuISezv+jKIa6ZJwmyLT8bfFImJ6dJ/P+Fx8fMB3P6nnNLGN0ZGYFbRm7PDklE5IxNCgH7G/00dbG7FoKoyFGXGamOdnJYsesq2cUwdgRdVxq+QwO4jQWdlTBjxkCo19iVbVanUWwKe+wZLMsh+qU15qsiVoVaulJQ5bEdj24Bkq1xBJlqXCsSLPjTJOHtb3GNPrlIsSWixQEBtILvIpY1ZlMGgTd+zPK3PZNAq+5CcZFaOwWY8ou0nCYBGXCxZUtLmiPCRE35cfwx1Gkh/dbuDzSk05POIS3YbKL9nSczM2yTl6F55F5HVrH9pQp1EaQ56yArTQ7K3dI96Oy8rQR5dJbsOrihT/0rQGNk25JfkJf5FZOx+0k9EdKFRs+N5S2EhD90jUfSU8pL6Hclm1VF6/5KE6oN2Unz8e2taHSL1EP5bLBsnTMnqgoVjlwY6yk/q/cXJFowod4+QiZO68/PzE83Cna14kzfSV1idxrE8ZRvGjl55WAIeLdo4mEq3+9hP9Odebl+qVWnPBNhT/KHP9J2mtbcF+GU9alVpz75ZPu9ualYYSjjB9IGCTKAvZWkdKHi1Ue/9mazqNyFcDJXKQUfuYXlWL+/YT29ZONKCh2NrbXrJ3olx/a3Ep+JIqoHe4nuDZSosNNdHQ2KnKNpLkpA2VUYA/wDYuwbvHvcQGgAAAABJRU5ErkJggg==")

/***/ }),

/***/ "../node_modules/pixelmatch/index.js":
/*!*******************************************!*\
  !*** ../node_modules/pixelmatch/index.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


module.exports = pixelmatch;

const defaultOptions = {
    threshold: 0.1,         // matching threshold (0 to 1); smaller is more sensitive
    includeAA: false,       // whether to skip anti-aliasing detection
    alpha: 0.1,             // opacity of original image in diff output
    aaColor: [255, 255, 0], // color of anti-aliased pixels in diff output
    diffColor: [255, 0, 0], // color of different pixels in diff output
    diffColorAlt: null,     // whether to detect dark on light differences between img1 and img2 and set an alternative color to differentiate between the two
    diffMask: false         // draw the diff over a transparent background (a mask)
};

function pixelmatch(img1, img2, output, width, height, options) {

    if (!isPixelData(img1) || !isPixelData(img2) || (output && !isPixelData(output)))
        throw new Error('Image data: Uint8Array, Uint8ClampedArray or Buffer expected.');

    if (img1.length !== img2.length || (output && output.length !== img1.length))
        throw new Error('Image sizes do not match.');

    if (img1.length !== width * height * 4) throw new Error('Image data size does not match width/height.');

    options = Object.assign({}, defaultOptions, options);

    // check if images are identical
    const len = width * height;
    const a32 = new Uint32Array(img1.buffer, img1.byteOffset, len);
    const b32 = new Uint32Array(img2.buffer, img2.byteOffset, len);
    let identical = true;

    for (let i = 0; i < len; i++) {
        if (a32[i] !== b32[i]) { identical = false; break; }
    }
    if (identical) { // fast path if identical
        if (output && !options.diffMask) {
            for (let i = 0; i < len; i++) drawGrayPixel(img1, 4 * i, options.alpha, output);
        }
        return 0;
    }

    // maximum acceptable square distance between two colors;
    // 35215 is the maximum possible value for the YIQ difference metric
    const maxDelta = 35215 * options.threshold * options.threshold;
    let diff = 0;

    // compare each pixel of one image against the other one
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {

            const pos = (y * width + x) * 4;

            // squared YUV distance between colors at this pixel position, negative if the img2 pixel is darker
            const delta = colorDelta(img1, img2, pos, pos);

            // the color difference is above the threshold
            if (Math.abs(delta) > maxDelta) {
                // check it's a real rendering difference or just anti-aliasing
                if (!options.includeAA && (antialiased(img1, x, y, width, height, img2) ||
                                           antialiased(img2, x, y, width, height, img1))) {
                    // one of the pixels is anti-aliasing; draw as yellow and do not count as difference
                    // note that we do not include such pixels in a mask
                    if (output && !options.diffMask) drawPixel(output, pos, ...options.aaColor);

                } else {
                    // found substantial difference not caused by anti-aliasing; draw it as such
                    if (output) {
                        drawPixel(output, pos, ...(delta < 0 && options.diffColorAlt || options.diffColor));
                    }
                    diff++;
                }

            } else if (output) {
                // pixels are similar; draw background as grayscale image blended with white
                if (!options.diffMask) drawGrayPixel(img1, pos, options.alpha, output);
            }
        }
    }

    // return the number of different pixels
    return diff;
}

function isPixelData(arr) {
    // work around instanceof Uint8Array not working properly in some Jest environments
    return ArrayBuffer.isView(arr) && arr.constructor.BYTES_PER_ELEMENT === 1;
}

// check if a pixel is likely a part of anti-aliasing;
// based on "Anti-aliased Pixel and Intensity Slope Detector" paper by V. Vysniauskas, 2009

function antialiased(img, x1, y1, width, height, img2) {
    const x0 = Math.max(x1 - 1, 0);
    const y0 = Math.max(y1 - 1, 0);
    const x2 = Math.min(x1 + 1, width - 1);
    const y2 = Math.min(y1 + 1, height - 1);
    const pos = (y1 * width + x1) * 4;
    let zeroes = x1 === x0 || x1 === x2 || y1 === y0 || y1 === y2 ? 1 : 0;
    let min = 0;
    let max = 0;
    let minX, minY, maxX, maxY;

    // go through 8 adjacent pixels
    for (let x = x0; x <= x2; x++) {
        for (let y = y0; y <= y2; y++) {
            if (x === x1 && y === y1) continue;

            // brightness delta between the center pixel and adjacent one
            const delta = colorDelta(img, img, pos, (y * width + x) * 4, true);

            // count the number of equal, darker and brighter adjacent pixels
            if (delta === 0) {
                zeroes++;
                // if found more than 2 equal siblings, it's definitely not anti-aliasing
                if (zeroes > 2) return false;

            // remember the darkest pixel
            } else if (delta < min) {
                min = delta;
                minX = x;
                minY = y;

            // remember the brightest pixel
            } else if (delta > max) {
                max = delta;
                maxX = x;
                maxY = y;
            }
        }
    }

    // if there are no both darker and brighter pixels among siblings, it's not anti-aliasing
    if (min === 0 || max === 0) return false;

    // if either the darkest or the brightest pixel has 3+ equal siblings in both images
    // (definitely not anti-aliased), this pixel is anti-aliased
    return (hasManySiblings(img, minX, minY, width, height) && hasManySiblings(img2, minX, minY, width, height)) ||
           (hasManySiblings(img, maxX, maxY, width, height) && hasManySiblings(img2, maxX, maxY, width, height));
}

// check if a pixel has 3+ adjacent pixels of the same color.
function hasManySiblings(img, x1, y1, width, height) {
    const x0 = Math.max(x1 - 1, 0);
    const y0 = Math.max(y1 - 1, 0);
    const x2 = Math.min(x1 + 1, width - 1);
    const y2 = Math.min(y1 + 1, height - 1);
    const pos = (y1 * width + x1) * 4;
    let zeroes = x1 === x0 || x1 === x2 || y1 === y0 || y1 === y2 ? 1 : 0;

    // go through 8 adjacent pixels
    for (let x = x0; x <= x2; x++) {
        for (let y = y0; y <= y2; y++) {
            if (x === x1 && y === y1) continue;

            const pos2 = (y * width + x) * 4;
            if (img[pos] === img[pos2] &&
                img[pos + 1] === img[pos2 + 1] &&
                img[pos + 2] === img[pos2 + 2] &&
                img[pos + 3] === img[pos2 + 3]) zeroes++;

            if (zeroes > 2) return true;
        }
    }

    return false;
}

// calculate color difference according to the paper "Measuring perceived color difference
// using YIQ NTSC transmission color space in mobile applications" by Y. Kotsarenko and F. Ramos

function colorDelta(img1, img2, k, m, yOnly) {
    let r1 = img1[k + 0];
    let g1 = img1[k + 1];
    let b1 = img1[k + 2];
    let a1 = img1[k + 3];

    let r2 = img2[m + 0];
    let g2 = img2[m + 1];
    let b2 = img2[m + 2];
    let a2 = img2[m + 3];

    if (a1 === a2 && r1 === r2 && g1 === g2 && b1 === b2) return 0;

    if (a1 < 255) {
        a1 /= 255;
        r1 = blend(r1, a1);
        g1 = blend(g1, a1);
        b1 = blend(b1, a1);
    }

    if (a2 < 255) {
        a2 /= 255;
        r2 = blend(r2, a2);
        g2 = blend(g2, a2);
        b2 = blend(b2, a2);
    }

    const y1 = rgb2y(r1, g1, b1);
    const y2 = rgb2y(r2, g2, b2);
    const y = y1 - y2;

    if (yOnly) return y; // brightness difference only

    const i = rgb2i(r1, g1, b1) - rgb2i(r2, g2, b2);
    const q = rgb2q(r1, g1, b1) - rgb2q(r2, g2, b2);

    const delta = 0.5053 * y * y + 0.299 * i * i + 0.1957 * q * q;

    // encode whether the pixel lightens or darkens in the sign
    return y1 > y2 ? -delta : delta;
}

function rgb2y(r, g, b) { return r * 0.29889531 + g * 0.58662247 + b * 0.11448223; }
function rgb2i(r, g, b) { return r * 0.59597799 - g * 0.27417610 - b * 0.32180189; }
function rgb2q(r, g, b) { return r * 0.21147017 - g * 0.52261711 + b * 0.31114694; }

// blend semi-transparent color with white
function blend(c, a) {
    return 255 + (c - 255) * a;
}

function drawPixel(output, pos, r, g, b) {
    output[pos + 0] = r;
    output[pos + 1] = g;
    output[pos + 2] = b;
    output[pos + 3] = 255;
}

function drawGrayPixel(img, i, alpha, output) {
    const r = img[i + 0];
    const g = img[i + 1];
    const b = img[i + 2];
    const val = blend(rgb2y(r, g, b), alpha * img[i + 3] / 255);
    drawPixel(output, i, val, val, val);
}


/***/ }),

/***/ "../node_modules/resemblejs/compareImages.js":
/*!***************************************************!*\
  !*** ../node_modules/resemblejs/compareImages.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const resemble = __webpack_require__(/*! ./resemble */ "../node_modules/resemblejs/resemble.js");

module.exports = function compareImages(image1, image2, options) {
    return new Promise((resolve, reject) => {
        resemble.compare(image1, image2, options, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};


/***/ }),

/***/ "../node_modules/resemblejs/resemble.js":
/*!**********************************************!*\
  !*** ../node_modules/resemblejs/resemble.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
James Cryer / Huddle
URL: https://github.com/Huddle/Resemble.js
*/

var naiveFallback = function () {
    // ISC (c) 2011-2019 https://github.com/medikoo/es5-ext/blob/master/global.js
    if (typeof self === "object" && self) {
        return self;
    }
    if (typeof window === "object" && window) {
        return window;
    }
    throw new Error("Unable to resolve global `this`");
};

var getGlobalThis = function () {
    // ISC (c) 2011-2019 https://github.com/medikoo/es5-ext/blob/master/global.js
    // Fallback to standard globalThis if available
    if (typeof globalThis === "object" && globalThis) {
        return globalThis;
    }

    try {
        Object.defineProperty(Object.prototype, "__global__", {
            get: function () {
                return this;
            },
            configurable: true
        });
    } catch (error) {
        return naiveFallback();
    }
    try {
        // eslint-disable-next-line no-undef
        if (!__global__) {
            return naiveFallback();
        }
        return __global__; // eslint-disable-line no-undef
    } finally {
        delete Object.prototype.__global__;
    }
};

var isNode = function () {
    const globalPolyfill = getGlobalThis();
    return typeof globalPolyfill.process !== "undefined" && globalPolyfill.process.versions && globalPolyfill.process.versions.node;
};

(function (root, factory) {
    "use strict";
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(this /* eslint-disable-line no-invalid-this*/, function () {
    "use strict";

    var Img;
    var Canvas;
    var loadNodeCanvasImage;

    if (isNode()) {
        Canvas = __webpack_require__(/*! canvas */ "canvas"); // eslint-disable-line global-require
        Img = Canvas.Image;
        loadNodeCanvasImage = Canvas.loadImage;
    } else {
        Img = Image;
    }

    function createCanvas(width, height) {
        if (isNode()) {
            return Canvas.createCanvas(width, height);
        }

        var cnvs = document.createElement("canvas");
        cnvs.width = width;
        cnvs.height = height;
        return cnvs;
    }

    var oldGlobalSettings = {};
    var globalOutputSettings = oldGlobalSettings;

    var resemble = function (fileData) {
        var pixelTransparency = 1;

        var errorPixelColor = {
            // Color for Error Pixels. Between 0 and 255.
            red: 255,
            green: 0,
            blue: 255,
            alpha: 255
        };

        var targetPix = { r: 0, g: 0, b: 0, a: 0 }; // isAntialiased

        var errorPixelTransform = {
            flat: function (px, offset) {
                px[offset] = errorPixelColor.red;
                px[offset + 1] = errorPixelColor.green;
                px[offset + 2] = errorPixelColor.blue;
                px[offset + 3] = errorPixelColor.alpha;
            },
            movement: function (px, offset, d1, d2) {
                px[offset] = (d2.r * (errorPixelColor.red / 255) + errorPixelColor.red) / 2;
                px[offset + 1] = (d2.g * (errorPixelColor.green / 255) + errorPixelColor.green) / 2;
                px[offset + 2] = (d2.b * (errorPixelColor.blue / 255) + errorPixelColor.blue) / 2;
                px[offset + 3] = d2.a;
            },
            flatDifferenceIntensity: function (px, offset, d1, d2) {
                px[offset] = errorPixelColor.red;
                px[offset + 1] = errorPixelColor.green;
                px[offset + 2] = errorPixelColor.blue;
                px[offset + 3] = colorsDistance(d1, d2);
            },
            movementDifferenceIntensity: function (px, offset, d1, d2) {
                var ratio = (colorsDistance(d1, d2) / 255) * 0.8;

                px[offset] = (1 - ratio) * (d2.r * (errorPixelColor.red / 255)) + ratio * errorPixelColor.red;
                px[offset + 1] = (1 - ratio) * (d2.g * (errorPixelColor.green / 255)) + ratio * errorPixelColor.green;
                px[offset + 2] = (1 - ratio) * (d2.b * (errorPixelColor.blue / 255)) + ratio * errorPixelColor.blue;
                px[offset + 3] = d2.a;
            },
            diffOnly: function (px, offset, d1, d2) {
                px[offset] = d2.r;
                px[offset + 1] = d2.g;
                px[offset + 2] = d2.b;
                px[offset + 3] = d2.a;
            }
        };

        var errorPixel = errorPixelTransform.flat;
        var errorType;
        var boundingBoxes;
        var ignoredBoxes;
        var ignoreAreasColoredWith;
        var largeImageThreshold = 1200;
        var useCrossOrigin = true;
        var data = {};
        var images = [];
        var updateCallbackArray = [];

        var tolerance = {
            // between 0 and 255
            red: 16,
            green: 16,
            blue: 16,
            alpha: 16,
            minBrightness: 16,
            maxBrightness: 240
        };

        var ignoreAntialiasing = false;
        var ignoreColors = false;
        var scaleToSameSize = false;
        var compareOnly = false;
        var returnEarlyThreshold;

        function colorsDistance(c1, c2) {
            return (Math.abs(c1.r - c2.r) + Math.abs(c1.g - c2.g) + Math.abs(c1.b - c2.b)) / 3;
        }

        function withinBoundingBox(x, y, width, height, box) {
            return x > (box.left || 0) && x < (box.right || width) && y > (box.top || 0) && y < (box.bottom || height);
        }

        function withinComparedArea(x, y, width, height, pixel2) {
            var isIncluded = true;
            var i;
            var boundingBox;
            var ignoredBox;
            var selected;
            var ignored;

            if (boundingBoxes instanceof Array) {
                selected = false;
                for (i = 0; i < boundingBoxes.length; i++) {
                    boundingBox = boundingBoxes[i];
                    if (withinBoundingBox(x, y, width, height, boundingBox)) {
                        selected = true;
                        break;
                    }
                }
            }
            if (ignoredBoxes instanceof Array) {
                ignored = true;
                for (i = 0; i < ignoredBoxes.length; i++) {
                    ignoredBox = ignoredBoxes[i];
                    if (withinBoundingBox(x, y, width, height, ignoredBox)) {
                        ignored = false;
                        break;
                    }
                }
            }

            if (ignoreAreasColoredWith) {
                return colorsDistance(pixel2, ignoreAreasColoredWith) !== 0;
            }

            if (selected === undefined && ignored === undefined) {
                return true;
            }
            if (selected === false && ignored === true) {
                return false;
            }
            if (selected === true || ignored === true) {
                isIncluded = true;
            }
            if (selected === false || ignored === false) {
                isIncluded = false;
            }
            return isIncluded;
        }

        function triggerDataUpdate() {
            var len = updateCallbackArray.length;
            var i;
            for (i = 0; i < len; i++) {
                if (typeof updateCallbackArray[i] === "function") {
                    updateCallbackArray[i](data);
                }
            }
        }

        function loop(w, h, callback) {
            var x;
            var y;

            for (x = 0; x < w; x++) {
                for (y = 0; y < h; y++) {
                    callback(x, y);
                }
            }
        }

        function parseImage(sourceImageData, width, height) {
            var pixelCount = 0;
            var redTotal = 0;
            var greenTotal = 0;
            var blueTotal = 0;
            var alphaTotal = 0;
            var brightnessTotal = 0;
            var whiteTotal = 0;
            var blackTotal = 0;

            loop(width, height, function (horizontalPos, verticalPos) {
                var offset = (verticalPos * width + horizontalPos) * 4;
                var red = sourceImageData[offset];
                var green = sourceImageData[offset + 1];
                var blue = sourceImageData[offset + 2];
                var alpha = sourceImageData[offset + 3];
                var brightness = getBrightness(red, green, blue);

                if (red === green && red === blue && alpha) {
                    if (red === 0) {
                        blackTotal++;
                    } else if (red === 255) {
                        whiteTotal++;
                    }
                }

                pixelCount++;

                redTotal += (red / 255) * 100;
                greenTotal += (green / 255) * 100;
                blueTotal += (blue / 255) * 100;
                alphaTotal += ((255 - alpha) / 255) * 100;
                brightnessTotal += (brightness / 255) * 100;
            });

            data.red = Math.floor(redTotal / pixelCount);
            data.green = Math.floor(greenTotal / pixelCount);
            data.blue = Math.floor(blueTotal / pixelCount);
            data.alpha = Math.floor(alphaTotal / pixelCount);
            data.brightness = Math.floor(brightnessTotal / pixelCount);
            data.white = Math.floor((whiteTotal / pixelCount) * 100);
            data.black = Math.floor((blackTotal / pixelCount) * 100);

            triggerDataUpdate();
        }

        function onLoadImage(hiddenImage, callback) {
            // don't assign to hiddenImage, see https://github.com/Huddle/Resemble.js/pull/87/commits/300d43352a2845aad289b254bfbdc7cd6a37e2d7
            var width = hiddenImage.width;
            var height = hiddenImage.height;

            if (scaleToSameSize && images.length === 1) {
                width = images[0].width;
                height = images[0].height;
            }

            var hiddenCanvas = createCanvas(width, height);
            var imageData;

            hiddenCanvas.getContext("2d").drawImage(hiddenImage, 0, 0, width, height);
            imageData = hiddenCanvas.getContext("2d").getImageData(0, 0, width, height);

            images.push(imageData);

            callback(imageData, width, height);
        }

        function loadImageData(fileDataForImage, callback) {
            var fileReader;
            var hiddenImage = new Img();

            if (!hiddenImage.setAttribute) {
                hiddenImage.setAttribute = function setAttribute() {};
            }

            if (useCrossOrigin) {
                hiddenImage.setAttribute("crossorigin", "anonymous");
            }

            hiddenImage.onerror = function (event) {
                hiddenImage.onload = null;
                hiddenImage.onerror = null; // fixes pollution between calls
                const error = event ? event + "" : "Unknown error";
                images.push({ error: `Failed to load image '${fileDataForImage}'. ${error}` });
                callback();
            };

            hiddenImage.onload = function () {
                hiddenImage.onload = null; // fixes pollution between calls
                hiddenImage.onerror = null;
                onLoadImage(hiddenImage, callback);
            };

            if (typeof fileDataForImage === "string") {
                hiddenImage.src = fileDataForImage;
                if (!isNode() && hiddenImage.complete && hiddenImage.naturalWidth > 0) {
                    hiddenImage.onload();
                }
            } else if (
                typeof fileDataForImage.data !== "undefined" &&
                typeof fileDataForImage.width === "number" &&
                typeof fileDataForImage.height === "number"
            ) {
                images.push(fileDataForImage);

                callback(fileDataForImage, fileDataForImage.width, fileDataForImage.height);
            } else if (typeof Buffer !== "undefined" && fileDataForImage instanceof Buffer) {
                // If we have Buffer, assume we're on Node+Canvas and its supported
                // hiddenImage.src = fileDataForImage;

                loadNodeCanvasImage(fileDataForImage)
                    .then(function (image) {
                        hiddenImage.onload = null; // fixes pollution between calls
                        hiddenImage.onerror = null;
                        onLoadImage(image, callback);
                    })
                    .catch(function (err) {
                        images.push({
                            error: err ? err + "" : "Image load error."
                        });
                        callback();
                    });
            } else {
                fileReader = new FileReader();
                fileReader.onload = function (event) {
                    hiddenImage.src = event.target.result;
                };
                fileReader.readAsDataURL(fileDataForImage);
            }
        }

        function isColorSimilar(a, b, color) {
            var absDiff = Math.abs(a - b);

            if (typeof a === "undefined") {
                return false;
            }
            if (typeof b === "undefined") {
                return false;
            }

            if (a === b) {
                return true;
            } else if (absDiff < tolerance[color]) {
                return true;
            }
            return false;
        }

        function isPixelBrightnessSimilar(d1, d2) {
            var alpha = isColorSimilar(d1.a, d2.a, "alpha");
            var brightness = isColorSimilar(d1.brightness, d2.brightness, "minBrightness");
            return brightness && alpha;
        }

        function getBrightness(r, g, b) {
            return 0.3 * r + 0.59 * g + 0.11 * b;
        }

        function isRGBSame(d1, d2) {
            var red = d1.r === d2.r;
            var green = d1.g === d2.g;
            var blue = d1.b === d2.b;
            return red && green && blue;
        }

        function isRGBSimilar(d1, d2) {
            var red = isColorSimilar(d1.r, d2.r, "red");
            var green = isColorSimilar(d1.g, d2.g, "green");
            var blue = isColorSimilar(d1.b, d2.b, "blue");
            var alpha = isColorSimilar(d1.a, d2.a, "alpha");

            return red && green && blue && alpha;
        }

        function isContrasting(d1, d2) {
            return Math.abs(d1.brightness - d2.brightness) > tolerance.maxBrightness;
        }

        function getHue(red, green, blue) {
            var r = red / 255;
            var g = green / 255;
            var b = blue / 255;
            var max = Math.max(r, g, b);
            var min = Math.min(r, g, b);
            var h;
            var d;

            if (max === min) {
                h = 0; // achromatic
            } else {
                d = max - min;
                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);
                        break;
                    case g:
                        h = (b - r) / d + 2;
                        break;
                    case b:
                        h = (r - g) / d + 4;
                        break;
                    default:
                        h /= 6;
                }
            }

            return h;
        }

        function isAntialiased(sourcePix, pix, cacheSet, verticalPos, horizontalPos, width) {
            var offset;
            var distance = 1;
            var i;
            var j;
            var hasHighContrastSibling = 0;
            var hasSiblingWithDifferentHue = 0;
            var hasEquivalentSibling = 0;

            addHueInfo(sourcePix);

            for (i = distance * -1; i <= distance; i++) {
                for (j = distance * -1; j <= distance; j++) {
                    if (i === 0 && j === 0) {
                        // ignore source pixel
                    } else {
                        offset = ((verticalPos + j) * width + (horizontalPos + i)) * 4;

                        if (!getPixelInfo(targetPix, pix, offset, cacheSet)) {
                            continue;
                        }

                        addBrightnessInfo(targetPix);
                        addHueInfo(targetPix);

                        if (isContrasting(sourcePix, targetPix)) {
                            hasHighContrastSibling++;
                        }

                        if (isRGBSame(sourcePix, targetPix)) {
                            hasEquivalentSibling++;
                        }

                        if (Math.abs(targetPix.h - sourcePix.h) > 0.3) {
                            hasSiblingWithDifferentHue++;
                        }

                        if (hasSiblingWithDifferentHue > 1 || hasHighContrastSibling > 1) {
                            return true;
                        }
                    }
                }
            }

            if (hasEquivalentSibling < 2) {
                return true;
            }

            return false;
        }

        function copyPixel(px, offset, pix) {
            if (errorType === "diffOnly") {
                return;
            }

            px[offset] = pix.r; // r
            px[offset + 1] = pix.g; // g
            px[offset + 2] = pix.b; // b
            px[offset + 3] = pix.a * pixelTransparency; // a
        }

        function copyGrayScalePixel(px, offset, pix) {
            if (errorType === "diffOnly") {
                return;
            }

            px[offset] = pix.brightness; // r
            px[offset + 1] = pix.brightness; // g
            px[offset + 2] = pix.brightness; // b
            px[offset + 3] = pix.a * pixelTransparency; // a
        }

        function getPixelInfo(dst, pix, offset) {
            if (pix.length > offset) {
                dst.r = pix[offset];
                dst.g = pix[offset + 1];
                dst.b = pix[offset + 2];
                dst.a = pix[offset + 3];

                return true;
            }

            return false;
        }

        function addBrightnessInfo(pix) {
            pix.brightness = getBrightness(pix.r, pix.g, pix.b); // 'corrected' lightness
        }

        function addHueInfo(pix) {
            pix.h = getHue(pix.r, pix.g, pix.b);
        }

        function analyseImages(img1, img2, width, height) {
            var data1 = img1.data;
            var data2 = img2.data;
            var hiddenCanvas;
            var context;
            var imgd;
            var pix;

            if (!compareOnly) {
                hiddenCanvas = createCanvas(width, height);

                context = hiddenCanvas.getContext("2d");
                imgd = context.createImageData(width, height);
                pix = imgd.data;
            }

            var mismatchCount = 0;
            var diffBounds = {
                top: height,
                left: width,
                bottom: 0,
                right: 0
            };
            var updateBounds = function (x, y) {
                diffBounds.left = Math.min(x, diffBounds.left);
                diffBounds.right = Math.max(x, diffBounds.right);
                diffBounds.top = Math.min(y, diffBounds.top);
                diffBounds.bottom = Math.max(y, diffBounds.bottom);
            };

            var time = Date.now();

            var skip;

            if (!!largeImageThreshold && ignoreAntialiasing && (width > largeImageThreshold || height > largeImageThreshold)) {
                skip = 6;
            }

            var pixel1 = { r: 0, g: 0, b: 0, a: 0 };
            var pixel2 = { r: 0, g: 0, b: 0, a: 0 };

            var skipTheRest = false;

            loop(width, height, function (horizontalPos, verticalPos) {
                if (skipTheRest) {
                    return;
                }

                if (skip) {
                    // only skip if the image isn't small
                    if (verticalPos % skip === 0 || horizontalPos % skip === 0) {
                        return;
                    }
                }

                var offset = (verticalPos * width + horizontalPos) * 4;
                if (!getPixelInfo(pixel1, data1, offset, 1) || !getPixelInfo(pixel2, data2, offset, 2)) {
                    return;
                }

                var isWithinComparedArea = withinComparedArea(horizontalPos, verticalPos, width, height, pixel2);

                if (ignoreColors) {
                    addBrightnessInfo(pixel1);
                    addBrightnessInfo(pixel2);

                    if (isPixelBrightnessSimilar(pixel1, pixel2) || !isWithinComparedArea) {
                        if (!compareOnly) {
                            copyGrayScalePixel(pix, offset, pixel2);
                        }
                    } else {
                        if (!compareOnly) {
                            errorPixel(pix, offset, pixel1, pixel2);
                        }

                        mismatchCount++;
                        updateBounds(horizontalPos, verticalPos);
                    }
                    return;
                }

                if (isRGBSimilar(pixel1, pixel2) || !isWithinComparedArea) {
                    if (!compareOnly) {
                        copyPixel(pix, offset, pixel1);
                    }
                } else if (
                    ignoreAntialiasing &&
                    (addBrightnessInfo(pixel1), // jit pixel info augmentation looks a little weird, sorry.
                    addBrightnessInfo(pixel2),
                    isAntialiased(pixel1, data1, 1, verticalPos, horizontalPos, width) || isAntialiased(pixel2, data2, 2, verticalPos, horizontalPos, width))
                ) {
                    if (isPixelBrightnessSimilar(pixel1, pixel2) || !isWithinComparedArea) {
                        if (!compareOnly) {
                            copyGrayScalePixel(pix, offset, pixel2);
                        }
                    } else {
                        if (!compareOnly) {
                            errorPixel(pix, offset, pixel1, pixel2);
                        }

                        mismatchCount++;
                        updateBounds(horizontalPos, verticalPos);
                    }
                } else {
                    if (!compareOnly) {
                        errorPixel(pix, offset, pixel1, pixel2);
                    }

                    mismatchCount++;
                    updateBounds(horizontalPos, verticalPos);
                }

                if (compareOnly) {
                    var currentMisMatchPercent = (mismatchCount / (height * width)) * 100;

                    if (currentMisMatchPercent > returnEarlyThreshold) {
                        skipTheRest = true;
                    }
                }
            });

            data.rawMisMatchPercentage = (mismatchCount / (height * width)) * 100;
            data.misMatchPercentage = data.rawMisMatchPercentage.toFixed(2);
            data.diffBounds = diffBounds;
            data.analysisTime = Date.now() - time;

            data.getImageDataUrl = function (text) {
                if (compareOnly) {
                    throw Error("No diff image available - ran in compareOnly mode");
                }

                var barHeight = 0;

                if (text) {
                    barHeight = addLabel(text, context, hiddenCanvas);
                }

                context.putImageData(imgd, 0, barHeight);

                return hiddenCanvas.toDataURL("image/png");
            };

            if (!compareOnly && hiddenCanvas.toBuffer) {
                data.getBuffer = function (includeOriginal) {
                    if (includeOriginal) {
                        var imageWidth = hiddenCanvas.width + 2;
                        hiddenCanvas.width = imageWidth * 3;
                        context.putImageData(img1, 0, 0);
                        context.putImageData(img2, imageWidth, 0);
                        context.putImageData(imgd, imageWidth * 2, 0);
                    } else {
                        context.putImageData(imgd, 0, 0);
                    }
                    return hiddenCanvas.toBuffer();
                };
            }
        }

        function addLabel(text, context, hiddenCanvas) {
            var textPadding = 2;

            context.font = "12px sans-serif";

            var textWidth = context.measureText(text).width + textPadding * 2;
            var barHeight = 22;

            if (textWidth > hiddenCanvas.width) {
                hiddenCanvas.width = textWidth;
            }

            hiddenCanvas.height += barHeight;

            context.fillStyle = "#666";
            context.fillRect(0, 0, hiddenCanvas.width, barHeight - 4);
            context.fillStyle = "#fff";
            context.fillRect(0, barHeight - 4, hiddenCanvas.width, 4);

            context.fillStyle = "#fff";
            context.textBaseline = "top";
            context.font = "12px sans-serif";
            context.fillText(text, textPadding, 1);

            return barHeight;
        }

        function normalise(img, w, h) {
            var c;
            var context;

            if (img.height < h || img.width < w) {
                c = createCanvas(w, h);
                context = c.getContext("2d");
                context.putImageData(img, 0, 0);
                return context.getImageData(0, 0, w, h);
            }

            return img;
        }

        function outputSettings(options) {
            var key;

            if (options.errorColor) {
                for (key in options.errorColor) {
                    if (options.errorColor.hasOwnProperty(key)) {
                        errorPixelColor[key] = options.errorColor[key] === void 0 ? errorPixelColor[key] : options.errorColor[key];
                    }
                }
            }

            if (options.errorType && errorPixelTransform[options.errorType]) {
                errorPixel = errorPixelTransform[options.errorType];
                errorType = options.errorType;
            }

            if (options.errorPixel && typeof options.errorPixel === "function") {
                errorPixel = options.errorPixel;
            }

            pixelTransparency = isNaN(Number(options.transparency)) ? pixelTransparency : options.transparency;

            if (options.largeImageThreshold !== undefined) {
                largeImageThreshold = options.largeImageThreshold;
            }

            if (options.useCrossOrigin !== undefined) {
                useCrossOrigin = options.useCrossOrigin;
            }

            if (options.boundingBox !== undefined) {
                boundingBoxes = [options.boundingBox];
            }

            if (options.ignoredBox !== undefined) {
                ignoredBoxes = [options.ignoredBox];
            }

            if (options.boundingBoxes !== undefined) {
                boundingBoxes = options.boundingBoxes;
            }

            if (options.ignoredBoxes !== undefined) {
                ignoredBoxes = options.ignoredBoxes;
            }

            if (options.ignoreAreasColoredWith !== undefined) {
                ignoreAreasColoredWith = options.ignoreAreasColoredWith;
            }
        }

        function compare(one, two) {
            if (globalOutputSettings !== oldGlobalSettings) {
                outputSettings(globalOutputSettings);
            }

            function onceWeHaveBoth() {
                var width;
                var height;
                if (images.length === 2) {
                    if (images[0].error || images[1].error) {
                        data = {};
                        data.error = images[0].error ? images[0].error : images[1].error;
                        triggerDataUpdate();
                        return;
                    }
                    width = images[0].width > images[1].width ? images[0].width : images[1].width;
                    height = images[0].height > images[1].height ? images[0].height : images[1].height;

                    if (images[0].width === images[1].width && images[0].height === images[1].height) {
                        data.isSameDimensions = true;
                    } else {
                        data.isSameDimensions = false;
                    }

                    data.dimensionDifference = {
                        width: images[0].width - images[1].width,
                        height: images[0].height - images[1].height
                    };

                    analyseImages(normalise(images[0], width, height), normalise(images[1], width, height), width, height);

                    triggerDataUpdate();
                }
            }

            images = [];
            loadImageData(one, onceWeHaveBoth);
            loadImageData(two, onceWeHaveBoth);
        }

        function getCompareApi(param) {
            var secondFileData;
            var hasMethod = typeof param === "function";

            if (!hasMethod) {
                // assume it's file data
                secondFileData = param;
            }

            var self = {
                setReturnEarlyThreshold: function (threshold) {
                    if (threshold) {
                        compareOnly = true;
                        returnEarlyThreshold = threshold;
                    }
                    return self;
                },
                scaleToSameSize: function () {
                    scaleToSameSize = true;

                    if (hasMethod) {
                        param();
                    }
                    return self;
                },
                useOriginalSize: function () {
                    scaleToSameSize = false;

                    if (hasMethod) {
                        param();
                    }
                    return self;
                },
                ignoreNothing: function () {
                    tolerance.red = 0;
                    tolerance.green = 0;
                    tolerance.blue = 0;
                    tolerance.alpha = 0;
                    tolerance.minBrightness = 0;
                    tolerance.maxBrightness = 255;

                    ignoreAntialiasing = false;
                    ignoreColors = false;

                    if (hasMethod) {
                        param();
                    }
                    return self;
                },
                ignoreLess: function () {
                    tolerance.red = 16;
                    tolerance.green = 16;
                    tolerance.blue = 16;
                    tolerance.alpha = 16;
                    tolerance.minBrightness = 16;
                    tolerance.maxBrightness = 240;

                    ignoreAntialiasing = false;
                    ignoreColors = false;

                    if (hasMethod) {
                        param();
                    }
                    return self;
                },
                ignoreAntialiasing: function () {
                    tolerance.red = 32;
                    tolerance.green = 32;
                    tolerance.blue = 32;
                    tolerance.alpha = 32;
                    tolerance.minBrightness = 64;
                    tolerance.maxBrightness = 96;

                    ignoreAntialiasing = true;
                    ignoreColors = false;

                    if (hasMethod) {
                        param();
                    }
                    return self;
                },
                ignoreColors: function () {
                    tolerance.alpha = 16;
                    tolerance.minBrightness = 16;
                    tolerance.maxBrightness = 240;

                    ignoreAntialiasing = false;
                    ignoreColors = true;

                    if (hasMethod) {
                        param();
                    }
                    return self;
                },
                ignoreAlpha: function () {
                    tolerance.red = 16;
                    tolerance.green = 16;
                    tolerance.blue = 16;
                    tolerance.alpha = 255;
                    tolerance.minBrightness = 16;
                    tolerance.maxBrightness = 240;

                    ignoreAntialiasing = false;
                    ignoreColors = false;

                    if (hasMethod) {
                        param();
                    }
                    return self;
                },
                repaint: function () {
                    if (hasMethod) {
                        param();
                    }
                    return self;
                },
                outputSettings: function (options) {
                    outputSettings(options);
                    return self;
                },
                onComplete: function (callback) {
                    updateCallbackArray.push(callback);

                    var wrapper = function () {
                        compare(fileData, secondFileData);
                    };

                    wrapper();

                    return getCompareApi(wrapper);
                },
                setupCustomTolerance: function (customSettings) {
                    for (var property in tolerance) {
                        if (!customSettings.hasOwnProperty(property)) {
                            continue;
                        }

                        tolerance[property] = customSettings[property];
                    }
                }
            };

            return self;
        }

        var rootSelf = {
            onComplete: function (callback) {
                updateCallbackArray.push(callback);
                loadImageData(fileData, function (imageData, width, height) {
                    parseImage(imageData.data, width, height);
                });
            },
            compareTo: function (secondFileData) {
                return getCompareApi(secondFileData);
            },
            outputSettings: function (options) {
                outputSettings(options);
                return rootSelf;
            }
        };

        return rootSelf;
    };

    function setGlobalOutputSettings(settings) {
        globalOutputSettings = settings;
        return resemble;
    }

    function applyIgnore(api, ignore, customTolerance) {
        switch (ignore) {
            case "nothing":
                api.ignoreNothing();
                break;
            case "less":
                api.ignoreLess();
                break;
            case "antialiasing":
                api.ignoreAntialiasing();
                break;
            case "colors":
                api.ignoreColors();
                break;
            case "alpha":
                api.ignoreAlpha();
                break;
            default:
                throw new Error("Invalid ignore: " + ignore);
        }

        api.setupCustomTolerance(customTolerance);
    }

    resemble.compare = function (image1, image2, options, cb) {
        var callback;
        var opt;

        if (typeof options === "function") {
            callback = options;
            opt = {};
        } else {
            callback = cb;
            opt = options || {};
        }

        var res = resemble(image1);
        var compare;

        if (opt.output) {
            res.outputSettings(opt.output);
        }

        compare = res.compareTo(image2);

        if (opt.returnEarlyThreshold) {
            compare.setReturnEarlyThreshold(opt.returnEarlyThreshold);
        }

        if (opt.scaleToSameSize) {
            compare.scaleToSameSize();
        }

        var toleranceSettings = opt.tolerance || {};
        if (typeof opt.ignore === "string") {
            applyIgnore(compare, opt.ignore, toleranceSettings);
        } else if (opt.ignore && opt.ignore.forEach) {
            opt.ignore.forEach(function (v) {
                applyIgnore(compare, v, toleranceSettings);
            });
        }

        compare.onComplete(function (data) {
            if (data.error) {
                callback(data.error);
            } else {
                callback(null, data);
            }
        });
    };

    resemble.outputSettings = setGlobalOutputSettings;
    return resemble;
});


/***/ }),

/***/ "./scripts/ModalUIReader.ts":
/*!**********************************!*\
  !*** ./scripts/ModalUIReader.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalUIReader: () => (/* binding */ ModalUIReader)
/* harmony export */ });
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alt1 */ "../node_modules/alt1/dist/base/index.js");
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alt1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt1_ocr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alt1/ocr */ "../node_modules/alt1/dist/ocr/index.js");
/* harmony import */ var alt1_ocr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alt1_ocr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alt1_fonts_aa_9px_mono_allcaps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alt1/fonts/aa_9px_mono_allcaps.js */ "../node_modules/alt1/dist/fonts/aa_9px_mono_allcaps.js");
/* harmony import */ var alt1_fonts_aa_9px_mono_allcaps_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alt1_fonts_aa_9px_mono_allcaps_js__WEBPACK_IMPORTED_MODULE_2__);
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var imgs = (0,alt1__WEBPACK_IMPORTED_MODULE_0__.webpackImages)({
    exitbutton: __webpack_require__(/*! ../images/eocx.data.png */ "./images/eocx.data.png"),
    //exitbutton_leg: require("../images/legacyx.data.png"),
    topleft: __webpack_require__(/*! ../images/eoctopleft.data.png */ "./images/eoctopleft.data.png"),
    //topleft_leg: require("../images/legacytopleft.data.png"),
    botleft: __webpack_require__(/*! ../images/eocbotleft.data.png */ "./images/eocbotleft.data.png"),
    //botleft_leg: require("../images/legacybotleft.data.png"),
});
var ModalUIReader;
(function (ModalUIReader) {
    function find(img) {
        if (!img) {
            img = (0,alt1__WEBPACK_IMPORTED_MODULE_0__.captureHoldFullRs)();
        }
        var treoc = img.findSubimage(imgs.exitbutton);
        var eocboxes = treoc.map(function (p) { return detectEoc(img, p); });
        return __spreadArray([], eocboxes, true).filter(function (m) { return m; });
    }
    ModalUIReader.find = find;
    function detectEoc(img, pos) {
        var left = img.findSubimage(imgs.topleft, img.x, pos.y - 5, pos.x, imgs.topleft.height).sort(function (a, b) { return a.x - b.x; })[0];
        if (!left) {
            return null;
        }
        var bot = img.findSubimage(imgs.botleft, left.x, pos.y, imgs.botleft.width, img.y + img.height - pos.y).sort(function (a, b) { return a.y - b.y; })[0];
        if (!bot) {
            return null;
        }
        var buf = img.toData(left.x, pos.y, 250, 20);
        var title = alt1_ocr__WEBPACK_IMPORTED_MODULE_1__.readSmallCapsBackwards(buf, alt1_fonts_aa_9px_mono_allcaps_js__WEBPACK_IMPORTED_MODULE_2__, [[255, 203, 5]], 0, 13, buf.width, 1);
        return {
            rect: new alt1__WEBPACK_IMPORTED_MODULE_0__.Rect(left.x + 4, pos.y + 24, (pos.x + 21) - (left.x + 4), (bot.y + 8) - (pos.y + 24)),
            title: title ? title.text.toLowerCase() : "",
            img: img
        };
    }
    ModalUIReader.detectEoc = detectEoc;
})(ModalUIReader || (ModalUIReader = {}));


/***/ }),

/***/ "./scripts/ZamorakReader.ts":
/*!**********************************!*\
  !*** ./scripts/ZamorakReader.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var alt1_ocr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alt1/ocr */ "../node_modules/alt1/dist/ocr/index.js");
/* harmony import */ var alt1_ocr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alt1_ocr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alt1_fonts_aa_9px_mono_allcaps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alt1/fonts/aa_9px_mono_allcaps.js */ "../node_modules/alt1/dist/fonts/aa_9px_mono_allcaps.js");
/* harmony import */ var alt1_fonts_aa_9px_mono_allcaps_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alt1_fonts_aa_9px_mono_allcaps_js__WEBPACK_IMPORTED_MODULE_1__);


var ZamorakReader = /** @class */ (function () {
    function ZamorakReader() {
        this.pos = null;
    }
    ZamorakReader.prototype.read = function (img) {
        if (!this.pos) {
            throw new Error("ui not found yet");
            ;
        }
        var buf = img.toData(this.pos.rect.x, this.pos.rect.y, this.pos.rect.width, this.pos.rect.height);
        var hash = 0;
        var xcomp = 20 - 28;
        var ycomp = -19 - 13;
        for (var y = 50 + ycomp; y < 85 + ycomp; y++) {
            for (var x = 25 + xcomp; x < 375 + xcomp; x++) {
                if (buf.getColorDifference(x, y, 10, 31, 41) < 10) {
                    continue;
                }
                ;
                hash = (((hash << 5) - hash) + buf.getPixelInt(x, y)) | 0;
            }
        }
        // These tweaks allow for this to read Barrows clue windows.
        var xtweak = 0;
        var ytweak = 125;
        var str = alt1_ocr__WEBPACK_IMPORTED_MODULE_0___default().findReadLine(buf, (alt1_fonts_aa_9px_mono_allcaps_js__WEBPACK_IMPORTED_MODULE_1___default()), [[255, 255, 255]], 134 + xcomp + xtweak, 113 + ycomp + ytweak);
        // alt1.overLayText("value", a1lib.mixColor(255,255,255), 12, this.pos.rect.x + 134 + xcomp + xtweak, this.pos.rect.y + 113 + ycomp + ytweak, 1000)
        if (!str.text) {
            console.log("Str is not txt");
            return null;
        }
        var text = str.text.toLowerCase();
        var m = text.match(/(value|atual)[: ]+([\d,\.]+)\b/);
        if (!m) {
            console.log("m is a no go");
            return null;
        }
        var value = +m[2].replace(/[,\.]/g, "");
        return { hash: hash, value: value, text: text };
    };
    return ZamorakReader;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZamorakReader);


/***/ }),

/***/ "./JSON/ItemsAndImagesZamorak.json":
/*!*****************************************!*\
  !*** ./JSON/ItemsAndImagesZamorak.json ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ItemsAndImagesZamorak.json";

/***/ }),

/***/ "./JSON/ItemsAndImagesZamorakLegacy.json":
/*!***********************************************!*\
  !*** ./JSON/ItemsAndImagesZamorakLegacy.json ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ItemsAndImagesZamorakLegacy.json";

/***/ }),

/***/ "./JSON/LocalStorageZamorakInit.json":
/*!*******************************************!*\
  !*** ./JSON/LocalStorageZamorakInit.json ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "LocalStorageZamorakInit.json";

/***/ }),

/***/ "./appconfig.json":
/*!************************!*\
  !*** ./appconfig.json ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "appconfig.json";

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "index.html";

/***/ }),

/***/ "canvas":
/*!*************************!*\
  !*** external "canvas" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_canvas__;

/***/ }),

/***/ "electron/common":
/*!**********************************!*\
  !*** external "electron/common" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_electron_common__ === 'undefined') { var e = new Error("Cannot find module 'electron/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_electron_common__;

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_sharp__ === 'undefined') { var e = new Error("Cannot find module 'sharp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_sharp__;

/***/ }),

/***/ "../node_modules/alt1/dist/base/index.js":
/*!***********************************************!*\
  !*** ../node_modules/alt1/dist/base/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! sharp */ "sharp"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! canvas */ "canvas"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return __webpack_require__(/*! electron/common */ "electron/common"); } catch(e) {} }()));
	else {}
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_sharp__, __WEBPACK_EXTERNAL_MODULE_canvas__, __WEBPACK_EXTERNAL_MODULE_electron_common__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/base/alt1api.ts":
/*!*****************************!*\
  !*** ./src/base/alt1api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/base/declarations.ts":
/*!**********************************!*\
  !*** ./src/base/declarations.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/base/imagedata-extensions.ts":
/*!******************************************!*\
  !*** ./src/base/imagedata-extensions.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_2062__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageData = void 0;
const a1lib = __importStar(__nested_webpack_require_2062__(/*! ./index */ "./src/base/index.ts"));
const nodeimports = __importStar(__nested_webpack_require_2062__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
// //TODO revamp this madness a bit?
// (function () {
// 	var globalvar = (typeof self != "undefined" ? self : (typeof (global as any) != "undefined" ? (global as any) : null)) as any;
// 	//use the node-canvas version when on node
// 	if (typeof globalvar.ImageData == "undefined") {
// 		let nodecnv = requireNodeCanvas();
// 		globalvar.ImageData = nodecnv.ImageData;
// 	}
// 	var fill = typeof globalvar.ImageData == "undefined";
// 	//should never be reach anymore
// 	var constr = function (this: any) {
// 		var i = 0;
// 		var data = (arguments[i] instanceof Uint8ClampedArray ? arguments[i++] : null);
// 		var width = arguments[i++];
// 		var height = arguments[i++];
// 		if (fill) {
// 			if (!data) { data = new Uint8ClampedArray(width * height * 4); }
// 			this.width = width;
// 			this.height = height;
// 			this.data = data;
// 		}
// 		else if (oldconstr) {
// 			return (data ? new oldconstr(data, width, height) : new oldconstr(width, height));
// 		} else {
// 			var canvas = document.createElement('canvas');
// 			canvas.width = width;
// 			canvas.height = height;
// 			var ctx = canvas.getContext("2d")!;
// 			var imageData = ctx.createImageData(width, height);
// 			if (data) { imageData.data.set(data); }
// 			return imageData;
// 		}
// 	}
// 	var oldconstr = globalvar.ImageData;
// 	if (typeof document != "undefined") {
// 		try {
// 			new oldconstr(1, 1);
// 		} catch (e) {
// 			//direct constructor call not allowed in ie
// 			oldconstr = null;
// 		}
// 	}
// 	if (!fill) { constr.prototype = globalvar.ImageData.prototype; }
// 	globalvar.ImageData = constr;
// 	ImageData = constr as any;
// })();
(function () {
    var globalvar = (typeof self != "undefined" ? self : (typeof __nested_webpack_require_2062__.g != "undefined" ? __nested_webpack_require_2062__.g : null));
    var filltype = typeof globalvar.ImageData == "undefined" || typeof globalvar.document == "undefined";
    var fillconstr = filltype;
    if (!filltype) {
        var oldconstr = globalvar.ImageData;
        try {
            let data = new Uint8ClampedArray(4);
            data[0] = 1;
            let a = new globalvar.ImageData(data, 1, 1);
            fillconstr = a.data[0] != 1;
        }
        catch (e) {
            fillconstr = true;
        }
    }
    if (fillconstr) {
        var constr = function ImageDataShim() {
            var i = 0;
            var data = (arguments[i] instanceof Uint8ClampedArray ? arguments[i++] : null);
            var width = arguments[i++];
            var height = arguments[i++];
            if (filltype) {
                if (!data) {
                    data = new Uint8ClampedArray(width * height * 4);
                }
                this.width = width;
                this.height = height;
                this.data = data;
            }
            else if (fillconstr) {
                //WARNING This branch of code does not use the same pixel data backing store
                //(problem with wasm, however all wasm browser have a native constructor (unless asm.js is used))
                var canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext("2d");
                var imageData = ctx.createImageData(width, height);
                if (data) {
                    imageData.data.set(data);
                }
                return imageData;
            }
            // else {
            // 	//oh no...
            // 	//we need this monstrocity in order to call the native constructor with variable number of args
            // 	//when es5 transpile is enable (that strips the spread operator)
            // 	return new (Function.prototype.bind.apply(oldconstr, [null,...arguments]));
            // }
        };
        if (!filltype) {
            constr.prototype = globalvar.ImageData.prototype;
        }
        globalvar.ImageData = constr;
        exports.ImageData = constr;
    }
    else {
        exports.ImageData = globalvar.ImageData;
    }
})();
//Recast into a drawable imagedata class on all platforms, into a normal browser ImageData on browsers or a node-canvas imagedata on nodejs
exports.ImageData.prototype.toDrawableData = function () {
    if (typeof document == "undefined") {
        return nodeimports.imageDataToDrawable(this);
    }
    else {
        return this;
    }
};
exports.ImageData.prototype.putImageData = function (buf, cx, cy) {
    for (var dx = 0; dx < buf.width; dx++) {
        for (var dy = 0; dy < buf.height; dy++) {
            var i1 = (dx + cx) * 4 + (dy + cy) * 4 * this.width;
            var i2 = dx * 4 + dy * 4 * buf.width;
            this.data[i1] = buf.data[i2];
            this.data[i1 + 1] = buf.data[i2 + 1];
            this.data[i1 + 2] = buf.data[i2 + 2];
            this.data[i1 + 3] = buf.data[i2 + 3];
        }
    }
};
exports.ImageData.prototype.pixelOffset = function (x, y) {
    return x * 4 + y * this.width * 4;
};
//creates a hash of a portion of the buffer used to check for changes
exports.ImageData.prototype.getPixelHash = function (rect) {
    if (!rect) {
        rect = new a1lib.Rect(0, 0, this.width, this.height);
    }
    var hash = 0;
    for (var x = rect.x; x < rect.x + rect.width; x++) {
        for (var y = rect.y; y < rect.y + rect.height; y++) {
            var i = x * 4 + y * 4 * this.width;
            hash = (((hash << 5) - hash) + this.data[i]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 1]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 2]) | 0;
            hash = (((hash << 5) - hash) + this.data[i + 3]) | 0;
        }
    }
    return hash;
};
exports.ImageData.prototype.clone = function (rect) {
    return this.toImage(rect).getContext("2d").getImageData(0, 0, rect.width, rect.height);
};
exports.ImageData.prototype.show = function (x = 5, y = 5, zoom = 1) {
    if (typeof document == "undefined") {
        console.error("need a document to show an imagedata object");
        return;
    }
    var imgs = document.getElementsByClassName("debugimage");
    while (imgs.length > exports.ImageData.prototype.show.maxImages) {
        imgs[0].remove();
    }
    var el = this.toImage();
    el.classList.add("debugimage");
    el.style.position = "absolute";
    el.style.zIndex = "1000";
    el.style.left = x / zoom + "px";
    el.style.top = y / zoom + "px";
    el.style.background = "purple";
    el.style.cursor = "pointer";
    el.style.imageRendering = "pixelated";
    el.style.outline = "1px solid #0f0";
    el.style.width = (this.width == 1 ? 100 : this.width) * zoom + "px";
    el.style.height = (this.height == 1 ? 100 : this.height) * zoom + "px";
    el.onclick = function () { el.remove(); };
    document.body.appendChild(el);
    return el;
};
exports.ImageData.prototype.show.maxImages = 10;
exports.ImageData.prototype.toImage = function (rect) {
    if (!rect) {
        rect = new a1lib.Rect(0, 0, this.width, this.height);
    }
    if (typeof document != "undefined") {
        var el = document.createElement("canvas");
        el.width = rect.width;
        el.height = rect.height;
    }
    else {
        el = nodeimports.createCanvas(rect.width, rect.height);
    }
    var ctx = el.getContext("2d");
    ctx.putImageData(this.toDrawableData(), -rect.x, -rect.y);
    return el;
};
exports.ImageData.prototype.getPixel = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return [this.data[i], this.data[i + 1], this.data[i + 2], this.data[i + 3]];
};
exports.ImageData.prototype.getPixelValueSum = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return this.data[i] + this.data[i + 1] + this.data[i + 2];
};
exports.ImageData.prototype.getPixelInt = function (x, y) {
    var i = x * 4 + y * 4 * this.width;
    return (this.data[i + 3] << 24) + (this.data[i + 0] << 16) + (this.data[i + 1] << 8) + (this.data[i + 2] << 0);
};
exports.ImageData.prototype.getColorDifference = function (x, y, r, g, b, a = 255) {
    var i = x * 4 + y * 4 * this.width;
    return Math.abs(this.data[i] - r) + Math.abs(this.data[i + 1] - g) + Math.abs(this.data[i + 2] - b) * a / 255;
};
exports.ImageData.prototype.setPixel = function (x, y, ...color) {
    var r, g, b, a;
    var [r, g, b, a] = (Array.isArray(color[0]) ? color[0] : color);
    var i = x * 4 + y * 4 * this.width;
    this.data[i] = r;
    this.data[i + 1] = g;
    this.data[i + 2] = b;
    this.data[i + 3] = a == undefined ? 255 : a;
};
exports.ImageData.prototype.setPixelInt = function (x, y, color) {
    var i = x * 4 + y * 4 * this.width;
    this.data[i] = (color >> 24) & 0xff;
    this.data[i + 1] = (color >> 16) & 0xff;
    this.data[i + 2] = (color >> 8) & 0xff;
    this.data[i + 3] = (color >> 0) & 0xff;
};
exports.ImageData.prototype.toFileBytes = function (format, quality) {
    if (typeof HTMLCanvasElement != "undefined") {
        return new Promise(d => this.toImage().toBlob(b => {
            var r = new FileReader();
            r.readAsArrayBuffer(b);
            r.onload = () => d(new Uint8Array(r.result));
        }, format, quality));
    }
    else {
        return nodeimports.imageDataToFileBytes(this, format, quality);
    }
};
exports.ImageData.prototype.toPngBase64 = function () {
    if (typeof HTMLCanvasElement != "undefined") {
        var str = this.toImage().toDataURL("image/png");
        return str.slice(str.indexOf(",") + 1);
    }
    else {
        throw new Error("synchronous image conversion not supported in nodejs, try using ImageData.prototype.toFileBytes");
    }
};
exports.ImageData.prototype.pixelCompare = function (buf, x = 0, y = 0, max) {
    return a1lib.ImageDetect.simpleCompare(this, buf, x, y, max);
};
exports.ImageData.prototype.copyTo = function (target, sourcex, sourcey, width, height, targetx, targety) {
    //convince v8 that these are 31bit uints
    const targetwidth = target.width | 0;
    const thiswidth = this.width | 0;
    const copywidth = width | 0;
    const fastwidth = Math.floor(width / 4) * 4;
    const thisdata = new Int32Array(this.data.buffer, this.data.byteOffset, this.data.byteLength / 4);
    const targetdata = new Int32Array(target.data.buffer, target.data.byteOffset, target.data.byteLength / 4);
    for (let cy = 0; cy < height; cy++) {
        let cx = 0;
        let it = (cx + targetx) + (cy + targety) * targetwidth;
        let is = (cx + sourcex) + (cy + sourcey) * thiswidth;
        //copy 4 pixels per iter (xmm)
        for (; cx < fastwidth; cx += 4) {
            targetdata[it] = thisdata[is];
            targetdata[it + 1] = thisdata[is + 1];
            targetdata[it + 2] = thisdata[is + 2];
            targetdata[it + 3] = thisdata[is + 3];
            it += 4;
            is += 4;
        }
        //copy remainder per pixel
        for (; cx < copywidth; cx++) {
            targetdata[it] = thisdata[is];
            it += 1;
            is += 1;
        }
    }
};
if (typeof HTMLImageElement != "undefined") {
    HTMLImageElement.prototype.toBuffer = function (x = 0, y = 0, w = this.width, h = this.height) {
        var cnv = document.createElement("canvas");
        cnv.width = w;
        cnv.height = h;
        var ctx = cnv.getContext("2d");
        ctx.drawImage(this, -x, -y);
        return ctx.getImageData(0, 0, w, h);
    };
    HTMLImageElement.prototype.toCanvas = function (x = 0, y = 0, w = this.width, h = this.height) {
        var cnv = document.createElement("canvas");
        cnv.width = w;
        cnv.height = h;
        var ctx = cnv.getContext("2d");
        ctx.drawImage(this, -x, -y);
        return cnv;
    };
}


/***/ }),

/***/ "./src/base/imagedetect.ts":
/*!*********************************!*\
  !*** ./src/base/imagedetect.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_15248__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageDataSet = exports.webpackImages = exports.asyncMap = exports.coldif = exports.simpleCompareRMSE = exports.simpleCompare = exports.findSubbuffer = exports.findSubimage = exports.clearPngColorspace = exports.isPngBuffer = exports.imageDataFromFileBuffer = exports.imageDataFromBase64 = exports.imageDataFromUrl = void 0;
const imgref_1 = __nested_webpack_require_15248__(/*! ./imgref */ "./src/base/imgref.ts");
const wapper = __importStar(__nested_webpack_require_15248__(/*! ./wrapper */ "./src/base/wrapper.ts"));
const nodeimports = __importStar(__nested_webpack_require_15248__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
const _1 = __nested_webpack_require_15248__(/*! . */ "./src/base/index.ts");
/**
* Downloads an image and returns the ImageData
* Make sure the png image does not have a sRGB chunk or the resulting pixels will differ for different users!!!
* @param url http(s) or data url to the image
*/
async function imageDataFromUrl(url) {
    if (typeof Image != "undefined") {
        var img = new Image();
        img.crossOrigin = "crossorigin";
        return await new Promise((done, fail) => {
            img.onload = function () { done(img.toBuffer()); };
            img.onerror = fail;
            img.src = url;
        });
    }
    else {
        var hdr = "data:image/png;base64,";
        if (url.startsWith(hdr)) {
            return imageDataFromBase64(url.slice(hdr.length));
        }
        throw new Error("loading remote images in nodejs has been disabled, load the raw bytes and use imageDataFromNodeBuffer instead");
    }
}
exports.imageDataFromUrl = imageDataFromUrl;
/**
* Loads an ImageData object from a base64 encoded png image
* Make sure the png image does not have a sRGB chunk or the resulting pixels will differ for different users!!!
* @param data a base64 encoded png image
*/
async function imageDataFromBase64(data) {
    if (typeof Image != "undefined") {
        return imageDataFromUrl("data:image/png;base64," + data);
    }
    else {
        return nodeimports.imageDataFromBase64(data);
    }
}
exports.imageDataFromBase64 = imageDataFromBase64;
/**
 * Loads an ImageData object directly from a png encoded file buffer
 * This method ensures that png color space headers are taken care off
 * @param data The bytes of a png file
 */
async function imageDataFromFileBuffer(data) {
    clearPngColorspace(data);
    if (typeof Image != "undefined") {
        let blob = new Blob([data], { type: "image/png" });
        let url = URL.createObjectURL(blob);
        let r = await imageDataFromUrl(url);
        URL.revokeObjectURL(url);
        return r;
    }
    else {
        return nodeimports.imageDataFromBuffer(data);
    }
}
exports.imageDataFromFileBuffer = imageDataFromFileBuffer;
/**
* Checks if a given byte array is a png file (by checking for ?PNG as first 4 bytes)
* @param bytes Raw bytes of the png file
*/
function isPngBuffer(bytes) {
    return bytes[0] == 137 && bytes[1] == 80 && bytes[2] == 78 && bytes[3] == 71;
}
exports.isPngBuffer = isPngBuffer;
/**
* Resets the colorspace data in the png file.
* This makes sure the browser renders the exact colors in the file instead of filtering it in order to obtain the best real life representation of
* what it looked like on the authors screen. (this feature is often broken and not supported)
* For example a round trip printscreen -> open in browser results in different colors than the original
* @param data Raw bytes of the png file
*/
function clearPngColorspace(data) {
    if (!isPngBuffer(data)) {
        throw new Error("non-png image received");
    }
    var i = 8;
    while (i < data.length) {
        var length = data[i++] * 0x1000000 + data[i++] * 0x10000 + data[i++] * 0x100 + data[i++];
        var ancillary = !!((data[i] >> 5) & 1);
        var chunkname = String.fromCharCode(data[i], data[i + 1], data[i + 2], data[i + 3]);
        var chunkid = chunkname.toLowerCase();
        if (chunkid != "trns" && ancillary) {
            data[i + 0] = "n".charCodeAt(0);
            data[i + 1] = "o".charCodeAt(0);
            data[i + 2] = "P".charCodeAt(0);
            data[i + 3] = "E".charCodeAt(0);
            //calculate new chunk checksum
            //http://www.libpng.org/pub/png/spec/1.2/PNG-CRCAppendix.html
            var end = i + 4 + length;
            var crc = 0xffffffff;
            //should be fast enough like this
            var bitcrc = function (bit) {
                for (var k = 0; k < 8; k++) {
                    if (bit & 1) {
                        bit = 0xedb88320 ^ (bit >>> 1);
                    }
                    else {
                        bit = bit >>> 1;
                    }
                }
                return bit;
            };
            for (var a = i; a < end; a++) {
                if (a >= i + 4) {
                    data[a] = 0;
                }
                var bit = data[a];
                crc = bitcrc((crc ^ bit) & 0xff) ^ (crc >>> 8);
            }
            crc = crc ^ 0xffffffff;
            //new chunk checksum
            data[i + 4 + length + 0] = (crc >> 24) & 0xff;
            data[i + 4 + length + 1] = (crc >> 16) & 0xff;
            data[i + 4 + length + 2] = (crc >> 8) & 0xff;
            data[i + 4 + length + 3] = (crc >> 0) & 0xff;
        }
        if (chunkname == "IEND") {
            break;
        }
        i += 4; //type
        i += length; //data
        i += 4; //crc
    }
}
exports.clearPngColorspace = clearPngColorspace;
/**
* finds the given needle ImageBuffer in the given haystack ImgRef this function uses the best optimized available
* code depending on the type of the haystack. It will use fast c# searching if the haystack is an ImgRefBind, js searching
* is used otherwise.
* the checklist argument is no longer used and should ignored or null/undefined
* The optional sx,sy,sw,sh arguments indicate a bounding rectangle in which to search the needle. The rectangle should be bigger than the needle
* @returns An array of points where the needle is found. The array is empty if none are found
*/
function findSubimage(haystackImgref, needleBuffer, sx = 0, sy = 0, sw = haystackImgref.width, sh = haystackImgref.height) {
    if (!haystackImgref) {
        throw new TypeError();
    }
    if (!needleBuffer) {
        throw new TypeError();
    }
    var max = 30;
    //check if we can do this in alt1
    if (haystackImgref instanceof imgref_1.ImgRefBind && wapper.hasAlt1 && alt1.bindFindSubImg) {
        var needlestr = wapper.encodeImageString(needleBuffer);
        var r = alt1.bindFindSubImg(haystackImgref.handle, needlestr, needleBuffer.width, sx, sy, sw, sh);
        if (!r) {
            throw new wapper.Alt1Error();
        }
        return JSON.parse(r);
    }
    return findSubbuffer(haystackImgref.read(), needleBuffer, sx, sy, sw, sh);
}
exports.findSubimage = findSubimage;
/**
* Uses js to find the given needle ImageBuffer in the given haystack ImageBuffer. It is better to use the alt1.bind- functions in
* combination with a1nxt.findsubimg.
* the optional sx,sy,sw,sh arguments indicate a bounding rectangle in which to search.
* @returns An array of points where the needle is found. The array is empty if none are found
*/
function findSubbuffer(haystack, needle, sx = 0, sy = 0, sw = haystack.width, sh = haystack.height) {
    var r = [];
    var maxdif = 30;
    var maxresults = 50;
    var needlestride = needle.width * 4;
    var heystackstride = haystack.width * 4;
    //built list of non trans pixel to check
    var checkList = [];
    for (var y = 0; y < needle.height; y++) {
        for (var x = 0; x < needle.width; x++) {
            var i = x * 4 + y * needlestride;
            if (needle.data[i + 3] == 255) {
                checkList.push({ x: x, y: y });
            }
            if (checkList.length == 10) {
                break;
            }
        }
        if (checkList.length == 10) {
            break;
        }
    }
    var cw = (sx + sw) - needle.width;
    var ch = (sy + sh) - needle.height;
    var checklength = checkList.length;
    for (var y = sy; y <= ch; y++) {
        outer: for (var x = sx; x <= cw; x++) {
            for (var a = 0; a < checklength; a++) {
                var i1 = (x + checkList[a].x) * 4 + (y + checkList[a].y) * heystackstride;
                var i2 = checkList[a].x * 4 + checkList[a].y * needlestride;
                var d = 0;
                d = d + Math.abs(haystack.data[i1 + 0] - needle.data[i2 + 0]) | 0;
                d = d + Math.abs(haystack.data[i1 + 1] - needle.data[i2 + 1]) | 0;
                d = d + Math.abs(haystack.data[i1 + 2] - needle.data[i2 + 2]) | 0;
                d *= 255 / needle.data[i2 + 3];
                if (d > maxdif) {
                    continue outer;
                }
            }
            if (simpleCompare(haystack, needle, x, y, maxdif) != Infinity) {
                r.push({ x, y });
                if (r.length > maxresults) {
                    return r;
                }
            }
        }
    }
    return r;
}
exports.findSubbuffer = findSubbuffer;
/**
* Compares two images and returns the average color difference per pixel between them
* @param max The max color difference at any point in the image before short circuiting the function and returning Infinity. set to -1 to always continue.
* @returns The average color difference per pixel or Infinity if the difference is more than max at any point in the image
*/
function simpleCompare(bigbuf, checkbuf, x, y, max = 30) {
    if (x < 0 || y < 0) {
        throw new RangeError();
    }
    if (x + checkbuf.width > bigbuf.width || y + checkbuf.height > bigbuf.height) {
        throw new RangeError();
    }
    if (max == -1) {
        max = 255 * 4;
    }
    var dif = 0;
    for (var step = 8; step >= 1; step /= 2) {
        for (var cx = 0; cx < checkbuf.width; cx += step) {
            for (var cy = 0; cy < checkbuf.height; cy += step) {
                var i1 = (x + cx) * 4 + (y + cy) * bigbuf.width * 4;
                var i2 = cx * 4 + cy * checkbuf.width * 4;
                var d = 0;
                d = d + Math.abs(bigbuf.data[i1 + 0] - checkbuf.data[i2 + 0]) | 0;
                d = d + Math.abs(bigbuf.data[i1 + 1] - checkbuf.data[i2 + 1]) | 0;
                d = d + Math.abs(bigbuf.data[i1 + 2] - checkbuf.data[i2 + 2]) | 0;
                d *= checkbuf.data[i2 + 3] / 255;
                if (step == 1) {
                    dif += d;
                }
                if (d > max) {
                    return Infinity;
                }
            }
        }
    }
    return dif / checkbuf.width / checkbuf.height;
}
exports.simpleCompare = simpleCompare;
/**
* Calculates the root mean square error between the two buffers at the given coordinate, this method can be used in situations with significant blur or
* transparency, it does not bail early on non-matching images like simpleCompare does so it can be expected to be much slower when called often.
* @returns The root mean square error beteen the images, high single pixel errors are penalized more than consisten low errors. return of 0 means perfect match.
*/
function simpleCompareRMSE(bigbuf, checkbuf, x, y) {
    if (x < 0 || y < 0) {
        throw new RangeError();
    }
    if (x + checkbuf.width > bigbuf.width || y + checkbuf.height > bigbuf.height) {
        throw new RangeError();
    }
    var dif = 0;
    var numpix = 0;
    for (var cx = 0; cx < checkbuf.width; cx++) {
        for (var cy = 0; cy < checkbuf.height; cy++) {
            var i1 = (x + cx) * 4 + (y + cy) * bigbuf.width * 4;
            var i2 = cx * 4 + cy * checkbuf.width * 4;
            var d = 0;
            d = d + Math.abs(bigbuf.data[i1 + 0] - checkbuf.data[i2 + 0]) | 0;
            d = d + Math.abs(bigbuf.data[i1 + 1] - checkbuf.data[i2 + 1]) | 0;
            d = d + Math.abs(bigbuf.data[i1 + 2] - checkbuf.data[i2 + 2]) | 0;
            var weight = checkbuf.data[i2 + 3] / 255;
            numpix += weight;
            dif += d * d * weight;
        }
    }
    return Math.sqrt(dif / numpix);
}
exports.simpleCompareRMSE = simpleCompareRMSE;
/**
* Returns the difference between two colors (scaled to the alpha of the second color)
*/
function coldif(r1, g1, b1, r2, g2, b2, a2) {
    return (Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2)) * a2 / 255; //only applies alpha for 2nd buffer!
}
exports.coldif = coldif;
/**
 * Turns map of promises into a map that contains the resolved values after loading.
 * @param input
 */
function asyncMap(input) {
    var raw = {};
    var promises = [];
    for (var a in input) {
        if (input.hasOwnProperty(a)) {
            raw[a] = null;
            promises.push(input[a].then(function (a, i) { raw[a] = i; r[a] = i; }.bind(null, a)));
        }
    }
    var r = {};
    var promise = Promise.all(promises).then(() => { r.loaded = true; return r; });
    Object.defineProperty(r, "loaded", { enumerable: false, value: false, writable: true });
    Object.defineProperty(r, "promise", { enumerable: false, value: promise });
    Object.defineProperty(r, "raw", { enumerable: false, value: raw });
    return Object.assign(r, raw);
}
exports.asyncMap = asyncMap;
/**
* Same as asyncMap, but casts the properties to ImageData in typescript
*/
function webpackImages(input) {
    return asyncMap(input);
}
exports.webpackImages = webpackImages;
class ImageDataSet {
    constructor() {
        this.buffers = [];
    }
    matchBest(img, x, y, max) {
        let best = null;
        let bestscore = max;
        for (let a = 0; a < this.buffers.length; a++) {
            let score = img.pixelCompare(this.buffers[a], x, y, bestscore);
            if (isFinite(score) && (bestscore == undefined || score < bestscore)) {
                bestscore = score;
                best = a;
            }
        }
        if (best == null) {
            return null;
        }
        return { index: best, score: bestscore };
    }
    static fromFilmStrip(baseimg, width) {
        if ((baseimg.width % width) != 0) {
            throw new Error("slice size does not fit in base img");
        }
        let r = new ImageDataSet();
        for (let x = 0; x < baseimg.width; x += width) {
            r.buffers.push(baseimg.clone(new _1.Rect(x, 0, width, baseimg.height)));
        }
        return r;
    }
    static fromFilmStripUneven(baseimg, widths) {
        let r = new ImageDataSet();
        let x = 0;
        for (let w of widths) {
            r.buffers.push(baseimg.clone(new _1.Rect(x, 0, w, baseimg.height)));
            x += w;
            if (x > baseimg.width) {
                throw new Error("sampling filmstrip outside bounds");
            }
        }
        if (x != baseimg.width) {
            throw new Error("unconsumed pixels left in film strip imagedata");
        }
        return r;
    }
    static fromAtlas(baseimg, slices) {
        let r = new ImageDataSet();
        for (let slice of slices) {
            r.buffers.push(baseimg.clone(slice));
        }
        return r;
    }
}
exports.ImageDataSet = ImageDataSet;


/***/ }),

/***/ "./src/base/imgref.ts":
/*!****************************!*\
  !*** ./src/base/imgref.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_31629__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImgRefData = exports.ImgRefBind = exports.ImgRefCtx = exports.ImgRef = void 0;
const index_1 = __nested_webpack_require_31629__(/*! ./index */ "./src/base/index.ts");
/**
 * Represents an image that might be in different types of memory
 * This is mostly used to represent images still in Alt1 memory that have
 * not been transfered to js yet. Various a1lib api's use this type and
 * choose the most efficient approach based on the memory type
 */
class ImgRef {
    constructor(x, y, w, h) {
        this.t = "none";
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        throw new Error("This imgref (" + this.t + ") does not support toData");
    }
    findSubimage(needle, sx = 0, sy = 0, w = this.width, h = this.height) {
        return index_1.ImageDetect.findSubimage(this, needle, sx, sy, w, h);
    }
    toData(x = this.x, y = this.y, w = this.width, h = this.height) {
        return this.read(x - this.x, y - this.y, w, h);
    }
    ;
    containsArea(rect) {
        return this.x <= rect.x && this.y <= rect.y && this.x + this.width >= rect.x + rect.width && this.y + this.height >= rect.y + rect.height;
    }
}
exports.ImgRef = ImgRef;
/**
 * Represents an image in js render memory (canvas/image tag)
 */
class ImgRefCtx extends ImgRef {
    constructor(img, x = 0, y = 0) {
        if (img instanceof CanvasRenderingContext2D) {
            super(x, y, img.canvas.width, img.canvas.height);
            this.ctx = img;
        }
        else {
            super(x, y, img.width, img.height);
            var cnv = (img instanceof HTMLCanvasElement ? img : img.toCanvas());
            this.ctx = cnv.getContext("2d");
        }
        this.t = "ctx";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        return this.ctx.getImageData(x, y, w, h);
    }
}
exports.ImgRefCtx = ImgRefCtx;
/**
 * Represents in image in Alt1 memory, This type of image can be searched for subimages
 * very efficiently and transfering the full image to js can be avoided this way
 */
class ImgRefBind extends ImgRef {
    constructor(handle, x = 0, y = 0, w = 0, h = 0) {
        super(x, y, w, h);
        this.handle = handle;
        this.t = "bind";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        return (0, index_1.transferImageData)(this.handle, x, y, w, h);
    }
}
exports.ImgRefBind = ImgRefBind;
/**
 * Represents an image in js memory
 */
class ImgRefData extends ImgRef {
    constructor(buf, x = 0, y = 0) {
        super(x, y, buf.width, buf.height);
        this.buf = buf;
        this.t = "data";
    }
    read(x = 0, y = 0, w = this.width, h = this.height) {
        if (x == 0 && y == 0 && w == this.width && h == this.height) {
            return this.buf;
        }
        var r = new ImageData(w, h);
        for (var b = y; b < y + h; b++) {
            for (var a = x; a < x + w; a++) {
                var i1 = (a - x) * 4 + (b - y) * w * 4;
                var i2 = a * 4 + b * 4 * this.buf.width;
                r.data[i1] = this.buf.data[i2];
                r.data[i1 + 1] = this.buf.data[i2 + 1];
                r.data[i1 + 2] = this.buf.data[i2 + 2];
                r.data[i1 + 3] = this.buf.data[i2 + 3];
            }
        }
        return r;
    }
}
exports.ImgRefData = ImgRefData;


/***/ }),

/***/ "./src/base/index.ts":
/*!***************************!*\
  !*** ./src/base/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_35283__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageDataSet = exports.findSubbuffer = exports.simpleCompare = exports.findSubimage = exports.webpackImages = exports.NodePolyfill = exports.ImageData = exports.Rect = exports.PasteInput = exports.ImageDetect = void 0;
__nested_webpack_require_35283__(/*! ./declarations */ "./src/base/declarations.ts");
exports.ImageDetect = __importStar(__nested_webpack_require_35283__(/*! ./imagedetect */ "./src/base/imagedetect.ts"));
exports.PasteInput = __importStar(__nested_webpack_require_35283__(/*! ./pasteinput */ "./src/base/pasteinput.ts"));
var rect_1 = __nested_webpack_require_35283__(/*! ./rect */ "./src/base/rect.ts");
Object.defineProperty(exports, "Rect", ({ enumerable: true, get: function () { return __importDefault(rect_1).default; } }));
var imagedata_extensions_1 = __nested_webpack_require_35283__(/*! ./imagedata-extensions */ "./src/base/imagedata-extensions.ts");
Object.defineProperty(exports, "ImageData", ({ enumerable: true, get: function () { return imagedata_extensions_1.ImageData; } }));
exports.NodePolyfill = __importStar(__nested_webpack_require_35283__(/*! ./nodepolyfill */ "./src/base/nodepolyfill.ts"));
__exportStar(__nested_webpack_require_35283__(/*! ./imgref */ "./src/base/imgref.ts"), exports);
__exportStar(__nested_webpack_require_35283__(/*! ./wrapper */ "./src/base/wrapper.ts"), exports);
var imagedetect_1 = __nested_webpack_require_35283__(/*! ./imagedetect */ "./src/base/imagedetect.ts");
Object.defineProperty(exports, "webpackImages", ({ enumerable: true, get: function () { return imagedetect_1.webpackImages; } }));
Object.defineProperty(exports, "findSubimage", ({ enumerable: true, get: function () { return imagedetect_1.findSubimage; } }));
Object.defineProperty(exports, "simpleCompare", ({ enumerable: true, get: function () { return imagedetect_1.simpleCompare; } }));
Object.defineProperty(exports, "findSubbuffer", ({ enumerable: true, get: function () { return imagedetect_1.findSubbuffer; } }));
Object.defineProperty(exports, "ImageDataSet", ({ enumerable: true, get: function () { return imagedetect_1.ImageDataSet; } }));


/***/ }),

/***/ "./src/base/nodepolyfill.ts":
/*!**********************************!*\
  !*** ./src/base/nodepolyfill.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_38931__) => {


//nodejs and electron polyfills for web api's
//commented out type info as that breaks webpack with optional dependencies
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.imageDataFromBuffer = exports.imageDataFromBase64 = exports.imageDataToFileBytes = exports.createCanvas = exports.imageDataToDrawable = exports.requireElectronCommon = exports.requireNodeCanvas = exports.requireSharp = exports.polyfillRequire = void 0;
const index_1 = __nested_webpack_require_38931__(/*! ./index */ "./src/base/index.ts");
const imagedetect_1 = __nested_webpack_require_38931__(/*! ./imagedetect */ "./src/base/imagedetect.ts");
var requirefunction = null;
/**
 * Call this function to let the libs require extra dependencies on nodejs in order
 * to polyfill some browser api's (mostly image compression/decompression)
 * `NodePolifill.polyfillRequire(require);` should solve most cases
 */
function polyfillRequire(requirefn) {
    requirefunction = requirefn;
}
exports.polyfillRequire = polyfillRequire;
function requireSharp() {
    try {
        if (requirefunction) {
            return requirefunction("sharp");
        }
        else {
            return __nested_webpack_require_38931__(/* webpackIgnore: true */ /*! sharp */ "sharp"); // as typeof import("sharp");
        }
    }
    catch (e) { }
    return null;
}
exports.requireSharp = requireSharp;
function requireNodeCanvas() {
    //attempt to require sharp first, after loading canvas the module sharp fails to load
    requireSharp();
    try {
        if (requirefunction) {
            return requirefunction("canvas");
        }
        else {
            return __nested_webpack_require_38931__(/* webpackIgnore: true */ /*! canvas */ "canvas"); // as typeof import("sharp");
        }
    }
    catch (e) { }
    return null;
}
exports.requireNodeCanvas = requireNodeCanvas;
function requireElectronCommon() {
    try {
        if (requirefunction) {
            return requirefunction("electron/common");
        }
        else {
            return __nested_webpack_require_38931__(/* webpackIgnore: true */ /*! electron/common */ "electron/common");
        }
    }
    catch (e) { }
    return null;
}
exports.requireElectronCommon = requireElectronCommon;
function imageDataToDrawable(buf) {
    let nodecnv = requireNodeCanvas();
    if (!nodecnv) {
        throw new Error("couldn't find built-in canvas or the module 'canvas'");
    }
    return new nodecnv.ImageData(buf.data, buf.width, buf.height);
}
exports.imageDataToDrawable = imageDataToDrawable;
function createCanvas(w, h) {
    let nodecnv = requireNodeCanvas();
    if (!nodecnv) {
        throw new Error("couldn't find built-in canvas or the module 'canvas'");
    }
    return nodecnv.createCanvas(w, h);
}
exports.createCanvas = createCanvas;
function flipBGRAtoRGBA(data) {
    for (let i = 0; i < data.length; i += 4) {
        let tmp = data[i + 2];
        data[i + 2] = data[i + 0];
        data[i + 0] = tmp;
    }
}
async function imageDataToFileBytes(buf, format, quality) {
    //use the electron API if we're in electron
    var electronCommon;
    var sharp;
    if (electronCommon = requireElectronCommon()) {
        let nativeImage = electronCommon.nativeImage;
        //need to copy the buffer in order to flip it without destroying the original
        let bufcpy = Buffer.from(buf.data.slice(buf.data.byteOffset, buf.data.byteLength));
        flipBGRAtoRGBA(bufcpy);
        let nativeimg = nativeImage.createFromBitmap(bufcpy, { width: buf.width, height: buf.height });
        return nativeimg.toPNG();
    }
    else if (sharp = requireSharp()) {
        let img = sharp(Buffer.from(buf.data.buffer), { raw: { width: buf.width, height: buf.height, channels: 4 } });
        if (format == "image/png") {
            img.png();
        }
        else if (format == "image/webp") {
            var opts = { quality: 80 };
            if (typeof quality == "number") {
                opts.quality = quality * 100;
            }
            img.webp(opts);
        }
        else {
            throw new Error("unknown image format: " + format);
        }
        return await img.toBuffer({ resolveWithObject: false }).buffer;
    }
    throw new Error("coulnd't find build-in image compression methods or the module 'electron/common' or 'sharp'");
}
exports.imageDataToFileBytes = imageDataToFileBytes;
function imageDataFromBase64(base64) {
    return imageDataFromBuffer(Buffer.from(base64, "base64"));
}
exports.imageDataFromBase64 = imageDataFromBase64;
async function imageDataFromBuffer(buffer) {
    (0, imagedetect_1.clearPngColorspace)(buffer);
    //use the electron API if we're in electron
    var electronCommon;
    var nodecnv;
    if (electronCommon = requireElectronCommon()) {
        let nativeImage = electronCommon.nativeImage;
        let img = nativeImage.createFromBuffer(buffer);
        let pixels = img.toBitmap();
        let size = img.getSize();
        let pixbuf = new Uint8ClampedArray(pixels.buffer, pixels.byteOffset, pixels.byteLength);
        flipBGRAtoRGBA(pixbuf);
        return new index_1.ImageData(pixbuf, size.width, size.height);
    }
    else if (nodecnv = requireNodeCanvas()) {
        return new Promise((done, err) => {
            let img = new nodecnv.Image();
            img.onerror = err;
            img.onload = () => {
                var cnv = nodecnv.createCanvas(img.naturalWidth, img.naturalHeight);
                var ctx = cnv.getContext("2d");
                ctx.drawImage(img, 0, 0);
                var data = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight);
                //use our own class
                done(new index_1.ImageData(data.data, data.width, data.height));
            };
            img.src = Buffer.from(buffer.buffer, buffer.byteOffset, buffer.byteLength);
        });
    }
    throw new Error("couldn't find built-in canvas, module 'electron/common' or the module 'canvas'");
}
exports.imageDataFromBuffer = imageDataFromBuffer;


/***/ }),

/***/ "./src/base/pasteinput.ts":
/*!********************************!*\
  !*** ./src/base/pasteinput.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_45123__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fileDialog = exports.start = exports.startDragNDrop = exports.triggerPaste = exports.unlisten = exports.listen = exports.lastref = void 0;
const index_1 = __nested_webpack_require_45123__(/*! ./index */ "./src/base/index.ts");
const ImageDetect = __importStar(__nested_webpack_require_45123__(/*! ./imagedetect */ "./src/base/imagedetect.ts"));
var listeners = [];
var started = false;
var dndStarted = false;
var pasting = false;
exports.lastref = null;
function listen(func, errorfunc, dragndrop) {
    listeners.push({ cb: func, error: errorfunc });
    if (!started) {
        start();
    }
    if (dragndrop && !dndStarted) {
        startDragNDrop();
    }
}
exports.listen = listen;
function unlisten(func) {
    let i = listeners.findIndex(c => c.cb == func);
    if (i != -1) {
        listeners.splice(i, 1);
    }
}
exports.unlisten = unlisten;
/**
 * currently used in multiple document situations (iframe), might be removed in the future
 */
function triggerPaste(img) {
    exports.lastref = img;
    for (var a in listeners) {
        listeners[a].cb(exports.lastref);
    }
}
exports.triggerPaste = triggerPaste;
function pasted(img) {
    pasting = false;
    let cnv = img instanceof HTMLCanvasElement ? img : img.toCanvas();
    triggerPaste(new index_1.ImgRefCtx(cnv));
}
function error(error, mes) {
    var _a, _b;
    pasting = false;
    for (var a in listeners) {
        (_b = (_a = listeners[a]).error) === null || _b === void 0 ? void 0 : _b.call(_a, mes, error);
    }
}
function startDragNDrop() {
    var getitem = function (items) {
        var foundimage = "";
        for (var a = 0; a < items.length; a++) {
            var item = items[a];
            var m = item.type.match(/^image\/(\w+)$/);
            if (m) {
                if (m[1] == "png") {
                    return item;
                }
                else {
                    foundimage = m[1];
                }
            }
        }
        if (foundimage) {
            error("notpng", "The image you uploaded is not a .png image. Other image type have compression noise and can't be used for image detection.");
        }
        return null;
    };
    window.addEventListener("dragover", function (e) {
        e.preventDefault();
    });
    window.addEventListener("drop", function (e) {
        if (!e.dataTransfer) {
            return;
        }
        var item = getitem(e.dataTransfer.items);
        e.preventDefault();
        if (!item) {
            return;
        }
        fromFile(item.getAsFile());
    });
}
exports.startDragNDrop = startDragNDrop;
function start() {
    if (started) {
        return;
    }
    started = true;
    //determine if we have a clipboard api
    //try{a=new Event("clipboard"); a="clipboardData" in a;}
    //catch(e){a=false;}
    var ischrome = !!navigator.userAgent.match(/Chrome/) && !navigator.userAgent.match(/Edge/);
    //old method breaks after chrome 41, revert to good old user agent sniffing
    //nvm, internet explorer (edge) decided that it wants to be chrome, however fails at delivering
    //turns out this one is interesting, edge is a hybrid between the paste api's
    var apipasted = function (e) {
        if (!e.clipboardData) {
            return;
        }
        for (var a = 0; a < e.clipboardData.items.length; a++) { //loop all data types
            if (e.clipboardData.items[a].type.indexOf("image") != -1) {
                var file = e.clipboardData.items[a].getAsFile();
                if (file) {
                    var img = new Image();
                    img.src = (window.URL || window.webkitURL).createObjectURL(file);
                    if (img.width > 0) {
                        pasted(img);
                    }
                    else {
                        img.onload = function () { pasted(img); };
                    }
                }
            }
        }
    };
    if (ischrome) {
        document.addEventListener("paste", apipasted);
    }
    else {
        var catcher = document.createElement("div");
        catcher.setAttribute("contenteditable", "");
        catcher.className = "forcehidden"; //retarded ie safety/bug, cant apply styles using js//TODO i don't even know what's going on
        catcher.onpaste = function (e) {
            if (e.clipboardData && e.clipboardData.items) {
                apipasted(e);
                return;
            }
            setTimeout(function () {
                var b = catcher.children[0];
                if (!b || b.tagName != "IMG") {
                    return;
                }
                var img = new Image();
                img.src = b.src;
                var a = img.src.match(/^data:([\w\/]+);/);
                if (img.width > 0) {
                    pasted(img);
                }
                else {
                    img.onload = function () { pasted(img); };
                }
                catcher.innerHTML = "";
            }, 1);
        };
        document.body.appendChild(catcher);
    }
    //detect if ctrl-v is pressed and focus catcher if needed
    document.addEventListener("keydown", function (e) {
        if (e.target.tagName == "INPUT") {
            return;
        }
        if (e.keyCode != "V".charCodeAt(0) || !e.ctrlKey) {
            return;
        }
        pasting = true;
        setTimeout(function () {
            if (pasting) {
                error("noimg", "You pressed Ctrl+V, but no image was pasted by your browser, make sure your clipboard contains an image, and not a link to an image.");
            }
        }, 1000);
        if (catcher) {
            catcher.focus();
        }
    });
}
exports.start = start;
function fileDialog() {
    var fileinput = document.createElement("input");
    fileinput.type = "file";
    fileinput.accept = "image/png";
    fileinput.onchange = function () { if (fileinput.files && fileinput.files[0]) {
        fromFile(fileinput.files[0]);
    } };
    fileinput.click();
    return fileinput;
}
exports.fileDialog = fileDialog;
function fromFile(file) {
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function () {
        var bytearray = new Uint8Array(reader.result);
        if (ImageDetect.isPngBuffer(bytearray)) {
            ImageDetect.clearPngColorspace(bytearray);
        }
        var blob = new Blob([bytearray], { type: "image/png" });
        var img = new Image();
        img.onerror = () => error("invalidfile", "The file you uploaded could not be opened as an image.");
        var bloburl = URL.createObjectURL(blob);
        img.src = bloburl;
        if (img.width > 0) {
            pasted(img);
            URL.revokeObjectURL(bloburl);
        }
        else {
            img.onload = function () { pasted(img); URL.revokeObjectURL(bloburl); };
        }
    };
    reader.readAsArrayBuffer(file);
}


/***/ }),

/***/ "./src/base/rect.ts":
/*!**************************!*\
  !*** ./src/base/rect.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


//util class for rectangle maths
//TODO shit this sucks can we remove it again?
//more of a shorthand to get {x,y,width,height} than a class
//kinda starting to like it again
//TODO remove rant
Object.defineProperty(exports, "__esModule", ({ value: true }));
;
/**
 * Simple rectangle class with some util functions
 */
class Rect {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    static fromArgs(...args) {
        if (typeof args[0] == "object") {
            return new Rect(args[0].x, args[0].y, args[0].width, args[0].height);
        }
        else if (typeof args[0] == "number" && args.length >= 4) {
            return new Rect(args[0], args[1], args[2], args[3]);
        }
        else {
            throw new Error("invalid rect args");
        }
    }
    /**
     * Resizes this Rect to include the full size of a given second rectangle
     */
    union(r2) {
        var x = Math.min(this.x, r2.x);
        var y = Math.min(this.y, r2.y);
        this.width = Math.max(this.x + this.width, r2.x + r2.width) - x;
        this.height = Math.max(this.y + this.height, r2.y + r2.height) - y;
        this.x = x;
        this.y = y;
        return this;
    }
    /**
     * Resizes this Rect to include a given point
     */
    includePoint(x, y) {
        this.union(new Rect(x, y, 0, 0));
    }
    /**
     * Grows the rectangle with the given dimensions
     */
    inflate(w, h) {
        this.x -= w;
        this.y -= h;
        this.width += 2 * w;
        this.height += 2 * h;
    }
    /**
     * Resizes this Rect to the area that overlaps a given Rect
     * width and height will be set to 0 if the intersection does not exist
     */
    intersect(r2) {
        if (this.x < r2.x) {
            this.width -= r2.x - this.x;
            this.x = r2.x;
        }
        if (this.y < r2.y) {
            this.height -= r2.y - this.y;
            this.y = r2.y;
        }
        this.width = Math.min(this.x + this.width, r2.x + r2.width) - this.x;
        this.height = Math.min(this.y + this.height, r2.y + r2.height) - this.y;
        if (this.width <= 0 || this.height <= 0) {
            this.width = 0;
            this.height = 0;
        }
    }
    /**
     * Returns wether this Rect has at least one pixel overlap with a given Rect
     */
    overlaps(r2) {
        return this.x < r2.x + r2.width && this.x + this.width > r2.x && this.y < r2.y + r2.height && this.y + this.height > r2.y;
    }
    /**
     * Returns wether a given Rect fits completely inside this Rect
     * @param r2
     */
    contains(r2) {
        return this.x <= r2.x && this.x + this.width >= r2.x + r2.width && this.y <= r2.y && this.y + this.height >= r2.y + r2.height;
    }
    /**
     * Returns wether a given point lies inside this Rect
     */
    containsPoint(x, y) {
        return this.x <= x && this.x + this.width > x && this.y <= y && this.y + this.height > y;
    }
}
exports["default"] = Rect;


/***/ }),

/***/ "./src/base/wrapper.ts":
/*!*****************************!*\
  !*** ./src/base/wrapper.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_56486__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.captureStream = exports.captureMultiAsync = exports.captureAsync = exports.ImageStreamReader = exports.once = exports.removeListener = exports.on = exports.addResizeElement = exports.getMousePosition = exports.hasAlt1Version = exports.resetEnvironment = exports.identifyApp = exports.unmixColor = exports.mixColor = exports.encodeImageString = exports.decodeImageString = exports.transferImageData = exports.captureHoldFullRs = exports.captureHoldScreen = exports.captureHold = exports.capture = exports.getdisplaybounds = exports.requireAlt1 = exports.openbrowser = exports.skinName = exports.hasAlt1 = exports.newestversion = exports.Alt1Error = exports.NoAlt1Error = void 0;
const rect_1 = __importDefault(__nested_webpack_require_56486__(/*! ./rect */ "./src/base/rect.ts"));
const imgref_1 = __nested_webpack_require_56486__(/*! ./imgref */ "./src/base/imgref.ts");
const imagedata_extensions_1 = __nested_webpack_require_56486__(/*! ./imagedata-extensions */ "./src/base/imagedata-extensions.ts");
__nested_webpack_require_56486__(/*! ./alt1api */ "./src/base/alt1api.ts");
/**
 * Thrown when a method is called that can not be used outside of Alt1
 */
class NoAlt1Error extends Error {
    constructor() {
        super();
        this.message = "This method can not be ran outside of Alt1";
    }
}
exports.NoAlt1Error = NoAlt1Error;
;
/**
 * Thrown when the Alt1 API returns an invalid result
 * Errors of a different type are throw when internal Alt1 errors occur
 */
class Alt1Error extends Error {
}
exports.Alt1Error = Alt1Error;
/**
 * The latest Alt1 version
 */
exports.newestversion = "1.5.5";
/**
 * Whether the Alt1 API is available
 */
exports.hasAlt1 = (typeof alt1 != "undefined");
/**
 * The name of the Alt1 interface skin. (Always "default" if running in a browser)
 */
exports.skinName = exports.hasAlt1 ? alt1.skinName : "default";
/**
 * Max number of bytes that can be sent by alt1 in one function
 * Not completely sure why this number is different than window.alt1.maxtranfer
 */
var maxtransfer = 4000000;
/**
 * Open a link in the default browser
 * @deprecated use window.open instead
 */
function openbrowser(url) {
    if (exports.hasAlt1) {
        alt1.openBrowser(url);
    }
    else {
        window.open(url, '_blank');
    }
}
exports.openbrowser = openbrowser;
/**
 * Throw if Alt1 API is not available
 */
function requireAlt1() {
    if (!exports.hasAlt1) {
        throw new NoAlt1Error();
    }
}
exports.requireAlt1 = requireAlt1;
/**
 * Returns an object with a rectangle that spans all screens
 */
function getdisplaybounds() {
    if (!exports.hasAlt1) {
        return false;
    }
    return new rect_1.default(alt1.screenX, alt1.screenY, alt1.screenWidth, alt1.screenHeight);
}
exports.getdisplaybounds = getdisplaybounds;
/**
 * gets an imagebuffer with pixel data about the requested region
 */
function capture(...args) {
    //TODO change null return on error into throw instead (x3)
    if (!exports.hasAlt1) {
        throw new NoAlt1Error();
    }
    var rect = rect_1.default.fromArgs(...args);
    if (alt1.capture) {
        return new imagedata_extensions_1.ImageData(alt1.capture(rect.x, rect.y, rect.width, rect.height), rect.width, rect.height);
    }
    var buf = new imagedata_extensions_1.ImageData(rect.width, rect.height);
    if (rect.width * rect.height * 4 <= maxtransfer) {
        var data = alt1.getRegion(rect.x, rect.y, rect.width, rect.height);
        if (!data) {
            return null;
        }
        decodeImageString(data, buf, 0, 0, rect.width, rect.height);
    }
    else {
        //split up the request to to exceed the single transfer limit (for now)
        var x1 = rect.x;
        var ref = alt1.bindRegion(rect.x, rect.y, rect.width, rect.height);
        if (ref <= 0) {
            return null;
        }
        while (x1 < rect.x + rect.width) {
            var x2 = Math.min(rect.x + rect.width, Math.floor(x1 + (maxtransfer / 4 / rect.height)));
            var data = alt1.bindGetRegion(ref, x1, rect.y, x2 - x1, rect.height);
            if (!data) {
                return null;
            }
            decodeImageString(data, buf, x1 - rect.x, 0, x2 - x1, rect.height);
            x1 = x2;
        }
    }
    return buf;
}
exports.capture = capture;
/**
 * Makes alt1 bind an area of the rs client in memory without sending it to the js client
 * returns an imgref object which can be used to get pixel data using the imgreftobuf function
 * currently only one bind can exist per app and the ref in (v) will always be 1
 */
function captureHold(x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    var r = alt1.bindRegion(x, y, w, h);
    if (r <= 0) {
        throw new Alt1Error("capturehold failed");
    }
    return new imgref_1.ImgRefBind(r, x, y, w, h);
}
exports.captureHold = captureHold;
/**
 * Same as captureHoldRegion, but captures the screen instead of the rs client. it also uses screen coordinates instead and can capture outside of the rs client
 */
function captureHoldScreen(x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    var r = alt1.bindScreenRegion(x, y, w, h);
    if (r <= 0) {
        return false;
    }
    return new imgref_1.ImgRefBind(r, x, y, w, h);
}
exports.captureHoldScreen = captureHoldScreen;
/**
 * bind the full rs window if the rs window can be detected by alt1, otherwise return the full screen
 */
function captureHoldFullRs() {
    return captureHold(0, 0, alt1.rsWidth, alt1.rsHeight);
}
exports.captureHoldFullRs = captureHoldFullRs;
/**
 * returns a subregion from a bound image
 * used internally in imgreftobuf if imgref is a bound image
 * @deprecated This should be handled internall by the imgrefbind.toData method
 */
function transferImageData(handle, x, y, w, h) {
    x = Math.round(x);
    y = Math.round(y);
    w = Math.round(w);
    h = Math.round(h);
    requireAlt1();
    if (alt1.bindGetRegionBuffer) {
        return new imagedata_extensions_1.ImageData(alt1.bindGetRegionBuffer(handle, x, y, w, h), w, h);
    }
    var r = new imagedata_extensions_1.ImageData(w, h);
    var x1 = x;
    while (true) { //split up the request to to exceed the single transfer limit (for now)
        var x2 = Math.min(x + w, Math.floor(x1 + (maxtransfer / 4 / h)));
        var a = alt1.bindGetRegion(handle, x1, y, x2 - x1, h);
        if (!a) {
            throw new Alt1Error();
        }
        decodeImageString(a, r, x1 - x, 0, x2 - x1, h);
        x1 = x2;
        if (x1 == x + w) {
            break;
        }
        ;
    }
    return r;
}
exports.transferImageData = transferImageData;
/**
 * decodes a returned string from alt1 to an imagebuffer
 */
function decodeImageString(imagestring, target, x, y, w, h) {
    var bin = atob(imagestring);
    var bytes = target.data;
    w |= 0;
    h |= 0;
    var offset = 4 * x + 4 * y * target.width;
    var target_width = target.width | 0;
    for (var a = 0; a < w; a++) {
        for (var b = 0; b < h; b++) {
            var i1 = (offset + (a * 4 | 0) + (b * target_width * 4 | 0)) | 0;
            var i2 = ((a * 4 | 0) + (b * 4 * w | 0)) | 0;
            bytes[i1 + 0 | 0] = bin.charCodeAt(i2 + 2 | 0); //fix weird red/blue swap in c#
            bytes[i1 + 1 | 0] = bin.charCodeAt(i2 + 1 | 0);
            bytes[i1 + 2 | 0] = bin.charCodeAt(i2 + 0 | 0);
            bytes[i1 + 3 | 0] = bin.charCodeAt(i2 + 3 | 0);
        }
    }
    return target;
}
exports.decodeImageString = decodeImageString;
/**
 * encodes an imagebuffer to a string
 */
function encodeImageString(buf, sx = 0, sy = 0, sw = buf.width, sh = buf.height) {
    var raw = "";
    for (var y = sy; y < sy + sh; y++) {
        for (var x = sx; x < sx + sw; x++) {
            var i = 4 * x + 4 * buf.width * y | 0;
            raw += String.fromCharCode(buf.data[i + 2 | 0]);
            raw += String.fromCharCode(buf.data[i + 1 | 0]);
            raw += String.fromCharCode(buf.data[i + 0 | 0]);
            raw += String.fromCharCode(buf.data[i + 3 | 0]);
        }
    }
    return btoa(raw);
}
exports.encodeImageString = encodeImageString;
/**
 * mixes the given color into a single int. This format is used by alt1
 */
function mixColor(r, g, b, a = 255) {
    return (b << 0) + (g << 8) + (r << 16) + (a << 24);
}
exports.mixColor = mixColor;
function unmixColor(col) {
    var r = (col >> 16) & 0xff;
    var g = (col >> 8) & 0xff;
    var b = (col >> 0) & 0xff;
    return [r, g, b];
}
exports.unmixColor = unmixColor;
function identifyApp(url) {
    if (exports.hasAlt1) {
        alt1.identifyAppUrl(url);
    }
}
exports.identifyApp = identifyApp;
function resetEnvironment() {
    exports.hasAlt1 = (typeof alt1 != "undefined");
    exports.skinName = exports.hasAlt1 ? alt1.skinName : "default";
}
exports.resetEnvironment = resetEnvironment;
function convertAlt1Version(str) {
    var a = str.match(/^(\d+)\.(\d+)\.(\d+)$/);
    if (!a) {
        throw new RangeError("Invalid version string");
    }
    return (+a[1]) * 1000 * 1000 + (+a[2]) * 1000 + (+a[3]) * 1;
}
var cachedVersionInt = -1;
/**
 * checks if alt1 is running and at least the given version. versionstr should be a string with the version eg: 1.3.2
 * @param versionstr
 */
function hasAlt1Version(versionstr) {
    if (!exports.hasAlt1) {
        return false;
    }
    if (cachedVersionInt == -1) {
        cachedVersionInt = alt1.versionint;
    }
    return cachedVersionInt >= convertAlt1Version(versionstr);
}
exports.hasAlt1Version = hasAlt1Version;
/**
 * Gets the current cursor position in the game, returns null if the rs window is not active (alt1.rsActive)
 */
function getMousePosition() {
    var pos = alt1.mousePosition;
    if (pos == -1) {
        return null;
    }
    return { x: pos >>> 16, y: pos & 0xFFFF };
}
exports.getMousePosition = getMousePosition;
/**
 * Registers a given HTML element as a frame border, when this element is dragged by the user the Alt1 frame will resize accordingly
 * Use the direction arguements to make a given direction stick to the mouse. eg. Only set left to true to make the element behave as the left border
 * Or set all to true to move the whole window. Not all combinations are permitted
 */
function addResizeElement(el, left, top, right, bot) {
    if (!exports.hasAlt1 || !alt1.userResize) {
        return;
    }
    el.addEventListener("mousedown", function (e) {
        alt1.userResize(left, top, right, bot);
        e.preventDefault();
    });
}
exports.addResizeElement = addResizeElement;
/**
 * Add an event listener
 */
function on(type, listener) {
    if (!exports.hasAlt1) {
        return;
    }
    if (!alt1.events) {
        alt1.events = {};
    }
    if (!alt1.events[type]) {
        alt1.events[type] = [];
    }
    alt1.events[type].push(listener);
}
exports.on = on;
/**
 * Removes an event listener
 */
function removeListener(type, listener) {
    var elist = exports.hasAlt1 && alt1.events && alt1.events[type];
    if (!elist) {
        return;
    }
    var i = elist.indexOf(listener);
    if (i == -1) {
        return;
    }
    elist.splice(i, 1);
}
exports.removeListener = removeListener;
/**
 * Listens for the event to fire once and then stops listening
 * @param event
 * @param cb
 */
function once(type, listener) {
    var fn = (e) => {
        removeListener(type, fn);
        listener(e);
    };
    on(type, fn);
}
exports.once = once;
;
/**
 * Used to read a set of images from a binary stream returned by the Alt1 API
 */
class ImageStreamReader {
    constructor(reader, ...args) {
        this.framebuffer = null;
        this.pos = 0;
        this.reading = false;
        this.closed = false;
        //paused state
        this.pausedindex = -1;
        this.pausedbuffer = null;
        this.streamreader = reader;
        if (args[0] instanceof imagedata_extensions_1.ImageData) {
            this.setFrameBuffer(args[0]);
        }
        else if (typeof args[0] == "number") {
            this.setFrameBuffer(new imagedata_extensions_1.ImageData(args[0], args[1]));
        }
    }
    /**
     *
     */
    setFrameBuffer(buffer) {
        if (this.reading) {
            throw new Error("can't change framebuffer while reading");
        }
        this.framebuffer = buffer;
    }
    /**
     * Closes the underlying stream and ends reading
     */
    close() {
        this.streamreader.cancel();
    }
    /**
     * Reads a single image from the stream
     */
    async nextImage() {
        if (this.reading) {
            throw new Error("already reading from this stream");
        }
        if (!this.framebuffer) {
            throw new Error("framebuffer not set");
        }
        this.reading = true;
        var synctime = -Date.now();
        var starttime = Date.now();
        var r = false;
        while (!r) {
            if (this.pausedindex != -1 && this.pausedbuffer) {
                r = this.readChunk(this.pausedindex, this.framebuffer.data, this.pausedbuffer);
            }
            else {
                synctime += Date.now();
                var res = await this.streamreader.read();
                synctime -= Date.now();
                if (res.done) {
                    throw new Error("Stream closed while reading");
                }
                var data = res.value;
                r = this.readChunk(0, this.framebuffer.data, data);
            }
        }
        synctime += Date.now();
        //console.log("Decoded async image, " + this.framebuffer.width + "x" + this.framebuffer.height + " time: " + (Date.now() - starttime) + "ms (" + synctime + "ms main thread)");
        this.reading = false;
        return this.framebuffer;
    }
    readChunk(i, framedata, buffer) {
        //very hot code, explicit int32 casting with |0 speeds it up by ~ x2
        i = i | 0;
        var framesize = framedata.length | 0;
        var pos = this.pos;
        var datalen = buffer.length | 0;
        //var data32 = new Float64Array(buffer.buffer);
        //var framedata32 = new Float64Array(framedata.buffer);
        //fix possible buffer misalignment
        //align to 16 for extra loop unrolling
        while (i < datalen) {
            //slow loop, fix alignment and other issues
            while (i < datalen && pos < framesize && (pos % 16 != 0 || !((i + 16 | 0) <= datalen && (pos + 16 | 0) <= framesize))) {
                var rel = pos;
                if (pos % 4 == 0) {
                    rel = rel + 2 | 0;
                }
                if (pos % 4 == 2) {
                    rel = rel - 2 | 0;
                }
                framedata[rel | 0] = buffer[i | 0];
                i = i + 1 | 0;
                pos = pos + 1 | 0;
            }
            //fast unrolled loop for large chunks i wish js had some sort of memcpy
            if (pos % 16 == 0) {
                while ((i + 16 | 0) <= datalen && (pos + 16 | 0) <= framesize) {
                    framedata[pos + 0 | 0] = buffer[i + 2 | 0];
                    framedata[pos + 1 | 0] = buffer[i + 1 | 0];
                    framedata[pos + 2 | 0] = buffer[i + 0 | 0];
                    framedata[pos + 3 | 0] = buffer[i + 3 | 0];
                    framedata[pos + 4 | 0] = buffer[i + 6 | 0];
                    framedata[pos + 5 | 0] = buffer[i + 5 | 0];
                    framedata[pos + 6 | 0] = buffer[i + 4 | 0];
                    framedata[pos + 7 | 0] = buffer[i + 7 | 0];
                    framedata[pos + 8 | 0] = buffer[i + 10 | 0];
                    framedata[pos + 9 | 0] = buffer[i + 9 | 0];
                    framedata[pos + 10 | 0] = buffer[i + 8 | 0];
                    framedata[pos + 11 | 0] = buffer[i + 11 | 0];
                    framedata[pos + 12 | 0] = buffer[i + 14 | 0];
                    framedata[pos + 13 | 0] = buffer[i + 13 | 0];
                    framedata[pos + 14 | 0] = buffer[i + 12 | 0];
                    framedata[pos + 15 | 0] = buffer[i + 15 | 0];
                    //could speed it up another x2 but wouldn't be able to swap r/b swap and possible alignment issues
                    //framedata32[pos / 8 + 0 | 0] = data32[i / 8 + 0 | 0];
                    //framedata32[pos / 8 + 1 | 0] = data32[i / 8 + 1 | 0];
                    //framedata32[pos / 4 + 2 | 0] = data32[i / 4 + 2 | 0];
                    //framedata32[pos / 4 + 3 | 0] = data32[i / 4 + 3 | 0];
                    pos = pos + 16 | 0;
                    i = i + 16 | 0;
                }
            }
            if (pos >= framesize) {
                this.pausedbuffer = null;
                this.pausedindex = -1;
                this.pos = 0;
                if (i != buffer.length - 1) {
                    this.pausedbuffer = buffer;
                    this.pausedindex = i;
                }
                return true;
            }
        }
        this.pos = pos;
        this.pausedbuffer = null;
        this.pausedindex = -1;
        return false;
    }
}
exports.ImageStreamReader = ImageStreamReader;
/**
 * Asynchronously captures a section of the game screen
 */
async function captureAsync(...args) {
    requireAlt1();
    var rect = rect_1.default.fromArgs(...args);
    if (alt1.captureAsync) {
        let img = await alt1.captureAsync(rect.x, rect.y, rect.width, rect.height);
        return new imagedata_extensions_1.ImageData(img, rect.width, rect.height);
    }
    if (!hasAlt1Version("1.4.6")) {
        return capture(rect.x, rect.y, rect.width, rect.height);
    }
    var url = "https://alt1api/pixel/getregion/" + encodeURIComponent(JSON.stringify(Object.assign(Object.assign({}, rect), { format: "raw", quality: 1 })));
    var res = await fetch(url);
    var imgreader = new ImageStreamReader(res.body.getReader(), rect.width, rect.height);
    return imgreader.nextImage();
}
exports.captureAsync = captureAsync;
/**
 * Asynchronously captures multple area's. This method captures the images in the same render frame if possible
 * @param areas
 */
async function captureMultiAsync(areas) {
    requireAlt1();
    var r = {};
    if (alt1.captureMultiAsync) {
        let bufs = await alt1.captureMultiAsync(areas);
        for (let a in areas) {
            if (!bufs[a]) {
                r[a] = null;
            }
            r[a] = new imagedata_extensions_1.ImageData(bufs[a], areas[a].width, areas[a].height);
        }
        return r;
    }
    var capts = [];
    var captids = [];
    for (var id in areas) {
        if (areas[id]) {
            capts.push(areas[id]);
            captids.push(id);
        }
        else {
            r[id] = null;
        }
    }
    if (capts.length == 0) {
        return r;
    }
    if (!hasAlt1Version("1.5.1")) {
        var proms = [];
        for (var a = 0; a < capts.length; a++) {
            proms.push(captureAsync(capts[a]));
        }
        var results = await Promise.all(proms);
        for (var a = 0; a < capts.length; a++) {
            r[captids[a]] = results[a];
        }
    }
    else {
        var res = await fetch("https://alt1api/pixel/getregionmulti/" + encodeURIComponent(JSON.stringify({ areas: capts, format: "raw", quality: 1 })));
        var imgreader = new ImageStreamReader(res.body.getReader());
        for (var a = 0; a < capts.length; a++) {
            var capt = capts[a];
            imgreader.setFrameBuffer(new imagedata_extensions_1.ImageData(capt.width, capt.height));
            r[captids[a]] = await imgreader.nextImage();
        }
    }
    return r;
}
exports.captureMultiAsync = captureMultiAsync;
/**
 * Starts capturing a realtime stream of the game. Make sure you keep reading the stream and close it when you're done or Alt1 WILL crash
 * @param framecb Called whenever a new frame is decoded
 * @param errorcb Called whenever an error occurs, the error is rethrown if not defined
 * @param fps Maximum fps of the stream
 */
function captureStream(x, y, width, height, fps, framecb, errorcb) {
    requireAlt1();
    if (!hasAlt1Version("1.4.6")) {
        throw new Alt1Error("This function is not supported in this version of Alt1");
    }
    var url = "https://alt1api/pixel/streamregion/" + encodeURIComponent(JSON.stringify({ x, y, width, height, fps, format: "raw" }));
    var res = fetch(url).then(async (res) => {
        var reader = new ImageStreamReader(res.body.getReader(), width, height);
        try {
            while (!reader.closed && !state.closed) {
                var img = await reader.nextImage();
                if (!state.closed) {
                    framecb(img);
                    state.framenr++;
                }
            }
        }
        catch (e) {
            if (!state.closed) {
                reader.close();
                if (errorcb) {
                    errorcb(e);
                }
                else {
                    throw e;
                }
            }
        }
        if (!reader.closed && state.closed) {
            reader.close();
        }
    });
    var state = {
        x, y, width, height,
        framenr: 0,
        close: () => { state.closed = true; },
        closed: false,
    };
    return state;
}
exports.captureStream = captureStream;


/***/ }),

/***/ "canvas":
/*!*************************!*\
  !*** external "canvas" ***!
  \*************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_canvas__ === 'undefined') { var e = new Error("Cannot find module 'canvas'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_canvas__;

/***/ }),

/***/ "electron/common":
/*!**********************************!*\
  !*** external "electron/common" ***!
  \**********************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_electron_common__ === 'undefined') { var e = new Error("Cannot find module 'electron/common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_electron_common__;

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/***/ ((module) => {

if(typeof __WEBPACK_EXTERNAL_MODULE_sharp__ === 'undefined') { var e = new Error("Cannot find module 'sharp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_sharp__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_79245__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_79245__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__nested_webpack_require_79245__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_79245__("./src/base/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "../node_modules/alt1/dist/fonts/aa_9px_mono_allcaps.js":
/*!**************************************************************!*\
  !*** ../node_modules/alt1/dist/fonts/aa_9px_mono_allcaps.js ***!
  \**************************************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(globalThis, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fonts/aa_9px_mono_allcaps.fontmeta.json":
/*!*****************************************************!*\
  !*** ./src/fonts/aa_9px_mono_allcaps.fontmeta.json ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"chars":[{"width":3,"bonus":55,"chr":"!","pixels":[0,4,221,0,5,170,0,6,153,0,12,153,1,3,221,1,4,255,1,5,221,1,6,204,1,7,170,1,8,153,1,12,204],"secondary":false},{"width":6,"bonus":30,"chr":"\\"","pixels":[1,2,221,1,3,255,1,4,170,3,2,221,3,3,255,3,4,170],"secondary":true},{"width":9,"bonus":160,"chr":"#","pixels":[1,5,221,1,8,255,2,5,255,2,7,153,2,8,255,2,9,204,2,10,238,2,11,238,3,2,187,3,3,238,3,4,255,3,5,255,3,6,170,3,7,170,3,8,255,4,5,255,4,8,255,5,4,153,5,5,255,5,6,170,5,7,204,5,8,255,5,9,238,5,10,204,5,11,170,6,2,238,6,3,204,6,4,204,6,5,255,6,8,255,7,5,255,7,8,153],"secondary":false},{"width":7,"bonus":145,"chr":"$","pixels":[1,3,204,1,4,255,1,5,187,1,10,153,1,11,204,2,2,187,2,5,221,2,6,255,2,10,170,2,11,255,2,12,221,3,1,153,3,2,238,3,3,221,3,4,238,3,5,204,3,6,238,3,7,255,3,8,153,3,11,221,4,2,221,4,7,255,4,8,221,4,10,187,5,2,170,5,3,187,5,8,221,5,9,255,5,10,153],"secondary":false},{"width":12,"bonus":175,"chr":"%","pixels":[1,4,255,1,5,255,1,6,255,2,3,153,2,7,204,3,3,170,3,7,204,3,12,187,4,3,187,4,4,255,4,5,255,4,6,255,4,10,238,4,11,204,5,7,170,5,8,238,5,9,153,6,5,204,6,6,221,6,9,187,6,10,255,6,11,204,7,3,238,7,4,170,7,8,187,7,11,153,7,12,204,8,8,187,8,12,187,9,8,204,9,9,153,9,12,187,10,9,187,10,10,255,10,11,187],"secondary":false},{"width":12,"bonus":175,"chr":"&","pixels":[0,9,221,0,10,255,0,11,153,1,5,153,1,8,238,1,9,187,1,10,238,1,11,255,2,4,255,2,5,255,2,6,255,2,7,255,2,11,170,2,12,221,3,3,204,3,7,255,3,8,221,3,12,255,4,3,221,4,8,238,4,9,221,4,12,238,5,3,238,5,9,238,5,10,187,5,12,170,6,4,153,6,10,255,6,11,238,7,10,221,7,11,255,8,8,238,8,9,170,8,12,238,9,12,221],"secondary":false},{"width":3,"bonus":15,"chr":"\'","pixels":[0,2,153,1,2,187,1,3,204],"secondary":true},{"width":5,"bonus":60,"chr":"(","pixels":[0,6,204,0,7,255,0,8,238,0,9,187,1,4,238,1,5,204,1,6,153,1,9,170,1,10,238,1,11,204,2,3,153,2,12,187],"secondary":false},{"width":5,"bonus":50,"chr":")","pixels":[1,3,204,1,4,153,1,11,221,2,4,153,2,5,255,2,6,255,2,7,255,2,8,255,2,9,255,2,10,204],"secondary":false},{"width":5,"bonus":40,"chr":"*","pixels":[0,3,170,0,5,153,1,2,187,1,3,187,1,4,221,2,4,170,2,5,221,3,3,153],"secondary":true},{"width":8,"bonus":65,"chr":"+","pixels":[0,8,153,1,8,255,2,8,255,3,5,153,3,6,255,3,7,255,3,8,255,3,9,255,3,10,255,3,11,153,4,8,255,5,8,255,6,8,187],"secondary":false},{"width":3,"bonus":10,"chr":",","pixels":[1,10,187,1,11,221],"secondary":true},{"width":6,"bonus":20,"chr":"-","pixels":[0,9,204,1,9,255,2,9,255,3,9,204],"secondary":true},{"width":3,"bonus":10,"chr":".","pixels":[1,11,170,1,12,204],"secondary":true},{"width":8,"bonus":50,"chr":"/","pixels":[0,11,187,1,10,238,2,8,221,2,9,153,3,6,170,3,7,204,4,5,238,5,3,221,5,4,170,6,2,153],"secondary":false},{"width":8,"bonus":145,"chr":"0","pixels":[0,7,153,0,8,187,0,9,170,1,5,221,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,238,2,4,187,2,11,170,2,12,204,3,4,187,3,12,204,4,4,221,4,12,187,5,5,255,5,6,255,5,7,204,5,8,187,5,9,187,5,10,238,5,11,238,6,6,187,6,7,238,6,8,255,6,9,221,6,10,170],"secondary":false},{"width":7,"bonus":95,"chr":"1","pixels":[1,5,153,2,5,255,2,6,187,2,7,187,2,8,187,2,9,187,2,10,187,2,11,187,2,12,238,3,4,204,3,5,255,3,6,255,3,7,255,3,8,255,3,9,255,3,10,255,3,11,255,3,12,255,4,12,153],"secondary":false},{"width":9,"bonus":115,"chr":"2","pixels":[1,4,170,1,5,204,1,12,255,2,4,204,2,11,221,2,12,255,3,4,204,3,10,204,3,12,255,4,4,221,4,9,238,4,12,255,5,4,153,5,5,255,5,6,255,5,7,255,5,8,255,5,12,255,6,5,153,6,6,221,6,7,170,6,11,187,6,12,204],"secondary":false},{"width":7,"bonus":105,"chr":"3","pixels":[0,11,187,0,12,187,1,4,204,1,12,238,2,4,221,2,12,221,3,4,238,3,7,187,3,8,221,3,12,204,4,4,170,4,5,255,4,6,255,4,7,153,4,8,238,4,9,255,4,10,221,4,11,255,5,5,170,5,9,221,5,10,238],"secondary":false},{"width":9,"bonus":120,"chr":"4","pixels":[1,9,204,1,10,255,2,8,204,2,10,255,3,7,187,3,10,255,4,5,170,4,6,238,4,7,153,4,8,153,4,9,170,4,10,255,4,11,153,4,12,221,5,4,204,5,5,255,5,6,255,5,7,255,5,8,255,5,9,255,5,10,255,5,11,255,5,12,255,6,10,255],"secondary":false},{"width":7,"bonus":110,"chr":"5","pixels":[0,11,170,0,12,221,1,4,255,1,5,204,1,6,221,1,7,187,1,12,238,2,4,255,2,7,255,2,12,204,3,4,255,3,7,255,3,8,204,3,12,170,4,4,255,4,8,255,4,9,255,4,10,255,4,11,238,5,4,153,5,9,187,5,10,153],"secondary":false},{"width":7,"bonus":105,"chr":"6","pixels":[0,8,187,0,9,255,0,10,238,1,6,170,1,7,255,1,8,221,1,9,187,1,10,204,1,11,255,2,5,187,2,6,153,2,12,221,3,8,221,3,12,204,4,8,204,4,9,238,4,10,187,4,11,221,5,9,221,5,10,255,5,11,153],"secondary":false},{"width":7,"bonus":90,"chr":"7","pixels":[0,4,204,0,5,187,1,4,255,1,12,170,2,4,255,2,10,221,2,11,255,2,12,187,3,4,255,3,8,221,3,9,238,3,10,153,4,4,255,4,5,153,4,6,204,4,7,187,5,4,255,5,5,187],"secondary":false},{"width":8,"bonus":170,"chr":"8","pixels":[0,10,153,1,5,204,1,6,238,1,9,238,1,10,255,1,11,255,2,4,170,2,5,153,2,6,170,2,7,255,2,8,204,2,12,221,3,4,187,3,7,204,3,8,187,3,12,204,4,4,204,4,7,153,4,8,255,4,12,204,5,4,204,5,5,187,5,6,187,5,7,187,5,8,187,5,9,255,5,10,170,5,11,204,5,12,153,6,5,238,6,6,204,6,9,187,6,10,255,6,11,170],"secondary":false},{"width":7,"bonus":105,"chr":"9","pixels":[0,6,238,0,7,238,0,8,153,1,5,204,1,6,153,1,7,187,1,8,255,2,4,204,2,9,187,3,4,221,3,11,187,4,5,255,4,6,238,4,7,187,4,8,187,4,9,238,4,10,255,5,6,221,5,7,255,5,8,238,5,9,170],"secondary":false},{"width":3,"bonus":20,"chr":":","pixels":[0,5,170,0,6,204,0,10,204,0,11,170],"secondary":true},{"width":3,"bonus":25,"chr":";","pixels":[0,4,170,0,5,204,0,9,221,0,11,153,1,9,170],"secondary":true},{"width":8,"bonus":55,"chr":"<","pixels":[1,8,255,1,9,187,2,8,170,2,9,238,3,7,238,4,7,187,4,10,238,5,6,204,5,10,187,6,6,221,6,11,204],"secondary":false},{"width":8,"bonus":60,"chr":"=","pixels":[1,7,255,1,9,255,2,7,255,2,9,255,3,7,255,3,9,255,4,7,255,4,9,255,5,7,255,5,9,255,6,7,255,6,9,255],"secondary":false},{"width":8,"bonus":55,"chr":">","pixels":[1,6,238,1,11,170,2,6,170,2,10,221,3,7,238,3,10,204,4,7,204,4,9,187,5,8,221,5,9,238,6,8,221],"secondary":false},{"width":7,"bonus":80,"chr":"?","pixels":[1,3,170,1,4,153,2,3,221,2,9,238,2,12,153,3,3,238,3,7,170,3,8,221,3,12,204,4,3,204,4,4,238,4,5,221,4,6,255,4,7,187,5,4,221,5,5,238],"secondary":false},{"width":11,"bonus":185,"chr":"@","pixels":[0,7,187,0,8,238,0,9,255,0,10,187,1,5,153,1,6,170,1,11,238,2,12,170,3,7,221,3,8,255,3,9,255,3,10,238,3,12,204,4,3,153,4,6,170,4,12,187,5,3,153,5,5,170,5,8,170,5,9,204,5,12,170,6,3,170,6,5,187,6,6,238,6,7,255,6,8,255,6,9,255,6,10,238,6,12,153,7,3,170,7,10,204,8,4,187,8,9,170,9,5,204,9,6,221,9,7,221,9,8,170],"secondary":false},{"width":10,"bonus":125,"chr":"A","pixels":[1,12,238,2,9,187,2,10,238,2,11,170,2,12,187,3,7,221,3,8,204,3,9,238,4,5,238,4,6,238,4,9,221,5,5,187,5,6,255,5,7,255,5,8,187,5,9,238,6,7,153,6,8,255,6,9,255,6,10,238,6,11,153,7,10,221,7,11,255,7,12,255,8,12,221],"secondary":false},{"width":8,"bonus":160,"chr":"B","pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,4,238,2,5,187,2,6,187,2,7,187,2,8,238,2,9,187,2,10,187,2,11,187,2,12,255,3,4,204,3,8,204,3,12,204,4,4,221,4,5,187,4,7,187,4,8,255,4,12,204,5,5,238,5,6,238,5,9,255,5,10,255,5,11,255,6,10,187],"secondary":false},{"width":9,"bonus":120,"chr":"C","pixels":[0,7,221,0,8,255,0,9,221,1,5,221,1,6,255,1,7,238,1,8,221,1,9,255,1,10,255,1,11,204,2,5,187,2,11,255,3,4,204,3,12,204,4,4,221,4,12,238,5,4,221,5,12,221,6,4,221,6,12,238,7,4,187,7,5,204,7,11,187,7,12,170],"secondary":false},{"width":11,"bonus":200,"chr":"D","pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,4,255,2,5,187,2,6,187,2,7,187,2,8,187,2,9,187,2,10,187,2,11,204,2,12,255,3,4,221,3,12,238,4,4,238,4,12,221,5,4,238,5,12,221,6,4,204,6,5,153,6,12,187,7,5,255,7,6,153,7,11,238,8,5,204,8,6,255,8,7,255,8,8,255,8,9,255,8,10,255,8,11,170,9,7,204,9,8,221,9,9,187],"secondary":false},{"width":7,"bonus":135,"chr":"E","pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,4,255,2,5,187,2,6,187,2,7,187,2,8,255,2,9,187,2,10,187,2,11,204,2,12,255,3,4,221,3,8,221,3,12,238,4,4,238,4,8,221,4,12,221,5,4,187,5,8,153,5,12,238],"secondary":false},{"width":7,"bonus":115,"chr":"F","pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,4,255,2,5,187,2,6,187,2,7,187,2,8,255,2,9,187,2,10,187,2,11,187,2,12,238,3,4,221,3,8,221,4,4,238,4,8,221,5,4,221],"secondary":false},{"width":10,"bonus":150,"chr":"G","pixels":[0,7,204,0,8,255,0,9,255,0,10,187,1,5,187,1,6,255,1,7,238,1,8,221,1,9,238,1,10,255,1,11,221,2,5,204,2,11,238,3,4,204,3,12,204,4,4,221,4,12,238,5,4,238,5,12,221,6,4,221,6,9,238,6,10,187,6,11,187,6,12,221,7,4,170,7,5,221,7,9,255,7,10,255,7,11,255,7,12,153],"secondary":false},{"width":11,"bonus":200,"chr":"H","pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,4,238,2,5,187,2,6,187,2,7,187,2,8,255,2,9,187,2,10,187,2,11,187,2,12,238,3,8,221,4,8,221,5,8,221,6,8,221,7,4,255,7,5,255,7,6,255,7,7,255,7,8,255,7,9,255,7,10,255,7,11,255,7,12,255,8,4,238,8,5,187,8,6,187,8,7,187,8,8,187,8,9,187,8,10,187,8,11,187,8,12,238],"secondary":false},{"width":5,"bonus":90,"chr":"I","pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,4,238,2,5,187,2,6,187,2,7,187,2,8,187,2,9,187,2,10,187,2,11,187,2,12,238],"secondary":false},{"width":6,"bonus":100,"chr":"J","pixels":[2,4,255,2,5,255,2,6,255,2,7,255,2,8,255,2,9,255,2,10,255,2,11,255,2,12,255,2,13,255,2,14,187,3,4,238,3,5,187,3,6,187,3,7,187,3,8,187,3,9,187,3,10,187,3,11,187,3,12,187],"secondary":false},{"width":10,"bonus":170,"chr":"K","pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,4,238,2,5,187,2,6,187,2,7,187,2,8,255,2,9,204,2,10,187,2,11,187,2,12,238,3,7,170,3,8,255,3,9,221,4,6,204,4,9,238,4,10,238,5,4,153,5,5,238,5,10,238,5,11,238,6,4,255,6,11,238,6,12,187,7,4,153,7,12,255,8,12,153],"secondary":false},{"width":8,"bonus":105,"chr":"L","pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,4,238,2,5,187,2,6,187,2,7,187,2,8,187,2,9,187,2,10,187,2,11,204,2,12,255,3,12,238,4,12,221,5,12,255],"secondary":false},{"width":13,"bonus":190,"chr":"M","pixels":[1,9,170,1,10,204,1,11,238,1,12,255,2,4,187,2,5,255,2,6,255,2,7,238,2,8,153,2,12,153,3,6,238,3,7,255,3,8,238,4,8,238,4,9,255,4,10,238,5,10,238,5,11,255,5,12,187,6,9,153,6,10,238,7,7,153,7,8,238,8,5,170,8,6,255,8,7,238,9,4,153,9,5,204,9,6,255,9,7,255,9,8,255,9,9,255,9,10,255,9,11,255,9,12,238,10,10,153,10,11,187,10,12,255],"secondary":false},{"width":11,"bonus":170,"chr":"N","pixels":[0,12,170,1,4,187,1,5,255,1,6,255,1,7,238,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,5,204,2,6,255,2,12,153,3,6,221,3,7,255,4,7,238,4,8,255,5,8,238,5,9,255,6,9,238,6,10,238,7,4,153,7,10,255,7,11,238,8,4,255,8,5,255,8,6,255,8,7,255,8,8,255,8,9,255,8,10,255,8,11,255,8,12,204,9,4,153],"secondary":false},{"width":10,"bonus":160,"chr":"O","pixels":[0,7,221,0,8,255,0,9,221,1,5,204,1,6,255,1,7,221,1,8,221,1,9,255,1,10,255,1,11,221,2,5,170,2,11,238,3,4,221,3,12,221,4,4,221,4,12,221,5,4,238,5,12,204,6,4,153,6,5,238,6,11,170,7,5,238,7,6,255,7,7,255,7,8,221,7,9,238,7,10,255,7,11,187,8,6,153,8,7,238,8,8,255,8,9,204],"secondary":false},{"width":8,"bonus":130,"chr":"P","pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,4,238,2,5,187,2,6,187,2,7,187,2,8,187,2,9,187,2,10,187,2,11,187,2,12,238,3,4,204,4,4,238,5,4,170,5,5,255,5,6,255,5,7,255,5,8,204,6,6,187],"secondary":false},{"width":10,"bonus":200,"chr":"Q","pixels":[0,7,221,0,8,255,0,9,221,1,5,187,1,6,255,1,7,238,1,8,221,1,9,255,1,10,255,1,11,221,2,5,170,2,11,238,2,12,153,3,4,221,3,12,221,4,4,221,4,12,238,5,4,238,5,12,204,6,4,153,6,5,238,6,11,153,6,12,238,7,5,221,7,6,255,7,7,255,7,8,221,7,9,238,7,10,255,7,11,170,7,12,204,7,13,221,8,6,153,8,7,238,8,8,255,8,9,221,8,13,255,8,14,170,9,13,170,9,14,255],"secondary":false},{"width":10,"bonus":175,"chr":"R","pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,4,255,2,5,187,2,6,187,2,7,187,2,8,187,2,9,255,2,10,187,2,11,187,2,12,238,3,4,221,3,9,221,4,4,238,4,9,255,4,10,170,5,4,153,5,5,255,5,6,255,5,7,255,5,8,187,5,10,255,5,11,187,6,6,187,6,11,238,6,12,170,7,12,255,8,12,153],"secondary":false},{"width":7,"bonus":95,"chr":"S","pixels":[0,11,221,0,12,187,1,5,255,1,6,255,1,7,255,1,12,238,2,4,187,2,7,255,2,8,238,2,12,221,3,4,187,3,8,255,3,9,187,3,12,221,4,4,221,4,8,187,4,9,255,4,10,255,4,11,255],"secondary":false},{"width":10,"bonus":125,"chr":"T","pixels":[0,4,187,1,4,221,2,4,221,3,4,255,3,5,187,3,6,187,3,7,187,3,8,187,3,9,187,3,10,187,3,11,187,3,12,238,4,4,255,4,5,255,4,6,255,4,7,255,4,8,255,4,9,255,4,10,255,4,11,255,4,12,255,5,4,221,5,12,153,6,4,221,7,4,255],"secondary":false},{"width":11,"bonus":145,"chr":"U","pixels":[1,4,238,1,5,187,1,6,187,1,7,187,1,8,187,1,9,187,1,10,153,2,4,255,2,5,255,2,6,255,2,7,255,2,8,255,2,9,255,2,10,255,2,11,255,3,11,170,3,12,204,4,12,238,5,12,221,6,12,204,7,4,187,7,11,221,8,4,255,8,5,255,8,6,255,8,7,255,8,8,255,8,9,238,8,10,204],"secondary":false},{"width":11,"bonus":120,"chr":"V","pixels":[1,4,204,2,4,255,2,5,255,2,6,204,3,4,187,3,5,170,3,6,255,3,7,255,3,8,238,3,9,153,4,8,204,4,9,255,4,10,255,4,11,187,5,10,238,5,11,255,6,8,204,6,9,221,7,4,170,7,5,153,7,6,238,7,7,187,8,4,255,8,5,170],"secondary":false},{"width":14,"bonus":200,"chr":"W","pixels":[1,4,255,1,5,221,2,4,238,2,5,255,2,6,255,2,7,255,2,8,221,3,7,153,3,8,221,3,9,255,3,10,255,3,11,221,4,9,153,4,10,255,4,11,204,5,7,170,5,8,238,5,9,153,6,5,238,6,6,255,6,7,153,7,5,187,7,6,255,7,7,255,7,8,204,8,8,238,8,9,255,8,10,238,8,11,153,9,9,153,9,10,255,9,11,255,9,12,170,10,7,170,10,8,238,10,9,187,11,4,238,11,5,255,11,6,187,12,4,170],"secondary":false},{"width":10,"bonus":135,"chr":"X","pixels":[1,4,221,1,12,238,2,4,255,2,5,255,2,10,170,2,11,221,2,12,187,3,4,153,3,5,187,3,6,255,3,7,238,3,9,221,4,7,255,4,8,255,4,9,204,5,6,204,5,7,153,5,9,255,5,10,255,5,11,153,6,4,221,6,5,238,6,10,204,6,11,255,6,12,255,7,4,204,7,12,238],"secondary":false},{"width":9,"bonus":115,"chr":"Y","pixels":[0,5,187,1,5,255,1,6,221,2,5,170,2,6,238,2,7,255,2,8,170,3,8,255,3,9,255,3,10,187,3,11,187,3,12,187,3,13,238,4,9,255,4,10,255,4,11,255,4,12,255,4,13,255,5,7,187,5,8,204,6,5,238,6,6,238,7,5,204],"secondary":false},{"width":9,"bonus":145,"chr":"Z","pixels":[1,5,187,1,6,153,1,13,255,2,5,238,2,11,221,2,12,255,2,13,255,3,5,221,3,9,153,3,10,255,3,11,238,3,13,255,4,5,221,4,8,238,4,9,255,4,10,187,4,13,255,5,5,238,5,6,187,5,7,255,5,8,238,5,13,255,6,5,255,6,6,255,6,7,153,6,13,255,7,5,204,7,12,187,7,13,187],"secondary":false},{"width":5,"bonus":70,"chr":"[","pixels":[1,3,187,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,1,13,255,1,14,187,2,3,153,2,14,153],"secondary":false},{"width":8,"bonus":50,"chr":"\\\\","pixels":[0,4,170,1,5,204,1,6,170,2,7,238,3,8,170,3,9,204,4,10,221,4,11,153,5,12,238,6,13,187],"secondary":false},{"width":4,"bonus":70,"chr":"]","pixels":[1,3,170,1,14,170,2,3,187,2,4,255,2,5,255,2,6,255,2,7,255,2,8,255,2,9,255,2,10,255,2,11,255,2,12,255,2,13,255,2,14,187],"secondary":false},{"width":7,"bonus":55,"chr":"^","pixels":[0,9,238,1,6,170,1,7,238,1,8,153,2,4,204,2,5,221,3,4,187,3,5,238,4,7,238,4,8,187,5,9,204],"secondary":false},{"width":8,"bonus":35,"chr":"_","pixels":[0,12,221,1,12,221,2,12,221,3,12,221,4,12,221,5,12,221,6,12,153],"secondary":false},{"width":10,"bonus":125,"chr":"a","pixels":[1,12,238,2,9,187,2,10,238,2,11,170,2,12,187,3,7,221,3,8,204,3,9,238,4,5,238,4,6,238,4,9,221,5,5,187,5,6,255,5,7,255,5,8,187,5,9,238,6,7,153,6,8,255,6,9,255,6,10,238,6,11,153,7,10,221,7,11,255,7,12,255,8,12,221],"secondary":false},{"width":8,"bonus":160,"chr":"b","pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,4,238,2,5,187,2,6,187,2,7,187,2,8,238,2,9,187,2,10,187,2,11,187,2,12,255,3,4,204,3,8,204,3,12,204,4,4,221,4,5,187,4,7,187,4,8,255,4,12,204,5,5,238,5,6,238,5,9,255,5,10,255,5,11,255,6,10,187],"secondary":false},{"width":9,"bonus":120,"chr":"c","pixels":[0,7,221,0,8,255,0,9,221,1,5,221,1,6,255,1,7,238,1,8,221,1,9,255,1,10,255,1,11,204,2,5,187,2,11,255,3,4,204,3,12,204,4,4,221,4,12,238,5,4,221,5,12,221,6,4,221,6,12,238,7,4,187,7,5,204,7,11,187,7,12,170],"secondary":false},{"width":11,"bonus":200,"chr":"d","pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,4,255,2,5,187,2,6,187,2,7,187,2,8,187,2,9,187,2,10,187,2,11,204,2,12,255,3,4,221,3,12,238,4,4,238,4,12,221,5,4,238,5,12,221,6,4,204,6,5,153,6,12,187,7,5,255,7,6,153,7,11,238,8,5,204,8,6,255,8,7,255,8,8,255,8,9,255,8,10,255,8,11,170,9,7,204,9,8,221,9,9,187],"secondary":false},{"width":7,"bonus":135,"chr":"e","pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,4,255,2,5,187,2,6,187,2,7,187,2,8,255,2,9,187,2,10,187,2,11,204,2,12,255,3,4,221,3,8,221,3,12,238,4,4,238,4,8,221,4,12,221,5,4,187,5,8,153,5,12,238],"secondary":false},{"width":7,"bonus":115,"chr":"f","pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,4,255,2,5,187,2,6,187,2,7,187,2,8,255,2,9,187,2,10,187,2,11,187,2,12,238,3,4,221,3,8,221,4,4,238,4,8,221,5,4,221],"secondary":false},{"width":10,"bonus":150,"chr":"g","pixels":[0,7,204,0,8,255,0,9,255,0,10,187,1,5,187,1,6,255,1,7,238,1,8,221,1,9,238,1,10,255,1,11,221,2,5,204,2,11,238,3,4,204,3,12,204,4,4,221,4,12,238,5,4,238,5,12,221,6,4,221,6,9,238,6,10,187,6,11,187,6,12,221,7,4,170,7,5,221,7,9,255,7,10,255,7,11,255,7,12,153],"secondary":false},{"width":11,"bonus":200,"chr":"h","pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,4,238,2,5,187,2,6,187,2,7,187,2,8,255,2,9,187,2,10,187,2,11,187,2,12,238,3,8,221,4,8,221,5,8,221,6,8,221,7,4,255,7,5,255,7,6,255,7,7,255,7,8,255,7,9,255,7,10,255,7,11,255,7,12,255,8,4,238,8,5,187,8,6,187,8,7,187,8,8,187,8,9,187,8,10,187,8,11,187,8,12,238],"secondary":false},{"width":5,"bonus":90,"chr":"i","pixels":[1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,1,13,255,2,5,238,2,6,187,2,7,187,2,8,187,2,9,187,2,10,187,2,11,187,2,12,187,2,13,238],"secondary":false},{"width":6,"bonus":100,"chr":"j","pixels":[2,4,255,2,5,255,2,6,255,2,7,255,2,8,255,2,9,255,2,10,255,2,11,255,2,12,255,2,13,255,2,14,187,3,4,238,3,5,187,3,6,187,3,7,187,3,8,187,3,9,187,3,10,187,3,11,187,3,12,187],"secondary":false},{"width":10,"bonus":170,"chr":"k","pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,4,238,2,5,187,2,6,187,2,7,187,2,8,255,2,9,204,2,10,187,2,11,187,2,12,238,3,7,170,3,8,255,3,9,221,4,6,204,4,9,238,4,10,238,5,4,153,5,5,238,5,10,238,5,11,238,6,4,255,6,11,238,6,12,187,7,4,153,7,12,255,8,12,153],"secondary":false},{"width":8,"bonus":105,"chr":"l","pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,4,238,2,5,187,2,6,187,2,7,187,2,8,187,2,9,187,2,10,187,2,11,204,2,12,255,3,12,238,4,12,221,5,12,255],"secondary":false},{"width":13,"bonus":190,"chr":"m","pixels":[1,9,170,1,10,204,1,11,238,1,12,255,2,4,187,2,5,255,2,6,255,2,7,238,2,8,153,2,12,153,3,6,238,3,7,255,3,8,238,4,8,238,4,9,255,4,10,238,5,10,238,5,11,255,5,12,187,6,9,153,6,10,238,7,7,153,7,8,238,8,5,170,8,6,255,8,7,238,9,4,153,9,5,204,9,6,255,9,7,255,9,8,255,9,9,255,9,10,255,9,11,255,9,12,238,10,10,153,10,11,187,10,12,255],"secondary":false},{"width":11,"bonus":170,"chr":"n","pixels":[0,12,170,1,4,187,1,5,255,1,6,255,1,7,238,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,5,204,2,6,255,2,12,153,3,6,221,3,7,255,4,7,238,4,8,255,5,8,238,5,9,255,6,9,238,6,10,238,7,4,153,7,10,255,7,11,238,8,4,255,8,5,255,8,6,255,8,7,255,8,8,255,8,9,255,8,10,255,8,11,255,8,12,204,9,4,153],"secondary":false},{"width":10,"bonus":160,"chr":"o","pixels":[0,7,221,0,8,255,0,9,221,1,5,204,1,6,255,1,7,221,1,8,221,1,9,255,1,10,255,1,11,221,2,5,170,2,11,238,3,4,221,3,12,221,4,4,221,4,12,221,5,4,238,5,12,204,6,4,153,6,5,238,6,11,170,7,5,238,7,6,255,7,7,255,7,8,221,7,9,238,7,10,255,7,11,187,8,6,153,8,7,238,8,8,255,8,9,204],"secondary":false},{"width":8,"bonus":130,"chr":"p","pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,4,238,2,5,187,2,6,187,2,7,187,2,8,187,2,9,187,2,10,187,2,11,187,2,12,238,3,4,204,4,4,238,5,4,170,5,5,255,5,6,255,5,7,255,5,8,204,6,6,187],"secondary":false},{"width":10,"bonus":200,"chr":"q","pixels":[0,7,221,0,8,255,0,9,221,1,5,187,1,6,255,1,7,238,1,8,221,1,9,255,1,10,255,1,11,221,2,5,170,2,11,238,2,12,153,3,4,221,3,12,221,4,4,221,4,12,238,5,4,238,5,12,204,6,4,153,6,5,238,6,11,153,6,12,238,7,5,221,7,6,255,7,7,255,7,8,221,7,9,238,7,10,255,7,11,170,7,12,204,7,13,221,8,6,153,8,7,238,8,8,255,8,9,221,8,13,255,8,14,170,9,13,170,9,14,255],"secondary":false},{"width":10,"bonus":175,"chr":"r","pixels":[1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255,2,4,255,2,5,187,2,6,187,2,7,187,2,8,187,2,9,255,2,10,187,2,11,187,2,12,238,3,4,221,3,9,221,4,4,238,4,9,255,4,10,170,5,4,153,5,5,255,5,6,255,5,7,255,5,8,187,5,10,255,5,11,187,6,6,187,6,11,238,6,12,170,7,12,255,8,12,153],"secondary":false},{"width":7,"bonus":95,"chr":"s","pixels":[0,11,221,0,12,187,1,5,255,1,6,255,1,7,255,1,12,238,2,4,187,2,7,255,2,8,238,2,12,221,3,4,187,3,8,255,3,9,187,3,12,221,4,4,221,4,8,187,4,9,255,4,10,255,4,11,255],"secondary":false},{"width":10,"bonus":125,"chr":"t","pixels":[0,4,187,1,4,221,2,4,221,3,4,255,3,5,187,3,6,187,3,7,187,3,8,187,3,9,187,3,10,187,3,11,187,3,12,238,4,4,255,4,5,255,4,6,255,4,7,255,4,8,255,4,9,255,4,10,255,4,11,255,4,12,255,5,4,221,5,12,153,6,4,221,7,4,255],"secondary":false},{"width":11,"bonus":145,"chr":"u","pixels":[1,4,238,1,5,187,1,6,187,1,7,187,1,8,187,1,9,187,1,10,153,2,4,255,2,5,255,2,6,255,2,7,255,2,8,255,2,9,255,2,10,255,2,11,255,3,11,170,3,12,204,4,12,238,5,12,221,6,12,204,7,4,187,7,11,221,8,4,255,8,5,255,8,6,255,8,7,255,8,8,255,8,9,238,8,10,204],"secondary":false},{"width":11,"bonus":120,"chr":"v","pixels":[1,4,204,2,4,255,2,5,255,2,6,204,3,4,187,3,5,170,3,6,255,3,7,255,3,8,238,3,9,153,4,8,204,4,9,255,4,10,255,4,11,187,5,10,238,5,11,255,6,8,204,6,9,221,7,4,170,7,5,153,7,6,238,7,7,187,8,4,255,8,5,170],"secondary":false},{"width":14,"bonus":200,"chr":"w","pixels":[1,4,255,1,5,221,2,4,238,2,5,255,2,6,255,2,7,255,2,8,221,3,7,153,3,8,221,3,9,255,3,10,255,3,11,221,4,9,153,4,10,255,4,11,204,5,7,170,5,8,238,5,9,153,6,5,238,6,6,255,6,7,153,7,5,187,7,6,255,7,7,255,7,8,204,8,8,238,8,9,255,8,10,238,8,11,153,9,9,153,9,10,255,9,11,255,9,12,170,10,7,170,10,8,238,10,9,187,11,4,238,11,5,255,11,6,187,12,4,170],"secondary":false},{"width":10,"bonus":135,"chr":"x","pixels":[1,4,221,1,12,238,2,4,255,2,5,255,2,10,170,2,11,221,2,12,187,3,4,153,3,5,187,3,6,255,3,7,238,3,9,221,4,7,255,4,8,255,4,9,204,5,6,204,5,7,153,5,9,255,5,10,255,5,11,153,6,4,221,6,5,238,6,10,204,6,11,255,6,12,255,7,4,204,7,12,238],"secondary":false},{"width":9,"bonus":115,"chr":"y","pixels":[0,4,187,1,4,255,1,5,221,2,4,170,2,5,238,2,6,255,2,7,170,3,7,255,3,8,255,3,9,187,3,10,187,3,11,187,3,12,238,4,8,255,4,9,255,4,10,255,4,11,255,4,12,255,5,6,187,5,7,204,6,4,238,6,5,238,7,4,204],"secondary":false},{"width":9,"bonus":145,"chr":"z","pixels":[1,4,187,1,5,153,1,12,255,2,4,238,2,10,221,2,11,255,2,12,255,3,4,221,3,8,153,3,9,255,3,10,238,3,12,255,4,4,221,4,7,238,4,8,255,4,9,187,4,12,255,5,4,238,5,5,187,5,6,255,5,7,238,5,12,255,6,4,255,6,5,255,6,6,153,6,12,255,7,4,204,7,11,187,7,12,187],"secondary":false},{"width":5,"bonus":55,"chr":"{","pixels":[1,8,204,2,4,255,2,5,255,2,6,255,2,7,187,2,9,238,2,10,255,2,11,255,2,12,255,2,13,187,3,3,170],"secondary":false},{"width":3,"bonus":65,"chr":"|","pixels":[1,0,255,1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,1,8,255,1,9,255,1,10,255,1,11,255,1,12,255],"secondary":true},{"width":6,"bonus":55,"chr":"}","pixels":[1,3,170,2,4,255,2,5,255,2,6,255,2,7,187,2,9,238,2,10,255,2,11,255,2,12,255,2,13,187,3,8,204],"secondary":false},{"width":7,"bonus":35,"chr":"~","pixels":[0,9,255,1,8,255,2,8,187,3,9,238,4,10,255,5,8,255,5,9,221],"secondary":false}],"width":14,"spacewidth":5,"shadow":false,"height":15,"basey":12}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_24826__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_24826__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_24826__("./src/fonts/aa_9px_mono_allcaps.fontmeta.json");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "../node_modules/alt1/dist/ocr/index.js":
/*!**********************************************!*\
  !*** ../node_modules/alt1/dist/ocr/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! alt1/base */ "../node_modules/alt1/dist/base/index.js"));
	else {}
})(globalThis, (__WEBPACK_EXTERNAL_MODULE_alt1_base__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ocr/index.ts":
/*!**************************!*\
  !*** ./src/ocr/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __nested_webpack_require_728__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generatefont = exports.readChar = exports.readSmallCapsBackwards = exports.readLine = exports.getChatColor = exports.GetChatColorMono = exports.findReadLine = exports.findChar = exports.decompose3col = exports.decomposeblack = exports.decompose2col = exports.canblend = exports.unblendTrans = exports.unblendKnownBg = exports.unblendBlackBackground = exports.debugFont = exports.debugout = exports.debug = void 0;
const base_1 = __nested_webpack_require_728__(/*! alt1/base */ "alt1/base");
exports.debug = {
    printcharscores: false,
    trackread: false
};
exports.debugout = {};
/**
 * draws the font definition to a buffer and displays it in the dom for debugging purposes
 * @param font
 */
function debugFont(font) {
    var spacing = font.width + 2;
    var buf = new base_1.ImageData(spacing * font.chars.length, font.height + 1);
    for (var a = 0; a < buf.data.length; a += 4) {
        buf.data[a] = buf.data[a + 1] = buf.data[a + 2] = 0;
        buf.data[a + 3] = 255;
    }
    for (var a = 0; a < font.chars.length; a++) {
        var bx = a * spacing;
        var chr = font.chars[a];
        for (var b = 0; b < chr.pixels.length; b += (font.shadow ? 4 : 3)) {
            buf.setPixel(bx + chr.pixels[b], chr.pixels[b + 1], [chr.pixels[b + 2], chr.pixels[b + 2], chr.pixels[b + 2], 255]);
            if (font.shadow) {
                buf.setPixel(bx + chr.pixels[b], chr.pixels[b + 1], [chr.pixels[b + 3], 0, 0, 255]);
            }
        }
    }
    buf.show();
}
exports.debugFont = debugFont;
function unblendBlackBackground(img, r, g, b) {
    var rimg = new base_1.ImageData(img.width, img.height);
    for (var i = 0; i < img.data.length; i += 4) {
        var col = decomposeblack(img.data[i], img.data[i + 1], img.data[i + 2], r, g, b);
        rimg.data[i + 0] = col[0] * 255;
        rimg.data[i + 1] = rimg.data[i + 0];
        rimg.data[i + 2] = rimg.data[i + 0];
        rimg.data[i + 3] = 255;
    }
    return rimg;
}
exports.unblendBlackBackground = unblendBlackBackground;
/**
 * unblends a imagebuffer into match strength with given color
 * the bgimg argument should contain a second image with pixel occluded by the font visible.
 * @param img
 * @param shadow detect black as second color
 * @param bgimg optional second image to
 */
function unblendKnownBg(img, bgimg, shadow, r, g, b) {
    if (bgimg && (img.width != bgimg.width || img.height != bgimg.height)) {
        throw "bgimg size doesn't match";
    }
    var rimg = new base_1.ImageData(img.width, img.height);
    var totalerror = 0;
    for (var i = 0; i < img.data.length; i += 4) {
        var col = decompose2col(img.data[i], img.data[i + 1], img.data[i + 2], r, g, b, bgimg.data[i + 0], bgimg.data[i + 1], bgimg.data[i + 2]);
        if (shadow) {
            if (col[2] > 0.01) {
                console.log("high error component: " + (col[2] * 100).toFixed(1) + "%");
            }
            totalerror += col[2];
            var m = 1 - col[1] - Math.abs(col[2]); //main color+black=100%-bg-error
            rimg.data[i + 0] = m * 255;
            rimg.data[i + 1] = col[0] / m * 255;
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        else {
            rimg.data[i + 0] = col[0] * 255;
            rimg.data[i + 1] = rimg.data[i + 0];
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        rimg.data[i + 3] = 255;
    }
    return rimg;
}
exports.unblendKnownBg = unblendKnownBg;
/**
 * Unblends a font image that is already conpletely isolated to the raw image used ingame. This is the easiest mode for pixel fonts where alpha is 0 or 255, or for extracted font files.
 * @param img
 * @param r
 * @param g
 * @param b
 * @param shadow whether the font has a black shadow
 */
function unblendTrans(img, shadow, r, g, b) {
    var rimg = new base_1.ImageData(img.width, img.height);
    var pxlum = r + g + b;
    for (var i = 0; i < img.data.length; i += 4) {
        if (shadow) {
            var lum = img.data[i + 0] + img.data[i + 1] + img.data[i + 2];
            rimg.data[i + 0] = img.data[i + 3];
            rimg.data[i + 1] = lum / pxlum * 255;
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        else {
            rimg.data[i + 0] = img.data[i + 3];
            rimg.data[i + 1] = rimg.data[i + 0];
            rimg.data[i + 2] = rimg.data[i + 0];
        }
        rimg.data[i + 3] = 255;
    }
    return rimg;
}
exports.unblendTrans = unblendTrans;
/**
 * Determised wether color [rgb]m can be a result of a blend with color [rgb]1 that is p (0-1) of the mix
 * It returns the number that the second color has to lie outside of the possible color ranges
 * @param rm resulting color
 * @param r1 first color of the mix (the other color is unknown)
 * @param p the portion of the [rgb]1 in the mix (0-1)
 */
function canblend(rm, gm, bm, r1, g1, b1, p) {
    var m = Math.min(50, p / (1 - p));
    var r = rm + (rm - r1) * m;
    var g = gm + (gm - g1) * m;
    var b = bm + (bm - b1) * m;
    return Math.max(0, -r, -g, -b, r - 255, g - 255, b - 255);
}
exports.canblend = canblend;
/**
 * decomposes a color in 2 given component colors and returns the amount of each color present
 * also return a third (noise) component which is the the amount leftover orthagonal from the 2 given colors
 */
function decompose2col(rp, gp, bp, r1, g1, b1, r2, g2, b2) {
    //get the normal of the error (cross-product of both colors)
    var r3 = g1 * b2 - g2 * b1;
    var g3 = b1 * r2 - b2 * r1;
    var b3 = r1 * g2 - r2 * g1;
    //normalize to length 255
    var norm = 255 / Math.sqrt(r3 * r3 + g3 * g3 + b3 * b3);
    r3 *= norm;
    g3 *= norm;
    b3 *= norm;
    return decompose3col(rp, gp, bp, r1, g1, b1, r2, g2, b2, r3, g3, b3);
}
exports.decompose2col = decompose2col;
/**
 * decomposes a pixel in a given color component and black and returns what proportion of the second color it contains
 * this is not as formal as decompose 2/3 and only give a "good enough" number
 */
function decomposeblack(rp, gp, bp, r1, g1, b1) {
    var dr = Math.abs(rp - r1);
    var dg = Math.abs(gp - g1);
    var db = Math.abs(bp - b1);
    var maxdif = Math.max(dr, dg, db);
    return [1 - maxdif / 255];
}
exports.decomposeblack = decomposeblack;
/**
 * decomposes a color in 3 given component colors and returns the amount of each color present
 */
function decompose3col(rp, gp, bp, r1, g1, b1, r2, g2, b2, r3, g3, b3) {
    //P=x*C1+y*C2+z*C3
    //assemble as matrix 
    //M*w=p
    //get inverse of M
    //dirty written out version of cramer's rule
    var A = g2 * b3 - b2 * g3;
    var B = g3 * b1 - b3 * g1;
    var C = g1 * b2 - b1 * g2;
    var D = b2 * r3 - r2 * b3;
    var E = b3 * r1 - r3 * b1;
    var F = b1 * r2 - r1 * b2;
    var G = r2 * g3 - g2 * r3;
    var H = r3 * g1 - g3 * r1;
    var I = r1 * g2 - g1 * r2;
    var det = r1 * A + g1 * D + b1 * G;
    //M^-1*p=w
    var x = (A * rp + D * gp + G * bp) / det;
    var y = (B * rp + E * gp + H * bp) / det;
    var z = (C * rp + F * gp + I * bp) / det;
    return [x, y, z];
}
exports.decompose3col = decompose3col;
/**
 * brute force to the exact position of the text
 */
function findChar(buffer, font, col, x, y, w, h) {
    if (x < 0) {
        return null;
    }
    if (y - font.basey < 0) {
        return null;
    }
    if (x + w + font.width > buffer.width) {
        return null;
    }
    if (y + h - font.basey + font.height > buffer.height) {
        return null;
    }
    var best = 1000; //TODO finetune score constants
    var bestchar = null;
    for (var cx = x; cx < x + w; cx++) {
        for (var cy = y; cy < y + h; cy++) {
            var chr = readChar(buffer, font, col, cx, cy, false, false);
            if (chr != null && chr.sizescore < best) {
                best = chr.sizescore;
                bestchar = chr;
            }
        }
    }
    return bestchar;
}
exports.findChar = findChar;
/**
 * reads text with unknown exact coord or color. The given coord should be inside the text
 * color selection not implemented yet
 */
function findReadLine(buffer, font, cols, x, y, w = -1, h = -1) {
    if (w == -1) {
        w = font.width + font.spacewidth;
        x -= Math.ceil(w / 2);
    }
    if (h == -1) {
        h = 7;
        y -= 1;
    }
    var chr = null;
    if (cols.length > 1) {
        //TODO use getChatColor() instead for non-mono?
        var sorted = GetChatColorMono(buffer, new base_1.Rect(x, y - font.basey, w, h), cols);
        //loop until we have a match (max 2 cols)
        for (var a = 0; a < 2 && a < sorted.length && chr == null; a++) {
            chr = findChar(buffer, font, sorted[a].col, x, y, w, h);
        }
    }
    else {
        chr = findChar(buffer, font, cols[0], x, y, w, h);
    }
    if (chr == null) {
        return { debugArea: { x, y, w, h }, text: "", fragments: [] };
    }
    return readLine(buffer, font, cols, chr.x, chr.y, true, true);
}
exports.findReadLine = findReadLine;
function GetChatColorMono(buf, rect, colors) {
    var colormap = colors.map(c => ({ col: c, score: 0 }));
    if (rect.x < 0 || rect.y < 0 || rect.x + rect.width > buf.width || rect.y + rect.height > buf.height) {
        return colormap;
    }
    var data = buf.data;
    var maxd = 50;
    for (var colobj of colormap) {
        var score = 0;
        var col = colobj.col;
        for (var y = rect.y; y < rect.y + rect.height; y++) {
            for (var x = rect.x; x < rect.x + rect.width; x++) {
                var i = x * 4 + y * 4 * buf.width;
                var d = Math.abs(data[i] - col[0]) + Math.abs(data[i + 1] - col[1]) + Math.abs(data[i + 2] - col[2]);
                if (d < maxd) {
                    score += maxd - d;
                }
            }
        }
        colobj.score = score;
    }
    return colormap.sort((a, b) => b.score - a.score);
}
exports.GetChatColorMono = GetChatColorMono;
function unblend(r, g, b, R, G, B) {
    var m = Math.sqrt(r * r + g * g + b * b);
    var n = Math.sqrt(R * R + G * G + B * B);
    var x = (r * R + g * G + b * B) / n;
    var y = Math.sqrt(Math.max(0, m * m - x * x));
    var r1 = Math.max(0, (63.75 - y) * 4);
    var r2 = x / n * 255;
    if (r2 > 255) //brighter than refcol
     {
        r1 = Math.max(0, r1 - r2 + 255);
        r2 = 255;
    }
    return [r1, r2];
}
function getChatColor(buf, rect, colors) {
    var bestscore = -1.0;
    var best = null;
    var b2 = 0.0;
    var data = buf.data;
    for (let col of colors) {
        var score = 0.0;
        for (var y = rect.y; y < rect.y + rect.height; y++) {
            for (var x = rect.x; x < rect.x + rect.width; x++) {
                if (x < 0 || x + 1 >= buf.width) {
                    continue;
                }
                if (y < 0 || y + 1 >= buf.width) {
                    continue;
                }
                let i1 = buf.pixelOffset(x, y);
                let i2 = buf.pixelOffset(x + 1, y + 1);
                var pixel1 = unblend(data[i1 + 0], data[i1 + 1], data[i1 + 2], col[0], col[1], col[2]);
                var pixel2 = unblend(data[i2 + 0], data[i2 + 1], data[i2 + 2], col[0], col[1], col[2]);
                //TODO this is from c# can simplify a bit
                var s = (pixel1[0] / 255 * pixel1[1] / 255) * (pixel2[0] / 255 * (255.0 - pixel2[1]) / 255);
                score += s;
            }
        }
        if (score > bestscore) {
            b2 = bestscore;
            bestscore = score;
            best = col;
        }
        else if (score > b2) {
            b2 = score;
        }
    }
    //Console.WriteLine("color: " + bestcol + " - " + (bestscore - b2));
    //bestscore /= rect.width * rect.height;
    return best;
}
exports.getChatColor = getChatColor;
/**
 * reads a line of text with exactly known position and color. y should be the y coord of the text base line, x should be the first pixel of a new character
 */
function readLine(buffer, font, colors, x, y, forward, backward = false) {
    if (typeof colors[0] != "number" && colors.length == 1) {
        colors = colors[0];
    }
    var multicol = typeof colors[0] != "number";
    var allcolors = multicol ? colors : [colors];
    var detectcolor = function (sx, sy, backward) {
        var w = Math.floor(font.width * 1.5);
        if (backward) {
            sx -= w;
        }
        sy -= font.basey;
        return getChatColor(buffer, { x: sx, y: sy, width: w, height: font.height }, allcolors);
    };
    var fragments = [];
    var x1 = x;
    var x2 = x;
    var maxspaces = (typeof font.maxspaces == "number" ? font.maxspaces : 1);
    let fragtext = "";
    let fraghadprimary = false;
    var lastcol = null;
    let addfrag = (forward) => {
        if (!fragtext) {
            return;
        }
        let frag = {
            text: fragtext,
            color: lastcol,
            index: 0,
            xstart: x + (forward ? fragstartdx : fragenddx),
            xend: x + (forward ? fragenddx : fragstartdx)
        };
        if (forward) {
            fragments.push(frag);
        }
        else {
            fragments.unshift(frag);
        }
        fragtext = "";
        fragstartdx = dx;
        fraghadprimary = false;
    };
    for (var dirforward of [true, false]) {
        //init vars
        if (dirforward && !forward) {
            continue;
        }
        if (!dirforward && !backward) {
            continue;
        }
        var dx = 0;
        var fragstartdx = dx;
        var fragenddx = dx;
        var triedspaces = 0;
        var triedrecol = false;
        var col = multicol ? null : colors;
        while (true) {
            col = col || detectcolor(x + dx, y, !dirforward);
            var chr = (col ? readChar(buffer, font, col, x + dx, y, !dirforward, true) : null);
            if (col == null || chr == null) {
                if (triedspaces < maxspaces) {
                    dx += (dirforward ? 1 : -1) * font.spacewidth;
                    triedspaces++;
                    continue;
                }
                if (multicol && !triedrecol && fraghadprimary) {
                    dx -= (dirforward ? 1 : -1) * triedspaces * font.spacewidth;
                    triedspaces = 0;
                    col = null;
                    triedrecol = true;
                    continue;
                }
                if (dirforward) {
                    x2 = x + dx - font.spacewidth;
                }
                else {
                    x1 = x + dx + font.spacewidth;
                }
                break;
            }
            else {
                if (lastcol && (col[0] != lastcol[0] || col[1] != lastcol[1] || col[2] != lastcol[2])) {
                    addfrag(dirforward);
                }
                var spaces = "";
                for (var a = 0; a < triedspaces; a++) {
                    spaces += " ";
                }
                if (dirforward) {
                    fragtext += spaces + chr.chr;
                }
                else {
                    fragtext = chr.chr + spaces + fragtext;
                }
                if (!chr.basechar.secondary) {
                    fraghadprimary = true;
                }
                triedspaces = 0;
                triedrecol = false;
                dx += (dirforward ? 1 : -1) * chr.basechar.width;
                fragenddx = dx;
                lastcol = col;
            }
        }
        if (lastcol && fraghadprimary) {
            addfrag(dirforward);
        }
    }
    fragments.forEach((f, i) => f.index = i);
    return {
        debugArea: { x: x1, y: y - 9, w: x2 - x1, h: 10 },
        text: fragments.map(f => f.text).join(""),
        fragments
    };
}
exports.readLine = readLine;
/**
 * Reads a line of text that uses a smallcaps font, these fonts can have duplicate chars that only have a different amount of
 * empty space after the char before the next char starts.
 * The coordinates should be near the end of the string, or a rectangle with high 1 containing all points where the string can end.
 */
function readSmallCapsBackwards(buffer, font, cols, x, y, w = -1, h = -1) {
    if (w == -1) {
        w = font.width + font.spacewidth;
        x -= Math.ceil(w / 2);
    }
    if (h == -1) {
        h = 7;
        y -= 1;
    }
    var matchedchar = null;
    var sorted = (cols.length == 1 ? [{ col: cols[0], score: 1 }] : GetChatColorMono(buffer, new base_1.Rect(x, y - font.basey, w, h), cols));
    //loop until we have a match (max 2 cols)
    for (var a = 0; a < 2 && a < sorted.length && matchedchar == null; a++) {
        for (var cx = x + w - 1; cx >= x; cx--) {
            var best = 1000; //TODO finetune score constants
            var bestchar = null;
            for (var cy = y; cy < y + h; cy++) {
                var chr = readChar(buffer, font, sorted[a].col, cx, cy, true, false);
                if (chr != null && chr.sizescore < best) {
                    best = chr.sizescore;
                    bestchar = chr;
                }
            }
            if (bestchar) {
                matchedchar = bestchar;
                break;
            }
        }
    }
    if (matchedchar == null) {
        return { text: "", debugArea: { x, y, w, h } };
    }
    return readLine(buffer, font, cols, matchedchar.x, matchedchar.y, false, true);
}
exports.readSmallCapsBackwards = readSmallCapsBackwards;
/**
 * Reads a single character at the exact given location
 * @param x exact x location of the start of the character domain (includes part of the spacing between characters)
 * @param y exact y location of the baseline pixel of the character
 * @param backwards read in backwards direction, the x location should be the first pixel after the character domain in that case
 */
function readChar(buffer, font, col, x, y, backwards, allowSecondary) {
    y -= font.basey;
    var shiftx = 0;
    var shifty = font.basey;
    var shadow = font.shadow;
    var debugobj = null;
    var debugimg = null;
    if (exports.debug.trackread) {
        var name = x + ";" + y + " " + JSON.stringify(col);
        if (!exports.debugout[name]) {
            exports.debugout[name] = [];
        }
        debugobj = exports.debugout[name];
    }
    //===== make sure the full domain is inside the bitmap/buffer ======
    if (y < 0 || y + font.height >= buffer.height) {
        return null;
    }
    if (!backwards) {
        if (x < 0 || x + font.width > buffer.width) {
            return null;
        }
    }
    else {
        if (x - font.width < 0 || x > buffer.width) {
            return null;
        }
    }
    //====== start reading the char ======
    var scores = [];
    for (var chr = 0; chr < font.chars.length; chr++) {
        var chrobj = font.chars[chr];
        if (chrobj.secondary && !allowSecondary) {
            continue;
        }
        scores[chr] = { score: 0, sizescore: 0, chr: chrobj };
        var chrx = (backwards ? x - chrobj.width : x);
        if (exports.debug.trackread) {
            debugimg = new base_1.ImageData(font.width, font.height);
        }
        for (var a = 0; a < chrobj.pixels.length;) {
            var i = (chrx + chrobj.pixels[a]) * 4 + (y + chrobj.pixels[a + 1]) * buffer.width * 4;
            var penalty = 0;
            if (!shadow) {
                penalty = canblend(buffer.data[i], buffer.data[i + 1], buffer.data[i + 2], col[0], col[1], col[2], chrobj.pixels[a + 2] / 255);
                a += 3;
            }
            else {
                var lum = chrobj.pixels[a + 3] / 255;
                penalty = canblend(buffer.data[i], buffer.data[i + 1], buffer.data[i + 2], col[0] * lum, col[1] * lum, col[2] * lum, chrobj.pixels[a + 2] / 255);
                a += 4;
            }
            scores[chr].score += Math.max(0, penalty);
            //TODO add compiler flag to this to remove it for performance
            if (debugimg) {
                debugimg.setPixel(chrobj.pixels[a], chrobj.pixels[a + 1], [penalty, penalty, penalty, 255]);
            }
        }
        scores[chr].sizescore = scores[chr].score - chrobj.bonus;
        if (debugobj) {
            debugobj.push({ chr: chrobj.chr, score: scores[chr].sizescore, rawscore: scores[chr].score, img: debugimg });
        }
    }
    scores.sort((a, b) => a.sizescore - b.sizescore);
    if (exports.debug.printcharscores) {
        scores.slice(0, 5).forEach(q => console.log(q.chr.chr, q.score.toFixed(3), q.sizescore.toFixed(3)));
    }
    var winchr = scores[0];
    if (!winchr || winchr.score > 400) {
        return null;
    }
    return { chr: winchr.chr.chr, basechar: winchr.chr, x: x + shiftx, y: y + shifty, score: winchr.score, sizescore: winchr.sizescore };
}
exports.readChar = readChar;
/**
 * Generates a font json description to use in reader functions
 * @param unblended A source image with all characters lined up. The image should be unblended into components using the unblend functions
 * The lowest pixel line of this image is used to mark the location and size of the charecters if the red component is 255 it means there is a character on that pixel column
 * @param chars A string containing all the characters of the image in the same order
 * @param seconds A string with characters that are considered unlikely and should only be detected if no other character is possible.
 * For example the period (.) character matches positive inside many other characters and should be marked as secondary
 * @param bonusses An object that contains bonus scores for certain difficult characters to make the more likely to be red.
 * @param basey The y position of the baseline pixel of the font
 * @param spacewidth the number of pixels a space takes
 * @param treshold minimal color match proportion (0-1) before a pixel is used for the font
 * @param shadow whether this font also uses the black shadow some fonts have. The "unblended" image should be unblended correspondingly
 * @returns a javascript object describing the font which is used as input for the different read functions
 */
function generatefont(unblended, chars, seconds, bonusses, basey, spacewidth, treshold, shadow) {
    //settings vars
    treshold *= 255;
    //initial vars
    var miny = unblended.height - 1;
    var maxy = 0;
    var font = { chars: [], width: 0, spacewidth: spacewidth, shadow: shadow, height: 0, basey: 0 };
    var ds = false;
    var chardata = [];
    //index all chars
    for (var dx = 0; dx < unblended.width; dx++) {
        var i = 4 * dx + 4 * unblended.width * (unblended.height - 1);
        if (unblended.data[i] == 255 && unblended.data[i + 3] == 255) {
            if (ds === false) {
                ds = dx;
            }
        }
        else {
            if (ds !== false) {
                //char found, start detection
                var de = dx;
                var char = chars[chardata.length];
                var chr = {
                    ds: ds,
                    de: de,
                    width: de - ds,
                    chr: char,
                    bonus: (bonusses && bonusses[char]) || 0,
                    secondary: seconds.indexOf(chars[chardata.length]) != -1,
                    pixels: []
                };
                chardata.push(chr);
                font.width = Math.max(font.width, chr.width);
                for (x = 0; x < de - ds; x++) {
                    for (y = 0; y < unblended.height - 1; y++) {
                        var i = (x + ds) * 4 + y * unblended.width * 4;
                        if (unblended.data[i] >= treshold) {
                            miny = Math.min(miny, y);
                            maxy = Math.max(maxy, y);
                        }
                    }
                }
                ds = false;
            }
        }
    }
    font.height = maxy + 1 - miny;
    font.basey = basey - miny;
    //detect all pixels
    for (var a in chardata) {
        var chr = chardata[a];
        for (var x = 0; x < chr.width; x++) {
            for (var y = 0; y < maxy + 1 - miny; y++) {
                var i = (x + chr.ds) * 4 + (y + miny) * unblended.width * 4;
                if (unblended.data[i] >= treshold) {
                    chr.pixels.push(x, y);
                    chr.pixels.push(unblended.data[i]);
                    if (shadow) {
                        chr.pixels.push(unblended.data[i + 1]);
                    }
                    chr.bonus += 5;
                }
            }
        }
        //prevent js from doing the thing with unnecessary output precision
        chr.bonus = +chr.bonus.toFixed(3);
        font.chars.push({ width: chr.width, bonus: chr.bonus, chr: chr.chr, pixels: chr.pixels, secondary: chr.secondary });
    }
    return font;
}
exports.generatefont = generatefont;


/***/ }),

/***/ "alt1/base":
/*!**************************************************************************************************!*\
  !*** external {"root":"A1lib","commonjs2":"alt1/base","commonjs":"alt1/base","amd":"alt1/base"} ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_alt1_base__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_26177__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_26177__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_26177__("./src/ocr/index.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   autoDisableCheckAuto: () => (/* binding */ autoDisableCheckAuto),
/* harmony export */   capture: () => (/* binding */ capture),
/* harmony export */   cleardb: () => (/* binding */ cleardb),
/* harmony export */   exporttocsv: () => (/* binding */ exporttocsv),
/* harmony export */   fetchFromGE: () => (/* binding */ fetchFromGE),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   initOnLoad: () => (/* binding */ initOnLoad),
/* harmony export */   insertInitEx: () => (/* binding */ insertInitEx),
/* harmony export */   insertToDB: () => (/* binding */ insertToDB),
/* harmony export */   rollbackNo: () => (/* binding */ rollbackNo),
/* harmony export */   rollbackVeri: () => (/* binding */ rollbackVeri),
/* harmony export */   rollbackYes: () => (/* binding */ rollbackYes),
/* harmony export */   saveSettings: () => (/* binding */ saveSettings),
/* harmony export */   settingsInit: () => (/* binding */ settingsInit),
/* harmony export */   toggleCapture: () => (/* binding */ toggleCapture),
/* harmony export */   toggleLootDisplay: () => (/* binding */ toggleLootDisplay),
/* harmony export */   verifyInsert: () => (/* binding */ verifyInsert)
/* harmony export */ });
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! alt1 */ "../node_modules/alt1/dist/base/index.js");
/* harmony import */ var alt1__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(alt1__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var resemblejs_compareImages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resemblejs/compareImages */ "../node_modules/resemblejs/compareImages.js");
/* harmony import */ var resemblejs_compareImages__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(resemblejs_compareImages__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pixelmatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pixelmatch */ "../node_modules/pixelmatch/index.js");
/* harmony import */ var pixelmatch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pixelmatch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_ZamorakReader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/ZamorakReader */ "./scripts/ZamorakReader.ts");
/* harmony import */ var _scripts_ModalUIReader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/ModalUIReader */ "./scripts/ModalUIReader.ts");
/* harmony import */ var _JSON_LocalStorageZamorakInit_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./JSON/LocalStorageZamorakInit.json */ "./JSON/LocalStorageZamorakInit.json");
/* harmony import */ var _JSON_ItemsAndImagesZamorak_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JSON/ItemsAndImagesZamorak.json */ "./JSON/ItemsAndImagesZamorak.json");
/* harmony import */ var _JSON_ItemsAndImagesZamorakLegacy_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./JSON/ItemsAndImagesZamorakLegacy.json */ "./JSON/ItemsAndImagesZamorakLegacy.json");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _appconfig_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./appconfig.json */ "./appconfig.json");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//alt1 base libs, provides all the commonly used methods for image matching and capture
//also gives your editor info about the window.alt1 api








var lsdb;
var itemsAll;
var itemsAllLegacy;


// TODO: FOR THE PROGRAMMERS AND DEBUGGERS
// Set this value to true or false to enable console log messages
var seeConsoleLogs = true;
var settingslist = ["ZamorakLogger/Checked button", "ZamorakLogger/Algorithm", "ZamorakLogger/lagDetect",
    "ZamorakLogger/multiButtonPressDetect", "ZamorakLogger/hybridPrecision",
    "ZamorakLogger/noMenu", "ZamorakLogger/RollbackDisplayLimit"];
var valuesAndCounts = ["ZamorakLogger/Value", "ZamorakLogger/Count"];
var rewardSlots = ["first_item", "second_item", "third_item", "fourth_item", "fifth_item",
    "sixth_item", "seventh_item", "eigth_item", "ninth_item", "tenth_item",
    "eleventh_item", "twelfth_item"];
var listOfItemsAll = [];
var listOfItemsAllArray = [];
var listOfItemsLegacyAll = [];
var listOfItemsLegacyAllArray = [];
var items = JSON;
var legacy = false;
var displaybox = true;
var lastItems = [];
var lastQuants = [];
var lastValue = 0;
var autoCaptureInterval;
var noMenuInterval;
var opentabs = [true, true];
var lagDetected = false;
var buttonDisabletoggle = true;
var lagCounter = 0;
var insertVerif = [];
// Adjust this for larger windows. I want 12 cause barrows.
var cap = 12;
var imgs = alt1__WEBPACK_IMPORTED_MODULE_9__.webpackImages({
    zamorakChest: __webpack_require__(/*! ./images/zamorakChest.data.png */ "./images/zamorakChest.data.png"),
    // zamorakChestLegacy: require("./images/zamorakChestLegacy.data.png")
});
// TODO: Consider adding an update price for all clues within history, current tier value
// TODO: Consider changing the coin icon depending on its quantity
// Maybe extend this with purple sweets, holy biscuits, and various seeds.
// TODO: Consider putting some functions in its own TS files for organization.
function initOnLoad() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (window.alt1) {
                        alt1.overLayClearGroup("overlays");
                        alt1.overLayClearGroup("icon");
                        alt1.overLayClearGroup("lag");
                        alt1.overLayClearGroup("nomenu");
                        alt1.overLaySetGroup("overlays");
                        alt1.overLayTextEx("Initializing ZamorakLogger...", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0), 20, Math.round(alt1.rsWidth / 2), 200, 50000, "", true, true);
                    }
                    if (seeConsoleLogs)
                        console.log("Initializing plugin...");
                    toggleLootDisplay("equipment_rewards");
                    toggleLootDisplay("general_rewards");
                    return [4 /*yield*/, init()];
                case 1:
                    _a.sent();
                    if (seeConsoleLogs)
                        console.log("\nInitialization complete!");
                    return [2 /*return*/];
            }
        });
    });
}
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var i, history, i, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    buttonDisabler();
                    return [4 /*yield*/, window.fetch(new URL("./LocalStorageZamorakInit.json", document.location.href).href).then(function (res) { return res.json(); })];
                case 1:
                    // Hacky Json Load, Worry about this later
                    lsdb = _c.sent();
                    return [4 /*yield*/, window.fetch(new URL("./ItemsAndImagesZamorak.json", document.location.href).href).then(function (res) { return res.json(); })];
                case 2:
                    itemsAll = _c.sent();
                    return [4 /*yield*/, window.fetch(new URL("./ItemsAndImagesZamorakLegacy.json", document.location.href).href).then(function (res) { return res.json(); })];
                case 3:
                    itemsAllLegacy = _c.sent();
                    // TODO: This is a fix for when the buttons are clicked once.
                    // When clicked once, it does nothing but when clicked a second
                    // time, it closes and works properly.
                    // Figure out in toggleLootDisplay how to fix it. Might worry
                    // about it in the next logger project...
                    // Initializing LocalStorage items
                    if (seeConsoleLogs)
                        console.log("Initializing LocalStorage items...");
                    if (localStorage.getItem("ZamorakLogger/items") == null) {
                        localStorage.setItem("ZamorakLogger/items", JSON.stringify(lsdb));
                    }
                    for (i = 0; i < valuesAndCounts.length; i++) {
                        if (localStorage.getItem(valuesAndCounts[i]) == null) {
                            localStorage.setItem(valuesAndCounts[i], "0");
                        }
                    }
                    items = JSON.parse(localStorage.getItem("ZamorakLogger/items"));
                    if (seeConsoleLogs)
                        console.log("LocalStorage items initialized.");
                    if (localStorage.getItem("ZamorakLogger/Algorithm") == null) { // Algorithim init check
                        if (seeConsoleLogs)
                            console.log("Defaulting Algorithm button to Hybrid...");
                        localStorage.setItem("ZamorakLogger/Algorithm", "hybrid");
                    }
                    if (localStorage.getItem("ZamorakLogger/ItemList") == null) { // Item Referense list init check
                        if (seeConsoleLogs)
                            console.log("Defaulting ItemList to Organized List...");
                        localStorage.setItem("ZamorakLogger/ItemList", "orglist");
                    }
                    if (localStorage.getItem("ZamorakLogger/autoCapture") == null) { // Autocapture check
                        if (seeConsoleLogs)
                            console.log("Defaulting autocapture to off...");
                        localStorage.setItem("ZamorakLogger/autoCapture", "false");
                    }
                    if (localStorage.getItem("ZamorakLogger/lagDetect") == null) { // Lag Detection toggle check
                        if (seeConsoleLogs)
                            console.log("Defaulting lag detect to true...");
                        localStorage.setItem("ZamorakLogger/lagDetect", "true");
                    }
                    if (localStorage.getItem("ZamorakLogger/multiButtonPressDetect") == null) { // Button double press detection
                        if (seeConsoleLogs)
                            console.log("Defaulting multi button press detect to true...");
                        localStorage.setItem("ZamorakLogger/multiButtonPressDetect", "true");
                    }
                    if (localStorage.getItem("ZamorakLogger/noMenu") == null) { // No hover display box
                        if (seeConsoleLogs)
                            console.log("Defaulting no menu box to true");
                        localStorage.setItem("ZamorakLogger/noMenu", "false");
                    }
                    else if (localStorage.getItem("ZamorakLogger/noMenu") == "true") {
                        if (seeConsoleLogs)
                            console.log("Enabling no menu box");
                        noMenuCheck();
                    }
                    if (localStorage.getItem("ZamorakLogger/hybridPrecision") == null) { // Hybrid precision value
                        if (seeConsoleLogs)
                            console.log("Defaulting hybridPrecision to 0.5...");
                        localStorage.setItem("ZamorakLogger/hybridPrecision", "0.5");
                    }
                    if (localStorage.getItem("ZamorakLogger/History") == null) { // History initializer
                        if (seeConsoleLogs)
                            console.log("Creating history");
                        localStorage.setItem("ZamorakLogger/History", JSON.stringify([]));
                    }
                    history = JSON.parse(localStorage.getItem("ZamorakLogger/History"));
                    if (!(history != null)) return [3 /*break*/, 8];
                    i = 0;
                    _c.label = 4;
                case 4:
                    if (!(i < history.length)) return [3 /*break*/, 7];
                    if (!(history[i][6] == undefined)) return [3 /*break*/, 6];
                    _b = (_a = history[i]).push;
                    return [4 /*yield*/, dateGetter()];
                case 5:
                    _b.apply(_a, [_c.sent()]);
                    _c.label = 6;
                case 6:
                    i++;
                    return [3 /*break*/, 4];
                case 7:
                    localStorage.setItem("ZamorakLogger/History", JSON.stringify(history));
                    _c.label = 8;
                case 8:
                    if (localStorage.getItem("ZamorakLogger/PrimaryKeyHistory") == null) { // Initialize primary key for history
                        if (seeConsoleLogs)
                            console.log("Defaulting PrimaryKeyHistory to 1");
                        localStorage.setItem("ZamorakLogger/PrimaryKeyHistory", "1");
                    }
                    if (localStorage.getItem("ZamorakLogger/HistoryDisplayLimit") == null) { // Initialize history display limit
                        if (seeConsoleLogs)
                            console.log("Defaulting history display limit to 25");
                        localStorage.setItem("ZamorakLogger/HistoryDisplayLimit", "25");
                    }
                    updateItems();
                    if (seeConsoleLogs)
                        console.log("\n");
                    // Set up image libraries
                    return [4 /*yield*/, arraySetup()];
                case 9:
                    // Set up image libraries
                    _c.sent();
                    //Set display
                    lootDisplay();
                    //Set up settings
                    settingsInit();
                    //Set up history window
                    historyInit();
                    //Set up insert window
                    insertInit();
                    if (window.alt1) {
                        alt1.overLayClearGroup("overlays");
                        alt1.overLaySetGroup("overlays");
                        alt1.overLayTextEx("ZamorakLogger ready!", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(100, 255, 100), 20, Math.round(alt1.rsWidth / 2), 200, 2000, "", true, true);
                    }
                    buttonEnabler();
                    return [2 /*return*/];
            }
        });
    });
}
function cleardb(choice) {
    return __awaiter(this, void 0, void 0, function () {
        var keys, ls, _i, ls_1, i, i, i, ele, container, divs, i, i, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    keys = Object.keys(items);
                    if (!(choice == 1)) return [3 /*break*/, 2];
                    if (window.alt1) {
                        alt1.overLayClearGroup("overlays");
                        alt1.overLaySetGroup("overlays");
                        alt1.overLayTextEx("Resetting ZamorakLogger...", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0), 20, Math.round(alt1.rsWidth / 2), 200, 4000, "", true, true);
                    }
                    ls = Object.keys(localStorage);
                    for (_i = 0, ls_1 = ls; _i < ls_1.length; _i++) {
                        i = ls_1[_i];
                        if (i.includes("ZamorakLogger")) {
                            console.log("Removing all Zamorak Logger stuff...");
                            localStorage.removeItem(i);
                        }
                    }
                    if (window.alt1) {
                        alt1.overLayClearGroup("overlays");
                        alt1.overLaySetGroup("overlays");
                        alt1.overLayTextEx("ZamorakLogger successfully reset! Restarting...", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(100, 255, 100), 20, Math.round(alt1.rsWidth / 2), 200, 4000, "", true, true);
                    }
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                case 1:
                    _a.sent();
                    location.reload();
                    return [3 /*break*/, 6];
                case 2:
                    if (!(choice == 2)) return [3 /*break*/, 4];
                    if (window.alt1) {
                        alt1.overLayClearGroup("overlays");
                        alt1.overLaySetGroup("overlays");
                        alt1.overLayTextEx("Clearing all items from reward database...", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0), 20, Math.round(alt1.rsWidth / 2), 200, 4000, "", true, true);
                    }
                    localStorage.removeItem("ZamorakLogger/items");
                    localStorage.removeItem("ZamorakLogger/History");
                    for (i = 0; i < valuesAndCounts.length; i++) {
                        localStorage.removeItem(valuesAndCounts[i]);
                    }
                    return [4 /*yield*/, init()];
                case 3:
                    _a.sent();
                    if (window.alt1) {
                        alt1.overLayClearGroup("overlays");
                        alt1.overLaySetGroup("overlays");
                        alt1.overLayTextEx("All items cleared successfully!", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(100, 255, 100), 20, Math.round(alt1.rsWidth / 2), 200, 4000, "", true, true);
                    }
                    return [3 /*break*/, 6];
                case 4:
                    if (!(choice == 3)) return [3 /*break*/, 6];
                    if (window.alt1) {
                        alt1.overLayClearGroup("overlays");
                        alt1.overLaySetGroup("overlays");
                        alt1.overLayTextEx("Reseting settings to default...", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0), 20, Math.round(alt1.rsWidth / 2), 200, 4000, "", true, true);
                    }
                    if (localStorage.getItem("ZamorakLogger/noMenu") === "true") {
                        localStorage.setItem("ZamorakLogger/noMenu", "false");
                        noMenuCheck();
                    }
                    for (i = 0; i < settingslist.length; i++) {
                        localStorage.removeItem(settingslist[i]);
                    }
                    return [4 /*yield*/, init()];
                case 5:
                    _a.sent();
                    if (window.alt1) {
                        alt1.overLayClearGroup("overlays");
                        alt1.overLaySetGroup("overlays");
                        alt1.overLayTextEx("Settings reset successfully!", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(100, 255, 100), 20, Math.round(alt1.rsWidth / 2), 200, 4000, "", true, true);
                    }
                    _a.label = 6;
                case 6:
                    ele = document.getElementById("history_body");
                    container = document.createElement("div");
                    container.textContent = "There's nothing here to display. Start scanning!";
                    container.setAttribute("class", "nothingToDisplayContainer");
                    ele.append(container);
                    return [4 /*yield*/, historyClear()];
                case 7:
                    _a.sent();
                    historyInit();
                    document.getElementById("number_of_rewards").textContent = "0";
                    document.getElementById("value_of_rewards").textContent = "0";
                    document.getElementById("average_of_rewards").textContent = "0";
                    divs = document.getElementsByClassName("loot_display");
                    for (i = 0; i < divs.length; i++) {
                        divs[i].textContent = "";
                    }
                    for (i = 0; i < 4; i++) {
                        for (j = 0; j < 8; j++) {
                            if (rewardSlots[(i * 8) + j] == undefined) {
                                break;
                            }
                            document.getElementById(rewardSlots[(i * 8) + j]).textContent = "";
                        }
                    }
                    document.getElementById("rewards_value").textContent = "0";
                    lastItems = [];
                    lastQuants = [];
                    lastValue = 0;
                    return [2 /*return*/];
            }
        });
    });
}
function arraySetup() {
    return __awaiter(this, void 0, void 0, function () {
        var promises, _loop_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    listOfItemsAll = itemsAll.items;
                    listOfItemsLegacyAll = itemsAllLegacy.items;
                    listOfItemsAllArray = [];
                    listOfItemsLegacyAllArray = [];
                    console.log(itemsAll);
                    console.log(itemsAllLegacy);
                    promises = [];
                    _loop_1 = function (i) {
                        var _b, _c, _d, _e;
                        return __generator(this, function (_f) {
                            switch (_f.label) {
                                case 0:
                                    listOfItemsAllArray.push([listOfItemsAll[i].name, listOfItemsAll[i].base64, 0.0]);
                                    listOfItemsLegacyAllArray.push([listOfItemsLegacyAll[i].name, listOfItemsLegacyAll[i].base64, 0.0]);
                                    _c = (_b = promises).push;
                                    return [4 /*yield*/, _base64ToImageData(listOfItemsAllArray[i][1], 32, 32).then(function (data) {
                                            listOfItemsAllArray[i].push(data);
                                        })];
                                case 1:
                                    _c.apply(_b, [_f.sent()]);
                                    _e = (_d = promises).push;
                                    return [4 /*yield*/, _base64ToImageData(listOfItemsLegacyAllArray[i][1], 32, 32).then(function (data) {
                                            listOfItemsLegacyAllArray[i].push(data);
                                        })];
                                case 2:
                                    _e.apply(_d, [_f.sent()]);
                                    return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < listOfItemsAll.length)) return [3 /*break*/, 4];
                    return [5 /*yield**/, _loop_1(i)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [4 /*yield*/, Promise.all(promises)];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
alt1__WEBPACK_IMPORTED_MODULE_9__.on("alt1pressed", alt1pressedcapture);
function alt1pressedcapture() {
    if (buttonDisabletoggle == true) {
        if (document.getElementById("docapturebutton").getAttribute("title") === ("Disabled while scanning. Please wait...")) {
            return;
        }
        else if (document.getElementById("docapturebutton").getAttribute("title") === ("Disable autocapture to use this button")) {
            return;
        }
        else {
            capture(false);
        }
    }
}
function capture(autobool) {
    return __awaiter(this, void 0, void 0, function () {
        var img, promises, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!window.alt1) {
                        return [2 /*return*/];
                    }
                    if (!alt1.permissionPixel) {
                        return [2 /*return*/];
                    }
                    if (!(localStorage.getItem("ZamorakLogger/multiButtonPressDetect") === "true")) return [3 /*break*/, 2];
                    if (!!autobool) return [3 /*break*/, 2];
                    document.getElementById("docapturebutton").setAttribute("onclick", "");
                    document.getElementById("docapturebutton").setAttribute("title", "Disabled while scanning. Please wait...");
                    document.getElementById("docapturebuttonwords").style.setProperty("text-decoration", "line-through");
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 200); })];
                case 1:
                    _c.sent();
                    _c.label = 2;
                case 2:
                    img = alt1__WEBPACK_IMPORTED_MODULE_9__.captureHoldFullRs();
                    promises = [];
                    _b = (_a = promises).push;
                    return [4 /*yield*/, findtrailComplete(img, autobool)];
                case 3:
                    _b.apply(_a, [_c.sent()]);
                    return [4 /*yield*/, Promise.all(promises)];
                case 4:
                    _c.sent();
                    if (seeConsoleLogs)
                        console.log("Finished checking clue scroll");
                    if (!(localStorage.getItem("ZamorakLogger/multiButtonPressDetect") === "true")) return [3 /*break*/, 6];
                    if (!!autobool) return [3 /*break*/, 6];
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () {
                            document.getElementById("docapturebutton").setAttribute("onclick", "TestApp.capture(false)");
                            document.getElementById("docapturebutton").setAttribute("title", "");
                            document.getElementById("docapturebuttonwords").style.removeProperty("text-decoration");
                        }, 400); })];
                case 5:
                    _c.sent();
                    _c.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
function findtrailComplete(img, autobool) {
    return __awaiter(this, void 0, void 0, function () {
        var loc, imgCaptures, xdefault, ydefault, xRect, yRect, x1, y1, crops, topCrops, i, croptemp, toptemp, j, value, lastValueList, rewardreader, valueStr, valueList, i, lastValueStr, i, prevValue, itemResults, promises, notBlank, i, itemtemp, j, _a, _b, _c, _d, i, newImg, loc2, x, y, row, col, lastcrop, lastresult, promises2, _e, _f, comparison, itemResultsNoBlanks, i_1, lsHistory, lagDetectValue, equalArrays, i, quantResults, i, j, _g, _h, _j, _k, _l, _m, i, j, i, j, nodevar, imgvar, quantvar, e_1;
        return __generator(this, function (_o) {
            switch (_o.label) {
                case 0:
                    // If 20 rerolls..., default
                    // Adjust this if you want to add more rerolls.
                    if (lagCounter == 20) {
                        autoDisableCheckAuto(event);
                        if (window.alt1) {
                            alt1.overLayClearGroup("overlays");
                            alt1.overLayClearGroup("lag");
                            alt1.overLayClearGroup("rect");
                            alt1.overLaySetGroup("overlays");
                            alt1.overLayTextEx("Too much lag or back to back loot detected.\n\n        Autocapture has been automatically\nturned off. Manually capture this clue or turn\n         autocapture back on and try again", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 80, 80), 20, Math.round(alt1.rsWidth / 2), 200, 50000, "", true, true);
                        }
                        lagCounter = 0;
                        return [2 /*return*/];
                    }
                    _o.label = 1;
                case 1:
                    _o.trys.push([1, 26, , 27]);
                    loc = void 0;
                    imgCaptures = [img.findSubimage(imgs.zamorakChest),
                        [undefined] // Add Legacy back maybe eventually?
                    ];
                    if (imgCaptures[0][0] !== undefined) {
                        loc = imgCaptures[0];
                        if (seeConsoleLogs)
                            console.log("Non-legacy window");
                        legacy = false;
                    }
                    else if (imgCaptures[1][0] !== undefined) {
                        loc = imgCaptures[1];
                        if (seeConsoleLogs)
                            console.log("legacy window");
                        legacy = true;
                    }
                    else {
                        return [2 /*return*/];
                    }
                    xdefault = void 0;
                    ydefault = void 0;
                    xRect = void 0;
                    yRect = void 0;
                    if (!legacy) {
                        xdefault = loc[0].x - 10;
                        ydefault = loc[0].y + 29;
                        xRect = loc[0].x - 27;
                        yRect = loc[0].y - 13;
                    }
                    else {
                        xdefault = loc[0].x - 154;
                        ydefault = loc[0].y + 29;
                        xRect = loc[0].x - 172;
                        yRect = loc[0].y - 13;
                    }
                    x1 = xdefault;
                    y1 = ydefault;
                    crops = [];
                    topCrops = [];
                    for (i = 0; i < 4; i++) {
                        croptemp = new Array(8);
                        toptemp = new Array(8);
                        for (j = 0; j < 8; j++) {
                            croptemp[j] = (img.toData(x1, y1, 32, 32));
                            toptemp[j] = (img.toData(x1, y1 + 1, 32, 8));
                            x1 += 32 + 23;
                        }
                        crops.push(croptemp);
                        topCrops.push(toptemp);
                        x1 = xdefault;
                        y1 += 32 + 14;
                    }
                    value = 0;
                    lastValueList = [];
                    try {
                        rewardreader = new _scripts_ZamorakReader__WEBPACK_IMPORTED_MODULE_2__["default"]();
                        rewardreader.pos = _scripts_ModalUIReader__WEBPACK_IMPORTED_MODULE_3__.ModalUIReader.find()[0]; // For these two functions
                        value = rewardreader.read(img).value;
                        valueStr = value.toString();
                        valueList = [];
                        for (i = valueStr.length - 1; i > 0; i--) {
                            valueList.push(valueStr);
                            valueStr = valueStr.slice(0, -1);
                        }
                        lastValueStr = lastValue.toString();
                        for (i = lastValueStr.length - 1; i > 0; i--) {
                            lastValueList.push(lastValueStr);
                            lastValueStr = lastValueStr.slice(0, -1);
                        }
                    }
                    catch (e) {
                        return [2 /*return*/];
                    }
                    if (autobool == true) {
                        if (lastValue == 0) {
                            if (seeConsoleLogs)
                                console.log("value is zero");
                        }
                        else if (value == lastValue) {
                            return [2 /*return*/];
                        }
                        else if ( /*valueList.includes(lastValue.toString()) ||*/lastValueList.includes(value.toString())) {
                            return [2 /*return*/];
                        }
                    }
                    alt1.overLayClearGroup("overlays");
                    alt1.overLaySetGroup("rect");
                    alt1.overLayRect(alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0), xRect, yRect, imgs.zamorakChest.width + 345, imgs.zamorakChest.height + 291, 60000, 2);
                    prevValue = lastValue;
                    lastValue = value;
                    if (!lagDetected) {
                        alt1.overLayClearGroup("overlays");
                        alt1.overLayClearGroup("lag");
                        alt1.overLaySetGroup("lag");
                        alt1.overLayTextEx("Capturing rewards...", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0), 20, Math.round(alt1.rsWidth / 2), 200, 60000, "", true, true);
                    }
                    itemResults = [];
                    promises = [];
                    x1 = xdefault;
                    y1 = ydefault;
                    notBlank = false;
                    i = 0;
                    _o.label = 2;
                case 2:
                    if (!(i < 4)) return [3 /*break*/, 8];
                    itemtemp = [];
                    j = 0;
                    _o.label = 3;
                case 3:
                    if (!(j < 8)) return [3 /*break*/, 6];
                    if (window.alt1) {
                        alt1.overLayClearGroup("icon");
                        alt1.overLaySetGroup("icon");
                    }
                    if (displaybox) {
                        // Keep an eye on this in case it incorrectly gives numbers...
                        if (window.alt1) {
                            alt1.overLayRect(alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0), x1, y1, 32, 32, 1000, 1);
                            if (((i * 8) + j + 1) >= 20)
                                alt1.overLayText(((i * 8) + j + 1).toString(), alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0, 255), 18, x1 - 1, y1, 1000);
                            else if (((i * 8) + j + 1) >= 10)
                                alt1.overLayText(((i * 8) + j + 1).toString(), alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0, 255), 18, x1 - 3, y1, 1000);
                            else if (((i * 8) + j + 1) < 10)
                                alt1.overLayText(((i * 8) + j + 1).toString(), alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0, 255), 18, x1 + 5, y1, 1000);
                        }
                    }
                    x1 += 32 + 23;
                    _b = (_a = promises).push;
                    _d = (_c = itemtemp).push;
                    return [4 /*yield*/, compareItems(crops[i][j])];
                case 4:
                    _b.apply(_a, [_d.apply(_c, [_o.sent()])]);
                    console.log(itemtemp[j]);
                    if (localStorage.getItem("ZamorakLogger/lagDetect") == "true") {
                        if (itemtemp[j] == "Blank") {
                            notBlank = true;
                        }
                        else if (itemtemp[j] !== "Blank" && notBlank) {
                            //Do a thing. This detects whether there was a break or not.
                            if (window.alt1) {
                                alt1.overLayClearGroup("overlays");
                                alt1.overLayClearGroup("lag");
                                alt1.overLaySetGroup("lag");
                                alt1.overLayTextEx("Lag detected, rescanning...", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0), 20, Math.round(alt1.rsWidth / 2), 200, 1500, "", true, true);
                            }
                            lagDetected = true;
                            lastValue = 0;
                            lagCounter++;
                            capture(autobool);
                            return [2 /*return*/];
                        }
                    }
                    _o.label = 5;
                case 5:
                    j++;
                    return [3 /*break*/, 3];
                case 6:
                    itemResults.push(itemtemp);
                    x1 = xdefault;
                    y1 += 32 + 14;
                    _o.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 2];
                case 8:
                    if (!(localStorage.getItem("ZamorakLogger/lagDetect") == "true")) return [3 /*break*/, 15];
                    i = 0;
                    _o.label = 9;
                case 9:
                    if (!(i < itemResults.length)) return [3 /*break*/, 15];
                    if (!(itemResults[itemResults.length - 1] !== "Blank")) return [3 /*break*/, 10];
                    return [3 /*break*/, 15];
                case 10:
                    if (!(itemResults[i] !== "Blank")) return [3 /*break*/, 11];
                    return [3 /*break*/, 14];
                case 11:
                    if (seeConsoleLogs)
                        console.log(itemResults[i]);
                    newImg = alt1__WEBPACK_IMPORTED_MODULE_9__.captureHoldFullRs();
                    loc2 = void 0;
                    x = 0;
                    y = 0;
                    if (!legacy) {
                        loc2 = newImg.findSubimage(imgs.zamorakChest);
                    }
                    else {
                        loc2 = newImg.findSubimage(imgs.zamorakChest);
                    }
                    x = xdefault;
                    y = ydefault;
                    row = i / 4;
                    col = i % 8;
                    x += (32 + 23) * col;
                    y += (32 + 14) * row;
                    if (window.alt1) {
                        alt1.overLayClearGroup("overlays");
                        alt1.overLaySetGroup("overlays");
                        alt1.overLayTextEx("Checking last item for lag...", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0), 20, Math.round(alt1.rsWidth / 2), 170, 1000, "", true, true);
                        alt1.overLayClearGroup("icon");
                        alt1.overLaySetGroup("icon");
                        alt1.overLayRect(alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(125, 194, 33), x, y, 32, 32, 2000, 1);
                    }
                    lastcrop = newImg.toData(x - 1, loc2[0].y + 39, 32, 32);
                    lastresult = "";
                    promises2 = [];
                    _f = (_e = promises2).push;
                    return [4 /*yield*/, compareItems(lastcrop)];
                case 12:
                    _f.apply(_e, [lastresult = _o.sent()]);
                    return [4 /*yield*/, Promise.all(promises2)];
                case 13:
                    _o.sent();
                    if (seeConsoleLogs)
                        console.log(itemResults, i);
                    if (seeConsoleLogs)
                        console.log("Comparing", lastresult, "to", itemResults[i]);
                    comparison = true;
                    if (autobool) {
                        try {
                            itemResultsNoBlanks = [];
                            for (i_1 = 0; i_1 < itemResults.length; i_1++) {
                                if (itemResults[i_1] !== "Blank") {
                                    itemResultsNoBlanks.push(itemResults[i_1]);
                                }
                                else {
                                    break;
                                }
                            }
                            lsHistory = JSON.parse(localStorage.getItem("ZamorakLogger/History"))[JSON.parse(localStorage.getItem("ZamorakLogger/History")).length - 1][0];
                            if (seeConsoleLogs)
                                console.log("Checking arrays for equivalence:", JSON.parse(localStorage.getItem("ZamorakLogger/History"))[JSON.parse(localStorage.getItem("ZamorakLogger/History")).length - 1][0], itemResultsNoBlanks);
                            if (lsHistory.join(",") === itemResultsNoBlanks.join(",")) { // https://stackoverflow.com/a/6230314
                                if (seeConsoleLogs)
                                    console.log(lsHistory.join(","), "and", itemResultsNoBlanks.join(","), "are the same...");
                                if (seeConsoleLogs)
                                    console.log("They're the same. make it false.");
                                comparison = false;
                            }
                        }
                        catch (e) {
                            console.log("Something broke.", e);
                        }
                    }
                    lagDetectValue = new _scripts_ZamorakReader__WEBPACK_IMPORTED_MODULE_2__["default"]();
                    lagDetectValue.pos = _scripts_ModalUIReader__WEBPACK_IMPORTED_MODULE_3__.ModalUIReader.find()[0];
                    if (!comparison) {
                        if (window.alt1) {
                            alt1.overLayClearGroup("overlays");
                            alt1.overLayClearGroup("lag");
                            alt1.overLaySetGroup("lag");
                            alt1.overLayTextEx("Lag detected, rescanning...", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0), 20, Math.round(alt1.rsWidth / 2), 200, 60000, "", true, true);
                        }
                        lagDetected = true;
                        lastValue = 0;
                        lagCounter++;
                        capture(autobool);
                        return [2 /*return*/];
                    } // TODO: Put some console log test statements in here...
                    else if (lastresult === itemResults[i]) {
                        return [3 /*break*/, 15];
                    }
                    else if (parseInt(lastValueList[0]) === parseInt("lagDetectValue")) {
                        return [3 /*break*/, 15];
                    }
                    else {
                        if (window.alt1) {
                            alt1.overLayClearGroup("overlays");
                            alt1.overLayClearGroup("lag");
                            alt1.overLaySetGroup("lag");
                            alt1.overLayTextEx("Lag detected, rescanning...", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0), 20, Math.round(alt1.rsWidth / 2), 200, 60000, "", true, true);
                        }
                        lagDetected = true;
                        lastValue = 0;
                        lagCounter++;
                        capture(autobool);
                        return [2 /*return*/];
                    }
                    _o.label = 14;
                case 14:
                    i++;
                    return [3 /*break*/, 9];
                case 15: return [4 /*yield*/, Promise.all(promises)];
                case 16:
                    _o.sent();
                    lagCounter = 0;
                    equalArrays = true;
                    if (autobool) {
                        if (lastItems.length == 0) {
                            if (seeConsoleLogs)
                                console.log("last item length is 0. Pass...");
                        }
                        else {
                            for (i = 0; i < itemResults.length; i++) {
                                if (itemResults[i] !== lastItems[i]) {
                                    equalArrays = false;
                                    if (seeConsoleLogs)
                                        console.log("Equal arrays false");
                                }
                            }
                            if (prevValue == value && !equalArrays) {
                                if (window.alt1) {
                                    alt1.overLayClearGroup("overlays");
                                    alt1.overLaySetGroup("overlays");
                                    alt1.overLayTextEx("                 Casket misread.\nPause Autocapture (if on) and restart\n  plugin or rollback, and try again.", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 80, 80), 20, Math.round(alt1.rsWidth / 2), 200, 5000, "", true, true);
                                }
                                lastValue = prevValue;
                                if (seeConsoleLogs)
                                    console.log("equal arrays is false, setting last value to previous value");
                                return [2 /*return*/];
                            }
                        }
                    }
                    quantResults = [];
                    promises = [];
                    i = 0;
                    _o.label = 17;
                case 17:
                    if (!(i < 4)) return [3 /*break*/, 22];
                    j = 0;
                    _o.label = 18;
                case 18:
                    if (!(j < 8)) return [3 /*break*/, 21];
                    if (itemResults[i][j] == "Blank") {
                        return [3 /*break*/, 21];
                    }
                    _h = (_g = promises).push;
                    _k = (_j = quantResults).push;
                    return [4 /*yield*/, readQuantities(topCrops[i][j])];
                case 19:
                    _h.apply(_g, [_k.apply(_j, [_o.sent()])]);
                    _o.label = 20;
                case 20:
                    j++;
                    return [3 /*break*/, 18];
                case 21:
                    i++;
                    return [3 /*break*/, 17];
                case 22: return [4 /*yield*/, Promise.all(promises)];
                case 23:
                    _o.sent();
                    if (seeConsoleLogs)
                        (quantResults);
                    // Send it to the LS!
                    promises = [];
                    console.log(itemResults, quantResults, value);
                    _m = (_l = promises).push;
                    return [4 /*yield*/, submitToLS(itemResults, quantResults, value)];
                case 24:
                    _m.apply(_l, [_o.sent()]);
                    return [4 /*yield*/, Promise.all(promises)];
                case 25:
                    _o.sent();
                    // Record data for last casket
                    lastItems = itemResults.slice();
                    lastQuants = quantResults.slice();
                    addHistoryToLs(lastValue, lastItems, lastQuants, "reward");
                    // Put the items and quantites on the display!
                    document.getElementById("rewards_value").textContent = value.toLocaleString("en-US");
                    for (i = 0; i < 4; i++) {
                        for (j = 0; j < 8; j++) {
                            if (rewardSlots[(i * 8) + j] == undefined) {
                                break;
                            }
                            document.getElementById(rewardSlots[(i * 8) + j]).textContent = "";
                        }
                    }
                    for (i = 0; i < 4; i++) {
                        for (j = 0; j < 8; j++) {
                            // Displaying in Rewards Capture
                            if (itemResults[i][j] == "Blank") {
                                break;
                            }
                            nodevar = document.createElement("itembox");
                            imgvar = document.createElement("img");
                            quantvar = document.createElement("span");
                            nodevar = nodeMaker(parseInt(quantResults[(i * 8) + j]), itemResults[i][j], "recent");
                            imgvar = imgMaker(itemResults[i][j], parseInt(quantResults[(i * 8) + j]));
                            quantvar = quantMaker(parseInt(quantResults[(i * 8) + j]));
                            nodevar.append(quantvar);
                            nodevar.append(imgvar);
                            document.getElementById(rewardSlots[(i * 8) + j]).appendChild(nodevar);
                        }
                    }
                    //Show it on the screen!
                    lootDisplay();
                    //Display the victory screen!!!
                    if (window.alt1) {
                        alt1.overLayClearGroup("overlays");
                        alt1.overLayClearGroup("rect");
                        alt1.overLayClearGroup("lag");
                        alt1.overLaySetGroup("overlays");
                        alt1.overLayTextEx("Barrows rewards captured successfully!", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(100, 255, 100), 20, Math.round(alt1.rsWidth / 2), 200, 4000, "", true, true);
                        alt1.overLayRect(alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(0, 255, 0), xRect, yRect, imgs.zamorakChest.width + 345, imgs.zamorakChest.height + 291, 1000, 2);
                    }
                    lagDetected = false;
                    return [3 /*break*/, 27];
                case 26:
                    e_1 = _o.sent();
                    if (window.alt1) {
                        alt1.overLayClearGroup("overlays");
                        alt1.overLayClearGroup("lag");
                        alt1.overLayClearGroup("rect");
                        alt1.overLaySetGroup("overlays");
                        alt1.overLayTextEx("        A crash occured.\n\n     Remove any obstructions, \n check tier, open a reward casket, \nreload plugin or clear database and try again", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 80, 80), 20, Math.round(alt1.rsWidth / 2), 200, 5000, "", true, true);
                    }
                    buttonEnabler();
                    console.log(e_1);
                    throw (e_1);
                case 27: return [2 /*return*/];
            }
        });
    });
}
function compareItems(item) {
    return __awaiter(this, void 0, void 0, function () {
        var matches, imgdata, found, promises, _loop_2, i, promises, i, promises, total, i, average, precision, i, _loop_3, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    matches = [];
                    if (!legacy) {
                        matches = listOfItemsAllArray.slice();
                    }
                    else { // Legacy works. But I don't test with it often. I think its okay...
                        matches = listOfItemsLegacyAllArray.slice();
                    }
                    return [4 /*yield*/, resemblejs_compareImages__WEBPACK_IMPORTED_MODULE_0___default()(item, matches[0][1], { output: {}, ignore: "less" })];
                case 1:
                    imgdata = _a.sent();
                    matches[0][2] = imgdata.rawMisMatchPercentage;
                    if (matches[0][2] == 0.00) {
                        return [2 /*return*/, "Blank"];
                    }
                    matches.shift(); // Remove blank from the list
                    found = [];
                    if (!(localStorage.getItem("ZamorakLogger/Algorithm") == "resemblejs")) return [3 /*break*/, 7];
                    found = matches[0];
                    promises = [];
                    _loop_2 = function (i) {
                        var _b, _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    _c = (_b = promises).push;
                                    return [4 /*yield*/, resemblejs_compareImages__WEBPACK_IMPORTED_MODULE_0___default()(item, matches[i][1], { output: {}, ignore: "less" }).then(function (data) {
                                            matches[i][2] = data.rawMisMatchPercentage;
                                        })];
                                case 1:
                                    _c.apply(_b, [_d.sent()]);
                                    if (found[2] > matches[i][2]) {
                                        found = matches[i];
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < matches.length)) return [3 /*break*/, 5];
                    return [5 /*yield**/, _loop_2(i)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5: return [4 /*yield*/, Promise.all(promises)];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 16];
                case 7:
                    if (!(localStorage.getItem("ZamorakLogger/Algorithm") == "pixelmatch")) return [3 /*break*/, 9];
                    /* List of items that do not identify in pure PixelMatch
                        - Huge Plated Adamant Salvage identifies as Huge Plated Rune Salvage when using TwoPlus or All
                    */
                    found = matches[0];
                    promises = [];
                    for (i = 0; i < matches.length; i++) {
                        promises.push(matches[i][2] = pixelmatch__WEBPACK_IMPORTED_MODULE_1___default()(item.data, matches[i][3].data, null, item.width, item.height, { includeAA: true, threshold: 0.1 }));
                        if (found[2] > matches[i][2]) {
                            found = matches[i];
                        }
                    }
                    return [4 /*yield*/, Promise.all(promises)];
                case 8:
                    _a.sent();
                    return [3 /*break*/, 16];
                case 9:
                    if (!(localStorage.getItem("ZamorakLogger/Algorithm") == "hybrid")) return [3 /*break*/, 16];
                    promises = [];
                    total = 0;
                    for (i = 0; i < matches.length; i++) {
                        promises.push(matches[i][2] = pixelmatch__WEBPACK_IMPORTED_MODULE_1___default()(item.data, matches[i][3].data, null, item.width, item.height, { includeAA: true, threshold: 0.1 }));
                        total += matches[i][2];
                    }
                    average = total / matches.length;
                    precision = parseFloat(localStorage.getItem("ZamorakLogger/hybridPrecision"));
                    return [4 /*yield*/, Promise.all(promises)];
                case 10:
                    _a.sent();
                    for (i = matches.length - 1; i >= 0; i--) {
                        if (matches[i][2] > (average * precision)) {
                            matches.splice(i, 1);
                        }
                    }
                    //Now we find the correct item with ResembleJS!
                    promises = [];
                    found = matches[0];
                    _loop_3 = function (i) {
                        var _e, _f;
                        return __generator(this, function (_g) {
                            switch (_g.label) {
                                case 0:
                                    _f = (_e = promises).push;
                                    return [4 /*yield*/, resemblejs_compareImages__WEBPACK_IMPORTED_MODULE_0___default()(item, matches[i][1], { output: {}, ignore: "less" }).then(function (data) {
                                            matches[i][2] = data.rawMisMatchPercentage;
                                        })];
                                case 1:
                                    _f.apply(_e, [_g.sent()]);
                                    if (found[2] > matches[i][2]) {
                                        found = matches[i];
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _a.label = 11;
                case 11:
                    if (!(i < matches.length)) return [3 /*break*/, 14];
                    return [5 /*yield**/, _loop_3(i)];
                case 12:
                    _a.sent();
                    _a.label = 13;
                case 13:
                    i++;
                    return [3 /*break*/, 11];
                case 14: return [4 /*yield*/, Promise.all(promises)];
                case 15:
                    _a.sent();
                    _a.label = 16;
                case 16: return [2 /*return*/, found[0]];
            }
        });
    });
}
function readQuantities(item) {
    return __awaiter(this, void 0, void 0, function () {
        var itemCan, itemCon, itemImg, pixels, pixarr, pixeldata, i, arr2, j, vals, pixelCount, streak, longestStreak, yellowInCol, noYellowStreak, numbers, i, j;
        return __generator(this, function (_a) {
            itemCan = document.createElement("canvas");
            itemCon = itemCan.getContext("2d");
            itemCan.width = item.width;
            itemCan.height = item.height;
            itemCon.putImageData(item, 0, 0);
            itemImg = new Image();
            itemImg.src = itemCan.toDataURL("image/png");
            itemCon.drawImage(itemImg, 0, 0);
            pixels = itemCon.getImageData(0, 0, item.width, item.height);
            pixarr = [];
            pixeldata = 0;
            for (i = 0; i < 8; i++) {
                arr2 = [];
                for (j = 0; j < 32; j++) {
                    vals = { r: pixels.data[pixeldata], g: pixels.data[pixeldata + 1], b: pixels.data[pixeldata + 2], a: pixels.data[pixeldata + 3] };
                    pixeldata += 4;
                    arr2.push(vals);
                }
                pixarr.push(arr2);
            }
            pixelCount = 0;
            streak = 0;
            longestStreak = 0;
            yellowInCol = false;
            noYellowStreak = 0;
            numbers = "";
            for (i = 0; i < pixarr[0].length; i++) {
                if (noYellowStreak == 3) {
                    break;
                }
                for (j = 0; j < pixarr.length; j++) {
                    if (pixarr[j][i].r == 255 && pixarr[j][i].g == 255 && pixarr[j][i].b == 0 || // Yellow, Every screen has this
                        pixarr[j][i].r == 255 && pixarr[j][i].g == 254 && pixarr[j][i].b == 0 || // Very slightly darker yellow, a screenie had this...
                        pixarr[j][i].r == 254 && pixarr[j][i].g == 254 && pixarr[j][i].b == 0 || // Very slightly darker yellow, a screenie had this...
                        pixarr[j][i].r == 253 && pixarr[j][i].g == 253 && pixarr[j][i].b == 0 || // Slightly darker yellow, for safety
                        pixarr[j][i].r == 255 && pixarr[j][i].g == 255 && pixarr[j][i].b == 255) { // White, elites and masters only
                        pixelCount++;
                        streak++;
                        noYellowStreak = 0;
                        yellowInCol = true;
                        if (streak > longestStreak) {
                            longestStreak = streak;
                        }
                    }
                    else {
                        streak = 0;
                    }
                }
                if (pixelCount == 0) {
                    noYellowStreak++;
                }
                else if (yellowInCol == false) {
                    if (pixelCount == 11) {
                        if (longestStreak == 3) {
                            numbers += "7";
                        }
                        else { // 9
                            numbers += "1";
                        }
                    }
                    else if (pixelCount == 13) {
                        if (longestStreak == 3) {
                            numbers += "3";
                        }
                        else { //if 6
                            numbers += "4";
                        }
                    }
                    else if (pixelCount == 14) {
                        numbers += "0";
                    }
                    else if (pixelCount == 15) {
                        if (longestStreak == 3) {
                            numbers += "2";
                        }
                        else if (longestStreak == 4) {
                            numbers += "5";
                        }
                        else if (longestStreak == 7) {
                            numbers += "9";
                        }
                        else { //if 8
                            numbers += "000";
                            pixelCount = 0;
                            break;
                        }
                    }
                    else if (pixelCount == 18) {
                        numbers += "6";
                    }
                    else { // if pixelCount == 19
                        numbers += "8";
                    }
                    longestStreak = 0;
                    pixelCount = 0;
                    noYellowStreak++;
                }
                yellowInCol = false;
            }
            if (pixelCount > 5) {
                numbers += "0";
            }
            if (numbers != "") {
                return [2 /*return*/, numbers];
            }
            else {
                return [2 /*return*/, "1"];
            }
            return [2 /*return*/];
        });
    });
}
function submitToLS(item, quant, value) {
    return __awaiter(this, void 0, void 0, function () {
        var i, j, tempQuant;
        return __generator(this, function (_a) {
            //Add items to database
            if (seeConsoleLogs)
                console.log("Adding to database...");
            console.log(quant);
            for (i = 0; i < 4; i++) {
                for (j = 0; j < 8; j++) {
                    // If you get null or undefined here, check if one of your rewards doesn't exist in LocalStorage or LocalStorageInit
                    // Or maybe the name might be incorrectly written in, idk
                    // console.log("checking if in array", item[i]);
                    if (item[i][j] == "Blank" || item[i][j] == undefined) {
                        break;
                    }
                    tempQuant = quant[(i * 8) + j].slice();
                    console.log(tempQuant);
                    if (quant[(i * 8) + j].includes("k")) {
                        tempQuant = tempQuant.slice(0, -1);
                        tempQuant += "000";
                    }
                    console.log(item[i][j], items[item[i][j]].quantity, tempQuant);
                    items[item[i][j]].quantity = parseInt(items[item[i][j]].quantity) + parseInt(tempQuant);
                    updateItems();
                    console.log(items[item[i][j]].quantity);
                }
            }
            // Increase value and count
            localStorage.setItem("ZamorakLogger/Value", JSON.stringify((JSON.parse(localStorage.getItem("ZamorakLogger/Value")) + value)));
            localStorage.setItem("ZamorakLogger/Count", JSON.stringify((JSON.parse(localStorage.getItem("ZamorakLogger/Count")) + 1)));
            return [2 /*return*/, true];
        });
    });
}
function addHistoryToLs(value, items, quants, reward) {
    return __awaiter(this, void 0, void 0, function () {
        var itemsArr, i, j, i, currentDateTime, previous, temp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    itemsArr = [];
                    for (i = 0; i < items.length; i++) {
                        for (j = 0; j < items[i].length; j++) {
                            console.log("Checking if", items[i][j], "is equal to", "Blank");
                            if (items[i][j] !== "Blank" || items[i][j] != undefined) {
                                itemsArr.push(items[i][j]);
                            }
                        }
                    }
                    for (i = 0; i < quants.length; i++) {
                        if (quants[i].includes("k")) {
                            quants[i] = quants[i].slice(0, -1);
                            quants[i] += "000";
                        }
                    }
                    return [4 /*yield*/, dateGetter()];
                case 1:
                    currentDateTime = _a.sent();
                    previous = [itemsArr, quants, value, reward, localStorage.getItem("ZamorakLogger/Count"), localStorage.getItem("ZamorakLogger/PrimaryKeyHistory"), currentDateTime];
                    temp = JSON.parse(localStorage.getItem("ZamorakLogger/History"));
                    temp.push(previous);
                    localStorage.setItem("ZamorakLogger/History", JSON.stringify(temp));
                    localStorage.setItem("ZamorakLogger/PrimaryKeyHistory", JSON.stringify(parseInt(localStorage.getItem("ZamorakLogger/PrimaryKeyHistory")) + 1));
                    return [4 /*yield*/, historyClear()];
                case 2:
                    _a.sent();
                    historyInit();
                    return [2 /*return*/];
            }
        });
    });
}
function lootDisplay() {
    //Set Number of clues and Current and Average values
    document.getElementById("number_of_rewards").textContent = parseInt(JSON.parse(localStorage.getItem("ZamorakLogger/Count"))).toLocaleString("en-US");
    document.getElementById("value_of_rewards").textContent = parseInt(JSON.parse(localStorage.getItem("ZamorakLogger/Value"))).toLocaleString("en-US");
    if (parseInt(JSON.parse(localStorage.getItem("ZamorakLogger/Value"))) != 0) {
        document.getElementById("average_of_rewards").textContent = Math.round(parseInt(JSON.parse(localStorage.getItem("ZamorakLogger/Value"))) / parseInt(JSON.parse(localStorage.getItem("ZamorakLogger/Count")))).toLocaleString("en-US");
    }
    else {
        document.getElementById("average_of_rewards").textContent = "0";
    }
    //Set the icons in the tabs
    tabDisplay();
}
function tabDisplay() {
    var keys = Object.keys(items);
    var divs = document.getElementsByClassName("loot_display");
    for (var i = 0; i < divs.length; i++) {
        divs[i].textContent = "";
    }
    for (var i = 0; i < keys.length; i++) {
        // TODO: Interesting tidbit: Comment out this if block to display every item, 
        // but quantities will be undefined for the given tier if it doesn't exist in it.
        if (items[keys[i]].quantity == undefined || items[keys[i]].quantity == 0) {
            continue;
        }
        console.log(keys[i]);
        var ele = document.getElementById(items[keys[i]].tab + "_loot");
        var nodevar = document.createElement("itembox");
        var imgvar = document.createElement("img");
        var quantvar = document.createElement("span");
        nodevar = nodeMaker(parseInt(items[keys[i]].quantity), keys[i], "tab");
        nodevar.style.order = orderChecker(parseInt(items[keys[i]].order), keys[i]).toString();
        // This if else only exists for when I comment out the above if block.
        // Nice for viewing all of the loot.
        if (items[keys[i]].quantity == undefined) {
            quantvar = quantMaker(0);
            imgvar = imgMaker(keys[i], 0);
        }
        else {
            quantvar = quantMaker(items[keys[i]].quantity);
            imgvar = imgMaker(keys[i], items[keys[i]].quantity);
        }
        nodevar.append(quantvar);
        nodevar.append(imgvar);
        ele.append(nodevar);
    }
}
function historyClear() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            removeChildNodes(document.getElementById("history_body"));
            return [2 /*return*/];
        });
    });
}
function historyInit() {
    var lsHistory = JSON.parse(localStorage.getItem("ZamorakLogger/History"));
    var quantity = document.getElementById("history_quantity");
    quantity.textContent = localStorage.getItem("ZamorakLogger/HistoryDisplayLimit");
    if (lsHistory.length == 0) {
        var ele = document.getElementById("history_body");
        var container = document.createElement("div");
        container.textContent = "There's nothing to display. Start scanning!";
        container.setAttribute("class", "nothingToDisplayContainer");
        ele.append(container);
    }
    else {
        var index = parseInt(localStorage.getItem("ZamorakLogger/Count"));
        var limit = 0;
        for (var i = lsHistory.length - 1; i >= 0; i--) { //Navigating lsHistory
            if (limit < parseInt(localStorage.getItem("ZamorakLogger/HistoryDisplayLimit"))) {
                var temp = lsHistory[i];
                var ele = document.getElementById("history_body");
                var container = document.createElement("div");
                container.setAttribute("class", "historyDisplayContainer");
                container.setAttribute("id", "container" + temp[5]);
                var dateBox = document.createElement("div");
                var dateImg = document.createElement("div");
                dateBox.setAttribute("class", "dateBox");
                dateImg.setAttribute("class", "dateImage");
                dateImg.setAttribute("title", "Date Captured: " + temp[6]);
                dateBox.append(dateImg);
                container.append(dateBox);
                if (temp[3].includes(" [C] ")) {
                    var customSpan = document.createElement("span");
                    customSpan.setAttribute("class", "customSpan");
                    customSpan.setAttribute("title", "Custom clue manually inserted.");
                    customSpan.textContent = " [C] ";
                    var countText = "Barrows reward: " + index;
                    var count = document.createElement("div");
                    count.innerHTML = countText;
                    count.setAttribute("class", "historyCount");
                    count.append(customSpan);
                    container.append(count);
                }
                else {
                    var count = document.createElement("div");
                    count.textContent = "Barrows reward: " + index;
                    count.setAttribute("class", "historyCount");
                    container.append(count);
                }
                var value = document.createElement("div");
                value.textContent = "Reward Value: " + temp[2].toLocaleString("en-US");
                value.setAttribute("class", "historyValue");
                container.append(value);
                var TPcheck = false;
                for (var j = 0; j < 4; j++) { // Navigating temp
                    for (var k = 0; k < 8; k++) {
                        if (temp[0][(j * 8) + k] == "Blank" || temp[0][(j * 8) + k] == undefined) {
                            if (TPcheck) {
                                break;
                            }
                            for (var l = (j * 8) + k; l < cap; l++) {
                                var nodevar_1 = document.createElement("itembox");
                                var imgvar_1 = document.createElement("img");
                                var quantvar_1 = document.createElement("span");
                                imgvar_1 = imgMaker("Transparent", temp[1][(j * 8) + k]);
                                nodevar_1.setAttribute("class", "node_history");
                                nodevar_1.removeAttribute("title");
                                quantvar_1.textContent = "";
                                nodevar_1.append(imgvar_1);
                                nodevar_1.append(quantvar_1);
                                container.append(nodevar_1);
                            }
                            TPcheck = true;
                            break;
                        }
                        var nodevar = document.createElement("itembox");
                        var imgvar = document.createElement("img");
                        var quantvar = document.createElement("span");
                        // Note for later. Figure out why insert isnt displaying properly...
                        if (temp[1][(j * 8) + k] === undefined) {
                            imgvar = imgMaker("Transparent", temp[1][(j * 8) + k]);
                            nodevar.setAttribute("class", "node_history");
                            nodevar.removeAttribute("title");
                            quantvar.textContent = "";
                        }
                        else {
                            imgvar = imgMaker(temp[0][(j * 8) + k], temp[1][(j * 8) + k]);
                            nodevar = nodeMaker(parseInt(temp[1][(j * 8) + k]), temp[0][(j * 8) + k], "history");
                            quantvar = quantMaker(temp[1][(j * 8) + k]);
                        }
                        nodevar.append(imgvar);
                        nodevar.append(quantvar);
                        container.append(nodevar);
                    }
                }
                var buttonbox = document.createElement("div");
                var button = document.createElement("div");
                buttonbox.setAttribute("class", "buttonboxHistory");
                buttonbox.setAttribute("id", "container" + temp[5] + "buttonbox");
                button.setAttribute("class", "nisbutton historyButtonStyle");
                button.setAttribute("id", "container" + temp[5] + "button");
                button.setAttribute("onClick", "TestApp.rollbackVeri(\"container" + temp[5] + "button\")");
                button.textContent = "Delete";
                buttonbox.append(button);
                container.append(buttonbox);
                ele.append(container);
                index--;
                limit++;
            }
            else {
                break;
            }
        }
        if (index == parseInt(localStorage.getItem("ZamorakLogger/Count"))) {
            var ele = document.getElementById("history_body");
            var container = document.createElement("div");
            container.textContent = "There's nothing to display. Start scanning!";
            container.setAttribute("class", "nothingToDisplayContainer");
            ele.append(container);
        }
    }
}
function rollbackVeri(id) {
    var buttonbox = document.getElementById(id + "box");
    var button = document.getElementById(id);
    buttonbox.removeChild(button);
    var buttonYes = document.createElement("div");
    var buttonNo = document.createElement("div");
    buttonbox.setAttribute("class", "buttonBoxHistoryVerify");
    buttonYes.setAttribute("class", "nisbutton buttonVerif");
    buttonYes.setAttribute("onclick", "TestApp.rollbackYes(\"" + id + "\")");
    buttonYes.textContent = "Yes";
    buttonNo.setAttribute("class", "nisbuttonblue buttonVerif");
    buttonNo.setAttribute("onclick", "TestApp.rollbackNo(\"" + id + "\")");
    buttonNo.textContent = "No";
    buttonbox.append(buttonYes, buttonNo);
}
function rollbackYes(id) {
    if (window.alt1) {
        alt1.overLayClearGroup("overlays");
        alt1.overLaySetGroup("overlays");
        alt1.overLayTextEx("Rolling back reward...", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0), 20, Math.round(alt1.rsWidth / 2), 200, 2000, "", true, true);
    }
    if (seeConsoleLogs)
        console.log("Rolling back reward from history...");
    var container = document.getElementById(id.replace("button", ""));
    container.remove();
    var pKey = parseInt(id.replace("container", "").replace("button", ""));
    var lsHistory = JSON.parse(localStorage.getItem("ZamorakLogger/History"));
    var temp = [];
    for (var i = 0; i < lsHistory.length; i++) {
        if (lsHistory[i][5] == pKey) {
            temp = lsHistory[i];
            lsHistory.splice(i, 1);
            localStorage.setItem("ZamorakLogger/History", JSON.stringify(lsHistory));
            break;
        }
    }
    for (var i = 0; i < temp[0].length; i++) {
        console.log(temp[0][i]);
        if (temp[0][i] == "Blank") {
            break;
        }
        items[temp[0][i]].quantity = items[temp[0][i]].quantity - parseInt(temp[1][i]);
        updateItems();
    }
    // Decrease value and count
    localStorage.setItem("ZamorakLogger/Value", JSON.stringify(JSON.parse(localStorage.getItem("ZamorakLogger/Value")) - temp[2]));
    localStorage.setItem("ZamorakLogger/Count", JSON.stringify(JSON.parse(localStorage.getItem("ZamorakLogger/Count")) - 1));
    if (seeConsoleLogs)
        console.log("Removed", temp, ":", pKey, "from LS");
    if (pKey == ((parseInt(localStorage.getItem("ZamorakLogger/PrimaryKeyHistory"))) - 1)) {
        document.getElementById("rewards_value").textContent = "0";
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 8; j++) {
                if (rewardSlots[(i * 8) + j] == undefined) {
                    break;
                }
                document.getElementById(rewardSlots[(i * 8) + j]).textContent = "";
            }
        }
    }
    var historyCount = document.getElementsByClassName("historyCount");
    var index = parseInt(localStorage.getItem("ZamorakLogger/Count"));
    for (var i = 0; i < parseInt(localStorage.getItem("ZamorakLogger/Count")); i++) {
        if (i >= parseInt(localStorage.getItem("ZamorakLogger/RollbackDisplayLimit"))) {
            break;
        }
        if (historyCount[i] == undefined) {
            continue;
        }
        historyCount[i].textContent = "Barrows reward: " + index;
        index--;
    }
    historyClear();
    historyInit();
    lootDisplay();
    if (window.alt1) {
        alt1.overLayClearGroup("overlays");
        alt1.overLaySetGroup("overlays");
        alt1.overLayTextEx("Previous rewards rolled back successfully!", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(100, 255, 100), 20, Math.round(alt1.rsWidth / 2), 200, 2000, "", true, true);
    }
}
function rollbackNo(id) {
    var buttonbox = document.getElementById(id + "box");
    removeChildNodes(buttonbox);
    buttonbox.setAttribute("class", "buttonboxHistory");
    var button = document.createElement("div");
    button.setAttribute("class", "nisbutton historyButtonStyle");
    button.setAttribute("id", id);
    button.setAttribute("onClick", "TestApp.rollbackVeri(\"" + id + "\")");
    button.textContent = "Delete";
    buttonbox.append(button);
}
function insertInitEx() {
    insertInit();
}
function insertInit() {
    return __awaiter(this, void 0, void 0, function () {
        var keys, list, i, itemBoxes, quantBoxes, valueBox, i, j, option;
        return __generator(this, function (_a) {
            keys = Object.keys(items);
            list = [["Blank", "~Nothing~", 0]];
            for (i = 0; i < keys.length; i++) {
                list.push([keys[i], keys[i], items[keys[i]].order]);
            }
            list.sort(function (a, b) {
                if (a[2] === b[2])
                    return 0;
                else
                    return (a[2] < b[2]) ? -1 : 1;
            });
            itemBoxes = document.getElementsByClassName("items");
            quantBoxes = document.getElementsByClassName("insert_text");
            valueBox = document.getElementById("value_input");
            valueBox.value = "0";
            for (i = 0; i < itemBoxes.length; i++) {
                removeChildNodes(itemBoxes[i]);
                quantBoxes[i].value = "0";
                for (j = 0; j < list.length; j++) {
                    option = document.createElement("option");
                    option.value = list[j][0].toString();
                    option.textContent = list[j][1].toString();
                    option.setAttribute("class", "insert_options");
                    itemBoxes[i].append(option);
                }
            }
            return [2 /*return*/];
        });
    });
}
function fetchFromGE() {
    return __awaiter(this, void 0, void 0, function () {
        var items, quants, itemDivs, quantDivs, i, prices, _loop_4, i, grandTotal, i, ele;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (window.alt1) {
                        alt1.overLayClearGroup("overlays");
                        alt1.overLaySetGroup("overlays");
                        alt1.overLayTextEx("Fetching prices from GE...", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0), 20, Math.round(alt1.rsWidth / 2), 200, 40000, "", true, true);
                    }
                    items = [];
                    quants = [];
                    itemDivs = document.getElementsByClassName("items");
                    quantDivs = document.getElementsByClassName("insert_text");
                    for (i = 0; i < itemDivs.length; i++) {
                        if (itemDivs[i].options[itemDivs[i].selectedIndex].value == "Blank") {
                            continue;
                        }
                        // OpenLogger relics.
                        if (["Saradomin page", "Guthix page", "Zamorak page", "Armadyl page", "Bandos page", "Ancient page"].includes(itemDivs[i].options[itemDivs[i].selectedIndex].value)) {
                            items.push((itemDivs[i].options[itemDivs[i].selectedIndex].value) + " 1");
                        }
                        else if (["Dragon platelegs-skirt ornament kit (or)", "Dragon platelegs-skirt ornament kit (sp)"].includes(itemDivs[i].options[itemDivs[i].selectedIndex].value)) {
                            items.push((itemDivs[i].options[itemDivs[i].selectedIndex].value).replace("-", "/"));
                        }
                        else {
                            items.push((itemDivs[i].options[itemDivs[i].selectedIndex].value));
                        }
                        quants.push(parseInt(quantDivs[i].value));
                    }
                    if (seeConsoleLogs)
                        console.log("Fetched items from GE are", items, "quants are", quants);
                    if (items.length == 0) {
                        if (window.alt1) {
                            alt1.overLayClearGroup("overlays");
                            alt1.overLaySetGroup("overlays");
                            alt1.overLayTextEx("Nothing selected to fetch.\nTry selecting some items.", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0), 20, Math.round(alt1.rsWidth / 2), 200, 4000, "", true, true);
                        }
                        if (seeConsoleLogs)
                            console.log("No items...");
                        return [2 /*return*/];
                    }
                    prices = [];
                    _loop_4 = function (i) {
                        var e_2;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, fetch("https://api.weirdgloop.org/exchange/history/rs/latest?name=" + items[i].replace("+", "%2B").replace("+", "%2B"))
                                            .then(function (response) {
                                            return response.json();
                                        })
                                            .then(function (data) {
                                            prices.push(data[items[i]].price);
                                        })];
                                case 1:
                                    _b.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    e_2 = _b.sent();
                                    if (seeConsoleLogs)
                                        console.log("It failed... setting to 0...", items[i], items[i].replace("+", "%2B").replace("+", "%2B"));
                                    prices.push(0);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < items.length)) return [3 /*break*/, 4];
                    return [5 /*yield**/, _loop_4(i)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    grandTotal = 0;
                    for (i = 0; i < items.length; i++) {
                        if (items[i] == "Coins") {
                            grandTotal += quants[i];
                        }
                        else {
                            grandTotal += (quants[i] * prices[i]);
                        }
                    }
                    ele = document.getElementById("value_input");
                    ele.value = grandTotal + "";
                    if (window.alt1) {
                        alt1.overLayClearGroup("overlays");
                        alt1.overLaySetGroup("overlays");
                        alt1.overLayTextEx("Prices fetched successfully!", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(100, 255, 100), 20, Math.round(alt1.rsWidth / 2), 200, 4000, "", true, true);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function verifyInsert(event) {
    return __awaiter(this, void 0, void 0, function () {
        var itemsList, quants, totalPrice, itemDivs, quantDivs, i, j, curr, ele, container, dateBox, dateImg, _a, _b, _c, _d, customSpan, countText, count, value, TPcheck, j, k, l, nodevar_2, imgvar_2, quantvar_2, nodevar, imgvar, quantvar, buttonbox, button;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (seeConsoleLogs)
                        console.log("Collecting info from insert...");
                    itemsList = [];
                    quants = [];
                    totalPrice = parseInt(document.getElementById("value_input").value);
                    itemDivs = document.getElementsByClassName("items");
                    quantDivs = document.getElementsByClassName("insert_text");
                    removeChildNodes(document.getElementById("value_input"));
                    for (i = 0; i < 4; i++) {
                        for (j = 0; j < 8; j++) {
                            if (itemDivs[(i * 8) + j] == undefined) {
                                break;
                            }
                            if (itemDivs[(i * 8) + j].options[itemDivs[(i * 8) + j].selectedIndex].value == "Blank") {
                                continue;
                            }
                            itemsList.push(itemDivs[(i * 8) + j].options[itemDivs[(i * 8) + j].selectedIndex].value);
                            quants.push(parseInt(quantDivs[(i * 8) + j].value));
                        }
                    }
                    if (seeConsoleLogs)
                        console.log("items verifying are", itemsList, "quants are", quants);
                    console.log(itemsList.length);
                    if (itemsList.length == 0) {
                        if (window.alt1) {
                            alt1.overLayClearGroup("overlays");
                            alt1.overLaySetGroup("overlays");
                            alt1.overLayTextEx("Nothing selected to insert.\n\u200a\u200aTry selecting some items.", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0), 20, Math.round(alt1.rsWidth / 2), 200, 4000, "", true, true);
                        }
                        if (seeConsoleLogs)
                            console.log("No items...");
                        event.stopPropagation();
                        return [2 /*return*/];
                    }
                    curr = (parseInt(localStorage.getItem("ZamorakLogger/Count")) + 1).toString();
                    ele = document.getElementById("insertVerif_body");
                    container = document.createElement("div");
                    container.setAttribute("class", "historyDisplayContainer");
                    container.setAttribute("id", "container" + curr);
                    dateBox = document.createElement("div");
                    dateImg = document.createElement("div");
                    dateBox.setAttribute("class", "dateBox");
                    dateImg.setAttribute("class", "dateImage");
                    _b = (_a = dateImg).setAttribute;
                    _c = ["title"];
                    _d = "Date Captured: ";
                    return [4 /*yield*/, dateGetter()];
                case 1:
                    _b.apply(_a, _c.concat([_d + (_e.sent())]));
                    dateBox.append(dateImg);
                    container.append(dateBox);
                    customSpan = document.createElement("span");
                    customSpan.setAttribute("class", "customSpan");
                    customSpan.setAttribute("title", "Custom clue manually inserted.");
                    customSpan.textContent = " [C] ";
                    countText = "barrows chest" + ": " + curr;
                    count = document.createElement("div");
                    count.innerHTML = countText;
                    count.setAttribute("class", "historyCount");
                    count.append(customSpan);
                    container.append(count);
                    value = document.createElement("div");
                    value.textContent = "Reward Value: " + totalPrice.toLocaleString("en-US");
                    value.setAttribute("class", "historyValue");
                    container.append(value);
                    TPcheck = false;
                    for (j = 0; j < 4; j++) { // Navigating temp
                        for (k = 0; k < 8; k++) {
                            if (itemsList[(j * 8) + k] == "Blank" || itemsList[(j * 8) + k] == undefined) {
                                if (TPcheck) {
                                    break;
                                }
                                for (l = (j * 8) + k; l < cap; l++) {
                                    nodevar_2 = document.createElement("itembox");
                                    imgvar_2 = document.createElement("img");
                                    quantvar_2 = document.createElement("span");
                                    imgvar_2 = imgMaker("Transparent", quants[(j * 8) + k]);
                                    nodevar_2.setAttribute("class", "node_history");
                                    nodevar_2.removeAttribute("title");
                                    quantvar_2.textContent = "";
                                    nodevar_2.append(imgvar_2);
                                    nodevar_2.append(quantvar_2);
                                    container.append(nodevar_2);
                                }
                                TPcheck = true;
                                break;
                            }
                            nodevar = document.createElement("itembox");
                            imgvar = document.createElement("img");
                            quantvar = document.createElement("span");
                            // Note for later. Figure out why insert isnt displaying properly...
                            if (quants[(j * 8) + k] === undefined) {
                                imgvar = imgMaker("Transparent", quants[(j * 8) + k]);
                                nodevar.setAttribute("class", "node_history");
                                nodevar.removeAttribute("title");
                                quantvar.textContent = "";
                            }
                            else {
                                imgvar = imgMaker(itemsList[(j * 8) + k], quants[(j * 8) + k]);
                                nodevar = nodeMaker(parseInt(quants[(j * 8) + k]), itemsList[(j * 8) + k], "history");
                                quantvar = quantMaker(quants[(j * 8) + k]);
                            }
                            nodevar.append(imgvar);
                            nodevar.append(quantvar);
                            container.append(nodevar);
                        }
                    }
                    buttonbox = document.createElement("div");
                    button = document.createElement("div");
                    buttonbox.setAttribute("class", "buttonboxHistory");
                    buttonbox.setAttribute("id", "container" + curr + "buttonbox");
                    button.setAttribute("class", "nisbutton historyButtonStyle");
                    button.setAttribute("id", "container" + curr + "button");
                    button.textContent = "Sample";
                    insertVerif = [itemsList, quants, totalPrice, "reward: [C] "];
                    buttonbox.append(button);
                    container.append(buttonbox);
                    ele.append(container);
                    if (seeConsoleLogs)
                        console.log("Insert collected");
                    return [2 /*return*/];
            }
        });
    });
}
function insertToDB() {
    if (window.alt1) {
        alt1.overLayClearGroup("overlays");
        alt1.overLaySetGroup("overlays");
        alt1.overLayTextEx("Submitting custom barrows reward to Database...", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0), 20, Math.round(alt1.rsWidth / 2), 200, 40000, "", true, true);
    }
    var itemsList = insertVerif[0];
    var itemsList2D = [];
    console.log(itemsList);
    for (var i = 0; i < 4; i++) {
        var templist = [];
        for (var j = 0; j < 8; j++) {
            if (itemsList[(i * 8) + j] == undefined)
                itemsList.push("Blank");
            templist.push(itemsList[(i * 8) + j]);
        }
        itemsList2D.push(templist);
    }
    console.log(itemsList);
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 8; j++) {
        }
    }
    console.log(itemsList2D);
    var quants = [];
    for (var i = 0; i < insertVerif[1].length; i++) {
        quants.push(insertVerif[1][i].toString());
    }
    console.log(quants);
    var value = insertVerif[2];
    var tier = insertVerif[3];
    insertInit();
    submitToLS(itemsList2D, quants, parseInt(value));
    addHistoryToLs(parseInt(value), itemsList2D, quants, tier);
    lootDisplay();
    if (window.alt1) {
        alt1.overLayClearGroup("overlays");
        alt1.overLaySetGroup("overlays");
        alt1.overLayTextEx("Custom Barrows chest submitted successfully!", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(100, 255, 100), 20, Math.round(alt1.rsWidth / 2), 200, 4000, "", true, true);
    }
}
function settingsInit() {
    if (seeConsoleLogs)
        console.log("Initializing settings...");
    if (seeConsoleLogs)
        console.log("Setting previously set radio button for Algorithm: " + localStorage.getItem("ZamorakLogger/Algorithm") + "...");
    var temp = localStorage.getItem("ZamorakLogger/Algorithm");
    var ele = document.getElementById(temp);
    ele.checked = true;
    if (seeConsoleLogs)
        console.log("Setting previously set radio button for lagDetect: " + localStorage.getItem("ZamorakLogger/lagDetect") + "...");
    if (localStorage.getItem("ZamorakLogger/lagDetect") == "true") {
        ele = document.getElementById("lagon");
        ele.checked = true;
    }
    else if (localStorage.getItem("ZamorakLogger/lagDetect") == "false") {
        ele = document.getElementById("lagoff");
        ele.checked = true;
    }
    if (seeConsoleLogs)
        console.log("Setting previously set radio button for MultiButtonPressDetect: " + localStorage.getItem("ZamorakLogger/multiButtonPressDetect") + "...");
    if (localStorage.getItem("ZamorakLogger/multiButtonPressDetect") == "true") {
        ele = document.getElementById("multion");
        ele.checked = true;
    }
    else if (localStorage.getItem("ZamorakLogger/multiButtonPressDetect") == "false") {
        ele = document.getElementById("multioff");
        ele.checked = true;
    }
    if (seeConsoleLogs)
        console.log("Setting previously set radio button for noMenu: " + localStorage.getItem("ZamorakLogger/noMenu") + "...");
    if (localStorage.getItem("ZamorakLogger/noMenu") == "true") {
        ele = document.getElementById("menuon");
        ele.checked = true;
    }
    else if (localStorage.getItem("ZamorakLogger/noMenu") == "false") {
        ele = document.getElementById("menuoff");
        ele.checked = true;
    }
    if (seeConsoleLogs)
        console.log("Setting previously set radio button for hybridPrecision: " + localStorage.getItem("ZamorakLogger/hybridPrecision") + "...");
    ele = document.getElementById("hybrid_precision");
    ele.value = localStorage.getItem("ZamorakLogger/hybridPrecision");
    if (seeConsoleLogs)
        console.log("Setting previously set radio button for HistoryDisplayLimit: " + localStorage.getItem("ZamorakLogger/HistoryDisplayLimit") + "...");
    ele = document.getElementById("history_display_limit");
    ele.value = localStorage.getItem("ZamorakLogger/HistoryDisplayLimit");
    if (seeConsoleLogs)
        console.log("Settings initialized!");
}
function saveSettings(alg, lag, multi, menu, precision, limit) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    buttonDisabler();
                    if (seeConsoleLogs)
                        console.log("Saving settings...");
                    if (window.alt1) {
                        alt1.overLayClearGroup("overlays");
                        alt1.overLaySetGroup("overlays");
                        alt1.overLayTextEx("Saving settings...", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0), 20, Math.round(alt1.rsWidth / 2), 200, 50000, "", true, true);
                    }
                    localStorage.setItem("ZamorakLogger/Algorithm", alg);
                    localStorage.setItem("ZamorakLogger/lagDetect", lag);
                    localStorage.setItem("ZamorakLogger/hybridPrecision", precision);
                    localStorage.setItem("ZamorakLogger/HistoryDisplayLimit", limit);
                    if (localStorage.getItem("ZamorakLogger/multiButtonPressDetect") !== multi) {
                        localStorage.setItem("ZamorakLogger/multiButtonPressDetect", multi);
                        if (seeConsoleLogs)
                            console.log("Adjusting saved values");
                        if (multi === "true") {
                            if (localStorage.getItem("ZamorakLogger/autoCapture") === "true") {
                                document.getElementById("docapturebutton").setAttribute("onclick", "");
                                document.getElementById("docapturebutton").setAttribute("title", "Disable autocapture to use this button");
                                document.getElementById("docapturebuttonwords").style.setProperty("text-decoration", "line-through");
                            }
                        }
                        else if (multi === "false") {
                            if (localStorage.getItem("ZamorakLogger/autoCapture") === "true") {
                                document.getElementById("docapturebutton").setAttribute("onclick", "TestApp.capture(false)");
                                document.getElementById("docapturebutton").setAttribute("title", "");
                                document.getElementById("docapturebuttonwords").style.removeProperty("text-decoration");
                            }
                            else {
                                document.getElementById("docapturebutton").setAttribute("onclick", "TestApp.capture(false)");
                                document.getElementById("docapturebutton").setAttribute("title", "");
                                document.getElementById("docapturebuttonwords").style.removeProperty("text-decoration");
                            }
                        }
                    }
                    if (localStorage.getItem("ZamorakLogger/noMenu") !== menu) {
                        localStorage.setItem("ZamorakLogger/noMenu", menu);
                        noMenuCheck();
                    }
                    historyClear();
                    historyInit();
                    settingsInit();
                    return [4 /*yield*/, arraySetup()];
                case 1:
                    _a.sent();
                    buttonEnabler();
                    if (window.alt1) {
                        alt1.overLayClearGroup("overlays");
                        alt1.overLaySetGroup("overlays");
                        alt1.overLayTextEx("Settings saved!", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(100, 255, 100), 20, Math.round(alt1.rsWidth / 2), 200, 2000, "", true, true);
                    }
                    if (seeConsoleLogs)
                        console.log("Settings saved!");
                    return [2 /*return*/];
            }
        });
    });
}
function autoDisableCheckAuto(event) {
    if (document.getElementById("toggleunlocktrack").classList.contains("enabled")) {
        toggleCapture(event);
    }
}
function toggleCapture(event) {
    if (document.getElementById("toggleunlocktrack").classList.contains("enabled")) {
        document.getElementById("toggleunlocktrack").classList.remove("enabled");
        localStorage.setItem("ZamorakLogger/autoCapture", "false");
        if (window.alt1) {
            alt1.overLayClearGroup("overlays");
            alt1.overLaySetGroup("overlays");
            alt1.overLayTextEx("Autocapture disabled!", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(100, 255, 100), 20, Math.round(alt1.rsWidth / 2), 200, 2000, "", true, true);
        }
    }
    else {
        document.getElementById("toggleunlocktrack").classList.add("enabled");
        localStorage.setItem("ZamorakLogger/autoCapture", "true");
        if (window.alt1) {
            alt1.overLayClearGroup("overlays");
            alt1.overLaySetGroup("overlays");
            alt1.overLayTextEx("Autocapture enabled!", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(100, 255, 100), 20, Math.round(alt1.rsWidth / 2), 200, 2000, "", true, true);
        }
    }
    autoCheck();
    if (event != undefined) {
        event.stopPropagation();
    }
}
function autoCheck() {
    if (localStorage.getItem("ZamorakLogger/autoCapture") === "true") {
        if (localStorage.getItem("ZamorakLogger/multiButtonPressDetect") === "true") {
            document.getElementById("docapturebutton").setAttribute("onclick", "");
            document.getElementById("docapturebutton").setAttribute("title", "Disable autocapture to use this button");
            document.getElementById("docapturebuttonwords").style.setProperty("text-decoration", "line-through");
        }
        autoCaptureInterval = window.setInterval(function () {
            return __awaiter(this, void 0, void 0, function () {
                var promises, _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            promises = [];
                            _b = (_a = promises).push;
                            return [4 /*yield*/, autoCallCapture()];
                        case 1:
                            _b.apply(_a, [_c.sent()]);
                            return [4 /*yield*/, Promise.all(promises)];
                        case 2:
                            _c.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }, 1000);
    }
    else {
        if (localStorage.getItem("ZamorakLogger/multiButtonPressDetect") === "true") {
            document.getElementById("docapturebutton").setAttribute("onclick", "TestApp.capture(false)");
            document.getElementById("docapturebutton").setAttribute("title", "");
            document.getElementById("docapturebuttonwords").style.removeProperty("text-decoration");
        }
        window.clearInterval(autoCaptureInterval);
        autoCaptureInterval = null;
    }
}
function autoCallCapture() {
    capture(true);
}
function noMenuCheck() {
    if (localStorage.getItem("ZamorakLogger/noMenu") === "true") {
        noMenuInterval = window.setInterval(function () {
            return __awaiter(this, void 0, void 0, function () {
                var img, loc, rewardreader, value, length, comma;
                return __generator(this, function (_a) {
                    img = alt1__WEBPACK_IMPORTED_MODULE_9__.captureHoldFullRs();
                    loc = img.findSubimage(imgs.zamorakChest);
                    rewardreader = new _scripts_ZamorakReader__WEBPACK_IMPORTED_MODULE_2__["default"]();
                    rewardreader.pos = _scripts_ModalUIReader__WEBPACK_IMPORTED_MODULE_3__.ModalUIReader.find()[0];
                    value = rewardreader.read(img).value;
                    length = value.toString().length;
                    comma = Math.floor(length / 3);
                    if (seeConsoleLogs)
                        console.log("Highlighting value...");
                    if (window.alt1) {
                        alt1.overLayClearGroup("nomenu");
                        alt1.overLaySetGroup("nomenu");
                        alt1.overLayRect(alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 50, 50), loc[0].x + 301 - (5 * length) + (1 * comma), loc[0].y + 218, 2 + (8 * length) + (4 * comma), imgs.zamorakChest.height + 6, 60000, 2);
                        alt1.overLayTextEx("NO MENUS HERE", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 50, 50), 10, loc[0].x + 301, loc[0].y + 242, 50000, "", true, true);
                    }
                    return [2 /*return*/];
                });
            });
        }, 1000);
    }
    else {
        if (window.alt1) {
            alt1.overLayClearGroup("nomenu");
        }
        window.clearInterval(noMenuInterval);
        noMenuInterval = null;
    }
}
function exporttocsv() {
    if (window.alt1) {
        alt1.overLayClearGroup("overlays");
        alt1.overLaySetGroup("overlays");
        alt1.overLayTextEx("Generating CSV...", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(255, 144, 0), 20, Math.round(alt1.rsWidth / 2), 200, 2000, "", true, true);
    }
    var csvinfo = [];
    csvinfo.push(["Item", "Quantities"]);
    var lsHistory = JSON.parse(localStorage.getItem("ZamorakLogger/History"));
    var keys = Object.keys(items);
    var currOrder = 1;
    if (seeConsoleLogs)
        console.log("Generating CSV...");
    if (seeConsoleLogs)
        console.log("Getting values and counts...");
    var count = localStorage.getItem("ZamorakLogger/Count");
    var value = localStorage.getItem("ZamorakLogger/Value");
    csvinfo.push(["Total Count", count]);
    csvinfo.push(["Total Value", value]);
    if (seeConsoleLogs)
        console.log("Getting item quantities...");
    for (var i = 0; i < keys.length; i++) {
        for (var j = 0; j < keys.length; j++) {
            if (items[keys[j]].order == currOrder.toString()) {
                var val = items[keys[j]];
                var quant = val.quantity;
                if (quant == undefined || quant == "0") { // .toLocaleString("en-US")
                    quant = "";
                }
                else {
                    quant = quant.toString();
                }
                csvinfo.push([keys[j], quant]);
                currOrder++;
                break;
            }
        }
    }
    csvinfo.push([]);
    csvinfo.push([]);
    csvinfo.push(["Captured Rewards History", "Parse tier at \" : \" and \" [C] \"", "\"Parse date and time at \"\", \" \"", "Parse items at \" x \""]);
    csvinfo.push(["Rewards Tier & Count", "Reward Value", "Date and Time recorded", "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", "Item 11", "Item 12"]);
    console.log(lsHistory);
    if (seeConsoleLogs)
        console.log("Setting history in csv...");
    for (var i = 0; i < lsHistory.length; i++) {
        lsHistory[i][4] = i + 1;
        var temp = [lsHistory[i][3] + " : " + lsHistory[i][4], lsHistory[i][2], "\"" + lsHistory[i][6].toString() + "\""];
        for (var j = 0; j < 4; j++) {
            for (var k = 0; k < 8; k++) {
                if (lsHistory[i][0][(j * 8) + k] == undefined || lsHistory[i][0][(j * 8) + k] === "Blank") {
                    temp.push("");
                }
                else {
                    temp.push(lsHistory[i][1][(j * 8) + k].toString() + " x " + lsHistory[i][0][(j * 8) + k].toString());
                }
            }
        }
        csvinfo.push(temp);
    }
    localStorage.setItem("ZamorakLogger/History", JSON.stringify(lsHistory));
    var d = new Date();
    var hour = "0" + d.getHours().toString();
    var minute = "0" + d.getMinutes().toString();
    var second = "0" + d.getSeconds().toString();
    var month = "0" + (d.getMonth() + 1).toString();
    var day = "0" + d.getDate().toString();
    var csvContent = "";
    csvinfo.forEach(function (i) {
        var row = i.join(",");
        csvContent += row + "\r\n";
    });
    var filename = "ZamorakLogger CSV " + (d.getFullYear() + "-" + month.slice(-2) + "-" + day.slice(-2) + "--" + hour.slice(-2) + "-" + minute.slice(-2) + "-" + second.slice(-2)) + ".csv";
    var encodedUri = "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link); // Required for FF
    link.click();
    if (window.alt1) {
        alt1.overLayClearGroup("overlays");
        alt1.overLaySetGroup("overlays");
        alt1.overLayTextEx("CSV Generated!", alt1__WEBPACK_IMPORTED_MODULE_9__.mixColor(100, 255, 100), 20, Math.round(alt1.rsWidth / 2), 200, 2000, "", true, true);
    }
}
function nodeMaker(quant, item, attribute) {
    var nodevar = document.createElement("itembox");
    if (attribute === "tab") {
        nodevar.setAttribute("class", "node_tab");
        nodevar.setAttribute("style", "order: " + orderChecker(parseInt(items[item].order), item) + ";");
    }
    else if (attribute === "history") {
        nodevar.setAttribute("class", "node_history");
    }
    else if (attribute === "recent") {
        nodevar.setAttribute("class", "node_recent");
    }
    nodevar.setAttribute("title", quant.toLocaleString("en-US") + " x " + item);
    return nodevar;
}
function imgMaker(item, quant) {
    var imgvar = document.createElement("img");
    if (item === "Coins") {
        if (quant == 1)
            imgvar.src = encodeURI("./images/items/Coins_1.png");
        else if (quant == 2)
            imgvar.src = encodeURI("./images/items/Coins_2.png");
        else if (quant == 3)
            imgvar.src = encodeURI("./images/items/Coins_3.png");
        else if (quant == 4)
            imgvar.src = encodeURI("./images/items/Coins_4.png");
        else if (quant >= 5 && quant <= 24)
            imgvar.src = encodeURI("./images/items/Coins_5.png");
        else if (quant >= 25 && quant <= 99)
            imgvar.src = encodeURI("./images/items/Coins_25.png");
        else if (quant >= 100 && quant <= 249)
            imgvar.src = encodeURI("./images/items/Coins_100.png");
        else if (quant >= 250 && quant <= 999)
            imgvar.src = encodeURI("./images/items/Coins_250.png");
        else if (quant >= 1000 && quant <= 9999)
            imgvar.src = encodeURI("./images/items/Coins_1000.png");
        else
            imgvar.src = encodeURI("./images/items/" + item + ".png");
    }
    else
        imgvar.src = encodeURI("./images/items/" + item + ".png");
    imgvar.setAttribute("style", "margin:auto;");
    imgvar.ondragstart = function () { return false; };
    return imgvar;
}
function quantMaker(quant) {
    var quantvar = document.createElement("span");
    if (quant > 9999999 || quant < -9999999) {
        quantvar.setAttribute("class", "quant_green_text");
        quantvar.textContent = Math.trunc(quant / 1000000).toString() + "M";
    }
    else if (quant > 99999 || quant > 9999 || quant < -9999 || quant < -99999) {
        quantvar.setAttribute("class", "quant_white_text");
        quantvar.textContent = Math.trunc(quant / 1000).toString() + "k";
    }
    else {
        quantvar.setAttribute("class", "quant_yellow_text");
        quantvar.textContent = quant + "";
    }
    return quantvar;
}
function dateGetter() {
    return __awaiter(this, void 0, void 0, function () {
        var d, hour, minute, second, month, day, currentDate;
        return __generator(this, function (_a) {
            d = new Date();
            hour = "0" + d.getUTCHours().toString();
            minute = "0" + d.getUTCMinutes().toString();
            second = "0" + d.getUTCSeconds().toString();
            month = "0" + (d.getUTCMonth() + 1).toString();
            day = "0" + d.getUTCDate().toString();
            currentDate = hour.slice(-2) + ":" + minute.slice(-2) + ":" + second.slice(-2) + ", " + d.getUTCFullYear() + "/" + month.slice(-2) + "/" + day.slice(-2) + " UTC";
            return [2 /*return*/, currentDate];
        });
    });
}
function removeChildNodes(div) {
    while (div.firstChild) {
        div.firstChild.remove();
    }
}
function _base64ToImageData(buffer, width, height) {
    return new Promise(function (resolve) {
        var image = new Image();
        image.addEventListener("load", function (e) {
            var canvasElement = document.createElement("canvas");
            canvasElement.width = width;
            canvasElement.height = height;
            var context = canvasElement.getContext("2d");
            context.drawImage(e.target, 0, 0, width, height);
            resolve(context.getImageData(0, 0, width, height));
        });
        image.src = buffer;
    });
}
function toggleLootDisplay(id) {
    var lootdisplay = Array.from(document.getElementsByClassName("loot_display"));
    var tab = document.getElementById(id);
    if (id == "equipment_rewards") {
        lootdisplay[0].style.display = (lootdisplay[0].style.display == "flex") ? "none" : "flex";
        tab.style.textDecoration = (lootdisplay[0].style.display == "flex") ? "none" : "line-through";
        tab.title = (lootdisplay[0].style.display == "flex") ? "Click here to hide broadcast rewards" : "Click here to show broadcast rewards";
        opentabs[0] = (lootdisplay[0].style.display == "flex") ? true : false;
    }
    else if (id == "general_rewards") {
        lootdisplay[1].style.display = (lootdisplay[1].style.display == "flex") ? "none" : "flex";
        tab.style.textDecoration = (lootdisplay[1].style.display == "flex") ? "none" : "line-through";
        tab.title = (lootdisplay[1].style.display == "flex") ? "Click here to hide general rewards" : "Click here to show general rewards";
        opentabs[1] = (lootdisplay[1].style.display == "flex") ? true : false;
    }
    if (seeConsoleLogs)
        console.log(opentabs);
    var truecount = 0;
    for (var i = 0; i < opentabs.length; i++) {
        if (opentabs[i] == true) {
            truecount++;
        }
    }
    if (seeConsoleLogs)
        console.log(truecount);
    var minH = 0;
    if (truecount == 2) {
        minH = 50;
    }
    // Tinker with this. 
    // If you want to change the min heights for each thing, 
    // change variables starting below here
    if (truecount == 1) {
        minH = 75;
    }
    var minHval = (minH + "%").toString();
    minHval = "80px";
    if (opentabs[0]) {
        document.getElementById("equipment").style.minHeight = minHval;
    }
    else {
        document.getElementById("equipment").style.minHeight = "8%";
    }
    if (opentabs[1]) {
        document.getElementById("general").style.minHeight = minHval;
    }
    else {
        document.getElementById("general").style.minHeight = "8%";
    }
}
function updateItems() {
    localStorage.setItem("ZamorakLogger/items", JSON.stringify(items));
}
function orderChecker(order, item) {
    if (item == "Coins") {
        order = 1;
    }
    // Relics of OpenLogger
    else if (item == "Guido's bonfire in a bottle") {
        order = 989;
    }
    else if (item == "Bonus XP star (small)") {
        order = 990;
    }
    return order;
}
function buttonDisabler() {
    if (localStorage.getItem("ZamorakLogger/autoCapture") !== "true") {
        document.getElementById("docapturebutton").setAttribute("title", "Currently disabled to due initialization, settings being saved, or autocapture");
        document.getElementById("docapturebuttonwords").style.setProperty("text-decoration", "line-through");
        document.getElementById("docapturebutton").setAttribute("onclick", "");
    }
    document.getElementById("toggleunlocktrack").setAttribute("onclick", "");
    buttonDisabletoggle = false;
}
function buttonEnabler() {
    if (localStorage.getItem("ZamorakLogger/autoCapture") !== "true") {
        document.getElementById("docapturebutton").setAttribute("title", "");
        document.getElementById("docapturebuttonwords").style.removeProperty("text-decoration");
        document.getElementById("docapturebutton").setAttribute("onclick", "TestApp.capture(false)");
    }
    document.getElementById("toggleunlocktrack").setAttribute("onclick", "TestApp.toggleCapture(event)");
    buttonDisabletoggle = true;
}
//print text world
//also the worst possible example of how to use global exposed exports as described in webpack.config.json
//output.insertAdjacentHTML("beforeend", `
//	<div>paste an image of rs with homeport button (or not)</div>
//	<div onclick='TestApp.capture()'>Click to capture if on alt1</div>`
//);
//check if we are running inside alt1 by checking if the alt1 global exists
if (window.alt1) {
    //tell alt1 about the app
    //this makes alt1 show the add app button when running inside the embedded browser
    //also updates app settings if they are changed
    alt1.identifyAppUrl("./appconfig.json");
}
else {
    var addappurl = "alt1://addapp/".concat(new URL("./appconfig.json", document.location.href).href);
    document.getElementsByClassName("nis")[0].innerHTML = "Alt1 not detected, click <a href='".concat(addappurl, "'>here</a> to add this app to Alt1");
}

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});