import React from 'react';
import defaultPropTypes from './defaultPropTypes';

export const SuccessIcon = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    style={{ enableBackground: 'new 0 0 512 512' }}
    xmlSpace="preserve"
    width={width}
    height={height}
  >
    <g>
      <g>
        <circle
          style={{ fill: '#A4C2F7' }}
          cx={256}
          cy={256}
          r="246.154"
          data-original="#A4C2F7"
        />
        <ellipse
          style={{ fill: '#E3E7F2' }}
          cx={256}
          cy={256}
          rx="216.615"
          ry="246.154"
          data-original="#E3E7F2"
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d="M39.385,256C39.385,120.053,136.367,9.846,256,9.846C120.053,9.846,9.846,120.053,9.846,256   S120.053,502.154,256,502.154C136.367,502.154,39.385,391.947,39.385,256z"
          data-original="#FFFFFF"
        />
        <g>
          <path
            style={{ fill: '#000000' }}
            d="M256,512C114.615,512,0,397.385,0,256S114.615,0,256,0s256,114.615,256,256    C511.842,397.319,397.319,511.842,256,512z M256,19.692C125.491,19.692,19.692,125.491,19.692,256S125.491,492.308,256,492.308    S492.308,386.509,492.308,256C492.158,125.553,386.447,19.842,256,19.692z"
            data-original="#428DFF"
            className="active-path"
            data-old_color="#000002"
          />
          <path
            style={{ fill: '#000000' }}
            d="M226.457,344.615c-2.233,0.001-4.4-0.759-6.144-2.154l-98.462-78.769    c-4.23-3.401-4.91-9.584-1.521-13.824c3.389-4.24,9.57-4.938,13.819-1.561l91.163,72.933l151.327-170.24    c3.611-4.065,9.834-4.433,13.899-0.822s4.433,9.834,0.822,13.899L233.822,341.308    C231.953,343.414,229.272,344.618,226.457,344.615z"
            data-original="#428DFF"
            className="active-path"
            data-old_color="#000002"
          />
        </g>
      </g>
    </g>
  </svg>
);

export const EditIcon = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    style={{ enableBackground: 'new 0 0 512 512' }}
    xmlSpace="preserve"
    width={width}
    height={height}
    className="resolve-circle-button"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect
      id="svgEditorBackground"
      x={0}
      y={0}
      width={512}
      height={512}
      style={{ fill: 'none', stroke: 'none' }}
    />
    <defs id="svgEditorDefs">
      <polygon
        id="svgEditorShapeDefs"
        style={{
          fill: 'khaki',
          stroke: 'black',
          vectorEffect: 'non-scaling-stroke',
          strokeWidth: 1,
        }}
      />
      <linearGradient
        gradientUnits="objectBoundingBox"
        id="lgrd2-black-white"
        spreadMethod="pad"
        x1="0%"
        x2="100%"
        y1="0%"
        y2="100%"
      >
        <stop offset="0%" stopColor="black" />
        <stop offset="100%" stopColor="white" />
      </linearGradient>
      <pattern
        height={10}
        id="hatch-black-dash-45"
        patternTransform="rotate(45) scale(0.4)"
        patternUnits="userSpaceOnUse"
        viewBox="0 0 24 10"
        width={24}
        x={0}
        y={0}
      >
        <line
          style={{ stroke: 'black', strokeWidth: 1, strokeDasharray: '4,4' }}
          x1={0}
          x2={24}
          y1={5}
          y2={5}
        />
      </pattern>
      <pattern
        height={10}
        id="hatch-black-45"
        patternTransform="rotate(45) scale(0.4)"
        patternUnits="userSpaceOnUse"
        viewBox="0 0 10 10"
        width={10}
        x={0}
        y={0}
      >
        <line
          style={{ stroke: 'black', strokeWidth: 1 }}
          x1={0}
          x2={10}
          y1={5}
          y2={5}
        />
      </pattern>
      <pattern
        height={10}
        id="hatch-black-dash-120"
        patternTransform="rotate(120) scale(0.4)"
        patternUnits="userSpaceOnUse"
        viewBox="0 0 24 10"
        width={24}
        x={0}
        y={0}
      >
        <line
          style={{ stroke: 'black', strokeWidth: 1, strokeDasharray: '4,4' }}
          x1={0}
          x2={24}
          y1={5}
          y2={5}
        />
      </pattern>
      <pattern
        height={10}
        id="hatch-black-120"
        patternTransform="rotate(120) scale(0.4)"
        patternUnits="userSpaceOnUse"
        viewBox="0 0 10 10"
        width={10}
        x={0}
        y={0}
      >
        <line
          style={{ stroke: 'black', strokeWidth: 1 }}
          x1={0}
          x2={10}
          y1={5}
          y2={5}
        />
      </pattern>
      <linearGradient
        gradientTransform="rotate(90)"
        gradientUnits="objectBoundingBox"
        id="lgrd4-a"
        spreadMethod="repeat"
        x1="0%"
        x2="15%"
        y1="0%"
        y2="5%"
      >
        <stop offset="5%" stopColor="#e20709" stopOpacity="0.8" />
        <stop offset="30%" stopColor="#9ad346" stopOpacity={1} />
        <stop offset="60%" stopColor="#bcd346" stopOpacity="0.8" />
        <stop offset="90%" stopColor="#e20709" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient
        gradientTransform="skewX(-45)"
        gradientUnits="objectBoundingBox"
        id="lgrd2-c-repeat"
        spreadMethod="repeat"
        x1="0%"
        x2="5%"
        y1="0%"
        y2="0%"
      >
        <stop offset="5%" stopColor="red" stopOpacity="0.8" />
        <stop offset="75%" stopColor="yellow" stopOpacity={1} />
      </linearGradient>
      <linearGradient
        gradientUnits="objectBoundingBox"
        id="lgrd2-fire"
        spreadMethod="pad"
        x1="0%"
        x2="100%"
        y1="0%"
        y2="0%"
      >
        <stop
          offset="0%"
          style={{ stopColor: 'rgb(255,255,0)', stopOpacity: 1 }}
        />
        <stop
          offset="100%"
          style={{ stopColor: 'rgb(255,0,0)', stopOpacity: 1 }}
        />
      </linearGradient>
      <radialGradient
        fx="30%"
        fy="30%"
        gradientUnits="objectBoundingBox"
        id="rgrd11-a"
      >
        <stop offset={0} stopColor="#f9caaa" />
        <stop offset="20%" stopColor="#f9caaa" />
        <stop offset="20%" stopColor="#f9ae7a" />
        <stop offset="40%" stopColor="#f9ae7a" />
        <stop offset="40%" stopColor="#f79959" />
        <stop offset="60%" stopColor="#f79959" />
        <stop offset="60%" stopColor="#fc9149" />
        <stop offset="80%" stopColor="#fc9149" />
        <stop offset="80%" stopColor="#f79959" />
        <stop offset="90%" stopColor="#f97821" />
        <stop offset="100%" stopColor="#f97821" />
      </radialGradient>
      <radialGradient
        cx="45%"
        cy="45%"
        fx="30%"
        fy="30%"
        gradientUnits="objectBoundingBox"
        id="rgrd3-b"
      >
        <stop offset="0%" stopColor="#f9a5a5" />
        <stop offset="50%" stopColor="#f98585" />
        <stop offset="100%" stopColor="#f96b6b" />
      </radialGradient>
      <linearGradient
        gradientUnits="objectBoundingBox"
        id="lrgd2-e1-50-reflect"
        spreadMethod="reflect"
        x1="0%"
        x2="50%"
        y1="0%"
        y2="0%"
      >
        <stop offset="0%" stopColor="lightblue" />
        <stop offset="100%" stopColor="#ef5b2b" />
      </linearGradient>
      <radialGradient
        cx="50%"
        cy="50%"
        fx="50%"
        fy="50%"
        gradientUnits="objectBoundingBox"
        id="rgrd2-a"
        r="5%"
        spreadMethod="reflect"
      >
        <stop offset="5%" stopColor="red" stopOpacity={1} />
        <stop offset="95%" stopColor="yellow" stopOpacity={1} />
      </radialGradient>
      <linearGradient
        gradientTransform="rotate(90)"
        gradientUnits="objectBoundingBox"
        id="lgrd3-a"
        spreadMethod="repeat"
        x1="10%"
        x2="20%"
        y1="20%"
        y2="20%"
      >
        <stop offset="5%" stopColor="#babc91" stopOpacity={1} />
        <stop offset="50%" stopColor="#c8d591" stopOpacity={1} />
        <stop offset="90%" stopColor="#afd591" stopOpacity={1} />
      </linearGradient>
      <linearGradient
        gradientTransform="rotate(90)"
        gradientUnits="objectBoundingBox"
        id="lgrd2-d-reflect"
        spreadMethod="reflect"
        x1="0%"
        x2="5%"
        y1="0%"
        y2="5%"
      >
        <stop offset="0%" stopColor="#e20709" stopOpacity="0.8" />
        <stop offset="5%" stopColor="#9ad346" stopOpacity={1} />
      </linearGradient>
      <pattern
        height="20%"
        id="sun-gold-obox"
        patternUnits="objectBoundingBox"
        viewBox="-20 -20 168 168"
        width="20%"
        x="0%"
        y="0%"
      >
        <path
          d="M72 16.677v-8.677c0-4.419-3.581-8-8-8s-8 3.581-8 8v8.677c2.603-0.436 5.273-0.677 8-0.677s5.397 0.24 8 0.677z"
          style={{ fill: 'gold', stroke: 'none' }}
        />
        <path
          d="M18.745 109.255c3.125 3.124 8.189 3.124 11.314 0l6.139-6.139c-4.373-3.114-8.199-6.941-11.314-11.314l-6.139 6.139c-3.123 3.123-3.123 8.189 0 11.314z"
          style={{ fill: 'gold', stroke: 'none' }}
        />
        <path
          d="M56 111.323v8.677c0 4.419 3.581 8 8 8s8-3.581 8-8v-8.677c-2.603 0.436-5.273 0.677-8 0.677s-5.397-0.24-8-0.677z"
          style={{ fill: 'gold', stroke: 'none' }}
        />
        <path
          d="M36.197 24.884l-6.139-6.139c-3.125-3.124-8.189-3.124-11.314 0s-3.124 8.189 0 11.314l6.139 6.139c3.115-4.374 6.941-8.2 11.314-11.314z"
          style={{ fill: 'gold', stroke: 'none' }}
        />
        <path
          d="M8 72h8.677c-0.437-2.603-0.677-5.273-0.677-8s0.239-5.397 0.677-8h-8.677c-4.419 0-8 3.581-8 8s3.581 8 8 8z"
          style={{ fill: 'gold', stroke: 'none' }}
        />
        <path
          d="M120 56h-8.677c0.437 2.603 0.677 5.273 0.677 8s-0.239 5.397-0.677 8h8.677c4.419 0 8-3.581 8-8s-3.581-8-8-8z"
          style={{ fill: 'gold', stroke: 'none' }}
        />
        <path
          d="M109.255 18.745c-3.124-3.124-8.189-3.124-11.314 0l-6.139 6.139c4.373 3.114 8.199 6.941 11.314 11.314l6.139-6.139c3.123-3.123 3.123-8.189 0-11.314z"
          style={{ fill: 'gold', stroke: 'none' }}
        />
        <path
          d="M109.255 109.255c3.124-3.124 3.124-8.189 0-11.314l-6.139-6.139c-3.114 4.373-6.941 8.2-11.314 11.314l6.139 6.139c3.123 3.123 8.189 3.123 11.314 0z"
          style={{ fill: 'gold', stroke: 'none' }}
        />
        <path
          d="M104 64c0 22.091-17.909 40-40 40s-40-17.909-40-40c0-22.091 17.909-40 40-40s40 17.909 40 40z"
          style={{ fill: 'gold', stroke: 'none' }}
        />
      </pattern>
      <pattern
        height={10}
        id="sun-gold-usr"
        patternUnits="userSpaceOnUse"
        viewBox="-20 -20 168 168"
        width={10}
        x={0}
        y={0}
      >
        <path
          d="M72 16.677v-8.677c0-4.419-3.581-8-8-8s-8 3.581-8 8v8.677c2.603-0.436 5.273-0.677 8-0.677s5.397 0.24 8 0.677z"
          style={{ fill: 'gold', stroke: 'none' }}
        />
        <path
          d="M18.745 109.255c3.125 3.124 8.189 3.124 11.314 0l6.139-6.139c-4.373-3.114-8.199-6.941-11.314-11.314l-6.139 6.139c-3.123 3.123-3.123 8.189 0 11.314z"
          style={{ fill: 'gold', stroke: 'none' }}
        />
        <path
          d="M56 111.323v8.677c0 4.419 3.581 8 8 8s8-3.581 8-8v-8.677c-2.603 0.436-5.273 0.677-8 0.677s-5.397-0.24-8-0.677z"
          style={{ fill: 'gold', stroke: 'none' }}
        />
        <path
          d="M36.197 24.884l-6.139-6.139c-3.125-3.124-8.189-3.124-11.314 0s-3.124 8.189 0 11.314l6.139 6.139c3.115-4.374 6.941-8.2 11.314-11.314z"
          style={{ fill: 'gold', stroke: 'none' }}
        />
        <path
          d="M8 72h8.677c-0.437-2.603-0.677-5.273-0.677-8s0.239-5.397 0.677-8h-8.677c-4.419 0-8 3.581-8 8s3.581 8 8 8z"
          style={{ fill: 'gold', stroke: 'none' }}
        />
        <path
          d="M120 56h-8.677c0.437 2.603 0.677 5.273 0.677 8s-0.239 5.397-0.677 8h8.677c4.419 0 8-3.581 8-8s-3.581-8-8-8z"
          style={{ fill: 'gold', stroke: 'none' }}
        />
        <path
          d="M109.255 18.745c-3.124-3.124-8.189-3.124-11.314 0l-6.139 6.139c4.373 3.114 8.199 6.941 11.314 11.314l6.139-6.139c3.123-3.123 3.123-8.189 0-11.314z"
          style={{ fill: 'gold', stroke: 'none' }}
        />
        <path
          d="M109.255 109.255c3.124-3.124 3.124-8.189 0-11.314l-6.139-6.139c-3.114 4.373-6.941 8.2-11.314 11.314l6.139 6.139c3.123 3.123 8.189 3.123 11.314 0z"
          style={{ fill: 'gold', stroke: 'none' }}
        />
        <path
          d="M104 64c0 22.091-17.909 40-40 40s-40-17.909-40-40c0-22.091 17.909-40 40-40s40 17.909 40 40z"
          style={{ fill: 'gold', stroke: 'none' }}
        />
      </pattern>
      <linearGradient
        gradientUnits="objectBoundingBox"
        id="lgrd2-b"
        spreadMethod="pad"
        x1={0}
        x2="100%"
        y1={0}
        y2={0}
      >
        <stop offset="0%" stopColor="#BBC42A" />
        <stop offset="100%" stopColor="#ED6E46" />
      </linearGradient>
      <radialGradient
        cx="50%"
        cy="50%"
        fx="50%"
        fy="50%"
        id="rgrd2-white-red"
        r="50%"
      >
        <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0 }} />
        <stop offset="100%" style={{ stopColor: 'orange', stopOpacity: 1 }} />
      </radialGradient>
      <linearGradient
        gradientUnits="objectBoundingBox"
        id="lgrd2-peachpuff-sienna-h"
        spreadMethod="pad"
        x1="0%"
        x2="100%"
        y1="0%"
        y2="0%"
      >
        <stop offset="0%" style={{ stopColor: 'peachpuff', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'orange', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient
        gradientUnits="objectBoundingBox"
        id="lgrd2-peachpuff-sienna-v"
        spreadMethod="pad"
        x1="0%"
        x2="0%"
        y1="0%"
        y2="100%"
      >
        <stop
          offset="0%"
          style={{ stopColor: 'lightyellow', stopOpacity: '0.84' }}
        />
        <stop offset="100%" style={{ stopColor: 'khaki', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <g>
      <g>
        <circle
          style={{ fill: '#A4C2F7' }}
          cx={256}
          cy={256}
          r="246.154"
          data-original="#A4C2F7"
        />
        <ellipse
          style={{ fill: '#E3E7F2' }}
          cx={256}
          cy={256}
          rx="216.615"
          ry="246.154"
          data-original="#E3E7F2"
        />
        <path
          style={{ fill: '#FFFFFF' }}
          d="M39.385,256C39.385,120.053,136.367,9.846,256,9.846C120.053,9.846,9.846,120.053,9.846,256   S120.053,502.154,256,502.154C136.367,502.154,39.385,391.947,39.385,256z"
          data-original="#FFFFFF"
        />
        <g />
      </g>
    </g>
    <g
      transform="matrix(0.242076 2.17037 -2.17037 0.242076 391.192 91.02)"
      style={{
        fill: 'khaki',
        stroke: 'black',
        vectorEffect: 'non-scaling-stroke',
        strokeWidth: 1,
      }}
      id="e1_shape"
    >
      <path
        d="M2.864,26.864l17.086,17.086000000000002l24.000000000000004,-24l-17.086,-17.086c-3.8180000000000014,-3.819,-10.009,-3.819,-13.828,0l-10.172,10.172c-3.819,3.8180000000000014,-3.819,10.009,0,13.828Z"
        style={{ fill: 'url(#rgrd3-b)' }}
      />
      <path
        d="M88,112.001l-60.05,-60.05l24,-24l60.05,60.04899999999999l-24,24Z"
        style={{ fill: 'url(#lgrd2-peachpuff-sienna-h)' }}
        id="e2_path"
      />
      <path
        d="M96,120l8,8h24v-24l-8,-8Z"
        style={{ fill: 'url(#lgrd2-peachpuff-sienna-v)' }}
      />
    </g>
  </svg>
);

export const SurrenderIcon = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    viewBox="0 0 497.778 497.778"
    style={{ enableBackground: 'new 0 0 497.778 497.778' }}
    xmlSpace="preserve"
    width={width}
    height={height}
  >
    <g>
      <g transform="matrix(1.25 0 0 -1.25 0 45)">
        <g>
          <g>
            <path
              id="SVGCleanerId_0"
              style={{ fill: '#8899A6' }}
              d="M51.2-362.222c-12.561,0-22.756,10.194-22.756,22.756V13.244     C28.444,25.806,38.639,36,51.2,36s22.756-10.194,22.756-22.756v-352.711C73.956-352.028,63.761-362.222,51.2-362.222"
              data-original="#8899A6"
            />
            <path
              id="SVGCleanerId_1"
              style={{ fill: '#AAB8C2' }}
              d="M51.2,36c-12.572,0-22.756-10.183-22.756-22.756v-352.711     c0-3.14,2.549-5.689,5.689-5.689s5.689,2.549,5.689,5.689V-2.844c0,8.886,7.202,16.088,16.088,16.088h18.045     C73.956,25.817,63.772,36,51.2,36"
              data-original="#AAB8C2"
            />
            <g>
              <path
                id="SVGCleanerId_0_1_"
                style={{ fill: '#8899A6' }}
                d="M51.2-362.222c-12.561,0-22.756,10.194-22.756,22.756V13.244      C28.444,25.806,38.639,36,51.2,36s22.756-10.194,22.756-22.756v-352.711C73.956-352.028,63.761-362.222,51.2-362.222"
                data-original="#8899A6"
              />
            </g>
            <g>
              <path
                id="SVGCleanerId_1_1_"
                style={{ fill: '#AAB8C2' }}
                d="M51.2,36c-12.572,0-22.756-10.183-22.756-22.756v-352.711      c0-3.14,2.549-5.689,5.689-5.689s5.689,2.549,5.689,5.689V-2.844c0,8.886,7.202,16.088,16.088,16.088h18.045      C73.956,25.817,63.772,36,51.2,36"
                data-original="#AAB8C2"
              />
            </g>
            <path
              style={{ fill: '#E1E8ED' }}
              d="M363.122,12.22c-19.934,9.091-41.131,13.505-64.831,13.505c-28.649,0-57.116-6.485-84.639-12.766     C186.14,6.691,160.154,0.774,134.064,0.774c-20.366,0-38.48,3.743-55.387,11.446c-3.516,1.616-7.623,1.308-10.877-0.774     c-3.254-2.094-5.222-5.7-5.222-9.58v-216.178c0-4.449,2.594-8.499,6.656-10.354c19.934-9.091,41.142-13.494,64.831-13.494     c28.649,0,57.116,6.485,84.639,12.766c27.511,6.269,53.498,12.186,79.588,12.186c20.366,0,38.491-3.743,55.387-11.457     c3.527-1.582,7.623-1.308,10.877,0.796c3.254,2.082,5.222,5.689,5.222,9.557V1.867C369.778,6.327,367.172,10.377,363.122,12.22"
              data-original="#E1E8ED"
              className="active-path"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export const RemoveIcon = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox="0 0 477.60001 477.60001"
    width={width}
  >
    <g>
      <path
        d="m477.601562 238.800781c0 131.886719-106.914062 238.800781-238.800781 238.800781s-238.800781-106.914062-238.800781-238.800781 106.914062-238.800781 238.800781-238.800781 238.800781 106.914062 238.800781 238.800781zm0 0"
        fill="#382b73"
        data-original="#382B73"
        className="active-path"
        style={{ fill: '#EB6060' }}
        data-old_color="#FF3800"
      />
      <path
        d="m445.398438 238.800781c0 114.101563-92.496094 206.597657-206.597657 206.597657-114.101562 0-206.597656-92.496094-206.597656-206.597657 0-114.101562 92.496094-206.597656 206.597656-206.597656 114.101563 0 206.597657 92.496094 206.597657 206.597656zm0 0"
        fill="#473080"
        data-original="#473080"
        className
        style={{ fill: '#EB6060' }}
        data-old_color="#FF002B"
      />
      <path
        d="m330.429688 151.679688c-.164063-.148438-.332032-.296876-.503907-.4375-.347656-.285157-.703125-.550782-1.074219-.800782-2.226562-1.503906-4.910156-2.382812-7.796874-2.382812h-38.578126v-15.796875c0-10.765625-8.753906-19.519531-19.515624-19.519531h-48.324219c-10.761719 0-19.515625 8.753906-19.515625 19.519531v15.796875h-38.578125c-2.886719 0-5.570313.878906-7.792969 2.378906-.371094.25-.726562.519531-1.074219.800781-.171875.144531-.339843.289063-.503906.441407-2.808594 2.546874-4.566406 6.226562-4.566406 10.316406v25.019531c0 1.539063 1.246093 2.785156 2.785156 2.785156h6.699219l.15625 2.71875.148437 2.578125 9.574219 165.488282c.058594.992187.164062 1.96875.316406 2.933593.226563 1.441407.554688 2.851563.976563 4.214844.324219 1.050781.710937 2.074219 1.144531 3.070313.316406.730468.65625 1.453124 1.03125 2.148437.21875.414063.449219.820313.6875 1.222656 1.191406 2.003907 2.609375 3.855469 4.21875 5.519531.003906.003907.007812.007813.011719.011719.609375.628907 1.246093 1.230469 1.90625 1.800781.066406.058594.136719.121094.207031.179688 1.902344 1.617188 4.003906 3 6.265625 4.105469.453125.222656.910156.433593 1.375.632812.351563.148438.703125.292969 1.058594.429688.710937.273437 1.433593.527343 2.171875.75 2.269531.675781 4.648437 1.089843 7.105468 1.210937.488282.023438.984376.035156 1.480469.035156h93.757813c.496094 0 .992187-.011718 1.480468-.035156 2.457032-.121094 4.839844-.535156 7.109376-1.210937 1.59375-.476563 3.125-1.089844 4.597656-1.8125 2.261718-1.105469 4.367187-2.488281 6.265625-4.105469.070312-.0625.140625-.121094.210937-.179688.660156-.574218 1.296875-1.171874 1.90625-1.800781.003906-.003906.007813-.007812.011719-.011719 1.605469-1.664062 3.023437-3.515624 4.21875-5.519531.476563-.804687.917969-1.628906 1.320313-2.476562.601562-1.273438 1.121093-2.597657 1.542968-3.964844.421875-1.363281.75-2.773437.972656-4.214844.152344-.964843.257813-1.941406.316407-2.933593l9.574219-165.488282.148437-2.578125.15625-2.71875h6.699219c1.539062 0 2.789062-1.246093 2.789062-2.785156v-25.019531c-.007812-4.089844-1.769531-7.765625-4.574218-10.316406zm-124.15625-19.417969c0-4.613281 3.753906-8.367188 8.363281-8.367188h48.324219c4.613281 0 8.363281 3.753907 8.363281 8.367188v15.796875h-65.050781zm0 0"
        fill="#382b73"
        data-original="#382B73"
        className="active-path"
        style={{ fill: '#EB6060' }}
        data-old_color="#FF3800"
      />
      <path
        d="m285.679688 376.855469h-93.757813c-15.898437 0-29.035156-12.398438-29.953125-28.265625l-10.363281-179.148438h174.386719l-10.363282 179.148438c-.917968 15.867187-14.054687 28.265625-29.949218 28.265625zm0 0"
        fill="#e6e7e8"
        data-original="#E6E7E8"
      />
      <path
        d="m276.894531 376.027344h-76.1875c-3.699219 0-6.699219-3-6.699219-6.703125v-193.183594c0-3.699219 3-6.699219 6.699219-6.699219h76.1875c3.699219 0 6.699219 3 6.699219 6.699219v193.183594c0 3.703125-3 6.703125-6.699219 6.703125zm0 0"
        fill="#fff"
        data-original="#FFF"
      />
      <path
        d="m282.476562 136.058594h-11.152343v-15.796875c0-4.613281-3.75-8.367188-8.363281-8.367188h-48.324219c-4.609375 0-8.363281 3.753907-8.363281 8.367188v15.796875h-11.152344v-15.796875c0-10.765625 8.753906-19.519531 19.515625-19.519531h48.324219c10.761718 0 19.515624 8.753906 19.515624 19.519531zm0 0"
        fill="#e6e7e8"
        data-original="#E6E7E8"
      />
      <path
        d="m262.960938 106.320312h-48.324219c-7.695313 0-13.9375 6.238282-13.9375 13.941407v15.796875h5.574219v-15.796875c0-4.613281 3.753906-8.367188 8.363281-8.367188h48.324219c4.613281 0 8.363281 3.753907 8.363281 8.367188v15.796875h5.578125v-15.796875c0-7.699219-6.242188-13.941407-13.941406-13.941407zm0 0"
        fill="#d0d2d3"
        data-original="#D0D2D3"
      />
      <path
        d="m201.28125 359.382812h-14.546875c-5.839844 0-10.570313-4.730468-10.570313-10.566406v-149.574218c0-5.835938 4.734376-10.566407 10.570313-10.566407h14.546875c5.835938 0 10.570312 4.730469 10.570312 10.566407v149.574218c0 5.835938-4.734374 10.566406-10.570312 10.566406zm0 0"
        fill="#fff"
        data-original="#FFF"
      />
      <path
        d="m197.539062 354.550781h-7.0625c-4.621093 0-8.363281-3.742187-8.363281-8.363281v-144.316406c0-4.617188 3.742188-8.363282 8.363281-8.363282h7.0625c4.617188 0 8.363282 3.746094 8.363282 8.363282v144.316406c0 4.621094-3.746094 8.363281-8.363282 8.363281zm0 0"
        fill="#d0d2d3"
        data-original="#D0D2D3"
      />
      <path
        d="m197.539062 193.507812h-7.0625c-4.621093 0-8.363281 3.746094-8.363281 8.363282v5.578125c0-4.621094 3.742188-8.363281 8.363281-8.363281h7.0625c4.617188 0 8.363282 3.742187 8.363282 8.363281v-5.578125c0-4.617188-3.746094-8.363282-8.363282-8.363282zm0 0"
        fill="#bbbdbf"
        data-original="#BBBDBF"
      />
      <path
        d="m246.074219 359.382812h-14.546875c-5.839844 0-10.570313-4.730468-10.570313-10.566406v-149.574218c0-5.835938 4.734375-10.566407 10.570313-10.566407h14.546875c5.835937 0 10.566406 4.730469 10.566406 10.566407v149.574218c0 5.835938-4.730469 10.566406-10.566406 10.566406zm0 0"
        fill="#e6e7e8"
        data-original="#E6E7E8"
      />
      <path
        d="m290.867188 359.382812h-14.546876c-5.839843 0-10.566406-4.730468-10.566406-10.566406v-149.574218c0-5.835938 4.730469-10.566407 10.566406-10.566407h14.546876c5.835937 0 10.570312 4.730469 10.570312 10.566407v149.574218c0 5.835938-4.734375 10.566406-10.570312 10.566406zm0 0"
        fill="#fff"
        data-original="#FFF"
      />
      <path
        d="m242.332031 354.550781h-7.0625c-4.621093 0-8.363281-3.742187-8.363281-8.363281v-144.316406c0-4.617188 3.742188-8.363282 8.363281-8.363282h7.0625c4.621094 0 8.363281 3.746094 8.363281 8.363282v144.316406c0 4.621094-3.746093 8.363281-8.363281 8.363281zm0 0"
        fill="#d0d2d3"
        data-original="#D0D2D3"
      />
      <path
        d="m287.125 354.550781h-7.0625c-4.621094 0-8.363281-3.742187-8.363281-8.363281v-144.316406c0-4.617188 3.742187-8.363282 8.363281-8.363282h7.0625c4.617188 0 8.363281 3.746094 8.363281 8.363282v144.316406c0 4.621094-3.746093 8.363281-8.363281 8.363281zm0 0"
        fill="#d0d2d3"
        data-original="#D0D2D3"
      />
      <path
        d="m242.332031 193.507812h-7.0625c-4.621093 0-8.363281 3.746094-8.363281 8.363282v5.578125c0-4.621094 3.742188-8.363281 8.363281-8.363281h7.0625c4.621094 0 8.363281 3.742187 8.363281 8.363281v-5.578125c0-4.617188-3.746093-8.363282-8.363281-8.363282zm0 0"
        fill="#bbbdbf"
        data-original="#BBBDBF"
      />
      <path
        d="m287.125 193.507812h-7.0625c-4.621094 0-8.363281 3.746094-8.363281 8.363282v5.578125c0-4.621094 3.742187-8.363281 8.363281-8.363281h7.0625c4.617188 0 8.363281 3.742187 8.363281 8.363281v-5.578125c0-4.617188-3.746093-8.363282-8.363281-8.363282zm0 0"
        fill="#bbbdbf"
        data-original="#BBBDBF"
      />
      <path
        d="m280.0625 354.550781h7.0625c4.617188 0 8.363281-3.742187 8.363281-8.363281v-5.574219c0 4.617188-3.746093 8.363281-8.363281 8.363281h-7.0625c-4.621094 0-8.363281-3.746093-8.363281-8.363281v5.574219c0 4.617188 3.742187 8.363281 8.363281 8.363281zm0 0"
        fill="#e6e7e8"
        data-original="#E6E7E8"
      />
      <path
        d="m235.269531 354.550781h7.058594c4.621094 0 8.367187-3.742187 8.367187-8.363281v-5.574219c0 4.617188-3.746093 8.363281-8.367187 8.363281h-7.058594c-4.621093 0-8.367187-3.746093-8.367187-8.363281v5.574219c0 4.617188 3.746094 8.363281 8.367187 8.363281zm0 0"
        fill="#fff"
        data-original="#FFF"
      />
      <path
        d="m190.476562 354.550781h7.0625c4.617188 0 8.363282-3.742187 8.363282-8.363281v-5.574219c0 4.617188-3.746094 8.363281-8.363282 8.363281h-7.0625c-4.621093 0-8.363281-3.746093-8.363281-8.363281v5.574219c0 4.617188 3.742188 8.363281 8.363281 8.363281zm0 0"
        fill="#e6e7e8"
        data-original="#E6E7E8"
      />
      <path
        d="m332.207031 177.804688h-186.816406c-1.539063 0-2.785156-1.25-2.785156-2.789063v-25.019531c0-7.695313 6.242187-13.9375 13.9375-13.9375h164.515625c7.699218 0 13.9375 6.238281 13.9375 13.9375v25.019531c0 1.539063-1.25 2.789063-2.789063 2.789063zm0 0"
        fill="#d0d2d3"
        data-original="#D0D2D3"
      />
      <path
        d="m281.558594 177.804688h-85.519532c-1.125 0-2.03125-.910157-2.03125-2.035157v-29.542969c0-5.617187 4.550782-10.167968 10.167969-10.167968h69.25c5.617188 0 10.167969 4.550781 10.167969 10.167968v29.542969c0 1.125-.910156 2.035157-2.035156 2.035157zm0 0"
        fill="#e6e7e8"
        data-original="#E6E7E8"
      />
      <path
        d="m321.054688 136.058594h-164.511719c-7.695313 0-13.9375 6.238281-13.9375 13.9375v5.578125c0-7.699219 6.242187-13.941407 13.9375-13.941407h164.515625c7.699218 0 13.9375 6.242188 13.9375 13.941407v-5.578125c0-7.695313-6.238282-13.9375-13.941406-13.9375zm0 0"
        fill="#fff"
        data-original="#FFF"
      />
      <path
        d="m325.203125 183.097656.308594-5.292968h-173.421875l.304687 5.292968zm0 0"
        fill="#bbbdbf"
        data-original="#BBBDBF"
      />
      <path
        d="m315.628906 336.589844c-.917968 15.867187-14.054687 28.265625-29.949218 28.265625h-93.757813c-15.898437 0-29.035156-12.398438-29.953125-28.265625l-9.667969-167.148438h-.695312l10.363281 179.148438c.917969 15.867187 14.054688 28.265625 29.953125 28.265625h93.757813c15.894531 0 29.03125-12.398438 29.949218-28.265625l10.363282-179.148438h-.695313zm0 0"
        fill="#d0d2d3"
        data-original="#D0D2D3"
      />
    </g>
  </svg>
);

export const ExitIcon = ({ width, height }) => (
  <svg
    style={{ enableBackground: 'new 0 0 24 24' }}
    version="1.1"
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={width}
    height={height}
  >
    <g id="info" />
    <g id="icons">
      <path
        d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z"
        id="exit"
      />
    </g>
  </svg>
);

ExitIcon.propTypes = defaultPropTypes;

RemoveIcon.propTypes = defaultPropTypes;
SurrenderIcon.propTypes = defaultPropTypes;

EditIcon.propTypes = defaultPropTypes;
SuccessIcon.propTypes = defaultPropTypes;
