precision highp float;
uniform sampler2D uPrev; // not used in this simple pass
uniform sampler2D uNoise;
uniform vec2 uResolution;
uniform float uTime;
uniform float uIntensity;
varying vec2 vUv;

void main(){
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  // procedural noise substitute
  vec2 n = vec2(
    fract(sin(dot(uv * 12.9898, vec2(12.9898,78.233))) * 43758.5453),
    fract(sin(dot(uv * 8.233, vec2(93.9898,12.345))) * 12345.6789)
  ) - 0.5;
  vec2 disp = n * (0.02 + uIntensity * 0.12);
  vec3 base = vec3(0.06, 0.04, 0.03);
  vec3 color = base + vec3(0.9,0.75,0.3) * (uIntensity * 0.6);
  // chromatic sheen
  color.r += 0.03 * sin(uTime * 0.6 + uv.y * 10.0) * uIntensity;
  color.g += 0.02 * cos(uTime * 0.4 + uv.x * 8.0) * uIntensity;
  gl_FragColor = vec4(color, 0.6 * min(1.0, uIntensity));
}
