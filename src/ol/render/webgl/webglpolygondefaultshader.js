// This file is automatically generated, do not edit
goog.provide('ol.render.webgl.polygonreplay.shader.Default');
goog.provide('ol.render.webgl.polygonreplay.shader.Default.Locations');
goog.provide('ol.render.webgl.polygonreplay.shader.DefaultFragment');
goog.provide('ol.render.webgl.polygonreplay.shader.DefaultVertex');

goog.require('ol.webgl.shader');


/**
 * @constructor
 * @extends {ol.webgl.shader.Fragment}
 * @struct
 */
ol.render.webgl.polygonreplay.shader.DefaultFragment = function() {
  goog.base(this, ol.render.webgl.polygonreplay.shader.DefaultFragment.SOURCE);
};
goog.inherits(ol.render.webgl.polygonreplay.shader.DefaultFragment, ol.webgl.shader.Fragment);
goog.addSingletonGetter(ol.render.webgl.polygonreplay.shader.DefaultFragment);


/**
 * @const
 * @type {string}
 */
ol.render.webgl.polygonreplay.shader.DefaultFragment.DEBUG_SOURCE = 'precision mediump float;\nvarying vec4 v_color;\n\n\n\nuniform float u_opacity;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n  float alpha = v_color.a * u_opacity;\n  if (alpha == 0.0) {\n    discard;\n  }\n  gl_FragColor.a = alpha;\n}\n';


/**
 * @const
 * @type {string}
 */
ol.render.webgl.polygonreplay.shader.DefaultFragment.OPTIMIZED_SOURCE = 'precision mediump float;varying vec4 a;uniform float g;void main(void){gl_FragColor=a;float alpha=a.a*g;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}';


/**
 * @const
 * @type {string}
 */
ol.render.webgl.polygonreplay.shader.DefaultFragment.SOURCE = goog.DEBUG ?
    ol.render.webgl.polygonreplay.shader.DefaultFragment.DEBUG_SOURCE :
    ol.render.webgl.polygonreplay.shader.DefaultFragment.OPTIMIZED_SOURCE;


/**
 * @constructor
 * @extends {ol.webgl.shader.Vertex}
 * @struct
 */
ol.render.webgl.polygonreplay.shader.DefaultVertex = function() {
  goog.base(this, ol.render.webgl.polygonreplay.shader.DefaultVertex.SOURCE);
};
goog.inherits(ol.render.webgl.polygonreplay.shader.DefaultVertex, ol.webgl.shader.Vertex);
goog.addSingletonGetter(ol.render.webgl.polygonreplay.shader.DefaultVertex);


/**
 * @const
 * @type {string}
 */
ol.render.webgl.polygonreplay.shader.DefaultVertex.DEBUG_SOURCE = 'varying vec4 v_color;\n\n\nattribute vec2 a_position;\nattribute vec4 a_color;\n\nuniform mat4 u_projectionMatrix;\nuniform mat4 u_offsetScaleMatrix;\nuniform mat4 u_offsetRotateMatrix;\n\nvoid main(void) {\n  v_color = a_color;\n  mat4 offsetMatrix = u_offsetScaleMatrix;\n  vec4 offsets = offsetMatrix * vec4(0., 0., 0., 0.);\n  gl_Position = u_projectionMatrix * vec4(a_position, 0., 1.) + offsets;\n}\n\n\n';


/**
 * @const
 * @type {string}
 */
ol.render.webgl.polygonreplay.shader.DefaultVertex.OPTIMIZED_SOURCE = 'varying vec4 a;attribute vec2 b;attribute vec4 c;uniform mat4 d;uniform mat4 e;uniform mat4 f;void main(void){a=c;mat4 offsetMatrix=e;vec4 offsets=offsetMatrix*vec4(0.,0.,0.,0.);gl_Position=d*vec4(b,0.,1.)+offsets;}';


/**
 * @const
 * @type {string}
 */
ol.render.webgl.polygonreplay.shader.DefaultVertex.SOURCE = goog.DEBUG ?
    ol.render.webgl.polygonreplay.shader.DefaultVertex.DEBUG_SOURCE :
    ol.render.webgl.polygonreplay.shader.DefaultVertex.OPTIMIZED_SOURCE;


/**
 * @constructor
 * @param {WebGLRenderingContext} gl GL.
 * @param {WebGLProgram} program Program.
 * @struct
 */
ol.render.webgl.polygonreplay.shader.Default.Locations = function(gl, program) {

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_offsetRotateMatrix = gl.getUniformLocation(
      program, goog.DEBUG ? 'u_offsetRotateMatrix' : 'f');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_offsetScaleMatrix = gl.getUniformLocation(
      program, goog.DEBUG ? 'u_offsetScaleMatrix' : 'e');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_opacity = gl.getUniformLocation(
      program, goog.DEBUG ? 'u_opacity' : 'g');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_projectionMatrix = gl.getUniformLocation(
      program, goog.DEBUG ? 'u_projectionMatrix' : 'd');

  /**
   * @type {number}
   */
  this.a_color = gl.getAttribLocation(
      program, goog.DEBUG ? 'a_color' : 'c');

  /**
   * @type {number}
   */
  this.a_position = gl.getAttribLocation(
      program, goog.DEBUG ? 'a_position' : 'b');
};
