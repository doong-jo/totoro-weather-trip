const hill1 = [
    { x : 475, y : 513.9884393063584 },
    { x : 499, y : 496.95568400770713 },
    { x : 529, y : 487.9383429672447 },
    { x : 550, y : 472.9094412331406 },
    { x : 567, y : 473.91136801541427 },
    { x : 585, y : 457.8805394990366 },
    { x : 599, y : 454.8747591522158 },
    { x : 634, y : 454.8747591522158 },
    { x : 652, y : 439.84585741811173 },
    { x : 695, y : 433.8342967244701 },
    { x : 737, y : 433.8342967244701 },
    { x : 769, y : 423.8150289017341 },
    { x : 793, y : 421.8111753371869 },
    { x : 844, y : 415.7996146435453 },
    { x : 898, y : 418.8053949903661 },
    { x : 935, y : 421.8111753371869 },
    { x : 961, y : 433.8342967244701 },
    { x : 961, y : 439.84585741811173 },
    { x : 961, y : 460.88631984585743 },
    { x : 961, y : 482.9287090558767 },
    { x : 961, y : 501.9653179190751 },
    { x : 961, y : 517.9961464354528 },
    { x : 951, y : 518.9980732177264 },
    { x : 911, y : 521.0019267822736 },
    { x : 881, y : 525.009633911368 },
    { x : 856, y : 525.009633911368 },
    { x : 803, y : 524.0077071290945 },
    { x : 764, y : 524.0077071290945 },
    { x : 718, y : 524.0077071290945 },
    { x : 685, y : 525.009633911368 },
    { x : 644, y : 525.009633911368 },
    { x : 607, y : 525.009633911368 },
    { x : 568, y : 526.0115606936416 },
    { x : 529, y : 527.0134874759152 },
    { x : 493, y : 527.0134874759152 },
    { x : 470, y : 527.0134874759152 },
];
const hill2 = [
    { x : 470, y : 514.990366088632 },
    { x : 487, y : 507.97687861271675 },
    { x : 505, y : 500.96339113680153 },
    { x : 525, y : 500.96339113680153 },
    { x : 536, y : 487.9383429672447 },
    { x : 553, y : 479.9229287090559 },
    { x : 571, y : 471.90751445086704 },
    { x : 603, y : 464.8940269749518 },
    { x : 610, y : 469.90366088631987 },
    { x : 628, y : 458.8824662813102 },
    { x : 637, y : 447.8612716763006 },
    { x : 653, y : 441.84971098265896 },
    { x : 661, y : 442.85163776493255 },
    { x : 657, y : 452.8709055876686 },
    { x : 676, y : 442.85163776493255 },
    { x : 669, y : 446.85934489402695 },
    { x : 687, y : 442.85163776493255 },
    { x : 710, y : 433.8342967244701 },
    { x : 736, y : 431.83044315992294 },
    { x : 755, y : 431.83044315992294 },
    { x : 775, y : 425.8188824662813 },
    { x : 802, y : 423.8150289017341 },
    { x : 835, y : 417.8034682080925 },
    { x : 863, y : 419.8073217726397 },
    { x : 875, y : 429.8265895953757 },
    { x : 895, y : 429.8265895953757 },
    { x : 907, y : 425.8188824662813 },
    { x : 928, y : 425.8188824662813 },
    { x : 955, y : 433.8342967244701 },
    { x : 955, y : 447.8612716763006 },
    { x : 955, y : 467.89980732177264 },
    { x : 952, y : 491.9460500963391 },
    { x : 956, y : 513.9884393063584 },
    { x : 929, y : 515.9922928709055 },
    { x : 905, y : 515.9922928709055 },
    { x : 865, y : 517.9961464354528 },
    { x : 824, y : 515.9922928709055 },
    { x : 777, y : 517.9961464354528 },
    { x : 721, y : 517.9961464354528 },
    { x : 688, y : 517.9961464354528 },
    { x : 649, y : 520 },
    { x : 614, y : 521.0019267822736 },
    { x : 569, y : 520 },
    { x : 533, y : 517.9961464354528 },
    { x : 500, y : 514.990366088632 },
];
const hill3 =[
    { x : 952, y : 435.83815028901734 },
    { x : 933, y : 430.82851637764935 },
    { x : 911, y : 428.8246628131021 },
    { x : 887, y : 424.8169556840077 },
    { x : 848, y : 422.8131021194605 },
    { x : 833, y : 422.8131021194605 },
    { x : 815, y : 423.8150289017341 },
    { x : 800, y : 425.8188824662813 },
    { x : 806, y : 425.8188824662813 },
    { x : 817, y : 425.8188824662813 },
    { x : 827, y : 425.8188824662813 },
    { x : 835, y : 425.8188824662813 },
    { x : 847, y : 428.8246628131021 },
    { x : 863, y : 435.83815028901734 },
    { x : 884, y : 437.84200385356456 },
    { x : 899, y : 440.8477842003854 },
    { x : 914, y : 442.85163776493255 },
    { x : 903, y : 442.85163776493255 },
    { x : 884, y : 445.85741811175336 },
    { x : 875, y : 445.85741811175336 },
    { x : 863, y : 448.8631984585742 },
    { x : 853, y : 449.86512524084776 },
    { x : 863, y : 449.86512524084776 },
    { x : 874, y : 451.868978805395 },
    { x : 889, y : 454.8747591522158 },
    { x : 908, y : 459.8843930635838 },
    { x : 920, y : 464.8940269749518 },
    { x : 932, y : 469.90366088631987 },
    { x : 940, y : 470.90558766859345 },
    { x : 951, y : 470.90558766859345 },
    { x : 957, y : 471.90751445086704 },
    { x : 956, y : 464.8940269749518 },
    { x : 956, y : 445.85741811175336 },
    { x : 957, y : 435.83815028901734 },];
const hill4 = [
    { x : 539, y : 483.9306358381503 },
    { x : 547, y : 482.9287090558767 },
    { x : 553, y : 477.91907514450867 },
    { x : 563, y : 476.9171483622351 },
    { x : 595, y : 472.9094412331406 },
    { x : 626, y : 469.90366088631987 },
    { x : 659, y : 469.90366088631987 },
    { x : 689, y : 469.90366088631987 },
    { x : 722, y : 472.9094412331406 },
    { x : 755, y : 477.91907514450867 },
    { x : 797, y : 483.9306358381503 },
    { x : 826, y : 488.9402697495183 },
    { x : 856, y : 495.95375722543355 },
    { x : 883, y : 502.96724470134876 },
    { x : 921, y : 517.9961464354528 },
    { x : 884, y : 515.9922928709055 },
    { x : 833, y : 515.9922928709055 },
    { x : 787, y : 515.9922928709055 },
    { x : 742, y : 517.9961464354528 },
    { x : 709, y : 517.9961464354528 },
    { x : 697, y : 515.9922928709055 },
    { x : 687, y : 507.97687861271675 },
    { x : 668, y : 500.96339113680153 },
    { x : 649, y : 493.9499036608863 },
    { x : 622, y : 485.93448940269747 },
    { x : 591, y : 481.92678227360307 },
    { x : 562, y : 482.9287090558767 },
    { x : 549, y : 482.9287090558767 },
];

const hill5 = [
    { x : 8, y : 445 },
    { x : 27, y : 438 },
    { x : 62, y : 435 },
    { x : 92, y : 427 },
    { x : 121, y : 427 },
    { x : 143, y : 427 },
    { x : 168, y : 428 },
    { x : 209, y : 432 },
    { x : 232, y : 437 },
    { x : 264, y : 446 },
    { x : 297, y : 456 },
    { x : 323, y : 466 },
    { x : 335, y : 473 },
    { x : 345, y : 482 },
    { x : 353, y : 503 },
    { x : 362, y : 516 },
    { x : 361, y : 520 },
    { x : 336, y : 518 },
    { x : 309, y : 518 },
    { x : 292, y : 520 },
    { x : 264, y : 519 },
    { x : 249, y : 520 },
    { x : 229, y : 519 },
    { x : 204, y : 516 },
    { x : 172, y : 517 },
    { x : 147, y : 517 },
    { x : 126, y : 517 },
    { x : 99, y : 517 },
    { x : 75, y : 517 },
    { x : 54, y : 516 },
    { x : 23, y : 516 },
    { x : 14, y : 516 },
    { x : 1, y : 513 },
    { x : 8, y : 466 },
    { x : 9, y : 456 },
];
const hill6 = [
    { x : 182, y : 428 },
    { x : 191, y : 432 },
    { x : 205, y : 438 },
    { x : 220, y : 447 },
    { x : 235, y : 460 },
    { x : 244, y : 470 },
    { x : 250, y : 484 },
    { x : 256, y : 502 },
    { x : 257, y : 517 },
    { x : 278, y : 518 },
    { x : 295, y : 518 },
    { x : 312, y : 518 },
    { x : 324, y : 519 },
    { x : 342, y : 520 },
    { x : 354, y : 519 },
    { x : 339, y : 502 },
    { x : 324, y : 485 },
    { x : 307, y : 472 },
    { x : 288, y : 461 },
    { x : 263, y : 448 },
    { x : 243, y : 438 },
    { x : 223, y : 437 },
    { x : 211, y : 434 },
    { x : 202, y : 433 },
];
const hill7 = [
    { x : 8, y : 453 },
    { x : 20, y : 450 },
    { x : 40, y : 448 },
    { x : 60, y : 443 },
    { x : 87, y : 441 },
    { x : 106, y : 445 },
    { x : 86, y : 448 },
    { x : 72, y : 452 },
    { x : 62, y : 457 },
    { x : 60, y : 466 },
    { x : 72, y : 470 },
    { x : 94, y : 472 },
    { x : 104, y : 469 },
    { x : 120, y : 479 },
    { x : 139, y : 480 },
    { x : 128, y : 490 },
    { x : 92, y : 495 },
    { x : 73, y : 496 },
    { x : 80, y : 510 },
    { x : 102, y : 510 },
    { x : 128, y : 510 },
    { x : 149, y : 508 },
    { x : 165, y : 507 },
    { x : 182, y : 504 },
    { x : 185, y : 510 },
    { x : 192, y : 514 },
    { x : 177, y : 514 },
    { x : 162, y : 515 },
    { x : 131, y : 519 },
    { x : 108, y : 520 },
    { x : 79, y : 519 },
    { x : 56, y : 517 },
    { x : 36, y : 517 },
    { x : 24, y : 519 },
    { x : 11, y : 519 },
    { x : 8, y : 514 },
    { x : 5, y : 495 },
    { x : 5, y : 482 },
    { x : 5, y : 468 },
    { x : 5, y : 456 },
];
const hill8 = [
    { x : 107, y : 422 },
    { x : 99, y : 419 },
    { x : 85, y : 414 },
    { x : 84, y : 407 },
    { x : 76, y : 404 },
    { x : 69, y : 409 },
    { x : 66, y : 411 },
    { x : 59, y : 413 },
    { x : 56, y : 423 },
    { x : 48, y : 419 },
    { x : 42, y : 412 },
    { x : 39, y : 406 },
    { x : 22, y : 398 },
    { x : 13, y : 398 },
    { x : 9, y : 393 },
    { x : 7, y : 409 },
    { x : 8, y : 425 },
    { x : 8, y : 437 },
    { x : 8, y : 442 },
    { x : 16, y : 442 },
    { x : 30, y : 440 },
    { x : 47, y : 436 },
    { x : 61, y : 436 },
    { x : 81, y : 432 },
    { x : 99, y : 428 },
    { x : 108, y : 427 },
];
const hill9 = [
    { x : 170, y : 512 },
    { x : 162, y : 498 },
    { x : 151, y : 491 },
    { x : 151, y : 486 },
    { x : 153, y : 479 },
    { x : 144, y : 472 },
    { x : 136, y : 472 },
    { x : 133, y : 475 },
    { x : 126, y : 468 },
    { x : 115, y : 463 },
    { x : 105, y : 463 },
    { x : 109, y : 472 },
    { x : 103, y : 477 },
    { x : 92, y : 476 },
    { x : 87, y : 473 },
    { x : 79, y : 473 },
    { x : 78, y : 478 },
    { x : 72, y : 488 },
    { x : 68, y : 498 },
    { x : 64, y : 505 },
    { x : 60, y : 512 },
    { x : 51, y : 509 },
    { x : 43, y : 506 },
    { x : 38, y : 512 },
    { x : 33, y : 513 },
    { x : 27, y : 514 },
    { x : 23, y : 519 },
    { x : 34, y : 519 },
    { x : 49, y : 519 },
    { x : 64, y : 519 },
    { x : 76, y : 519 },
    { x : 89, y : 519 },
    { x : 104, y : 519 },
    { x : 115, y : 519 },
    { x : 132, y : 519 },
    { x : 140, y : 518 },
    { x : 155, y : 515 },
    { x : 164, y : 515 },
    { x : 176, y : 516 },
];

const stone = [
    { x : 860, y : 375 },
    { x : 828, y : 379 },
    { x : 807, y : 381 },
    { x : 785, y : 387 },
    { x : 763, y : 391 },
    { x : 759, y : 397 },
    { x : 759, y : 412 },
    { x : 754, y : 433 },
    { x : 749, y : 451 },
    { x : 749, y : 455 },
    { x : 761, y : 457 },
    { x : 774, y : 461 },
    { x : 795, y : 469 },
    { x : 820, y : 473 },
    { x : 842, y : 480 },
    { x : 852, y : 480 },
    { x : 853, y : 472 },
    { x : 859, y : 472 },
    { x : 865, y : 472 },
    { x : 875, y : 469 },
    { x : 882, y : 465 },
    { x : 891, y : 467 },
    { x : 898, y : 460 },
    { x : 902, y : 459 },
    { x : 914, y : 457 },
    { x : 917, y : 457 },
    { x : 914, y : 445 },
    { x : 910, y : 429 },
    { x : 913, y : 414 },
    { x : 914, y : 409 },
    { x : 913, y : 407 },
    { x : 900, y : 401 },
    { x : 889, y : 396 },
    { x : 880, y : 391 },
    { x : 880, y : 386 },
    { x : 881, y : 384 },
    { x : 881, y : 377 },
    { x : 876, y : 376 },
];
const stone1 = [
    { x : 873, y : 377 },
    { x : 858, y : 376 },
    { x : 852, y : 376 },
    { x : 835, y : 379 },
    { x : 817, y : 382 },
    { x : 805, y : 386 },
    { x : 778, y : 389 },
    { x : 766, y : 392 },
    { x : 761, y : 394 },
    { x : 772, y : 398 },
    { x : 788, y : 404 },
    { x : 808, y : 411 },
    { x : 824, y : 421 },
    { x : 834, y : 430 },
    { x : 840, y : 434 },
    { x : 843, y : 428 },
    { x : 857, y : 427 },
    { x : 861, y : 421 },
    { x : 874, y : 414 },
    { x : 886, y : 411 },
    { x : 894, y : 411 },
    { x : 901, y : 411 },
    { x : 913, y : 408 },
    { x : 903, y : 403 },
    { x : 892, y : 398 },
    { x : 882, y : 396 },
    { x : 875, y : 390 },
    { x : 875, y : 384 },
    { x : 878, y : 376 },
];
const stone2 = [
    { x : 842, y : 437 },
    { x : 843, y : 445 },
    { x : 845, y : 456 },
    { x : 848, y : 469 },
    { x : 850, y : 474 },
    { x : 851, y : 469 },
    { x : 856, y : 469 },
    { x : 865, y : 469 },
    { x : 871, y : 469 },
    { x : 877, y : 468 },
    { x : 877, y : 465 },
    { x : 885, y : 465 },
    { x : 889, y : 467 },
    { x : 892, y : 465 },
    { x : 899, y : 461 },
    { x : 909, y : 457 },
    { x : 915, y : 457 },
    { x : 915, y : 454 },
    { x : 912, y : 443 },
    { x : 908, y : 434 },
    { x : 907, y : 424 },
    { x : 907, y : 416 },
    { x : 912, y : 407 },
    { x : 904, y : 409 },
    { x : 897, y : 414 },
    { x : 888, y : 414 },
    { x : 876, y : 414 },
    { x : 870, y : 417 },
    { x : 862, y : 422 },
    { x : 855, y : 428 },
    { x : 848, y : 428 },
    { x : 844, y : 428 },
    { x : 841, y : 433 },
];
const stone3 = [
    { x : 854, y : 429 },
    { x : 849, y : 429 },
    { x : 843, y : 430 },
    { x : 843, y : 436 },
    { x : 848, y : 443 },
    { x : 849, y : 458 },
    { x : 852, y : 468 },
    { x : 856, y : 428 },
    { x : 856, y : 437 },
    { x : 857, y : 451 },
    { x : 861, y : 462 },
    { x : 862, y : 467 },
    { x : 862, y : 470 },
    { x : 858, y : 470 },
    { x : 854, y : 468 },
];
const stone4 = [
    { x : 877, y : 415 },
    { x : 877, y : 427 },
    { x : 880, y : 437 },
    { x : 880, y : 450 },
    { x : 880, y : 459 },
    { x : 880, y : 466 },
    { x : 881, y : 464 },
    { x : 884, y : 464 },
    { x : 888, y : 464 },
    { x : 888, y : 458 },
    { x : 888, y : 447 },
    { x : 888, y : 438 },
    { x : 888, y : 425 },
    { x : 888, y : 419 },
    { x : 888, y : 415 },
    { x : 887, y : 415 },
    { x : 883, y : 414 },
    { x : 877, y : 414 },
];
const stone5 = [
    { x : 904, y : 411 },
    { x : 908, y : 410 },
    { x : 914, y : 412 },
    { x : 912, y : 418 },
    { x : 910, y : 427 },
    { x : 909, y : 437 },
    { x : 915, y : 447 },
    { x : 915, y : 456 },
    { x : 916, y : 458 },
    { x : 905, y : 459 },
    { x : 903, y : 451 },
    { x : 903, y : 441 },
    { x : 903, y : 426 },
    { x : 904, y : 415 },
    { x : 904, y : 412 },
];

class Hill {
    constructor() { }

    init(x, y) {
        this.x = x;
        this.y = y;
    }

    drawHillParts(x, y, hillParts, hillColor){

        //console.log("drawHillParts.length : " + hillParts.length   );

        noStroke();
        fill(hillColor);
        beginShape();
        for(var a = 0; a < hillParts.length; a++){
            curveVertex(x + hillParts[a].x, y + hillParts[a].y);
        }
        endShape(CLOSE);
    }

    draw() {

        this.drawHillParts(this.x, this.y, hill1, CON.COLOR.hillDarkGreen);
        this.drawHillParts(this.x + 10, this.y + 3, hill2, CON.COLOR.hillGreen);
        this.drawHillParts(this.x, this.y, hill3, CON.COLOR.hillBrightGreen);
        this.drawHillParts(this.x, this.y, hill4, CON.COLOR.hillBrightGreen);

        this.drawHillParts(this.x - 10, this.y + 5, hill5, color(230, 251, 113));
        this.drawHillParts(this.x - 50, this.y + 8, hill6, CON.COLOR.hillBrightGreen);
        this.drawHillParts(this.x - 10, this.y + 5, hill7, CON.COLOR.hillGreen);
        this.drawHillParts(this.x - 10, this.y + 7, hill8, CON.COLOR.hillDarkGreen);
        this.drawHillParts(this.x - 40, this.y + 7, hill9, CON.COLOR.hillDarkGreen);

        this.drawHillParts(this.x, this.y, stone, color(135, 130, 134));
        this.drawHillParts(this.x, this.y, stone1, color(155, 150, 154));
        this.drawHillParts(this.x, this.y, stone2, color(115, 110, 114));
        this.drawHillParts(this.x, this.y, stone3, color(95, 90, 94));
        this.drawHillParts(this.x, this.y, stone4, color(95, 90, 94));
        this.drawHillParts(this.x, this.y, stone5, color(85, 80, 84));

    }
}
