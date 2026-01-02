import * as THREE from "three";

export const LiquidShader = {
  uniforms: {
    uTime: { value: 0 },
    uColorA: { value: new THREE.Color("#ff6a00") },
    uColorB: { value: new THREE.Color("#ffb703") },
    uDark: { value: 1 },
  },

  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,

  fragmentShader: `
precision highp float;

uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uDark;

varying vec2 vUv;

/* Simple noise */
float random(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);

  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) +
         (c - a) * u.y * (1.0 - u.x) +
         (d - b) * u.x * u.y;
}

void main() {
  vec2 uv = vUv * 2.0 - 1.0;
  float t = uTime * 0.15;

  float n = noise(uv * 3.0 + t);
  float wave = sin(uv.x * 4.0 + t) * cos(uv.y * 4.0 - t);

  float mixVal = smoothstep(-0.4, 0.6, n + wave);
  vec3 color = mix(uColorA, uColorB, mixVal);

  if(uDark == 1.0) color *= 0.8;

  float grain = random(vUv * uTime) * 0.04;
  color += grain;

  gl_FragColor = vec4(color, 1.0);
}
`

};
