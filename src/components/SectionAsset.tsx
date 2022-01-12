import { Grid } from "@mui/material";
import React from "react";

const SectionAsset = ({
    fill = "#000",
    viewBox = "0 0 84 24"
}) =>
(
    <Grid container
        justifyContent='center'
        alignItems='center'>
        <Grid>
            <svg width="1041" height="632" viewBox="0 0 1041 632" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M150.438 113H117.438V6.2H150.438V113ZM213.817 115.7C203.517 115.7 194.267 114.1 186.067 110.9C177.967 107.6 171.567 102.85 166.867 96.65C162.267 90.45 159.967 83 159.967 74.3C159.967 65.9 162.267 58.6 166.867 52.4C171.567 46.2 177.867 41.45 185.767 38.15C193.767 34.85 202.567 33.2 212.167 33.2C222.367 33.2 231.467 35 239.467 38.6C247.467 42.1 253.717 47.2 258.217 53.9C262.817 60.5 265.117 68.3 265.117 77.3V81.2H192.817C193.617 86.4 195.767 90.35 199.267 93.05C202.767 95.75 207.567 97.1 213.667 97.1C217.867 97.1 221.367 96.45 224.167 95.15C226.967 93.75 229.217 91.65 230.917 88.85L262.567 90.5C258.967 99 252.817 105.35 244.117 109.55C235.417 113.65 225.317 115.7 213.817 115.7ZM231.067 65.75C230.267 61.05 228.317 57.55 225.217 55.25C222.117 52.85 217.817 51.65 212.317 51.65C201.317 51.65 194.867 56.35 192.967 65.75H231.067ZM314.387 113C307.087 113 301.187 112.3 296.687 110.9C292.187 109.4 288.837 106.9 286.637 103.4C284.437 99.8 283.337 94.9 283.337 88.7V52.1L268.937 52.7V35.6L283.337 36.05V12.2H316.337V36.35L334.487 35.6V52.7L316.337 52.1V85.4C316.337 88 317.087 89.95 318.587 91.25C320.187 92.45 322.637 93.05 325.937 93.05H334.487V113H314.387ZM362.004 4.54999C366.304 4.54999 369.954 5.69999 372.954 7.99999C376.054 10.3 378.354 13.5 379.854 17.6C381.454 21.6 382.254 26.2 382.254 31.4C382.254 37.5 381.104 43.3 378.804 48.8C376.604 54.3 373.054 58.8 368.154 62.3C363.254 65.8 357.054 67.55 349.554 67.55H346.704V52.7H348.504C353.204 52.7 356.804 51.65 359.304 49.55C361.904 47.35 363.454 44.1 363.954 39.8C363.554 39.9 362.854 39.95 361.854 39.95C358.454 39.95 355.354 39.25 352.554 37.85C349.854 36.45 347.654 34.45 345.954 31.85C344.354 29.25 343.554 26.2 343.554 22.7C343.554 19.2 344.304 16.1 345.804 13.4C347.404 10.6 349.604 8.45 352.404 6.95C355.204 5.34999 358.404 4.54999 362.004 4.54999ZM437.825 116.15C408.825 116.15 393.175 107.35 390.875 89.75L422.225 89C422.925 92.2 424.525 94.6 427.025 96.2C429.625 97.7 433.725 98.45 439.325 98.45C444.725 98.45 448.725 97.85 451.325 96.65C453.925 95.35 455.225 93.5 455.225 91.1C455.225 89.1 454.325 87.6 452.525 86.6C450.825 85.5 448.225 84.8 444.725 84.5L427.025 82.85C415.425 81.75 406.875 79.25 401.375 75.35C395.975 71.35 393.275 65.9 393.275 59C393.275 50.8 396.925 44.4 404.225 39.8C411.625 35.1 422.725 32.75 437.525 32.75C451.225 32.75 461.825 34.8 469.325 38.9C476.925 42.9 481.425 48.85 482.825 56.75L452.225 57.5C451.625 54.7 450.125 52.7 447.725 51.5C445.425 50.3 441.625 49.7 436.325 49.7C432.025 49.7 428.625 50.25 426.125 51.35C423.725 52.35 422.525 53.85 422.525 55.85C422.525 57.75 423.425 59.2 425.225 60.2C427.025 61.1 429.875 61.75 433.775 62.15L451.025 63.65C474.225 65.65 485.825 73.75 485.825 87.95C485.825 97.65 481.725 104.8 473.525 109.4C465.325 113.9 453.425 116.15 437.825 116.15ZM966.182 467.6V440.9H974.282C977.182 440.9 979.432 440.6 981.032 440C982.732 439.5 983.932 438.6 984.632 437.3C985.332 436 985.682 434.15 985.682 431.75V421.25C985.682 413.85 987.932 408.05 992.432 403.85C997.032 399.55 1003.58 397.05 1012.08 396.35V396.05C1003.58 395.35 997.032 393.05 992.432 389.15C987.932 385.15 985.682 379.75 985.682 372.95V360.95C985.682 358.75 985.332 357 984.632 355.7C984.032 354.4 982.882 353.4 981.182 352.7C979.482 352 977.082 351.65 973.982 351.65H966.182V324.95H988.832C998.032 324.95 1004.93 326.55 1009.53 329.75C1014.13 332.95 1016.43 338.45 1016.43 346.25V365.75C1016.43 370.05 1017.18 373.45 1018.68 375.95C1020.28 378.35 1022.78 380.1 1026.18 381.2C1029.68 382.3 1034.43 382.9 1040.43 383V409.7C1034.43 409.7 1029.68 410.25 1026.18 411.35C1022.78 412.45 1020.28 414.25 1018.68 416.75C1017.18 419.25 1016.43 422.7 1016.43 427.1V446.45C1016.43 453.45 1014.33 458.7 1010.13 462.2C1005.93 465.8 998.832 467.6 988.832 467.6H966.182ZM950.553 622.25H875.553V610.1H950.553V622.25Z" fill="#EAE8E4" />
                <path d="M571.851 143.6C563.251 132.9 556.751 121.45 552.351 109.25C547.951 96.95 545.751 84.5 545.751 71.9C545.751 59.3 547.901 46.95 552.201 34.85C556.601 22.75 563.151 11.45 571.851 0.949994H604.101C596.101 12.15 590.051 23.8 585.951 35.9C581.951 47.9 579.951 60.1 579.951 72.5C579.951 84.7 581.951 96.85 585.951 108.95C590.051 120.95 596.101 132.5 604.101 143.6H571.851ZM683.585 113C682.585 110.2 681.885 107.75 681.485 105.65C677.785 109.15 673.185 111.75 667.685 113.45C662.185 115.25 655.635 116.15 648.035 116.15C636.135 116.15 627.335 114.2 621.635 110.3C616.035 106.3 613.235 100.25 613.235 92.15C613.235 87.35 614.185 83.3 616.085 80C617.985 76.7 621.285 74 625.985 71.9C630.785 69.7 637.385 68.2 645.785 67.4L670.085 65C672.985 64.7 675.085 64.4 676.385 64.1C677.785 63.7 678.685 63.25 679.085 62.75C679.485 62.15 679.685 61.4 679.685 60.5V59.15C679.685 55.75 678.535 53.3 676.235 51.8C674.035 50.2 670.285 49.4 664.985 49.4C660.085 49.4 656.285 50.3 653.585 52.1C650.885 53.8 649.335 56.85 648.935 61.25L617.435 60.05C618.235 53.95 620.335 48.9 623.735 44.9C627.235 40.9 632.385 37.9 639.185 35.9C645.985 33.9 654.835 32.9 665.735 32.9C677.235 32.9 686.435 34.05 693.335 36.35C700.235 38.65 705.185 42 708.185 46.4C711.185 50.7 712.685 56.15 712.685 62.75V93.5C712.685 102.1 713.885 108.6 716.285 113H683.585ZM656.885 98.6C661.285 98.6 665.285 97.95 668.885 96.65C672.485 95.35 675.335 93.5 677.435 91.1C679.535 88.7 680.585 85.85 680.585 82.55V77.75C680.085 77.95 679.635 78.1 679.235 78.2C678.835 78.2 678.535 78.2 678.335 78.2L659.735 80.45C655.935 80.85 652.985 81.5 650.885 82.4C648.785 83.2 647.335 84.25 646.535 85.55C645.735 86.75 645.335 88.3 645.335 90.2C645.335 93 646.285 95.1 648.185 96.5C650.085 97.9 652.985 98.6 656.885 98.6ZM760.985 113H727.985V6.2H760.985V113ZM807.713 113H774.713V6.2H807.713V113ZM819.042 143.6C827.042 132.5 833.092 120.95 837.192 108.95C841.292 96.85 843.342 84.7 843.342 72.5C843.342 60.2 841.292 48 837.192 35.9C833.092 23.8 827.042 12.15 819.042 0.949994H851.442C860.042 11.55 866.542 22.9 870.942 35C875.342 47 877.542 59.3 877.542 71.9C877.542 84.5 875.342 96.9 870.942 109.1C866.542 121.3 860.042 132.8 851.442 143.6H819.042Z" fill="#50A2DD" />
                <path d="M258.518 194.75C266.418 194.75 273.668 196.35 280.268 199.55C286.868 202.75 292.118 207.5 296.018 213.8C300.018 220.1 302.018 227.65 302.018 236.45C302.018 245.05 300.168 252.5 296.468 258.8C292.868 265 287.718 269.8 281.018 273.2C274.418 276.5 266.618 278.15 257.618 278.15C243.518 278.15 233.168 273.7 226.568 264.8L225.518 275H195.368V168.2H228.368V205.1C235.768 198.2 245.818 194.75 258.518 194.75ZM248.768 255.65C254.668 255.65 259.468 254.15 263.168 251.15C266.868 248.15 268.718 243.05 268.718 235.85C268.718 228.65 266.818 223.5 263.018 220.4C259.318 217.3 254.568 215.75 248.768 215.75C242.268 215.75 237.118 217.5 233.318 221C229.518 224.4 227.618 229.35 227.618 235.85C227.618 242.35 229.468 247.3 233.168 250.7C236.968 254 242.168 255.65 248.768 255.65ZM345.726 277.4C339.026 277.4 333.126 276.25 328.026 273.95C322.926 271.65 318.926 268.2 316.026 263.6C313.126 258.9 311.676 253.1 311.676 246.2V197.6H344.676V242.75C344.676 246.65 345.876 249.75 348.276 252.05C350.676 254.25 353.976 255.35 358.176 255.35C361.476 255.35 364.426 254.7 367.026 253.4C369.626 252.1 371.676 250.2 373.176 247.7C374.676 245.2 375.426 242.25 375.426 238.85V197.6H408.426V275H377.526L376.326 264.35C372.926 268.65 368.626 271.9 363.426 274.1C358.226 276.3 352.326 277.4 345.726 277.4ZM438.472 189.8C435.372 189.8 432.572 189.1 430.072 187.7C427.572 186.3 425.572 184.35 424.072 181.85C422.672 179.25 421.972 176.35 421.972 173.15C421.972 170.05 422.672 167.3 424.072 164.9C425.572 162.4 427.572 160.45 430.072 159.05C432.572 157.65 435.372 156.95 438.472 156.95C441.572 156.95 444.372 157.65 446.872 159.05C449.372 160.45 451.322 162.4 452.722 164.9C454.222 167.3 454.972 170.05 454.972 173.15C454.972 176.35 454.222 179.25 452.722 181.85C451.322 184.35 449.372 186.3 446.872 187.7C444.372 189.1 441.572 189.8 438.472 189.8ZM454.972 275H421.972V197.6H454.972V275ZM501.415 275H468.415V168.2H501.415V275ZM584.593 168.2H617.593V275H587.293L586.393 264.95C579.593 273.75 569.193 278.15 555.193 278.15C546.193 278.15 538.343 276.5 531.643 273.2C525.043 269.8 519.943 264.95 516.343 258.65C512.743 252.35 510.943 244.9 510.943 236.3C510.943 227.5 512.893 220 516.793 213.8C520.793 207.5 526.093 202.75 532.693 199.55C539.393 196.35 546.693 194.75 554.593 194.75C567.293 194.75 577.293 198.2 584.593 205.1V168.2ZM564.193 255.65C570.793 255.65 575.943 254 579.643 250.7C583.443 247.3 585.343 242.35 585.343 235.85C585.343 229.35 583.443 224.4 579.643 221C575.843 217.5 570.743 215.75 564.343 215.75C560.643 215.75 557.293 216.45 554.293 217.85C551.293 219.15 548.843 221.3 546.943 224.3C545.143 227.3 544.243 231.15 544.243 235.85C544.243 242.85 546.093 247.9 549.793 251C553.593 254.1 558.393 255.65 564.193 255.65Z" fill="#EB405F" />
                <path d="M646.602 229.7C643.402 229.7 640.452 228.95 637.752 227.45C635.052 225.85 632.902 223.75 631.302 221.15C629.802 218.45 629.052 215.5 629.052 212.3C629.052 209.2 629.802 206.3 631.302 203.6C632.902 200.9 635.052 198.75 637.752 197.15C640.452 195.55 643.402 194.75 646.602 194.75C649.802 194.75 652.752 195.55 655.452 197.15C658.152 198.75 660.302 200.9 661.902 203.6C663.502 206.3 664.302 209.2 664.302 212.3C664.302 215.4 663.502 218.3 661.902 221C660.302 223.7 658.152 225.85 655.452 227.45C652.752 228.95 649.802 229.7 646.602 229.7ZM647.502 242.15C651.802 242.15 655.452 243.3 658.452 245.6C661.552 247.9 663.852 251.1 665.352 255.2C666.952 259.2 667.752 263.8 667.752 269C667.752 275.1 666.602 280.9 664.302 286.4C662.102 291.9 658.552 296.4 653.652 299.9C648.752 303.4 642.552 305.15 635.052 305.15H632.202V290.3H634.002C638.702 290.3 642.302 289.2 644.802 287C647.402 284.9 648.952 281.7 649.452 277.4C649.052 277.5 648.352 277.55 647.352 277.55C643.952 277.55 640.852 276.85 638.052 275.45C635.352 274.05 633.152 272.05 631.452 269.45C629.852 266.85 629.052 263.8 629.052 260.3C629.052 256.8 629.802 253.7 631.302 251C632.902 248.2 635.102 246.05 637.902 244.55C640.702 242.95 643.902 242.15 647.502 242.15ZM779.382 305.6C770.182 305.6 763.282 304 758.682 300.8C754.082 297.6 751.782 292.1 751.782 284.3V264.8C751.782 260.5 750.982 257.15 749.382 254.75C747.882 252.25 745.382 250.45 741.882 249.35C738.482 248.25 733.732 247.65 727.632 247.55V220.85C733.732 220.85 738.482 220.3 741.882 219.2C745.382 218.1 747.882 216.3 749.382 213.8C750.982 211.3 751.782 207.85 751.782 203.45V184.1C751.782 177.1 753.882 171.85 758.082 168.35C762.282 164.75 769.382 162.95 779.382 162.95H801.882V189.65H793.932C791.032 189.65 788.782 189.95 787.182 190.55C785.582 191.05 784.432 192 783.732 193.4C783.032 194.7 782.682 196.5 782.682 198.8V209.3C782.682 216.7 780.382 222.55 775.782 226.85C771.282 231.05 764.782 233.5 756.282 234.2V234.5C764.682 235.2 771.182 237.55 775.782 241.55C780.382 245.45 782.682 250.8 782.682 257.6V269.6C782.682 271.8 782.982 273.55 783.582 274.85C784.282 276.15 785.432 277.15 787.032 277.85C788.732 278.55 791.132 278.9 794.232 278.9H801.882V305.6H779.382ZM45.8078 437C38.5078 437 32.6078 436.3 28.1078 434.9C23.6078 433.4 20.2578 430.9 18.0578 427.4C15.8578 423.8 14.7578 418.9 14.7578 412.7V376.1L0.357813 376.7V359.6L14.7578 360.05V336.2H47.7578V360.35L65.9078 359.6V376.7L47.7578 376.1V409.4C47.7578 412 48.5078 413.95 50.0078 415.25C51.6078 416.45 54.0578 417.05 57.3578 417.05H65.9078V437H45.8078ZM77.3746 437V330.2H110.375V369.2C117.275 361.4 126.875 357.5 139.175 357.5C145.875 357.5 151.875 358.6 157.175 360.8C162.475 363 166.625 366.25 169.625 370.55C172.625 374.75 174.125 379.85 174.125 385.85V437H141.125V391.7C141.125 387.8 139.925 384.8 137.525 382.7C135.125 380.6 131.825 379.55 127.625 379.55C124.125 379.55 121.075 380.25 118.475 381.65C115.875 383.05 113.875 385 112.475 387.5C111.075 389.9 110.375 392.65 110.375 395.75V437H77.3746ZM204.17 351.8C201.07 351.8 198.27 351.1 195.77 349.7C193.27 348.3 191.27 346.35 189.77 343.85C188.37 341.25 187.67 338.35 187.67 335.15C187.67 332.05 188.37 329.3 189.77 326.9C191.27 324.4 193.27 322.45 195.77 321.05C198.27 319.65 201.07 318.95 204.17 318.95C207.27 318.95 210.07 319.65 212.57 321.05C215.07 322.45 217.02 324.4 218.42 326.9C219.92 329.3 220.67 332.05 220.67 335.15C220.67 338.35 219.92 341.25 218.42 343.85C217.02 346.35 215.07 348.3 212.57 349.7C210.07 351.1 207.27 351.8 204.17 351.8ZM220.67 437H187.67V359.6H220.67V437ZM278.963 440.15C249.963 440.15 234.313 431.35 232.013 413.75L263.363 413C264.063 416.2 265.663 418.6 268.163 420.2C270.763 421.7 274.863 422.45 280.463 422.45C285.863 422.45 289.863 421.85 292.463 420.65C295.063 419.35 296.363 417.5 296.363 415.1C296.363 413.1 295.463 411.6 293.663 410.6C291.963 409.5 289.363 408.8 285.863 408.5L268.163 406.85C256.563 405.75 248.013 403.25 242.513 399.35C237.113 395.35 234.413 389.9 234.413 383C234.413 374.8 238.063 368.4 245.363 363.8C252.763 359.1 263.863 356.75 278.663 356.75C292.363 356.75 302.963 358.8 310.463 362.9C318.063 366.9 322.563 372.85 323.963 380.75L293.363 381.5C292.763 378.7 291.263 376.7 288.863 375.5C286.563 374.3 282.763 373.7 277.463 373.7C273.163 373.7 269.763 374.25 267.263 375.35C264.863 376.35 263.663 377.85 263.663 379.85C263.663 381.75 264.563 383.2 266.363 384.2C268.163 385.1 271.013 385.75 274.913 386.15L292.163 387.65C315.363 389.65 326.963 397.75 326.963 411.95C326.963 421.65 322.863 428.8 314.663 433.4C306.463 437.9 294.563 440.15 278.963 440.15Z" fill="#DEDFE5" />
                <path d="M450.339 356.75C458.239 356.75 465.489 358.35 472.089 361.55C478.689 364.75 483.939 369.5 487.839 375.8C491.839 382.1 493.839 389.65 493.839 398.45C493.839 407.05 491.989 414.5 488.289 420.8C484.689 427 479.539 431.8 472.839 435.2C466.239 438.5 458.439 440.15 449.439 440.15C435.339 440.15 424.989 435.7 418.389 426.8L417.339 437H387.189V330.2H420.189V367.1C427.589 360.2 437.639 356.75 450.339 356.75ZM440.589 417.65C446.489 417.65 451.289 416.15 454.989 413.15C458.689 410.15 460.539 405.05 460.539 397.85C460.539 390.65 458.639 385.5 454.839 382.4C451.139 379.3 446.389 377.75 440.589 377.75C434.089 377.75 428.939 379.5 425.139 383C421.339 386.4 419.439 391.35 419.439 397.85C419.439 404.35 421.289 409.3 424.989 412.7C428.789 416 433.989 417.65 440.589 417.65ZM561.998 356.9C565.898 356.9 569.298 357.2 572.198 357.8V382.85C568.798 382.15 565.298 381.8 561.698 381.8C553.898 381.8 547.748 383.5 543.248 386.9C538.848 390.3 536.598 395.2 536.498 401.6V437H503.498V359.6H534.098L535.148 372.35C537.848 368.05 541.398 364.4 545.798 361.4C550.298 358.4 555.698 356.9 561.998 356.9ZM649.088 437C648.088 434.2 647.388 431.75 646.988 429.65C643.288 433.15 638.688 435.75 633.188 437.45C627.688 439.25 621.138 440.15 613.538 440.15C601.638 440.15 592.838 438.2 587.138 434.3C581.538 430.3 578.738 424.25 578.738 416.15C578.738 411.35 579.688 407.3 581.588 404C583.488 400.7 586.788 398 591.488 395.9C596.288 393.7 602.888 392.2 611.288 391.4L635.588 389C638.488 388.7 640.588 388.4 641.888 388.1C643.288 387.7 644.188 387.25 644.588 386.75C644.988 386.15 645.188 385.4 645.188 384.5V383.15C645.188 379.75 644.038 377.3 641.738 375.8C639.538 374.2 635.788 373.4 630.488 373.4C625.588 373.4 621.788 374.3 619.088 376.1C616.388 377.8 614.838 380.85 614.438 385.25L582.938 384.05C583.738 377.95 585.838 372.9 589.238 368.9C592.738 364.9 597.888 361.9 604.688 359.9C611.488 357.9 620.338 356.9 631.238 356.9C642.738 356.9 651.938 358.05 658.838 360.35C665.738 362.65 670.688 366 673.688 370.4C676.688 374.7 678.188 380.15 678.188 386.75V417.5C678.188 426.1 679.388 432.6 681.788 437H649.088ZM622.388 422.6C626.788 422.6 630.788 421.95 634.388 420.65C637.988 419.35 640.838 417.5 642.938 415.1C645.038 412.7 646.088 409.85 646.088 406.55V401.75C645.588 401.95 645.138 402.1 644.738 402.2C644.338 402.2 644.038 402.2 643.838 402.2L625.238 404.45C621.438 404.85 618.488 405.5 616.388 406.4C614.288 407.2 612.838 408.25 612.038 409.55C611.238 410.75 610.838 412.3 610.838 414.2C610.838 417 611.788 419.1 613.688 420.5C615.588 421.9 618.488 422.6 622.388 422.6ZM693.488 437V359.6H724.388L725.588 370.25C732.388 361.75 742.288 357.5 755.288 357.5C761.988 357.5 767.938 358.6 773.138 360.8C778.438 362.9 782.588 366.1 785.588 370.4C788.688 374.6 790.238 379.7 790.238 385.7V437H757.238V391.85C757.238 388.05 756.038 385.05 753.638 382.85C751.238 380.65 747.938 379.55 743.738 379.55C740.438 379.55 737.488 380.2 734.888 381.5C732.288 382.8 730.238 384.65 728.738 387.05C727.238 389.45 726.488 392.35 726.488 395.75V437H693.488ZM873.534 330.2H906.534V437H876.234L875.334 426.95C868.534 435.75 858.134 440.15 844.134 440.15C835.134 440.15 827.284 438.5 820.584 435.2C813.984 431.8 808.884 426.95 805.284 420.65C801.684 414.35 799.884 406.9 799.884 398.3C799.884 389.5 801.834 382 805.734 375.8C809.734 369.5 815.034 364.75 821.634 361.55C828.334 358.35 835.634 356.75 843.534 356.75C856.234 356.75 866.234 360.2 873.534 367.1V330.2ZM853.134 417.65C859.734 417.65 864.884 416 868.584 412.7C872.384 409.3 874.284 404.35 874.284 397.85C874.284 391.35 872.384 386.4 868.584 383C864.784 379.5 859.684 377.75 853.284 377.75C849.584 377.75 846.234 378.45 843.234 379.85C840.234 381.15 837.784 383.3 835.884 386.3C834.084 389.3 833.184 393.15 833.184 397.85C833.184 404.85 835.034 409.9 838.734 413C842.534 416.1 847.334 417.65 853.134 417.65Z" fill="#00DC7C" />
                <path d="M139.997 599C132.697 599 126.797 598.3 122.297 596.9C117.797 595.4 114.447 592.9 112.247 589.4C110.047 585.8 108.947 580.9 108.947 574.7V538.1L94.5473 538.7V521.6L108.947 522.05V498.2H141.947V522.35L160.097 521.6V538.7L141.947 538.1V571.4C141.947 574 142.697 575.95 144.197 577.25C145.797 578.45 148.247 579.05 151.547 579.05H160.097V599H139.997ZM220.914 602.15C210.914 602.15 201.864 600.5 193.764 597.2C185.664 593.9 179.214 589.15 174.414 582.95C169.714 576.65 167.364 569.25 167.364 560.75C167.364 552.15 169.714 544.7 174.414 538.4C179.214 532 185.664 527.15 193.764 523.85C201.964 520.55 211.014 518.9 220.914 518.9C230.914 518.9 239.964 520.6 248.064 524C256.164 527.3 262.564 532.1 267.264 538.4C271.964 544.7 274.314 552.15 274.314 560.75C274.314 569.25 271.914 576.65 267.114 582.95C262.414 589.15 255.964 593.9 247.764 597.2C239.664 600.5 230.714 602.15 220.914 602.15ZM220.914 583.25C227.414 583.25 232.364 581.3 235.764 577.4C239.264 573.4 241.014 567.85 241.014 560.75C241.014 553.55 239.214 547.95 235.614 543.95C232.114 539.85 227.214 537.8 220.914 537.8C214.314 537.8 209.264 539.85 205.764 543.95C202.364 547.95 200.664 553.55 200.664 560.75C200.664 567.85 202.414 573.4 205.914 577.4C209.514 581.3 214.514 583.25 220.914 583.25ZM355.618 521.6H386.218V592.55C386.218 600.55 384.218 607.45 380.218 613.25C376.318 619.05 370.218 623.5 361.918 626.6C353.718 629.8 343.368 631.4 330.868 631.4C316.868 631.4 305.818 629.25 297.718 624.95C289.618 620.75 284.468 614.25 282.268 605.45L313.768 603.8C315.168 606.8 317.368 608.85 320.368 609.95C323.368 611.05 327.368 611.6 332.368 611.6C338.068 611.6 342.468 610.9 345.568 609.5C348.668 608.1 350.768 606.25 351.868 603.95C352.968 601.75 353.518 599.2 353.518 596.3V586.4C350.118 590.1 345.968 592.9 341.068 594.8C336.168 596.6 330.418 597.5 323.818 597.5C314.918 597.5 307.118 595.95 300.418 592.85C293.818 589.65 288.718 585.1 285.118 579.2C281.518 573.3 279.718 566.25 279.718 558.05C279.718 549.65 281.568 542.5 285.268 536.6C289.068 530.7 294.268 526.25 300.868 523.25C307.468 520.25 314.918 518.75 323.218 518.75C336.618 518.75 347.068 522.5 354.568 530L355.618 521.6ZM332.818 576.5C339.518 576.5 344.718 574.95 348.418 571.85C352.218 568.65 354.118 563.9 354.118 557.6C354.118 551.4 352.218 546.65 348.418 543.35C344.718 540.05 339.568 538.4 332.968 538.4C326.768 538.4 321.868 540 318.268 543.2C314.768 546.4 313.018 551.2 313.018 557.6C313.018 564 314.768 568.75 318.268 571.85C321.768 574.95 326.618 576.5 332.818 576.5ZM449.73 601.7C439.43 601.7 430.18 600.1 421.98 596.9C413.88 593.6 407.48 588.85 402.78 582.65C398.18 576.45 395.88 569 395.88 560.3C395.88 551.9 398.18 544.6 402.78 538.4C407.48 532.2 413.78 527.45 421.68 524.15C429.68 520.85 438.48 519.2 448.08 519.2C458.28 519.2 467.38 521 475.38 524.6C483.38 528.1 489.63 533.2 494.13 539.9C498.73 546.5 501.03 554.3 501.03 563.3V567.2H428.73C429.53 572.4 431.68 576.35 435.18 579.05C438.68 581.75 443.48 583.1 449.58 583.1C453.78 583.1 457.28 582.45 460.08 581.15C462.88 579.75 465.13 577.65 466.83 574.85L498.48 576.5C494.88 585 488.73 591.35 480.03 595.55C471.33 599.65 461.23 601.7 449.73 601.7ZM466.98 551.75C466.18 547.05 464.23 543.55 461.13 541.25C458.03 538.85 453.73 537.65 448.23 537.65C437.23 537.65 430.78 542.35 428.88 551.75H466.98ZM550.3 599C543 599 537.1 598.3 532.6 596.9C528.1 595.4 524.75 592.9 522.55 589.4C520.35 585.8 519.25 580.9 519.25 574.7V538.1L504.85 538.7V521.6L519.25 522.05V498.2H552.25V522.35L570.4 521.6V538.7L552.25 538.1V571.4C552.25 574 553 575.95 554.5 577.25C556.1 578.45 558.55 579.05 561.85 579.05H570.4V599H550.3ZM581.867 599V492.2H614.867V531.2C621.767 523.4 631.367 519.5 643.667 519.5C650.367 519.5 656.367 520.6 661.667 522.8C666.967 525 671.117 528.25 674.117 532.55C677.117 536.75 678.617 541.85 678.617 547.85V599H645.617V553.7C645.617 549.8 644.417 546.8 642.017 544.7C639.617 542.6 636.317 541.55 632.117 541.55C628.617 541.55 625.567 542.25 622.967 543.65C620.367 545.05 618.367 547 616.967 549.5C615.567 551.9 614.867 554.65 614.867 557.75V599H581.867ZM742.113 601.7C731.813 601.7 722.563 600.1 714.363 596.9C706.263 593.6 699.863 588.85 695.163 582.65C690.563 576.45 688.263 569 688.263 560.3C688.263 551.9 690.563 544.6 695.163 538.4C699.863 532.2 706.163 527.45 714.063 524.15C722.063 520.85 730.863 519.2 740.463 519.2C750.663 519.2 759.763 521 767.763 524.6C775.763 528.1 782.013 533.2 786.513 539.9C791.113 546.5 793.413 554.3 793.413 563.3V567.2H721.113C721.913 572.4 724.063 576.35 727.563 579.05C731.063 581.75 735.863 583.1 741.963 583.1C746.163 583.1 749.663 582.45 752.463 581.15C755.263 579.75 757.513 577.65 759.213 574.85L790.863 576.5C787.263 585 781.113 591.35 772.413 595.55C763.713 599.65 753.613 601.7 742.113 601.7ZM759.363 551.75C758.563 547.05 756.613 543.55 753.513 541.25C750.413 538.85 746.113 537.65 740.613 537.65C729.613 537.65 723.163 542.35 721.263 551.75H759.363ZM861.558 518.9C865.458 518.9 868.858 519.2 871.758 519.8V544.85C868.358 544.15 864.858 543.8 861.258 543.8C853.458 543.8 847.308 545.5 842.808 548.9C838.408 552.3 836.158 557.2 836.058 563.6V599H803.058V521.6H833.658L834.708 534.35C837.408 530.05 840.958 526.4 845.358 523.4C849.858 520.4 855.258 518.9 861.558 518.9Z" fill="#DFBBFE" />
            </svg>
        </Grid>
    </Grid>
)

export default SectionAsset