/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.12.4
// source: prc.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./prc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ParametricRobotControlServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ParametricRobotControlServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SetupRobotRequest,
 *   !proto.SetupRobotReply>}
 */
const methodDescriptor_ParametricRobotControlService_SetupRobot = new grpc.web.MethodDescriptor(
  '/ParametricRobotControlService/SetupRobot',
  grpc.web.MethodType.UNARY,
  proto.SetupRobotRequest,
  proto.SetupRobotReply,
  /**
   * @param {!proto.SetupRobotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SetupRobotReply.deserializeBinary
);


/**
 * @param {!proto.SetupRobotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.SetupRobotReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SetupRobotReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ParametricRobotControlServiceClient.prototype.setupRobot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ParametricRobotControlService/SetupRobot',
      request,
      metadata || {},
      methodDescriptor_ParametricRobotControlService_SetupRobot,
      callback);
};


/**
 * @param {!proto.SetupRobotRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SetupRobotReply>}
 *     Promise that resolves to the response
 */
proto.ParametricRobotControlServicePromiseClient.prototype.setupRobot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ParametricRobotControlService/SetupRobot',
      request,
      metadata || {},
      methodDescriptor_ParametricRobotControlService_SetupRobot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AddRobotTaskRequest,
 *   !proto.AddRobotTaskReply>}
 */
const methodDescriptor_ParametricRobotControlService_AddRobotTask = new grpc.web.MethodDescriptor(
  '/ParametricRobotControlService/AddRobotTask',
  grpc.web.MethodType.UNARY,
  proto.AddRobotTaskRequest,
  proto.AddRobotTaskReply,
  /**
   * @param {!proto.AddRobotTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.AddRobotTaskReply.deserializeBinary
);


/**
 * @param {!proto.AddRobotTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.AddRobotTaskReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.AddRobotTaskReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ParametricRobotControlServiceClient.prototype.addRobotTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ParametricRobotControlService/AddRobotTask',
      request,
      metadata || {},
      methodDescriptor_ParametricRobotControlService_AddRobotTask,
      callback);
};


/**
 * @param {!proto.AddRobotTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.AddRobotTaskReply>}
 *     Promise that resolves to the response
 */
proto.ParametricRobotControlServicePromiseClient.prototype.addRobotTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ParametricRobotControlService/AddRobotTask',
      request,
      metadata || {},
      methodDescriptor_ParametricRobotControlService_AddRobotTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SubscribeRobotFeedbackRequest,
 *   !proto.RobotFeedback>}
 */
const methodDescriptor_ParametricRobotControlService_SubscribeRobotFeedback = new grpc.web.MethodDescriptor(
  '/ParametricRobotControlService/SubscribeRobotFeedback',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.SubscribeRobotFeedbackRequest,
  proto.RobotFeedback,
  /**
   * @param {!proto.SubscribeRobotFeedbackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.RobotFeedback.deserializeBinary
);


/**
 * @param {!proto.SubscribeRobotFeedbackRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.RobotFeedback>}
 *     The XHR Node Readable Stream
 */
proto.ParametricRobotControlServiceClient.prototype.subscribeRobotFeedback =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ParametricRobotControlService/SubscribeRobotFeedback',
      request,
      metadata || {},
      methodDescriptor_ParametricRobotControlService_SubscribeRobotFeedback);
};


/**
 * @param {!proto.SubscribeRobotFeedbackRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.RobotFeedback>}
 *     The XHR Node Readable Stream
 */
proto.ParametricRobotControlServicePromiseClient.prototype.subscribeRobotFeedback =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ParametricRobotControlService/SubscribeRobotFeedback',
      request,
      metadata || {},
      methodDescriptor_ParametricRobotControlService_SubscribeRobotFeedback);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetSimulatedRobotStateRequest,
 *   !proto.RobotState>}
 */
const methodDescriptor_ParametricRobotControlService_GetSimulatedRobotState = new grpc.web.MethodDescriptor(
  '/ParametricRobotControlService/GetSimulatedRobotState',
  grpc.web.MethodType.UNARY,
  proto.GetSimulatedRobotStateRequest,
  proto.RobotState,
  /**
   * @param {!proto.GetSimulatedRobotStateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.RobotState.deserializeBinary
);


/**
 * @param {!proto.GetSimulatedRobotStateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.RobotState)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.RobotState>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ParametricRobotControlServiceClient.prototype.getSimulatedRobotState =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ParametricRobotControlService/GetSimulatedRobotState',
      request,
      metadata || {},
      methodDescriptor_ParametricRobotControlService_GetSimulatedRobotState,
      callback);
};


/**
 * @param {!proto.GetSimulatedRobotStateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.RobotState>}
 *     Promise that resolves to the response
 */
proto.ParametricRobotControlServicePromiseClient.prototype.getSimulatedRobotState =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ParametricRobotControlService/GetSimulatedRobotState',
      request,
      metadata || {},
      methodDescriptor_ParametricRobotControlService_GetSimulatedRobotState);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdateVariableRequest,
 *   !proto.UpdateVariableReply>}
 */
const methodDescriptor_ParametricRobotControlService_UpdateVariable = new grpc.web.MethodDescriptor(
  '/ParametricRobotControlService/UpdateVariable',
  grpc.web.MethodType.UNARY,
  proto.UpdateVariableRequest,
  proto.UpdateVariableReply,
  /**
   * @param {!proto.UpdateVariableRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateVariableReply.deserializeBinary
);


/**
 * @param {!proto.UpdateVariableRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.UpdateVariableReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UpdateVariableReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ParametricRobotControlServiceClient.prototype.updateVariable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ParametricRobotControlService/UpdateVariable',
      request,
      metadata || {},
      methodDescriptor_ParametricRobotControlService_UpdateVariable,
      callback);
};


/**
 * @param {!proto.UpdateVariableRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UpdateVariableReply>}
 *     Promise that resolves to the response
 */
proto.ParametricRobotControlServicePromiseClient.prototype.updateVariable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ParametricRobotControlService/UpdateVariable',
      request,
      metadata || {},
      methodDescriptor_ParametricRobotControlService_UpdateVariable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Ping,
 *   !proto.Ping>}
 */
const methodDescriptor_ParametricRobotControlService_SendPing = new grpc.web.MethodDescriptor(
  '/ParametricRobotControlService/SendPing',
  grpc.web.MethodType.UNARY,
  proto.Ping,
  proto.Ping,
  /**
   * @param {!proto.Ping} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Ping.deserializeBinary
);


/**
 * @param {!proto.Ping} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Ping)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Ping>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ParametricRobotControlServiceClient.prototype.sendPing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ParametricRobotControlService/SendPing',
      request,
      metadata || {},
      methodDescriptor_ParametricRobotControlService_SendPing,
      callback);
};


/**
 * @param {!proto.Ping} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Ping>}
 *     Promise that resolves to the response
 */
proto.ParametricRobotControlServicePromiseClient.prototype.sendPing =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ParametricRobotControlService/SendPing',
      request,
      metadata || {},
      methodDescriptor_ParametricRobotControlService_SendPing);
};


module.exports = proto;

