import React from "react";
import Vivus from "vivus";
import css from "./drawing.module.css";

class Drawing extends React.Component {
  componentDidMount() {
    this.rotonda = new Vivus("rotonda", {
      type: "scenario",
      duration: 300,
      dashGap: 20
    });
    this.construction = new Vivus("construction", {
      type: "scenario",
      duration: 300,
      dashGap: 20
    });
  }

  componentWillUnmount() {
    this.rotonda.destroy();
    this.construction.destroy();
  }

  render() {
    return (
      <div className={css.drawing}>
        <svg viewBox="0 0 800 800">
          <svg class="rotonda-drawing" viewBox="0 0 800 800" id="rotonda">
            <g>
              <path
                width="310"
                height="310"
                transform=""
                fill="none"
                stroke="black"
                stroke-linejoin="mitter"
                stroke-width="9"
                data-start="180"
                data-duration="50"
                d="M245 245 L555 245 L555 555 L245 555 Z"
                style={{
                  "stroke-dasharray": "1240, 1280",
                  "stroke-dashoffset": 0
                }}
              />
              <path
                width="160"
                height="160"
                transform=""
                fill="black"
                data-start="250"
                data-duration="50"
                class="fade"
                d="M320 320 L480 320 L480 480 L320 480 Z"
                style={{
                  "stroke-dasharray": "640, 680",
                  "stroke-dashoffset": 0
                }}
              />
              <path
                stroke="black"
                stroke-width="8"
                data-start="210"
                data-duration="30"
                d="M245,323L555,323"
                style={{
                  "stroke-dasharray": "310, 350",
                  "stroke-dashoffset": 0
                }}
              />
              <path
                stroke="black"
                stroke-width="8"
                data-start="220"
                data-duration="30"
                d="M245,380L555,380"
                style={{
                  "stroke-dasharray": "310, 350",
                  "stroke-dashoffset": 0
                }}
              />
              <path
                stroke="black"
                stroke-width="8"
                data-start="230"
                data-duration="30"
                d="M245,420L555,420"
                style={{
                  "stroke-dasharray": "310, 350",
                  "stroke-dashoffset": 0
                }}
              />
              <path
                stroke="black"
                stroke-width="8"
                data-start="240"
                data-duration="30"
                d="M245,477L555,477"
                style={{
                  "stroke-dasharray": "310, 350",
                  "stroke-dashoffset": 0
                }}
              />
              <path
                stroke="black"
                stroke-width="8"
                transform="rotate(90, 400, 400)"
                data-start="250"
                data-duration="30"
                d="M245,432L555,432"
                style={{
                  "stroke-dasharray": "310, 350",
                  "stroke-dashoffset": 0
                }}
              />
              <path
                stroke="black"
                stroke-width="8"
                transform="rotate(90, 400, 400)"
                data-start="250"
                data-duration="30"
                d="M245,368L555,368"
                style={{
                  "stroke-dasharray": "310, 350",
                  "stroke-dashoffset": 0
                }}
              />
            </g>
            <g class="fade">
              <path
                stroke="white"
                stroke-width="32"
                data-ignore="true"
                d="M220,400L580,400"
              />
              <path
                stroke="white"
                stroke-width="16"
                data-ignore="true"
                d="M220,283L580,283"
              />
              <path
                stroke="white"
                stroke-width="16"
                data-ignore="true"
                d="M220,517L580,517"
              />
              <path
                stroke="white"
                stroke-width="32"
                transform="rotate(90, 400, 400)"
                data-ignore="true"
                d="M220,400L580,400"
              />
              <path
                stroke="white"
                stroke-width="16"
                transform="rotate(90, 400, 400)"
                data-ignore="true"
                d="M220,526L580,526"
              />
              <path
                stroke="white"
                stroke-width="16"
                transform="rotate(90, 400, 400)"
                data-ignore="true"
                d="M220,274L580,274"
              />
              <path
                stroke="white"
                stroke-width="16"
                transform="rotate(45, 400, 400)"
                data-ignore="true"
                d="M310,400L490,400"
              />
              <path
                stroke="white"
                stroke-width="16"
                transform="rotate(135, 400, 400)"
                data-ignore="true"
                d="M310,400L490,400"
              />
              <path
                fill="white"
                data-ignore="true"
                d="M330,400A70,70 0,1,1 470,400A70,70 0,1,1 330,400"
              />
              <path
                fill="white"
                data-ignore="true"
                d="M328,340A12,12 0,1,1 352,340A12,12 0,1,1 328,340"
              />
              <path
                fill="white"
                data-ignore="true"
                d="M328,460A12,12 0,1,1 352,460A12,12 0,1,1 328,460"
              />
              <path
                fill="white"
                data-ignore="true"
                d="M448,340A12,12 0,1,1 472,340A12,12 0,1,1 448,340"
              />
              <path
                fill="white"
                data-ignore="true"
                d="M448,460A12,12 0,1,1 472,460A12,12 0,1,1 448,460"
              />
            </g>
            <g>
              <path
                width="320"
                height="320"
                transform=""
                fill="none"
                stroke="black"
                stroke-width="1"
                data-start="150"
                data-duration="50"
                d="M240 240 L560 240 L560 560 L240 560 Z"
                style={{
                  "stroke-dasharray": "1280, 1320",
                  "stroke-dashoffset": 0
                }}
              />
              <path
                width="300"
                height="300"
                transform=""
                fill="none"
                stroke="black"
                stroke-width="1"
                data-start="160"
                data-duration="50"
                d="M250 250 L550 250 L550 550 L250 550 Z"
                style={{
                  "stroke-dasharray": "1200, 1240",
                  "stroke-dashoffset": 0
                }}
              />
              <path
                fill="none"
                stroke="black"
                stroke-width="1"
                data-start="240"
                data-duration="20"
                d="M330,400A70,70 0,1,1 470,400A70,70 0,1,1 330,400"
                style={{
                  "stroke-dasharray": "440, 480",
                  "stroke-dashoffset": 0
                }}
              />
            </g>
            <g id="stairs-wrapper" transform="rotate(0, 400, 400)">
              <g id="stairs">
                <path
                  width="95"
                  height="15"
                  fill="none"
                  stroke="black"
                  data-start="250"
                  data-duration="80"
                  d="M75 315 L170 315 L170 330 L75 330 Z"
                  style={{
                    "stroke-dasharray": "220, 260",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  width="95"
                  height="15"
                  fill="none"
                  stroke="black"
                  data-start="250"
                  data-duration="80"
                  d="M75 470 L170 470 L170 485 L75 485 Z"
                  style={{
                    "stroke-dasharray": "220, 260",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M80,330L80,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M84.4,330L84.4,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M88.8,330L88.8,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M93.2,330L93.2,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M97.6,330L97.6,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M102,330L102,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M106.4,330L106.4,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M110.80000000000001,330L110.80000000000001,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M115.2,330L115.2,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M119.6,330L119.6,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M124,330L124,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M128.4,330L128.4,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M132.8,330L132.8,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M137.2,330L137.2,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M141.60000000000002,330L141.60000000000002,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M146,330L146,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M150.4,330L150.4,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M154.8,330L154.8,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M159.2,330L159.2,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M163.60000000000002,330L163.60000000000002,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M168,330L168,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
              </g>
              <g id="columns">
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 315 L185 315 L185 330 L170 330 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,322.5A7.5,7.5 0,1,1 185,322.5A7.5,7.5 0,1,1 170,322.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,322.5A4.5,4.5 0,1,1 182,322.5A4.5,4.5 0,1,1 173,322.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 346 L185 346 L185 361 L170 361 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,353.5A7.5,7.5 0,1,1 185,353.5A7.5,7.5 0,1,1 170,353.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,353.5A4.5,4.5 0,1,1 182,353.5A4.5,4.5 0,1,1 173,353.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 377 L185 377 L185 392 L170 392 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,384.5A7.5,7.5 0,1,1 185,384.5A7.5,7.5 0,1,1 170,384.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,384.5A4.5,4.5 0,1,1 182,384.5A4.5,4.5 0,1,1 173,384.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 408 L185 408 L185 423 L170 423 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,415.5A7.5,7.5 0,1,1 185,415.5A7.5,7.5 0,1,1 170,415.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,415.5A4.5,4.5 0,1,1 182,415.5A4.5,4.5 0,1,1 173,415.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 439 L185 439 L185 454 L170 454 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,446.5A7.5,7.5 0,1,1 185,446.5A7.5,7.5 0,1,1 170,446.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,446.5A4.5,4.5 0,1,1 182,446.5A4.5,4.5 0,1,1 173,446.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 470 L185 470 L185 485 L170 485 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,477.5A7.5,7.5 0,1,1 185,477.5A7.5,7.5 0,1,1 170,477.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,477.5A4.5,4.5 0,1,1 182,477.5A4.5,4.5 0,1,1 173,477.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    points="190 318, 240 318, 240 327.5, 230 327, 230 324, 200 324, 200 327, 190 327"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    style={{
                      "stroke-dasharray": "0, 40",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    points="190 473, 200 473, 200 477, 230 477, 230 473,240 473, 240 482, 190 482"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    style={{
                      "stroke-dasharray": "0, 40",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    stroke="black"
                    stroke-width="1"
                    data-start="250"
                    data-duration="80"
                    d="M185,315L240,315"
                    style={{
                      "stroke-dasharray": "55, 95",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    stroke="black"
                    stroke-width="1"
                    data-start="250"
                    data-duration="80"
                    d="M185,485L240,485"
                    style={{
                      "stroke-dasharray": "55, 95",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
              </g>
            </g>
            <g id="stairs-wrapper" transform="rotate(90, 400, 400)">
              <g id="stairs">
                <path
                  width="95"
                  height="15"
                  fill="none"
                  stroke="black"
                  data-start="250"
                  data-duration="80"
                  d="M75 315 L170 315 L170 330 L75 330 Z"
                  style={{
                    "stroke-dasharray": "220, 260",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  width="95"
                  height="15"
                  fill="none"
                  stroke="black"
                  data-start="250"
                  data-duration="80"
                  d="M75 470 L170 470 L170 485 L75 485 Z"
                  style={{
                    "stroke-dasharray": "220, 260",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M80,330L80,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M84.4,330L84.4,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M88.8,330L88.8,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M93.2,330L93.2,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M97.6,330L97.6,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M102,330L102,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M106.4,330L106.4,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M110.80000000000001,330L110.80000000000001,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M115.2,330L115.2,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M119.6,330L119.6,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M124,330L124,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M128.4,330L128.4,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M132.8,330L132.8,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M137.2,330L137.2,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M141.60000000000002,330L141.60000000000002,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M146,330L146,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M150.4,330L150.4,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M154.8,330L154.8,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M159.2,330L159.2,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M163.60000000000002,330L163.60000000000002,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M168,330L168,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
              </g>
              <g id="columns">
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 315 L185 315 L185 330 L170 330 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,322.5A7.5,7.5 0,1,1 185,322.5A7.5,7.5 0,1,1 170,322.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,322.5A4.5,4.5 0,1,1 182,322.5A4.5,4.5 0,1,1 173,322.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 346 L185 346 L185 361 L170 361 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,353.5A7.5,7.5 0,1,1 185,353.5A7.5,7.5 0,1,1 170,353.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,353.5A4.5,4.5 0,1,1 182,353.5A4.5,4.5 0,1,1 173,353.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 377 L185 377 L185 392 L170 392 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,384.5A7.5,7.5 0,1,1 185,384.5A7.5,7.5 0,1,1 170,384.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,384.5A4.5,4.5 0,1,1 182,384.5A4.5,4.5 0,1,1 173,384.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 408 L185 408 L185 423 L170 423 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,415.5A7.5,7.5 0,1,1 185,415.5A7.5,7.5 0,1,1 170,415.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,415.5A4.5,4.5 0,1,1 182,415.5A4.5,4.5 0,1,1 173,415.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 439 L185 439 L185 454 L170 454 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,446.5A7.5,7.5 0,1,1 185,446.5A7.5,7.5 0,1,1 170,446.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,446.5A4.5,4.5 0,1,1 182,446.5A4.5,4.5 0,1,1 173,446.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 470 L185 470 L185 485 L170 485 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,477.5A7.5,7.5 0,1,1 185,477.5A7.5,7.5 0,1,1 170,477.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,477.5A4.5,4.5 0,1,1 182,477.5A4.5,4.5 0,1,1 173,477.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    points="190 318, 240 318, 240 327.5, 230 327, 230 324, 200 324, 200 327, 190 327"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    style={{
                      "stroke-dasharray": "0, 40",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    points="190 473, 200 473, 200 477, 230 477, 230 473,240 473, 240 482, 190 482"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    style={{
                      "stroke-dasharray": "0, 40",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    stroke="black"
                    stroke-width="1"
                    data-start="250"
                    data-duration="80"
                    d="M185,315L240,315"
                    style={{
                      "stroke-dasharray": "55, 95",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    stroke="black"
                    stroke-width="1"
                    data-start="250"
                    data-duration="80"
                    d="M185,485L240,485"
                    style={{
                      "stroke-dasharray": "55, 95",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
              </g>
            </g>
            <g id="stairs-wrapper" transform="rotate(180, 400, 400)">
              <g id="stairs">
                <path
                  width="95"
                  height="15"
                  fill="none"
                  stroke="black"
                  data-start="250"
                  data-duration="80"
                  d="M75 315 L170 315 L170 330 L75 330 Z"
                  style={{
                    "stroke-dasharray": "220, 260",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  width="95"
                  height="15"
                  fill="none"
                  stroke="black"
                  data-start="250"
                  data-duration="80"
                  d="M75 470 L170 470 L170 485 L75 485 Z"
                  style={{
                    "stroke-dasharray": "220, 260",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M80,330L80,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M84.4,330L84.4,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M88.8,330L88.8,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M93.2,330L93.2,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M97.6,330L97.6,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M102,330L102,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M106.4,330L106.4,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M110.80000000000001,330L110.80000000000001,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M115.2,330L115.2,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M119.6,330L119.6,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M124,330L124,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M128.4,330L128.4,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M132.8,330L132.8,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M137.2,330L137.2,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M141.60000000000002,330L141.60000000000002,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M146,330L146,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M150.4,330L150.4,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M154.8,330L154.8,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M159.2,330L159.2,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M163.60000000000002,330L163.60000000000002,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M168,330L168,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
              </g>
              <g id="columns">
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 315 L185 315 L185 330 L170 330 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,322.5A7.5,7.5 0,1,1 185,322.5A7.5,7.5 0,1,1 170,322.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,322.5A4.5,4.5 0,1,1 182,322.5A4.5,4.5 0,1,1 173,322.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 346 L185 346 L185 361 L170 361 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,353.5A7.5,7.5 0,1,1 185,353.5A7.5,7.5 0,1,1 170,353.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,353.5A4.5,4.5 0,1,1 182,353.5A4.5,4.5 0,1,1 173,353.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 377 L185 377 L185 392 L170 392 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,384.5A7.5,7.5 0,1,1 185,384.5A7.5,7.5 0,1,1 170,384.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,384.5A4.5,4.5 0,1,1 182,384.5A4.5,4.5 0,1,1 173,384.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 408 L185 408 L185 423 L170 423 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,415.5A7.5,7.5 0,1,1 185,415.5A7.5,7.5 0,1,1 170,415.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,415.5A4.5,4.5 0,1,1 182,415.5A4.5,4.5 0,1,1 173,415.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 439 L185 439 L185 454 L170 454 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,446.5A7.5,7.5 0,1,1 185,446.5A7.5,7.5 0,1,1 170,446.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,446.5A4.5,4.5 0,1,1 182,446.5A4.5,4.5 0,1,1 173,446.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 470 L185 470 L185 485 L170 485 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,477.5A7.5,7.5 0,1,1 185,477.5A7.5,7.5 0,1,1 170,477.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,477.5A4.5,4.5 0,1,1 182,477.5A4.5,4.5 0,1,1 173,477.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    points="190 318, 240 318, 240 327.5, 230 327, 230 324, 200 324, 200 327, 190 327"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    style={{
                      "stroke-dasharray": "0, 40",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    points="190 473, 200 473, 200 477, 230 477, 230 473,240 473, 240 482, 190 482"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    style={{
                      "stroke-dasharray": "0, 40",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    stroke="black"
                    stroke-width="1"
                    data-start="250"
                    data-duration="80"
                    d="M185,315L240,315"
                    style={{
                      "stroke-dasharray": "55, 95",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    stroke="black"
                    stroke-width="1"
                    data-start="250"
                    data-duration="80"
                    d="M185,485L240,485"
                    style={{
                      "stroke-dasharray": "55, 95",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
              </g>
            </g>
            <g id="stairs-wrapper" transform="rotate(270, 400, 400)">
              <g id="stairs">
                <path
                  width="95"
                  height="15"
                  fill="none"
                  stroke="black"
                  data-start="250"
                  data-duration="80"
                  d="M75 315 L170 315 L170 330 L75 330 Z"
                  style={{
                    "stroke-dasharray": "220, 260",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  width="95"
                  height="15"
                  fill="none"
                  stroke="black"
                  data-start="250"
                  data-duration="80"
                  d="M75 470 L170 470 L170 485 L75 485 Z"
                  style={{
                    "stroke-dasharray": "220, 260",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M80,330L80,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M84.4,330L84.4,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M88.8,330L88.8,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M93.2,330L93.2,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M97.6,330L97.6,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M102,330L102,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M106.4,330L106.4,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M110.80000000000001,330L110.80000000000001,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M115.2,330L115.2,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M119.6,330L119.6,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M124,330L124,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M128.4,330L128.4,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M132.8,330L132.8,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M137.2,330L137.2,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M141.60000000000002,330L141.60000000000002,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M146,330L146,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M150.4,330L150.4,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M154.8,330L154.8,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M159.2,330L159.2,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M163.60000000000002,330L163.60000000000002,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
                <path
                  stroke="black"
                  stroke-width="1"
                  data-start="250"
                  data-duration="80"
                  d="M168,330L168,470"
                  style={{
                    "stroke-dasharray": "140, 180",
                    "stroke-dashoffset": 0
                  }}
                />
              </g>
              <g id="columns">
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 315 L185 315 L185 330 L170 330 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,322.5A7.5,7.5 0,1,1 185,322.5A7.5,7.5 0,1,1 170,322.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,322.5A4.5,4.5 0,1,1 182,322.5A4.5,4.5 0,1,1 173,322.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 346 L185 346 L185 361 L170 361 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,353.5A7.5,7.5 0,1,1 185,353.5A7.5,7.5 0,1,1 170,353.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,353.5A4.5,4.5 0,1,1 182,353.5A4.5,4.5 0,1,1 173,353.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 377 L185 377 L185 392 L170 392 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,384.5A7.5,7.5 0,1,1 185,384.5A7.5,7.5 0,1,1 170,384.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,384.5A4.5,4.5 0,1,1 182,384.5A4.5,4.5 0,1,1 173,384.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 408 L185 408 L185 423 L170 423 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,415.5A7.5,7.5 0,1,1 185,415.5A7.5,7.5 0,1,1 170,415.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,415.5A4.5,4.5 0,1,1 182,415.5A4.5,4.5 0,1,1 173,415.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 439 L185 439 L185 454 L170 454 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,446.5A7.5,7.5 0,1,1 185,446.5A7.5,7.5 0,1,1 170,446.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,446.5A4.5,4.5 0,1,1 182,446.5A4.5,4.5 0,1,1 173,446.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    width="15"
                    height="15"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170 470 L185 470 L185 485 L170 485 Z"
                    style={{
                      "stroke-dasharray": "60, 100",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M170,477.5A7.5,7.5 0,1,1 185,477.5A7.5,7.5 0,1,1 170,477.5"
                    style={{
                      "stroke-dasharray": "48, 88",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    d="M173,477.5A4.5,4.5 0,1,1 182,477.5A4.5,4.5 0,1,1 173,477.5"
                    style={{
                      "stroke-dasharray": "29, 69",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
                <g>
                  <path
                    points="190 318, 240 318, 240 327.5, 230 327, 230 324, 200 324, 200 327, 190 327"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    style={{
                      "stroke-dasharray": "0, 40",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    points="190 473, 200 473, 200 477, 230 477, 230 473,240 473, 240 482, 190 482"
                    fill="none"
                    stroke="black"
                    data-start="250"
                    data-duration="80"
                    style={{
                      "stroke-dasharray": "0, 40",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    stroke="black"
                    stroke-width="1"
                    data-start="250"
                    data-duration="80"
                    d="M185,315L240,315"
                    style={{
                      "stroke-dasharray": "55, 95",
                      "stroke-dashoffset": 0
                    }}
                  />
                  <path
                    stroke="black"
                    stroke-width="1"
                    data-start="250"
                    data-duration="80"
                    d="M185,485L240,485"
                    style={{
                      "stroke-dasharray": "55, 95",
                      "stroke-dashoffset": 0
                    }}
                  />
                </g>
              </g>
            </g>
          </svg>
          <svg
            class="rotonda-drawing"
            viewBox="0 0 800 800"
            id="construction"
            style={{ "mix-blend-mode": "multiply" }}
          >
            <g data-ignore="true">
              <path
                fill="none"
                stroke="#bababa"
                stroke-width="1"
                data-start="40"
                data-duration="100"
                d="M80,400A320,320 0,1,1 720,400A320,320 0,1,1 80,400"
                style={{
                  "stroke-dasharray": "2011, 2051",
                  "stroke-dashoffset": 0
                }}
              />
              <path
                fill="none"
                stroke="#bababa"
                stroke-width="1"
                data-start="0"
                data-duration="20"
                d="M376,400A24,24 0,1,1 424,400A24,24 0,1,1 376,400"
                style={{
                  "stroke-dasharray": "151, 191",
                  "stroke-dashoffset": 0
                }}
              />
              <path
                width="450"
                height="450"
                transform=""
                fill="none"
                stroke="#bababa"
                stroke-linejoin="round"
                data-start="100"
                data-duration="50"
                d="M175 175 L625 175 L625 625 L175 625 Z"
                style={{
                  "stroke-dasharray": "1800, 1840",
                  "stroke-dashoffset": 0
                }}
              />
              <path
                width="450"
                height="450"
                transform="rotate(45, 400, 400)"
                fill="none"
                stroke="#bababa"
                stroke-linejoin="round"
                data-start="110"
                data-duration="50"
                d="M175 175 L625 175 L625 625 L175 625 Z"
                style={{
                  "stroke-dasharray": "1800, 1840",
                  "stroke-dashoffset": 0
                }}
              />
              <path
                width="318"
                height="318"
                transform="rotate(45, 400, 400)"
                fill="none"
                stroke="#bababa"
                stroke-linejoin="round"
                data-start="120"
                data-duration="50"
                d="M241 241 L559 241 L559 559 L241 559 Z"
                style={{
                  "stroke-dasharray": "1272, 1312",
                  "stroke-dashoffset": 0
                }}
              />
              <path
                width="225"
                height="225"
                transform="rotate(45, 400, 400)"
                fill="none"
                stroke="#bababa"
                stroke-linejoin="round"
                data-start="130"
                data-duration="50"
                d="M287.5 287.5 L512.5 287.5 L512.5 512.5 L287.5 512.5 Z"
                style={{
                  "stroke-dasharray": "900, 940",
                  "stroke-dashoffset": 0
                }}
              />
              <path
                width="99"
                height="99"
                transform="rotate(45, 400, 400)"
                fill="none"
                stroke="#bababa"
                stroke-linejoin="round"
                data-start="140"
                data-duration="50"
                d="M350.5 350.5 L449.5 350.5 L449.5 449.5 L350.5 449.5 Z"
                style={{
                  "stroke-dasharray": "396, 436",
                  "stroke-dashoffset": 0
                }}
              />
            </g>
            <g>
              <path
                stroke="#bababa"
                stroke-width="1"
                data-start="0"
                data-duration="20"
                d="M50,400L750,400"
                style={{
                  "stroke-dasharray": "700, 740",
                  "stroke-dashoffset": 0
                }}
              />
              <path
                stroke="#bababa"
                stroke-width="1"
                transform="rotate(45, 400, 400)"
                data-start="20"
                data-duration="20"
                d="M50,400L750,400"
                style={{
                  "stroke-dasharray": "700, 740",
                  "stroke-dashoffset": 0
                }}
              />
              <path
                stroke="#bababa"
                stroke-width="1"
                transform="rotate(90, 400, 400)"
                data-start="40"
                data-duration="20"
                d="M50,400L750,400"
                style={{
                  "stroke-dasharray": "700, 740",
                  "stroke-dashoffset": 0
                }}
              />
              <path
                stroke="#bababa"
                stroke-width="1"
                transform="rotate(135, 400, 400)"
                data-start="60"
                data-duration="20"
                d="M50,400L750,400"
                style={{
                  "stroke-dasharray": "700, 740",
                  "stroke-dashoffset": 0
                }}
              />
            </g>
          </svg>
        </svg>
      </div>
    );
  }
}

export default Drawing;
