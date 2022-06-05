function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/zone.js/dist/zone-evergreen.js":
  /*!*****************************************************!*\
    !*** ./node_modules/zone.js/dist/zone-evergreen.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesZoneJsDistZoneEvergreenJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /**
    * @license Angular v9.1.0-next.4+61.sha-e552591.with-local-changes
    * (c) 2010-2020 Google LLC. https://angular.io/
    * License: MIT
    */


    (function (factory) {
      true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
    })(function () {
      'use strict';
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var Zone$1 = function (global) {
        var performance = global['performance'];

        function mark(name) {
          performance && performance['mark'] && performance['mark'](name);
        }

        function performanceMeasure(name, label) {
          performance && performance['measure'] && performance['measure'](name, label);
        }

        mark('Zone'); // Initialize before it's accessed below.
        // __Zone_symbol_prefix global can be used to override the default zone
        // symbol prefix with a custom one if needed.

        var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';

        function __symbol__(name) {
          return symbolPrefix + name;
        }

        var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;

        if (global['Zone']) {
          // if global['Zone'] already exists (maybe zone.js was already loaded or
          // some other lib also registered a global object named Zone), we may need
          // to throw an error, but sometimes user may not want this error.
          // For example,
          // we have two web pages, page1 includes zone.js, page2 doesn't.
          // and the 1st time user load page1 and page2, everything work fine,
          // but when user load page2 again, error occurs because global['Zone'] already exists.
          // so we add a flag to let user choose whether to throw this error or not.
          // By default, if existing Zone is from zone.js, we will not throw the error.
          if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
          } else {
            return global['Zone'];
          }
        }

        var Zone = /*#__PURE__*/function () {
          function Zone(parent, zoneSpec) {
            _classCallCheck(this, Zone);

            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
          }

          _createClass(Zone, [{
            key: "parent",
            get: function get() {
              return this._parent;
            }
          }, {
            key: "name",
            get: function get() {
              return this._name;
            }
          }, {
            key: "get",
            value: function get(key) {
              var zone = this.getZoneWith(key);
              if (zone) return zone._properties[key];
            }
          }, {
            key: "getZoneWith",
            value: function getZoneWith(key) {
              var current = this;

              while (current) {
                if (current._properties.hasOwnProperty(key)) {
                  return current;
                }

                current = current._parent;
              }

              return null;
            }
          }, {
            key: "fork",
            value: function fork(zoneSpec) {
              if (!zoneSpec) throw new Error('ZoneSpec required!');
              return this._zoneDelegate.fork(this, zoneSpec);
            }
          }, {
            key: "wrap",
            value: function wrap(callback, source) {
              if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
              }

              var _callback = this._zoneDelegate.intercept(this, callback, source);

              var zone = this;
              return function () {
                return zone.runGuarded(_callback, this, arguments, source);
              };
            }
          }, {
            key: "run",
            value: function run(callback, applyThis, applyArgs, source) {
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
              } finally {
                _currentZoneFrame = _currentZoneFrame.parent;
              }
            }
          }, {
            key: "runGuarded",
            value: function runGuarded(callback) {
              var applyThis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var applyArgs = arguments.length > 2 ? arguments[2] : undefined;
              var source = arguments.length > 3 ? arguments[3] : undefined;
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                try {
                  return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                } catch (error) {
                  if (this._zoneDelegate.handleError(this, error)) {
                    throw error;
                  }
                }
              } finally {
                _currentZoneFrame = _currentZoneFrame.parent;
              }
            }
          }, {
            key: "runTask",
            value: function runTask(task, applyThis, applyArgs) {
              if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
              } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
              // will run in notScheduled(canceled) state, we should not try to
              // run such kind of task but just return


              if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
              }

              var reEntryGuard = task.state != running;
              reEntryGuard && task._transitionTo(running, scheduled);
              task.runCount++;
              var previousTask = _currentTask;
              _currentTask = task;
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                  task.cancelFn = undefined;
                }

                try {
                  return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                } catch (error) {
                  if (this._zoneDelegate.handleError(this, error)) {
                    throw error;
                  }
                }
              } finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                  if (task.type == eventTask || task.data && task.data.isPeriodic) {
                    reEntryGuard && task._transitionTo(scheduled, running);
                  } else {
                    task.runCount = 0;

                    this._updateTaskCount(task, -1);

                    reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
                  }
                }

                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
              }
            }
          }, {
            key: "scheduleTask",
            value: function scheduleTask(task) {
              if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;

                while (newZone) {
                  if (newZone === task.zone) {
                    throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(task.zone.name));
                  }

                  newZone = newZone.parent;
                }
              }

              task._transitionTo(scheduling, notScheduled);

              var zoneDelegates = [];
              task._zoneDelegates = zoneDelegates;
              task._zone = this;

              try {
                task = this._zoneDelegate.scheduleTask(this, task);
              } catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


                this._zoneDelegate.handleError(this, err);

                throw err;
              }

              if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
              }

              if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
              }

              return task;
            }
          }, {
            key: "scheduleMicroTask",
            value: function scheduleMicroTask(source, callback, data, customSchedule) {
              return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
            }
          }, {
            key: "scheduleMacroTask",
            value: function scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
              return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
            }
          }, {
            key: "scheduleEventTask",
            value: function scheduleEventTask(source, callback, data, customSchedule, customCancel) {
              return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
            }
          }, {
            key: "cancelTask",
            value: function cancelTask(task) {
              if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

              task._transitionTo(canceling, scheduled, running);

              try {
                this._zoneDelegate.cancelTask(this, task);
              } catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);

                this._zoneDelegate.handleError(this, err);

                throw err;
              }

              this._updateTaskCount(task, -1);

              task._transitionTo(notScheduled, canceling);

              task.runCount = 0;
              return task;
            }
          }, {
            key: "_updateTaskCount",
            value: function _updateTaskCount(task, count) {
              var zoneDelegates = task._zoneDelegates;

              if (count == -1) {
                task._zoneDelegates = null;
              }

              for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
              }
            }
          }], [{
            key: "assertZonePatched",
            value: function assertZonePatched() {
              if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
              }
            }
          }, {
            key: "root",
            get: function get() {
              var zone = Zone.current;

              while (zone.parent) {
                zone = zone.parent;
              }

              return zone;
            }
          }, {
            key: "current",
            get: function get() {
              return _currentZoneFrame.zone;
            }
          }, {
            key: "currentTask",
            get: function get() {
              return _currentTask;
            } // tslint:disable-next-line:require-internal-with-underscore

          }, {
            key: "__load_patch",
            value: function __load_patch(name, fn) {
              if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                  throw Error('Already loaded patch: ' + name);
                }
              } else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
              }
            }
          }]);

          return Zone;
        }(); // tslint:disable-next-line:require-internal-with-underscore


        Zone.__symbol__ = __symbol__;
        var DELEGATE_ZS = {
          name: '',
          onHasTask: function onHasTask(delegate, _, target, hasTaskState) {
            return delegate.hasTask(target, hasTaskState);
          },
          onScheduleTask: function onScheduleTask(delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
          },
          onInvokeTask: function onInvokeTask(delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
          },
          onCancelTask: function onCancelTask(delegate, _, target, task) {
            return delegate.cancelTask(target, task);
          }
        };

        var ZoneDelegate = /*#__PURE__*/function () {
          function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            _classCallCheck(this, ZoneDelegate);

            this._taskCounts = {
              'microTask': 0,
              'macroTask': 0,
              'eventTask': 0
            };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
            this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
            this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
            this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
            this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
            this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

            if (zoneSpecHasTask || parentHasTask) {
              // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
              // a case all task related interceptors must go through this ZD. We can't short circuit it.
              this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
              this._hasTaskDlgt = parentDelegate;
              this._hasTaskDlgtOwner = this;
              this._hasTaskCurrZone = zone;

              if (!zoneSpec.onScheduleTask) {
                this._scheduleTaskZS = DELEGATE_ZS;
                this._scheduleTaskDlgt = parentDelegate;
                this._scheduleTaskCurrZone = this.zone;
              }

              if (!zoneSpec.onInvokeTask) {
                this._invokeTaskZS = DELEGATE_ZS;
                this._invokeTaskDlgt = parentDelegate;
                this._invokeTaskCurrZone = this.zone;
              }

              if (!zoneSpec.onCancelTask) {
                this._cancelTaskZS = DELEGATE_ZS;
                this._cancelTaskDlgt = parentDelegate;
                this._cancelTaskCurrZone = this.zone;
              }
            }
          }

          _createClass(ZoneDelegate, [{
            key: "fork",
            value: function fork(targetZone, zoneSpec) {
              return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
            }
          }, {
            key: "intercept",
            value: function intercept(targetZone, callback, source) {
              return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
            }
          }, {
            key: "invoke",
            value: function invoke(targetZone, callback, applyThis, applyArgs, source) {
              return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
            }
          }, {
            key: "handleError",
            value: function handleError(targetZone, error) {
              return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
            }
          }, {
            key: "scheduleTask",
            value: function scheduleTask(targetZone, task) {
              var returnTask = task;

              if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                  returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                } // clang-format off


                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task); // clang-format on

                if (!returnTask) returnTask = task;
              } else {
                if (task.scheduleFn) {
                  task.scheduleFn(task);
                } else if (task.type == microTask) {
                  scheduleMicroTask(task);
                } else {
                  throw new Error('Task is missing scheduleFn.');
                }
              }

              return returnTask;
            }
          }, {
            key: "invokeTask",
            value: function invokeTask(targetZone, task, applyThis, applyArgs) {
              return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
            }
          }, {
            key: "cancelTask",
            value: function cancelTask(targetZone, task) {
              var value;

              if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
              } else {
                if (!task.cancelFn) {
                  throw Error('Task is not cancelable');
                }

                value = task.cancelFn(task);
              }

              return value;
            }
          }, {
            key: "hasTask",
            value: function hasTask(targetZone, isEmpty) {
              // hasTask should not throw error so other ZoneDelegate
              // can still trigger hasTask callback
              try {
                this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
              } catch (err) {
                this.handleError(targetZone, err);
              }
            } // tslint:disable-next-line:require-internal-with-underscore

          }, {
            key: "_updateTaskCount",
            value: function _updateTaskCount(type, count) {
              var counts = this._taskCounts;
              var prev = counts[type];
              var next = counts[type] = prev + count;

              if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
              }

              if (prev == 0 || next == 0) {
                var isEmpty = {
                  microTask: counts['microTask'] > 0,
                  macroTask: counts['macroTask'] > 0,
                  eventTask: counts['eventTask'] > 0,
                  change: type
                };
                this.hasTask(this.zone, isEmpty);
              }
            }
          }]);

          return ZoneDelegate;
        }();

        var ZoneTask = /*#__PURE__*/function () {
          function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            _classCallCheck(this, ZoneTask);

            // tslint:disable-next-line:require-internal-with-underscore
            this._zone = null;
            this.runCount = 0; // tslint:disable-next-line:require-internal-with-underscore

            this._zoneDelegates = null; // tslint:disable-next-line:require-internal-with-underscore

            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;

            if (!callback) {
              throw new Error('callback is not defined');
            }

            this.callback = callback;
            var self = this; // TODO: @JiaLiPassion options should have interface

            if (type === eventTask && options && options.useG) {
              this.invoke = ZoneTask.invokeTask;
            } else {
              this.invoke = function () {
                return ZoneTask.invokeTask.call(global, self, this, arguments);
              };
            }
          }

          _createClass(ZoneTask, [{
            key: "zone",
            get: function get() {
              return this._zone;
            }
          }, {
            key: "state",
            get: function get() {
              return this._state;
            }
          }, {
            key: "cancelScheduleRequest",
            value: function cancelScheduleRequest() {
              this._transitionTo(notScheduled, scheduling);
            } // tslint:disable-next-line:require-internal-with-underscore

          }, {
            key: "_transitionTo",
            value: function _transitionTo(toState, fromState1, fromState2) {
              if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;

                if (toState == notScheduled) {
                  this._zoneDelegates = null;
                }
              } else {
                throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(toState, "', expecting state '").concat(fromState1, "'").concat(fromState2 ? ' or \'' + fromState2 + '\'' : '', ", was '").concat(this._state, "'."));
              }
            }
          }, {
            key: "toString",
            value: function toString() {
              if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
              } else {
                return Object.prototype.toString.call(this);
              }
            } // add toJSON method to prevent cyclic error when
            // call JSON.stringify(zoneTask)

          }, {
            key: "toJSON",
            value: function toJSON() {
              return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
              };
            }
          }], [{
            key: "invokeTask",
            value: function invokeTask(task, target, args) {
              if (!task) {
                task = this;
              }

              _numberOfNestedTaskFrames++;

              try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
              } finally {
                if (_numberOfNestedTaskFrames == 1) {
                  drainMicroTaskQueue();
                }

                _numberOfNestedTaskFrames--;
              }
            }
          }]);

          return ZoneTask;
        }(); //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  MICROTASK QUEUE
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////


        var symbolSetTimeout = __symbol__('setTimeout');

        var symbolPromise = __symbol__('Promise');

        var symbolThen = __symbol__('then');

        var _microTaskQueue = [];
        var _isDrainingMicrotaskQueue = false;
        var nativeMicroTaskQueuePromise;

        function scheduleMicroTask(task) {
          // if we are not running in any task, and there has not been anything scheduled
          // we must bootstrap the initial task creation by manually scheduling the drain
          if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
              if (global[symbolPromise]) {
                nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
              }
            }

            if (nativeMicroTaskQueuePromise) {
              var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

              if (!nativeThen) {
                // native Promise is not patchable, we need to use `then` directly
                // issue 1078
                nativeThen = nativeMicroTaskQueuePromise['then'];
              }

              nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            } else {
              global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
          }

          task && _microTaskQueue.push(task);
        }

        function drainMicroTaskQueue() {
          if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;

            while (_microTaskQueue.length) {
              var queue = _microTaskQueue;
              _microTaskQueue = [];

              for (var i = 0; i < queue.length; i++) {
                var task = queue[i];

                try {
                  task.zone.runTask(task, null, null);
                } catch (error) {
                  _api.onUnhandledError(error);
                }
              }
            }

            _api.microtaskDrainDone();

            _isDrainingMicrotaskQueue = false;
          }
        } //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  BOOTSTRAP
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////


        var NO_ZONE = {
          name: 'NO ZONE'
        };
        var notScheduled = 'notScheduled',
            scheduling = 'scheduling',
            scheduled = 'scheduled',
            running = 'running',
            canceling = 'canceling',
            unknown = 'unknown';
        var microTask = 'microTask',
            macroTask = 'macroTask',
            eventTask = 'eventTask';
        var patches = {};
        var _api = {
          symbol: __symbol__,
          currentZoneFrame: function currentZoneFrame() {
            return _currentZoneFrame;
          },
          onUnhandledError: noop,
          microtaskDrainDone: noop,
          scheduleMicroTask: scheduleMicroTask,
          showUncaughtError: function showUncaughtError() {
            return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
          },
          patchEventTarget: function patchEventTarget() {
            return [];
          },
          patchOnProperties: noop,
          patchMethod: function patchMethod() {
            return noop;
          },
          bindArguments: function bindArguments() {
            return [];
          },
          patchThen: function patchThen() {
            return noop;
          },
          patchMacroTask: function patchMacroTask() {
            return noop;
          },
          setNativePromise: function setNativePromise(NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
              nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
          },
          patchEventPrototype: function patchEventPrototype() {
            return noop;
          },
          isIEOrEdge: function isIEOrEdge() {
            return false;
          },
          getGlobalObjects: function getGlobalObjects() {
            return undefined;
          },
          ObjectDefineProperty: function ObjectDefineProperty() {
            return noop;
          },
          ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {
            return undefined;
          },
          ObjectCreate: function ObjectCreate() {
            return undefined;
          },
          ArraySlice: function ArraySlice() {
            return [];
          },
          patchClass: function patchClass() {
            return noop;
          },
          wrapWithCurrentZone: function wrapWithCurrentZone() {
            return noop;
          },
          filterProperties: function filterProperties() {
            return [];
          },
          attachOriginToPatched: function attachOriginToPatched() {
            return noop;
          },
          _redefineProperty: function _redefineProperty() {
            return noop;
          },
          patchCallbacks: function patchCallbacks() {
            return noop;
          }
        };
        var _currentZoneFrame = {
          parent: null,
          zone: new Zone(null, null)
        };
        var _currentTask = null;
        var _numberOfNestedTaskFrames = 0;

        function noop() {}

        performanceMeasure('Zone', 'Zone');
        return global['Zone'] = Zone;
      }(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
        var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var ObjectDefineProperty = Object.defineProperty;

        function readableObjectToString(obj) {
          if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
          }

          return obj ? obj.toString() : Object.prototype.toString.call(obj);
        }

        var __symbol__ = api.symbol;
        var _uncaughtPromiseErrors = [];
        var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;

        var symbolPromise = __symbol__('Promise');

        var symbolThen = __symbol__('then');

        var creationTrace = '__creationTrace__';

        api.onUnhandledError = function (e) {
          if (api.showUncaughtError()) {
            var rejection = e && e.rejection;

            if (rejection) {
              console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            } else {
              console.error(e);
            }
          }
        };

        api.microtaskDrainDone = function () {
          var _loop = function _loop() {
            var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

            try {
              uncaughtPromiseError.zone.runGuarded(function () {
                throw uncaughtPromiseError;
              });
            } catch (error) {
              handleUnhandledRejection(error);
            }
          };

          while (_uncaughtPromiseErrors.length) {
            _loop();
          }
        };

        var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

        function handleUnhandledRejection(e) {
          api.onUnhandledError(e);

          try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

            if (typeof handler === 'function') {
              handler.call(this, e);
            }
          } catch (err) {}
        }

        function isThenable(value) {
          return value && value.then;
        }

        function forwardResolution(value) {
          return value;
        }

        function forwardRejection(rejection) {
          return ZoneAwarePromise.reject(rejection);
        }

        var symbolState = __symbol__('state');

        var symbolValue = __symbol__('value');

        var symbolFinally = __symbol__('finally');

        var symbolParentPromiseValue = __symbol__('parentPromiseValue');

        var symbolParentPromiseState = __symbol__('parentPromiseState');

        var source = 'Promise.then';
        var UNRESOLVED = null;
        var RESOLVED = true;
        var REJECTED = false;
        var REJECTED_NO_CATCH = 0;

        function makeResolver(promise, state) {
          return function (v) {
            try {
              resolvePromise(promise, state, v);
            } catch (err) {
              resolvePromise(promise, false, err);
            } // Do not return value or you will break the Promise spec.

          };
        }

        var once = function once() {
          var wasCalled = false;
          return function wrapper(wrappedFunction) {
            return function () {
              if (wasCalled) {
                return;
              }

              wasCalled = true;
              wrappedFunction.apply(null, arguments);
            };
          };
        };

        var TYPE_ERROR = 'Promise resolved with itself';

        var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


        function resolvePromise(promise, state, value) {
          var onceWrapper = once();

          if (promise === value) {
            throw new TypeError(TYPE_ERROR);
          }

          if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;

            try {
              if (typeof value === 'object' || typeof value === 'function') {
                then = value && value.then;
              }
            } catch (err) {
              onceWrapper(function () {
                resolvePromise(promise, false, err);
              })();
              return promise;
            } // if (value instanceof ZoneAwarePromise) {


            if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
              clearRejectedNoCatch(value);
              resolvePromise(promise, value[symbolState], value[symbolValue]);
            } else if (state !== REJECTED && typeof then === 'function') {
              try {
                then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
              } catch (err) {
                onceWrapper(function () {
                  resolvePromise(promise, false, err);
                })();
              }
            } else {
              promise[symbolState] = state;
              var queue = promise[symbolValue];
              promise[symbolValue] = value;

              if (promise[symbolFinally] === symbolFinally) {
                // the promise is generated by Promise.prototype.finally
                if (state === RESOLVED) {
                  // the state is resolved, should ignore the value
                  // and use parent promise value
                  promise[symbolState] = promise[symbolParentPromiseState];
                  promise[symbolValue] = promise[symbolParentPromiseValue];
                }
              } // record task information in value when error occurs, so we can
              // do some additional work such as render longStackTrace


              if (state === REJECTED && value instanceof Error) {
                // check if longStackTraceZone is here
                var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

                if (trace) {
                  // only keep the long stack trace into error when in longStackTraceZone
                  ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                    configurable: true,
                    enumerable: false,
                    writable: true,
                    value: trace
                  });
                }
              }

              for (var i = 0; i < queue.length;) {
                scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
              }

              if (queue.length == 0 && state == REJECTED) {
                promise[symbolState] = REJECTED_NO_CATCH;
                var uncaughtPromiseError = value;

                if (!isDisableWrappingUncaughtPromiseRejection) {
                  // If disable wrapping uncaught promise reject
                  // and the rejected value is an Error object,
                  // use the value instead of wrapping it.
                  try {
                    // Here we throws a new Error to print more readable error log
                    // and if the value is not an error, zone.js builds an `Error`
                    // Object here to attach the stack information.
                    throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
                  } catch (err) {
                    uncaughtPromiseError = err;
                  }
                }

                uncaughtPromiseError.rejection = value;
                uncaughtPromiseError.promise = promise;
                uncaughtPromiseError.zone = Zone.current;
                uncaughtPromiseError.task = Zone.currentTask;

                _uncaughtPromiseErrors.push(uncaughtPromiseError);

                api.scheduleMicroTask(); // to make sure that it is running
              }
            }
          } // Resolving an already resolved promise is a noop.


          return promise;
        }

        var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

        function clearRejectedNoCatch(promise) {
          if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
              var handler = Zone[REJECTION_HANDLED_HANDLER];

              if (handler && typeof handler === 'function') {
                handler.call(this, {
                  rejection: promise[symbolValue],
                  promise: promise
                });
              }
            } catch (err) {}

            promise[symbolState] = REJECTED;

            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
              if (promise === _uncaughtPromiseErrors[i].promise) {
                _uncaughtPromiseErrors.splice(i, 1);
              }
            }
          }
        }

        function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
          clearRejectedNoCatch(promise);
          var promiseState = promise[symbolState];
          var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
          zone.scheduleMicroTask(source, function () {
            try {
              var parentPromiseValue = promise[symbolValue];
              var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];

              if (isFinallyPromise) {
                // if the promise is generated from finally call, keep parent promise's state and value
                chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                chainPromise[symbolParentPromiseState] = promiseState;
              } // should not pass value to finally callback


              var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
              resolvePromise(chainPromise, true, value);
            } catch (error) {
              // if error occurs, should always return this error
              resolvePromise(chainPromise, false, error);
            }
          }, chainPromise);
        }

        var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

        var noop = function noop() {};

        var ZoneAwarePromise = /*#__PURE__*/function (_Symbol$toStringTag, _Symbol$species) {
          function ZoneAwarePromise(executor) {
            _classCallCheck(this, ZoneAwarePromise);

            var promise = this;

            if (!(promise instanceof ZoneAwarePromise)) {
              throw new Error('Must be an instanceof Promise.');
            }

            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;

            try {
              executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            } catch (error) {
              resolvePromise(promise, false, error);
            }
          }

          _createClass(ZoneAwarePromise, [{
            key: _Symbol$toStringTag,
            get: function get() {
              return 'Promise';
            }
          }, {
            key: _Symbol$species,
            get: function get() {
              return ZoneAwarePromise;
            }
          }, {
            key: "then",
            value: function then(onFulfilled, onRejected) {
              var C = this.constructor[Symbol.species];

              if (!C || typeof C !== 'function') {
                C = this.constructor || ZoneAwarePromise;
              }

              var chainPromise = new C(noop);
              var zone = Zone.current;

              if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
              } else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
              }

              return chainPromise;
            }
          }, {
            key: "catch",
            value: function _catch(onRejected) {
              return this.then(null, onRejected);
            }
          }, {
            key: "finally",
            value: function _finally(onFinally) {
              var C = this.constructor[Symbol.species];

              if (!C || typeof C !== 'function') {
                C = ZoneAwarePromise;
              }

              var chainPromise = new C(noop);
              chainPromise[symbolFinally] = symbolFinally;
              var zone = Zone.current;

              if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
              } else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
              }

              return chainPromise;
            }
          }], [{
            key: "toString",
            value: function toString() {
              return ZONE_AWARE_PROMISE_TO_STRING;
            }
          }, {
            key: "resolve",
            value: function resolve(value) {
              return resolvePromise(new this(null), RESOLVED, value);
            }
          }, {
            key: "reject",
            value: function reject(error) {
              return resolvePromise(new this(null), REJECTED, error);
            }
          }, {
            key: "race",
            value: function race(values) {
              var resolve;
              var reject;
              var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
              });

              function onResolve(value) {
                resolve(value);
              }

              function onReject(error) {
                reject(error);
              }

              var _iterator = _createForOfIteratorHelper(values),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var value = _step.value;

                  if (!isThenable(value)) {
                    value = this.resolve(value);
                  }

                  value.then(onResolve, onReject);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return promise;
            }
          }, {
            key: "all",
            value: function all(values) {
              return ZoneAwarePromise.allWithCallback(values);
            }
          }, {
            key: "allSettled",
            value: function allSettled(values) {
              var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
              return P.allWithCallback(values, {
                thenCallback: function thenCallback(value) {
                  return {
                    status: 'fulfilled',
                    value: value
                  };
                },
                errorCallback: function errorCallback(err) {
                  return {
                    status: 'rejected',
                    reason: err
                  };
                }
              });
            }
          }, {
            key: "allWithCallback",
            value: function allWithCallback(values, callback) {
              var _this = this;

              var resolve;
              var reject;
              var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
              }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

              var unresolvedCount = 2;
              var valueIndex = 0;
              var resolvedValues = [];

              var _iterator2 = _createForOfIteratorHelper(values),
                  _step2;

              try {
                var _loop2 = function _loop2() {
                  var value = _step2.value;

                  if (!isThenable(value)) {
                    value = _this.resolve(value);
                  }

                  var curValueIndex = valueIndex;

                  try {
                    value.then(function (value) {
                      resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                      unresolvedCount--;

                      if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                      }
                    }, function (err) {
                      if (!callback) {
                        reject(err);
                      } else {
                        resolvedValues[curValueIndex] = callback.errorCallback(err);
                        unresolvedCount--;

                        if (unresolvedCount === 0) {
                          resolve(resolvedValues);
                        }
                      }
                    });
                  } catch (thenErr) {
                    reject(thenErr);
                  }

                  unresolvedCount++;
                  valueIndex++;
                };

                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _loop2();
                } // Make the unresolvedCount zero-based again.

              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              unresolvedCount -= 2;

              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }

              return promise;
            }
          }]);

          return ZoneAwarePromise;
        }(Symbol.toStringTag, Symbol.species); // Protect against aggressive optimizers dropping seemingly unused properties.
        // E.g. Closure Compiler in advanced mode.


        ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
        ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
        ZoneAwarePromise['race'] = ZoneAwarePromise.race;
        ZoneAwarePromise['all'] = ZoneAwarePromise.all;
        var NativePromise = global[symbolPromise] = global['Promise'];

        var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');

        var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');

        if (!desc || desc.configurable) {
          desc && delete desc.writable;
          desc && delete desc.value;

          if (!desc) {
            desc = {
              configurable: true,
              enumerable: true
            };
          }

          desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
          };

          desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
              // if the NewNativePromise is ZoneAwarePromise
              // save to global
              global[ZONE_AWARE_PROMISE] = NewNativePromise;
            } else {
              // if the NewNativePromise is not ZoneAwarePromise
              // for example: after load zone.js, some library just
              // set es6-promise to global, if we set it to global
              // directly, assertZonePatched will fail and angular
              // will not loaded, so we just set the NewNativePromise
              // to global[symbolPromise], so the result is just like
              // we load ES6 Promise before zone.js
              global[symbolPromise] = NewNativePromise;

              if (!NewNativePromise.prototype[symbolThen]) {
                patchThen(NewNativePromise);
              }

              api.setNativePromise(NewNativePromise);
            }
          };

          ObjectDefineProperty(global, 'Promise', desc);
        }

        global['Promise'] = ZoneAwarePromise;

        var symbolThenPatched = __symbol__('thenPatched');

        function patchThen(Ctor) {
          var proto = Ctor.prototype;
          var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

          if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
          }

          var originalThen = proto.then; // Keep a reference to the original method.

          proto[symbolThen] = originalThen;

          Ctor.prototype.then = function (onResolve, onReject) {
            var _this2 = this;

            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
              originalThen.call(_this2, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
          };

          Ctor[symbolThenPatched] = true;
        }

        api.patchThen = patchThen;

        function zoneify(fn) {
          return function () {
            var resultPromise = fn.apply(this, arguments);

            if (resultPromise instanceof ZoneAwarePromise) {
              return resultPromise;
            }

            var ctor = resultPromise.constructor;

            if (!ctor[symbolThenPatched]) {
              patchThen(ctor);
            }

            return resultPromise;
          };
        }

        if (NativePromise) {
          patchThen(NativePromise);
          var fetch = global['fetch'];

          if (typeof fetch == 'function') {
            global[api.symbol('fetch')] = fetch;
            global['fetch'] = zoneify(fetch);
          }
        } // This is not part of public API, but it is useful for tests, so we expose it.


        Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
        return ZoneAwarePromise;
      });
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Suppress closure compiler errors about unknown 'Zone' variable
       * @fileoverview
       * @suppress {undefinedVars,globalThis,missingRequire}
       */
      /// <reference types="node"/>
      // issue #989, to reduce bundle size, use short name

      /** Object.getOwnPropertyDescriptor */


      var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      /** Object.defineProperty */

      var ObjectDefineProperty = Object.defineProperty;
      /** Object.getPrototypeOf */

      var ObjectGetPrototypeOf = Object.getPrototypeOf;
      /** Object.create */

      var ObjectCreate = Object.create;
      /** Array.prototype.slice */

      var ArraySlice = Array.prototype.slice;
      /** addEventListener string const */

      var ADD_EVENT_LISTENER_STR = 'addEventListener';
      /** removeEventListener string const */

      var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
      /** zoneSymbol addEventListener */

      var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
      /** zoneSymbol removeEventListener */


      var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
      /** true string const */


      var TRUE_STR = 'true';
      /** false string const */

      var FALSE_STR = 'false';
      /** Zone symbol prefix string const. */

      var ZONE_SYMBOL_PREFIX = Zone.__symbol__('');

      function wrapWithCurrentZone(callback, source) {
        return Zone.current.wrap(callback, source);
      }

      function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
        return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
      }

      var zoneSymbol = Zone.__symbol__;
      var isWindowExists = typeof window !== 'undefined';
      var internalWindow = isWindowExists ? window : undefined;

      var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

      var REMOVE_ATTRIBUTE = 'removeAttribute';
      var NULL_ON_PROP_VALUE = [null];

      function bindArguments(args, source) {
        for (var i = args.length - 1; i >= 0; i--) {
          if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
          }
        }

        return args;
      }

      function patchPrototype(prototype, fnNames) {
        var source = prototype.constructor['name'];

        var _loop3 = function _loop3(i) {
          var name = fnNames[i];
          var delegate = prototype[name];

          if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);

            if (!isPropertyWritable(prototypeDesc)) {
              return "continue";
            }

            prototype[name] = function (delegate) {
              var patched = function patched() {
                return delegate.apply(this, bindArguments(arguments, source + '.' + name));
              };

              attachOriginToPatched(patched, delegate);
              return patched;
            }(delegate);
          }
        };

        for (var i = 0; i < fnNames.length; i++) {
          var _ret = _loop3(i);

          if (_ret === "continue") continue;
        }
      }

      function isPropertyWritable(propertyDesc) {
        if (!propertyDesc) {
          return true;
        }

        if (propertyDesc.writable === false) {
          return false;
        }

        return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
      }

      var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
      // this code.

      var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
      var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
      // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
      // this code.

      var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
      var zoneSymbolEventNames = {};

      var wrapFn = function wrapFn(event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;

        if (!event) {
          return;
        }

        var eventNameSymbol = zoneSymbolEventNames[event.type];

        if (!eventNameSymbol) {
          eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
        }

        var target = this || event.target || _global;
        var listener = target[eventNameSymbol];
        var result;

        if (isBrowser && target === internalWindow && event.type === 'error') {
          // window.onerror have different signiture
          // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
          // and onerror callback will prevent default when callback return true
          var errorEvent = event;
          result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

          if (result === true) {
            event.preventDefault();
          }
        } else {
          result = listener && listener.apply(this, arguments);

          if (result != undefined && !result) {
            event.preventDefault();
          }
        }

        return result;
      };

      function patchProperty(obj, prop, prototype) {
        var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

        if (!desc && prototype) {
          // when patch window object, use prototype to check prop exist or not
          var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

          if (prototypeDesc) {
            desc = {
              enumerable: true,
              configurable: true
            };
          }
        } // if the descriptor not exists or is not configurable
        // just return


        if (!desc || !desc.configurable) {
          return;
        }

        var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');

        if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
          return;
        } // A property descriptor cannot have getter/setter and be writable
        // deleting the writable and value properties avoids this error:
        //
        // TypeError: property descriptors must not specify a value or be writable when a
        // getter or setter has been specified


        delete desc.writable;
        delete desc.value;
        var originalDescGet = desc.get;
        var originalDescSet = desc.set; // substr(2) cuz 'onclick' -> 'click', etc

        var eventName = prop.substr(2);
        var eventNameSymbol = zoneSymbolEventNames[eventName];

        if (!eventNameSymbol) {
          eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
        }

        desc.set = function (newValue) {
          // in some of windows's onproperty callback, this is undefined
          // so we need to check it
          var target = this;

          if (!target && obj === _global) {
            target = _global;
          }

          if (!target) {
            return;
          }

          var previousValue = target[eventNameSymbol];

          if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
          } // issue #978, when onload handler was added before loading zone.js
          // we should remove it with originalDescSet


          if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
          }

          if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
          } else {
            target[eventNameSymbol] = null;
          }
        }; // The getter would return undefined for unassigned properties but the default value of an
        // unassigned property is null


        desc.get = function () {
          // in some of windows's onproperty callback, this is undefined
          // so we need to check it
          var target = this;

          if (!target && obj === _global) {
            target = _global;
          }

          if (!target) {
            return null;
          }

          var listener = target[eventNameSymbol];

          if (listener) {
            return listener;
          } else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);

            if (value) {
              desc.set.call(this, value);

              if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                target.removeAttribute(prop);
              }

              return value;
            }
          }

          return null;
        };

        ObjectDefineProperty(obj, prop, desc);
        obj[onPropPatchedSymbol] = true;
      }

      function patchOnProperties(obj, properties, prototype) {
        if (properties) {
          for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
          }
        } else {
          var onProperties = [];

          for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
              onProperties.push(prop);
            }
          }

          for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
          }
        }
      }

      var originalInstanceKey = zoneSymbol('originalInstance'); // wrap some native API on `window`

      function patchClass(className) {
        var OriginalClass = _global[className];
        if (!OriginalClass) return; // keep original class in global

        _global[zoneSymbol(className)] = OriginalClass;

        _global[className] = function () {
          var a = bindArguments(arguments, className);

          switch (a.length) {
            case 0:
              this[originalInstanceKey] = new OriginalClass();
              break;

            case 1:
              this[originalInstanceKey] = new OriginalClass(a[0]);
              break;

            case 2:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
              break;

            case 3:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
              break;

            case 4:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
              break;

            default:
              throw new Error('Arg list too long.');
          }
        }; // attach original delegate to patched function


        attachOriginToPatched(_global[className], OriginalClass);
        var instance = new OriginalClass(function () {});
        var prop;

        for (prop in instance) {
          // https://bugs.webkit.org/show_bug.cgi?id=44721
          if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

          (function (prop) {
            if (typeof instance[prop] === 'function') {
              _global[className].prototype[prop] = function () {
                return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
              };
            } else {
              ObjectDefineProperty(_global[className].prototype, prop, {
                set: function set(fn) {
                  if (typeof fn === 'function') {
                    this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
                    // use it in Function.prototype.toString to return
                    // the native one.

                    attachOriginToPatched(this[originalInstanceKey][prop], fn);
                  } else {
                    this[originalInstanceKey][prop] = fn;
                  }
                },
                get: function get() {
                  return this[originalInstanceKey][prop];
                }
              });
            }
          })(prop);
        }

        for (prop in OriginalClass) {
          if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
          }
        }
      }

      function copySymbolProperties(src, dest) {
        if (typeof Object.getOwnPropertySymbols !== 'function') {
          return;
        }

        var symbols = Object.getOwnPropertySymbols(src);
        symbols.forEach(function (symbol) {
          var desc = Object.getOwnPropertyDescriptor(src, symbol);
          Object.defineProperty(dest, symbol, {
            get: function get() {
              return src[symbol];
            },
            set: function set(value) {
              if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                // if src[symbol] is not writable or not have a setter, just return
                return;
              }

              src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
          });
        });
      }

      var shouldCopySymbolProperties = false;

      function patchMethod(target, name, patchFn) {
        var proto = target;

        while (proto && !proto.hasOwnProperty(name)) {
          proto = ObjectGetPrototypeOf(proto);
        }

        if (!proto && target[name]) {
          // somehow we did not find it, but we can see it. This happens on IE for Window properties.
          proto = target;
        }

        var delegateName = zoneSymbol(name);
        var delegate = null;

        if (proto && !(delegate = proto[delegateName])) {
          delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
          // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

          var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

          if (isPropertyWritable(desc)) {
            var patchDelegate = patchFn(delegate, delegateName, name);

            proto[name] = function () {
              return patchDelegate(this, arguments);
            };

            attachOriginToPatched(proto[name], delegate);

            if (shouldCopySymbolProperties) {
              copySymbolProperties(delegate, proto[name]);
            }
          }
        }

        return delegate;
      } // TODO: @JiaLiPassion, support cancel task later if necessary


      function patchMacroTask(obj, funcName, metaCreator) {
        var setNative = null;

        function scheduleTask(task) {
          var data = task.data;

          data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
          };

          setNative.apply(data.target, data.args);
          return task;
        }

        setNative = patchMethod(obj, funcName, function (delegate) {
          return function (self, args) {
            var meta = metaCreator(self, args);

            if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
              return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
            } else {
              // cause an error by calling it directly.
              return delegate.apply(self, args);
            }
          };
        });
      }

      function attachOriginToPatched(patched, original) {
        patched[zoneSymbol('OriginalDelegate')] = original;
      }

      var isDetectedIEOrEdge = false;
      var ieOrEdge = false;

      function isIE() {
        try {
          var ua = internalWindow.navigator.userAgent;

          if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
          }
        } catch (error) {}

        return false;
      }

      function isIEOrEdge() {
        if (isDetectedIEOrEdge) {
          return ieOrEdge;
        }

        isDetectedIEOrEdge = true;

        try {
          var ua = internalWindow.navigator.userAgent;

          if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
          }
        } catch (error) {}

        return ieOrEdge;
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // override Function.prototype.toString to make zone.js patched function
      // look like native function


      Zone.__load_patch('toString', function (global) {
        // patch Func.prototype.toString to let them look like native
        var originalFunctionToString = Function.prototype.toString;
        var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
        var PROMISE_SYMBOL = zoneSymbol('Promise');
        var ERROR_SYMBOL = zoneSymbol('Error');

        var newFunctionToString = function toString() {
          if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

            if (originalDelegate) {
              if (typeof originalDelegate === 'function') {
                return originalFunctionToString.call(originalDelegate);
              } else {
                return Object.prototype.toString.call(originalDelegate);
              }
            }

            if (this === Promise) {
              var nativePromise = global[PROMISE_SYMBOL];

              if (nativePromise) {
                return originalFunctionToString.call(nativePromise);
              }
            }

            if (this === Error) {
              var nativeError = global[ERROR_SYMBOL];

              if (nativeError) {
                return originalFunctionToString.call(nativeError);
              }
            }
          }

          return originalFunctionToString.call(this);
        };

        newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
        Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

        var originalObjectToString = Object.prototype.toString;
        var PROMISE_OBJECT_TO_STRING = '[object Promise]';

        Object.prototype.toString = function () {
          if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
          }

          return originalObjectToString.call(this);
        };
      });
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var passiveSupported = false;

      if (typeof window !== 'undefined') {
        try {
          var options = Object.defineProperty({}, 'passive', {
            get: function get() {
              passiveSupported = true;
            }
          });
          window.addEventListener('test', options, options);
          window.removeEventListener('test', options, options);
        } catch (err) {
          passiveSupported = false;
        }
      } // an identifier to tell ZoneTask do not create a new invoke closure


      var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
        useG: true
      };
      var zoneSymbolEventNames$1 = {};
      var globalSources = {};
      var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
      var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');

      function prepareEventNames(eventName, eventNameToString) {
        var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
        var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
      }

      function patchEventTarget(_global, apis, patchOptions) {
        var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
        var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
        var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
        var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
        var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
        var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
        var PREPEND_EVENT_LISTENER = 'prependListener';
        var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

        var invokeTask = function invokeTask(task, target, event) {
          // for better performance, check isRemoved which is set
          // by removeEventListener
          if (task.isRemoved) {
            return;
          }

          var delegate = task.callback;

          if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) {
              return delegate.handleEvent(event);
            };

            task.originalDelegate = delegate;
          } // invoke static task.invoke


          task.invoke(task, target, [event]);
          var options = task.options;

          if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var _delegate = task.originalDelegate ? task.originalDelegate : task.callback;

            target[REMOVE_EVENT_LISTENER].call(target, event.type, _delegate, options);
          }
        }; // global shared zoneAwareCallback to handle all event callback with capture = false


        var globalZoneAwareCallback = function globalZoneAwareCallback(event) {
          // https://github.com/angular/zone.js/issues/911, in IE, sometimes
          // event will be undefined, so we need to use window.event
          event = event || _global.event;

          if (!event) {
            return;
          } // event.target is needed for Samsung TV and SourceBuffer
          // || global is needed https://github.com/angular/zone.js/issues/190


          var target = this || event.target || _global;
          var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];

          if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
              invokeTask(tasks[0], target, event);
            } else {
              // https://github.com/angular/zone.js/issues/836
              // copy the tasks array before invoke, to avoid
              // the callback will remove itself or other listener
              var copyTasks = tasks.slice();

              for (var i = 0; i < copyTasks.length; i++) {
                if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                  break;
                }

                invokeTask(copyTasks[i], target, event);
              }
            }
          }
        }; // global shared zoneAwareCallback to handle all event callback with capture = true


        var globalZoneAwareCaptureCallback = function globalZoneAwareCaptureCallback(event) {
          // https://github.com/angular/zone.js/issues/911, in IE, sometimes
          // event will be undefined, so we need to use window.event
          event = event || _global.event;

          if (!event) {
            return;
          } // event.target is needed for Samsung TV and SourceBuffer
          // || global is needed https://github.com/angular/zone.js/issues/190


          var target = this || event.target || _global;
          var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];

          if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
              invokeTask(tasks[0], target, event);
            } else {
              // https://github.com/angular/zone.js/issues/836
              // copy the tasks array before invoke, to avoid
              // the callback will remove itself or other listener
              var copyTasks = tasks.slice();

              for (var i = 0; i < copyTasks.length; i++) {
                if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                  break;
                }

                invokeTask(copyTasks[i], target, event);
              }
            }
          }
        };

        function patchEventTargetMethods(obj, patchOptions) {
          if (!obj) {
            return false;
          }

          var useGlobalCallback = true;

          if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
          }

          var validateHandler = patchOptions && patchOptions.vh;
          var checkDuplicate = true;

          if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
          }

          var returnTarget = false;

          if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
          }

          var proto = obj;

          while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
          }

          if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
          }

          if (!proto) {
            return false;
          }

          if (proto[zoneSymbolAddEventListener]) {
            return false;
          }

          var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
          // so we do not need to create a new object just for pass some data

          var taskData = {};
          var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
          var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
          var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
          var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
          var nativePrependEventListener;

          if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
          }
          /**
           * This util function will build an option object with passive option
           * to handle all possible input from the user.
           */


          function buildEventListenerOptions(options, passive) {
            if (!passiveSupported && typeof options === 'object' && options) {
              // doesn't support passive but user want to pass an object as options.
              // this will not work on some old browser, so we just pass a boolean
              // as useCapture parameter
              return !!options.capture;
            }

            if (!passiveSupported || !passive) {
              return options;
            }

            if (typeof options === 'boolean') {
              return {
                capture: options,
                passive: true
              };
            }

            if (!options) {
              return {
                passive: true
              };
            }

            if (typeof options === 'object' && options.passive !== false) {
              return Object.assign(Object.assign({}, options), {
                passive: true
              });
            }

            return options;
          }

          var customScheduleGlobal = function customScheduleGlobal(task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
              return;
            }

            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
          };

          var customCancelGlobal = function customCancelGlobal(task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
              var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
              var symbolEventName;

              if (symbolEventNames) {
                symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
              }

              var existingTasks = symbolEventName && task.target[symbolEventName];

              if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                  var existingTask = existingTasks[i];

                  if (existingTask === task) {
                    existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                    task.isRemoved = true;

                    if (existingTasks.length === 0) {
                      // all tasks for the eventName + capture have gone,
                      // remove globalZoneAwareCallback and remove the task cache from target
                      task.allRemoved = true;
                      task.target[symbolEventName] = null;
                    }

                    break;
                  }
                }
              }
            } // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return


            if (!task.allRemoved) {
              return;
            }

            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
          };

          var customScheduleNonGlobal = function customScheduleNonGlobal(task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
          };

          var customSchedulePrepend = function customSchedulePrepend(task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
          };

          var customCancelNonGlobal = function customCancelNonGlobal(task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
          };

          var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
          var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

          var compareTaskCallbackVsDelegate = function compareTaskCallbackVsDelegate(task, delegate) {
            var typeOfDelegate = typeof delegate;
            return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
          };

          var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
          var blackListedEvents = Zone[zoneSymbol('BLACK_LISTED_EVENTS')];

          var passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];

          var makeAddListener = function makeAddListener(nativeListener, addSource, customScheduleFn, customCancelFn) {
            var returnTarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            var prepend = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
            return function () {
              var target = this || _global;
              var eventName = arguments[0];

              if (patchOptions && patchOptions.transferEventName) {
                eventName = patchOptions.transferEventName(eventName);
              }

              var delegate = arguments[1];

              if (!delegate) {
                return nativeListener.apply(this, arguments);
              }

              if (isNode && eventName === 'uncaughtException') {
                // don't patch uncaughtException of nodejs to prevent endless loop
                return nativeListener.apply(this, arguments);
              } // don't create the bind delegate function for handleEvent
              // case here to improve addEventListener performance
              // we will create the bind delegate when invoke


              var isHandleEvent = false;

              if (typeof delegate !== 'function') {
                if (!delegate.handleEvent) {
                  return nativeListener.apply(this, arguments);
                }

                isHandleEvent = true;
              }

              if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                return;
              }

              var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
              var options = buildEventListenerOptions(arguments[2], passive);

              if (blackListedEvents) {
                // check black list
                for (var i = 0; i < blackListedEvents.length; i++) {
                  if (eventName === blackListedEvents[i]) {
                    if (passive) {
                      return nativeListener.call(target, eventName, delegate, options);
                    } else {
                      return nativeListener.apply(this, arguments);
                    }
                  }
                }
              }

              var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
              var once = options && typeof options === 'object' ? options.once : false;
              var zone = Zone.current;
              var symbolEventNames = zoneSymbolEventNames$1[eventName];

              if (!symbolEventNames) {
                prepareEventNames(eventName, eventNameToString);
                symbolEventNames = zoneSymbolEventNames$1[eventName];
              }

              var symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
              var existingTasks = target[symbolEventName];
              var isExisting = false;

              if (existingTasks) {
                // already have task registered
                isExisting = true;

                if (checkDuplicate) {
                  for (var _i = 0; _i < existingTasks.length; _i++) {
                    if (compare(existingTasks[_i], delegate)) {
                      // same callback, same capture, same event name, just return
                      return;
                    }
                  }
                }
              } else {
                existingTasks = target[symbolEventName] = [];
              }

              var source;
              var constructorName = target.constructor['name'];
              var targetSource = globalSources[constructorName];

              if (targetSource) {
                source = targetSource[eventName];
              }

              if (!source) {
                source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
              } // do not create a new object as task.data to pass those things
              // just use the global shared one


              taskData.options = options;

              if (once) {
                // if addEventListener with once options, we don't pass it to
                // native addEventListener, instead we keep the once setting
                // and handle ourselves.
                taskData.options.once = false;
              }

              taskData.target = target;
              taskData.capture = capture;
              taskData.eventName = eventName;
              taskData.isExisting = isExisting;
              var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

              if (data) {
                data.taskData = taskData;
              }

              var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
              // issue, https://github.com/angular/angular/issues/20442

              taskData.target = null; // need to clear up taskData because it is a global object

              if (data) {
                data.taskData = null;
              } // have to save those information to task in case
              // application may call task.zone.cancelTask() directly


              if (once) {
                options.once = true;
              }

              if (!(!passiveSupported && typeof task.options === 'boolean')) {
                // if not support passive, and we pass an option object
                // to addEventListener, we should save the options to task
                task.options = options;
              }

              task.target = target;
              task.capture = capture;
              task.eventName = eventName;

              if (isHandleEvent) {
                // save original delegate for compare to check duplicate
                task.originalDelegate = delegate;
              }

              if (!prepend) {
                existingTasks.push(task);
              } else {
                existingTasks.unshift(task);
              }

              if (returnTarget) {
                return target;
              }
            };
          };

          proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

          if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
          }

          proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (patchOptions && patchOptions.transferEventName) {
              eventName = patchOptions.transferEventName(eventName);
            }

            var options = arguments[2];
            var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
            var delegate = arguments[1];

            if (!delegate) {
              return nativeRemoveEventListener.apply(this, arguments);
            }

            if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
              return;
            }

            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;

            if (symbolEventNames) {
              symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }

            var existingTasks = symbolEventName && target[symbolEventName];

            if (existingTasks) {
              for (var i = 0; i < existingTasks.length; i++) {
                var existingTask = existingTasks[i];

                if (compare(existingTask, delegate)) {
                  existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                  existingTask.isRemoved = true;

                  if (existingTasks.length === 0) {
                    // all tasks for the eventName + capture have gone,
                    // remove globalZoneAwareCallback and remove the task cache from target
                    existingTask.allRemoved = true;
                    target[symbolEventName] = null; // in the target, we have an event listener which is added by on_property
                    // such as target.onclick = function() {}, so we need to clear this internal
                    // property too if all delegates all removed

                    if (typeof eventName === 'string') {
                      var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                      target[onPropertySymbol] = null;
                    }
                  }

                  existingTask.zone.cancelTask(existingTask);

                  if (returnTarget) {
                    return target;
                  }

                  return;
                }
              }
            } // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.


            return nativeRemoveEventListener.apply(this, arguments);
          };

          proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (patchOptions && patchOptions.transferEventName) {
              eventName = patchOptions.transferEventName(eventName);
            }

            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

            for (var i = 0; i < tasks.length; i++) {
              var task = tasks[i];
              var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              listeners.push(delegate);
            }

            return listeners;
          };

          proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (!eventName) {
              var keys = Object.keys(target);

              for (var i = 0; i < keys.length; i++) {
                var prop = keys[i];
                var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
                // used for monitoring the removeListener call,
                // so just keep removeListener eventListener until
                // all other eventListeners are removed

                if (evtName && evtName !== 'removeListener') {
                  this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                }
              } // remove removeListener listener finally


              this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            } else {
              if (patchOptions && patchOptions.transferEventName) {
                eventName = patchOptions.transferEventName(eventName);
              }

              var symbolEventNames = zoneSymbolEventNames$1[eventName];

              if (symbolEventNames) {
                var symbolEventName = symbolEventNames[FALSE_STR];
                var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                var tasks = target[symbolEventName];
                var captureTasks = target[symbolCaptureEventName];

                if (tasks) {
                  var removeTasks = tasks.slice();

                  for (var _i2 = 0; _i2 < removeTasks.length; _i2++) {
                    var task = removeTasks[_i2];
                    var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                    this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                  }
                }

                if (captureTasks) {
                  var _removeTasks = captureTasks.slice();

                  for (var _i3 = 0; _i3 < _removeTasks.length; _i3++) {
                    var _task = _removeTasks[_i3];

                    var _delegate2 = _task.originalDelegate ? _task.originalDelegate : _task.callback;

                    this[REMOVE_EVENT_LISTENER].call(this, eventName, _delegate2, _task.options);
                  }
                }
              }
            }

            if (returnTarget) {
              return this;
            }
          }; // for native toString patch


          attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
          attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

          if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
          }

          if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
          }

          return true;
        }

        var results = [];

        for (var i = 0; i < apis.length; i++) {
          results[i] = patchEventTargetMethods(apis[i], patchOptions);
        }

        return results;
      }

      function findEventTasks(target, eventName) {
        if (!eventName) {
          var foundTasks = [];

          for (var prop in target) {
            var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
            var evtName = match && match[1];

            if (evtName && (!eventName || evtName === eventName)) {
              var tasks = target[prop];

              if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                  foundTasks.push(tasks[i]);
                }
              }
            }
          }

          return foundTasks;
        }

        var symbolEventName = zoneSymbolEventNames$1[eventName];

        if (!symbolEventName) {
          prepareEventNames(eventName);
          symbolEventName = zoneSymbolEventNames$1[eventName];
        }

        var captureFalseTasks = target[symbolEventName[FALSE_STR]];
        var captureTrueTasks = target[symbolEventName[TRUE_STR]];

        if (!captureFalseTasks) {
          return captureTrueTasks ? captureTrueTasks.slice() : [];
        } else {
          return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
        }
      }

      function patchEventPrototype(global, api) {
        var Event = global['Event'];

        if (Event && Event.prototype) {
          api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
            return function (self, args) {
              self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
              // in case in some hybrid application, some part of
              // application will be controlled by zone, some are not

              delegate && delegate.apply(self, args);
            };
          });
        }
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function patchCallbacks(api, target, targetName, method, callbacks) {
        var symbol = Zone.__symbol__(method);

        if (target[symbol]) {
          return;
        }

        var nativeDelegate = target[symbol] = target[method];

        target[method] = function (name, opts, options) {
          if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
              var source = "".concat(targetName, ".").concat(method, "::") + callback;
              var prototype = opts.prototype;

              if (prototype.hasOwnProperty(callback)) {
                var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

                if (descriptor && descriptor.value) {
                  descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

                  api._redefineProperty(opts.prototype, callback, descriptor);
                } else if (prototype[callback]) {
                  prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
              } else if (prototype[callback]) {
                prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
              }
            });
          }

          return nativeDelegate.call(target, name, opts, options);
        };

        api.attachOriginToPatched(target[method], nativeDelegate);
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'orientationchange', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'touchend', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
      var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange', 'visibilitychange', 'resume'];
      var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplayconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
      var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
      var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
      var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
      var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
      var formEventNames = ['autocomplete', 'autocompleteerror'];
      var detailEventNames = ['toggle'];
      var frameEventNames = ['load'];
      var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
      var marqueeEventNames = ['bounce', 'finish', 'start'];
      var XMLHttpRequestEventNames = ['loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend', 'readystatechange'];
      var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
      var websocketEventNames = ['close', 'error', 'open', 'message'];
      var workerEventNames = ['error', 'message'];
      var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);

      function filterProperties(target, onProperties, ignoreProperties) {
        if (!ignoreProperties || ignoreProperties.length === 0) {
          return onProperties;
        }

        var tip = ignoreProperties.filter(function (ip) {
          return ip.target === target;
        });

        if (!tip || tip.length === 0) {
          return onProperties;
        }

        var targetIgnoreProperties = tip[0].ignoreProperties;
        return onProperties.filter(function (op) {
          return targetIgnoreProperties.indexOf(op) === -1;
        });
      }

      function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
        // check whether target is available, sometimes target will be undefined
        // because different browser or some 3rd party plugin.
        if (!target) {
          return;
        }

        var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
        patchOnProperties(target, filteredProperties, prototype);
      }

      function propertyDescriptorPatch(api, _global) {
        if (isNode && !isMix) {
          return;
        }

        if (Zone[api.symbol('patchEvents')]) {
          // events are already been patched by legacy patch.
          return;
        }

        var supportsWebSocket = typeof WebSocket !== 'undefined';
        var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

        if (isBrowser) {
          var _internalWindow = window;
          var ignoreErrorProperties = isIE ? [{
            target: _internalWindow,
            ignoreProperties: ['error']
          }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
          // so we need to pass WindowPrototype to check onProp exist or not

          patchFilteredProperties(_internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(_internalWindow));
          patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);

          if (typeof _internalWindow['SVGElement'] !== 'undefined') {
            patchFilteredProperties(_internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
          }

          patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
          patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
          patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
          patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
          patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
          patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
          patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
          var HTMLMarqueeElement = _internalWindow['HTMLMarqueeElement'];

          if (HTMLMarqueeElement) {
            patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
          }

          var Worker = _internalWindow['Worker'];

          if (Worker) {
            patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
          }
        }

        var XMLHttpRequest = _global['XMLHttpRequest'];

        if (XMLHttpRequest) {
          // XMLHttpRequest is not available in ServiceWorker, so we need to check here
          patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }

        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];

        if (XMLHttpRequestEventTarget) {
          patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }

        if (typeof IDBIndex !== 'undefined') {
          patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }

        if (supportsWebSocket) {
          patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('util', function (global, Zone, api) {
        api.patchOnProperties = patchOnProperties;
        api.patchMethod = patchMethod;
        api.bindArguments = bindArguments;
        api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
        // define which events will not be patched by `Zone.js`.
        // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
        // the name consistent with angular repo.
        // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
        // backwards compatibility.

        var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

        var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

        if (global[SYMBOL_UNPATCHED_EVENTS]) {
          global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
        }

        if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
          Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
        }

        api.patchEventPrototype = patchEventPrototype;
        api.patchEventTarget = patchEventTarget;
        api.isIEOrEdge = isIEOrEdge;
        api.ObjectDefineProperty = ObjectDefineProperty;
        api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
        api.ObjectCreate = ObjectCreate;
        api.ArraySlice = ArraySlice;
        api.patchClass = patchClass;
        api.wrapWithCurrentZone = wrapWithCurrentZone;
        api.filterProperties = filterProperties;
        api.attachOriginToPatched = attachOriginToPatched;
        api._redefineProperty = Object.defineProperty;
        api.patchCallbacks = patchCallbacks;

        api.getGlobalObjects = function () {
          return {
            globalSources: globalSources,
            zoneSymbolEventNames: zoneSymbolEventNames$1,
            eventNames: eventNames,
            isBrowser: isBrowser,
            isMix: isMix,
            isNode: isNode,
            TRUE_STR: TRUE_STR,
            FALSE_STR: FALSE_STR,
            ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
            ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
            REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
          };
        };
      });
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var taskSymbol = zoneSymbol('zoneTask');

      function patchTimer(window, setName, cancelName, nameSuffix) {
        var setNative = null;
        var clearNative = null;
        setName += nameSuffix;
        cancelName += nameSuffix;
        var tasksByHandleId = {};

        function scheduleTask(task) {
          var data = task.data;

          function timer() {
            try {
              task.invoke.apply(this, arguments);
            } finally {
              // issue-934, task will be cancelled
              // even it is a periodic task such as
              // setInterval
              if (!(task.data && task.data.isPeriodic)) {
                if (typeof data.handleId === 'number') {
                  // in non-nodejs env, we remove timerId
                  // from local cache
                  delete tasksByHandleId[data.handleId];
                } else if (data.handleId) {
                  // Node returns complex objects as handleIds
                  // we remove task reference from timer object
                  data.handleId[taskSymbol] = null;
                }
              }
            }
          }

          data.args[0] = timer;
          data.handleId = setNative.apply(window, data.args);
          return task;
        }

        function clearTask(task) {
          return clearNative(task.data.handleId);
        }

        setNative = patchMethod(window, setName, function (delegate) {
          return function (self, args) {
            if (typeof args[0] === 'function') {
              var _options = {
                isPeriodic: nameSuffix === 'Interval',
                delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
                args: args
              };
              var task = scheduleMacroTaskWithCurrentZone(setName, args[0], _options, scheduleTask, clearTask);

              if (!task) {
                return task;
              } // Node.js must additionally support the ref and unref functions.


              var handle = task.data.handleId;

              if (typeof handle === 'number') {
                // for non nodejs env, we save handleId: task
                // mapping in local cache for clearTimeout
                tasksByHandleId[handle] = task;
              } else if (handle) {
                // for nodejs env, we save task
                // reference in timerId Object for clearTimeout
                handle[taskSymbol] = task;
              } // check whether handle is null, because some polyfill or browser
              // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


              if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
                task.ref = handle.ref.bind(handle);
                task.unref = handle.unref.bind(handle);
              }

              if (typeof handle === 'number' || handle) {
                return handle;
              }

              return task;
            } else {
              // cause an error by calling it directly.
              return delegate.apply(window, args);
            }
          };
        });
        clearNative = patchMethod(window, cancelName, function (delegate) {
          return function (self, args) {
            var id = args[0];
            var task;

            if (typeof id === 'number') {
              // non nodejs env.
              task = tasksByHandleId[id];
            } else {
              // nodejs env.
              task = id && id[taskSymbol]; // other environments.

              if (!task) {
                task = id;
              }
            }

            if (task && typeof task.type === 'string') {
              if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                if (typeof id === 'number') {
                  delete tasksByHandleId[id];
                } else if (id) {
                  id[taskSymbol] = null;
                } // Do not cancel already canceled functions


                task.zone.cancelTask(task);
              }
            } else {
              // cause an error by calling it directly.
              delegate.apply(window, args);
            }
          };
        });
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function patchCustomElements(_global, api) {
        var _api$getGlobalObjects = api.getGlobalObjects(),
            isBrowser = _api$getGlobalObjects.isBrowser,
            isMix = _api$getGlobalObjects.isMix;

        if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
          return;
        }

        var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
        api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function eventTargetPatch(_global, api) {
        if (Zone[api.symbol('patchEventTarget')]) {
          // EventTarget is already patched.
          return;
        }

        var _api$getGlobalObjects2 = api.getGlobalObjects(),
            eventNames = _api$getGlobalObjects2.eventNames,
            zoneSymbolEventNames = _api$getGlobalObjects2.zoneSymbolEventNames,
            TRUE_STR = _api$getGlobalObjects2.TRUE_STR,
            FALSE_STR = _api$getGlobalObjects2.FALSE_STR,
            ZONE_SYMBOL_PREFIX = _api$getGlobalObjects2.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string


        for (var i = 0; i < eventNames.length; i++) {
          var eventName = eventNames[i];
          var falseEventName = eventName + FALSE_STR;
          var trueEventName = eventName + TRUE_STR;
          var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
          var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
          zoneSymbolEventNames[eventName] = {};
          zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
          zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
        }

        var EVENT_TARGET = _global['EventTarget'];

        if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
          return;
        }

        api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
        return true;
      }

      function patchEvent(global, api) {
        api.patchEventPrototype(global, api);
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('legacy', function (global) {
        var legacyPatch = global[Zone.__symbol__('legacyPatch')];

        if (legacyPatch) {
          legacyPatch();
        }
      });

      Zone.__load_patch('timers', function (global) {
        var set = 'set';
        var clear = 'clear';
        patchTimer(global, set, clear, 'Timeout');
        patchTimer(global, set, clear, 'Interval');
        patchTimer(global, set, clear, 'Immediate');
      });

      Zone.__load_patch('requestAnimationFrame', function (global) {
        patchTimer(global, 'request', 'cancel', 'AnimationFrame');
        patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
        patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
      });

      Zone.__load_patch('blocking', function (global, Zone) {
        var blockingMethods = ['alert', 'prompt', 'confirm'];

        for (var i = 0; i < blockingMethods.length; i++) {
          var name = blockingMethods[i];
          patchMethod(global, name, function (delegate, symbol, name) {
            return function (s, args) {
              return Zone.current.run(delegate, global, args, name);
            };
          });
        }
      });

      Zone.__load_patch('EventTarget', function (global, Zone, api) {
        patchEvent(global, api);
        eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

        var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

        if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
          api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
        }

        patchClass('MutationObserver');
        patchClass('WebKitMutationObserver');
        patchClass('IntersectionObserver');
        patchClass('FileReader');
      });

      Zone.__load_patch('on_property', function (global, Zone, api) {
        propertyDescriptorPatch(api, global);
      });

      Zone.__load_patch('customElements', function (global, Zone, api) {
        patchCustomElements(global, api);
      });

      Zone.__load_patch('XHR', function (global, Zone) {
        // Treat XMLHttpRequest as a macrotask.
        patchXHR(global);
        var XHR_TASK = zoneSymbol('xhrTask');
        var XHR_SYNC = zoneSymbol('xhrSync');
        var XHR_LISTENER = zoneSymbol('xhrListener');
        var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
        var XHR_URL = zoneSymbol('xhrURL');
        var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');

        function patchXHR(window) {
          var XMLHttpRequest = window['XMLHttpRequest'];

          if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return;
          }

          var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

          function findPendingTask(target) {
            return target[XHR_TASK];
          }

          var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

          if (!oriAddListener) {
            var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];

            if (XMLHttpRequestEventTarget) {
              var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
              oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
              oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
          }

          var READY_STATE_CHANGE = 'readystatechange';
          var SCHEDULED = 'scheduled';

          function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

            var listener = target[XHR_LISTENER];

            if (!oriAddListener) {
              oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
              oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }

            if (listener) {
              oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }

            var newListener = target[XHR_LISTENER] = function () {
              if (target.readyState === target.DONE) {
                // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                // readyState=4 multiple times, so we need to check task state here
                if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                  // check whether the xhr has registered onload listener
                  // if that is the case, the task should invoke after all
                  // onload listeners finish.
                  var loadTasks = target[Zone.__symbol__('loadfalse')];

                  if (loadTasks && loadTasks.length > 0) {
                    var oriInvoke = task.invoke;

                    task.invoke = function () {
                      // need to load the tasks again, because in other
                      // load listener, they may remove themselves
                      var loadTasks = target[Zone.__symbol__('loadfalse')];

                      for (var i = 0; i < loadTasks.length; i++) {
                        if (loadTasks[i] === task) {
                          loadTasks.splice(i, 1);
                        }
                      }

                      if (!data.aborted && task.state === SCHEDULED) {
                        oriInvoke.call(task);
                      }
                    };

                    loadTasks.push(task);
                  } else {
                    task.invoke();
                  }
                } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                  // error occurs when xhr.send()
                  target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                }
              }
            };

            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];

            if (!storedTask) {
              target[XHR_TASK] = task;
            }

            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
          }

          function placeholderCallback() {}

          function clearTask(task) {
            var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.

            data.aborted = true;
            return abortNative.apply(data.target, data.args);
          }

          var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
            return function (self, args) {
              self[XHR_SYNC] = args[2] == false;
              self[XHR_URL] = args[1];
              return openNative.apply(self, args);
            };
          });
          var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
          var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
          var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
          var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
            return function (self, args) {
              if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
              }

              if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
              } else {
                var _options2 = {
                  target: self,
                  url: self[XHR_URL],
                  isPeriodic: false,
                  args: args,
                  aborted: false
                };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, _options2, scheduleTask, clearTask);

                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !_options2.aborted && task.state === SCHEDULED) {
                  // xhr request throw error when send
                  // we should invoke task instead of leaving a scheduled
                  // pending macroTask
                  task.invoke();
                }
              }
            };
          });
          var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
            return function (self, args) {
              var task = findPendingTask(self);

              if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || task.data && task.data.aborted) {
                  return;
                }

                task.zone.cancelTask(task);
              } else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
              } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
              // task
              // to cancel. Do nothing.

            };
          });
        }
      });

      Zone.__load_patch('geolocation', function (global) {
        /// GEO_LOCATION
        if (global['navigator'] && global['navigator'].geolocation) {
          patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
        }
      });

      Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
        // handle unhandled promise rejection
        function findPromiseRejectionHandler(evtName) {
          return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
              // windows has added unhandledrejection event listener
              // trigger the event listener
              var PromiseRejectionEvent = global['PromiseRejectionEvent'];

              if (PromiseRejectionEvent) {
                var evt = new PromiseRejectionEvent(evtName, {
                  promise: e.promise,
                  reason: e.rejection
                });
                eventTask.invoke(evt);
              }
            });
          };
        }

        if (global['PromiseRejectionEvent']) {
          Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
          Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
        }
      });
    });
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _poll_poll_creator_poll_creator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./poll/poll-creator/poll-creator.component */
    "./src/app/poll/poll-creator/poll-creator.component.ts");
    /* harmony import */


    var _poll_poll_card_poll_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./poll/poll-card/poll-card.component */
    "./src/app/poll/poll-card/poll-card.component.ts");
    /* harmony import */


    var _poll_poll_list_poll_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./poll/poll-list/poll-list.component */
    "./src/app/poll/poll-list/poll-list.component.ts");

    var routes = [{
      path: 'create-poll',
      component: _poll_poll_creator_poll_creator_component__WEBPACK_IMPORTED_MODULE_2__["PollCreatorComponent"]
    }, {
      path: 'home',
      component: _poll_poll_list_poll_list_component__WEBPACK_IMPORTED_MODULE_4__["PollListComponent"]
    }, {
      path: '',
      component: _poll_poll_list_poll_list_component__WEBPACK_IMPORTED_MODULE_4__["PollListComponent"]
    }, {
      path: 'poll',
      component: _poll_poll_card_poll_card_component__WEBPACK_IMPORTED_MODULE_3__["PollCardComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'pollur';
    });

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [["id", "content-container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-login-modal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["main[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background-color: #dae0e6;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mr-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.ml-auto[_ngcontent-%COMP%] {\n  margin-left:auto;\n}\n\n.d-block[_ngcontent-%COMP%] {\n  display:block;\n}\n\n.float-left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.flex-space-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n\n\np[_ngcontent-%COMP%] {\n  font-family: \"Robot\",sans-serif;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.text-blue[_ngcontent-%COMP%] {\n  color: rgb(0,123,255);\n}\n\n.text-large[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n.mat-card-body-full[_ngcontent-%COMP%] {\n  height: 1000px;\n  padding-top: 10rem;\n}\n\n.p-large[_ngcontent-%COMP%]{\n  font-size: 1.25rem;\n}\n\n\n\n.btn-p[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  border-style: none;\n  color: white;\n}\n\n.primary-blue[_ngcontent-%COMP%] {\n  background-color: rgb(0,123,255);\n}\n\n.primary-green[_ngcontent-%COMP%] {\n  background-color: #03e875;\n}\n\n.primary-blue[_ngcontent-%COMP%]:hover{\n  background-color: #0476f0;\n}\n\n.primary-green[_ngcontent-%COMP%]:hover{\n  background-color: #02c463;\n}\n\n#content-container[_ngcontent-%COMP%] {\n  width: 40%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 95px;\n}\n\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBR0EsaURBQWlEOztBQUNqRDtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLGlFQUFpRTs7QUFHakU7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU2O1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubXItMCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5tbC1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6YXV0bztcbn1cbi5kLWJsb2NrIHtcbiAgZGlzcGxheTpibG9jaztcbn1cblxuLmZsb2F0LWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmZsb2F0LXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZmxleC1zcGFjZS1iZXR3ZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5cbi8qPC0tLS0tLS0tLS0tLS1URVhUIFNUWUxFUy0tLS0tLS0tLS0tLS0tLS0tLS0tPiovXG5wIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RcIixzYW5zLXNlcmlmO1xufVxuXG4udGV4dC1ncmF5IHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi50ZXh0LWJsdWUge1xuICBjb2xvcjogcmdiKDAsMTIzLDI1NSk7XG59XG5cbi50ZXh0LWxhcmdlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LWNhcmQtYm9keS1mdWxsIHtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcbn1cblxuLnAtbGFyZ2V7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tRU5EIFRFWFQgU1RZTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuLmJ0bi1wIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcmltYXJ5LWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwxMjMsMjU1KTtcbn1cblxuLnByaW1hcnktZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNlODc1O1xufVxuXG4ucHJpbWFyeS1ibHVlOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ3NmYwO1xufVxuXG4ucHJpbWFyeS1ncmVlbjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyYzQ2Mztcbn1cblxuXG4jY29udGVudC1jb250YWluZXIge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogOTVweDtcbn1cblxuLmZsZXgtd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../polyfills */
    "./src/polyfills.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _poll_poll_creator_poll_creator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./poll/poll-creator/poll-creator.component */
    "./src/app/poll/poll-creator/poll-creator.component.ts");
    /* harmony import */


    var _poll_poll_card_poll_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./poll/poll-card/poll-card.component */
    "./src/app/poll/poll-card/poll-card.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./material-module */
    "./src/app/material-module.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _poll_poll_list_poll_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./poll/poll-list/poll-list.component */
    "./src/app/poll/poll-list/poll-list.component.ts");
    /* harmony import */


    var _poll_poll_container_poll_container_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./poll/poll-container/poll-container.component */
    "./src/app/poll/poll-container/poll-container.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _shared_modal_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./shared/modal.service */
    "./src/app/shared/modal.service.ts");
    /* harmony import */


    var _login_login_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./login/login.service */
    "./src/app/login/login.service.ts");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./shared/auth-interceptor */
    "./src/app/shared/auth-interceptor.ts");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./shared/user.service */
    "./src/app/shared/user.service.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_shared_modal_service__WEBPACK_IMPORTED_MODULE_18__["ModalService"], _login_login_service__WEBPACK_IMPORTED_MODULE_19__["LoginService"], _shared_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"], _shared_user_service__WEBPACK_IMPORTED_MODULE_22__["UserService"], {
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
        useValue: {
          appearance: 'fill'
        }
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
        useClass: _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_21__["AuthInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__["MDBBootstrapModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _poll_poll_creator_poll_creator_component__WEBPACK_IMPORTED_MODULE_6__["PollCreatorComponent"], _poll_poll_card_poll_card_component__WEBPACK_IMPORTED_MODULE_7__["PollCardComponent"], _poll_poll_list_poll_list_component__WEBPACK_IMPORTED_MODULE_15__["PollListComponent"], _poll_poll_container_poll_container_component__WEBPACK_IMPORTED_MODULE_16__["PollContainerComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__["MDBRootModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _poll_poll_creator_poll_creator_component__WEBPACK_IMPORTED_MODULE_6__["PollCreatorComponent"], _poll_poll_card_poll_card_component__WEBPACK_IMPORTED_MODULE_7__["PollCardComponent"], _poll_poll_list_poll_list_component__WEBPACK_IMPORTED_MODULE_15__["PollListComponent"], _poll_poll_container_poll_container_component__WEBPACK_IMPORTED_MODULE_16__["PollContainerComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__["MDBBootstrapModule"].forRoot()],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NO_ERRORS_SCHEMA"]],
          providers: [_shared_modal_service__WEBPACK_IMPORTED_MODULE_18__["ModalService"], _login_login_service__WEBPACK_IMPORTED_MODULE_19__["LoginService"], _shared_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"], _shared_user_service__WEBPACK_IMPORTED_MODULE_22__["UserService"], {
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
            useValue: {
              appearance: 'fill'
            }
          }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_21__["AuthInterceptor"],
            multi: true
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/constants.ts":
  /*!******************************!*\
    !*** ./src/app/constants.ts ***!
    \******************************/

  /*! exports provided: CHECKBOX, RADIO */

  /***/
  function srcAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CHECKBOX", function () {
      return CHECKBOX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RADIO", function () {
      return RADIO;
    });

    var CHECKBOX = "Checkbox";
    var RADIO = "Radio";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var _shared_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/modal.service */
    "./src/app/shared/modal.service.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_ul_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_15_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.login();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Log in");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_15_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.signUp();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_ul_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.authService.username, " ");
      }
    }

    function HeaderComponent_ul_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mdb-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_17_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Log out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(authService, modalService) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
        this.modalService = modalService;
      }

      _createClass(HeaderComponent, [{
        key: "logout",
        value: function logout() {
          this.authService.setUserAuthenticated(false, '');
        }
      }, {
        key: "login",
        value: function login() {
          this.modalService.open(_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"].modalId, {
            isLogin: true
          });
        }
      }, {
        key: "signUp",
        value: function signUp() {
          this.modalService.open(_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"].modalId, {
            isLogin: false
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 18,
      vars: 4,
      consts: [["SideClass", "navbar navbar-expand-lg navbar-light white ie-nav", 1, "fixed-top", 3, "containerInside"], ["href", "#", 1, "logo", "navbar-brand", "text-blue"], [1, "navbar-nav", "mr-auto"], ["mdbWavesEffect", "", 1, "nav-item", "waves-light"], ["routerLink", "/home", "routerLinkActive", "active", 1, "nav-link", "p-large"], [1, "sr-only"], ["routerLink", "/create-poll", "routerLinkActive", "active", 1, "nav-link", "p-large"], ["class", "navbar-nav ml-auto", 4, "ngIf"], ["class", "navbar-nav nav-flex-icons", 4, "ngIf"], [1, "navbar-nav", "ml-auto"], ["mdbWavesEffect", "", 1, "nav-item", "waves-light", "mr-1"], ["mdbBtn", "", "type", "button", "color", "primary", "outline", "true", "routerLinkActive", "active", 3, "click"], ["mdbBtn", "", "type", "button", "color", "primary", "routerLinkActive", "active", 3, "click"], [1, "mr-1"], [1, "navbar-text"], [1, "navbar-nav", "nav-flex-icons"], [1, "nav-item"], [1, "nav-link"], ["mdbDropdown", "", 1, "btn-group"], ["fas", "", "icon", "user", "classInside", "dropdown-toggle", "id", "nav-user-circle", "mdbDropdownToggle", ""], [1, "dropdown-menu", "dropdown-menu-right", "dropdown-primary"], ["href", "/home", 1, "dropdown-item", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-navbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-navbar-brand");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pollur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Create Poll");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_ul_15_Template, 7, 0, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_ul_16_Template, 4, 1, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_ul_17_Template, 8, 0, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("containerInside", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.userAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.userAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.userAuthenticated);
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["LogoComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["LinksComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["WavesDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["BsDropdownDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["FasDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["BsDropdownToggleDirective"]],
      styles: [".navbar {\n  min-height: 80px;\n}\n\n  .navbar-brand {\n  font-size: 1.75rem;\n}\n\n  .btn-p:first-child {\n  color: white;\n}\n\n.navbar-text[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-left: 5px;\n}\n\n#nav-user-circle[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm5hdmJhciB7XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG59XG5cbjo6bmctZGVlcCAubmF2YmFyLWJyYW5kIHtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuXG46Om5nLWRlZXAgLmJ0bi1wOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubmF2YmFyLXRleHQge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbiNuYXYtdXNlci1jaXJjbGUge1xuICBmb250LXNpemU6IDI1cHg7XG59XG4iXX0= */", "main[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background-color: #dae0e6;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mr-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.ml-auto[_ngcontent-%COMP%] {\n  margin-left:auto;\n}\n\n.d-block[_ngcontent-%COMP%] {\n  display:block;\n}\n\n.float-left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.flex-space-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n\n\np[_ngcontent-%COMP%] {\n  font-family: \"Robot\",sans-serif;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.text-blue[_ngcontent-%COMP%] {\n  color: rgb(0,123,255);\n}\n\n.text-large[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n.mat-card-body-full[_ngcontent-%COMP%] {\n  height: 1000px;\n  padding-top: 10rem;\n}\n\n.p-large[_ngcontent-%COMP%]{\n  font-size: 1.25rem;\n}\n\n\n\n.btn-p[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  border-style: none;\n  color: white;\n}\n\n.primary-blue[_ngcontent-%COMP%] {\n  background-color: rgb(0,123,255);\n}\n\n.primary-green[_ngcontent-%COMP%] {\n  background-color: #03e875;\n}\n\n.primary-blue[_ngcontent-%COMP%]:hover{\n  background-color: #0476f0;\n}\n\n.primary-green[_ngcontent-%COMP%]:hover{\n  background-color: #02c463;\n}\n\n#content-container[_ngcontent-%COMP%] {\n  width: 40%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 95px;\n}\n\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBR0EsaURBQWlEOztBQUNqRDtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLGlFQUFpRTs7QUFHakU7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU2O1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubXItMCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5tbC1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6YXV0bztcbn1cbi5kLWJsb2NrIHtcbiAgZGlzcGxheTpibG9jaztcbn1cblxuLmZsb2F0LWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmZsb2F0LXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZmxleC1zcGFjZS1iZXR3ZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5cbi8qPC0tLS0tLS0tLS0tLS1URVhUIFNUWUxFUy0tLS0tLS0tLS0tLS0tLS0tLS0tPiovXG5wIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RcIixzYW5zLXNlcmlmO1xufVxuXG4udGV4dC1ncmF5IHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi50ZXh0LWJsdWUge1xuICBjb2xvcjogcmdiKDAsMTIzLDI1NSk7XG59XG5cbi50ZXh0LWxhcmdlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LWNhcmQtYm9keS1mdWxsIHtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcbn1cblxuLnAtbGFyZ2V7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tRU5EIFRFWFQgU1RZTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuLmJ0bi1wIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcmltYXJ5LWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwxMjMsMjU1KTtcbn1cblxuLnByaW1hcnktZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNlODc1O1xufVxuXG4ucHJpbWFyeS1ibHVlOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ3NmYwO1xufVxuXG4ucHJpbWFyeS1ncmVlbjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyYzQ2Mztcbn1cblxuXG4jY29udGVudC1jb250YWluZXIge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogOTVweDtcbn1cblxuLmZsZXgtd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css', '../app.component.css']
        }]
      }], function () {
        return [{
          type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _shared_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/auth */
    "./src/app/models/auth.ts");
    /* harmony import */


    var _shared_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/modal.service */
    "./src/app/shared/modal.service.ts");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/login/login.service.ts");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var _shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/user.service */
    "./src/app/shared/user.service.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["loginModal"];

    function LoginComponent_h2_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log in");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_h2_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sign up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New to Pollur? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_24_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.toggleModalType();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_24_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.login();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Log in");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Already have an account? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_25_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.toggleModalType();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log in");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_25_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.signUp();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(modalService, loginService, authService, userService) {
        _classCallCheck(this, LoginComponent);

        this.modalService = modalService;
        this.loginService = loginService;
        this.authService = authService;
        this.userService = userService;
        this.isLogin = true;
        this.authData = new _models_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"]();
      }

      _createClass(LoginComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.modalService.register(LoginComponent.modalId, this);
        }
      }, {
        key: "login",
        value: function login() {
          var _this3 = this;

          this.loginService.login(this.authData.username, this.authData.password).subscribe(function (token) {
            _this3.authService.setAuthToken(token);

            _this3.modalDirective.hide();
          }, function () {
            _this3.errorMsg = 'Username or Password was incorrect';
          });
        }
      }, {
        key: "signUp",
        value: function signUp() {
          var _this4 = this;

          this.userService.createUser(this.authData).subscribe(function (res) {
            _this4.login();
          }, function (error) {
            if (error.status === 409) {
              _this4.errorMsg = 'Account with this Username already exists';
            }
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          if (this.isLogin) {
            this.login();
          } else {
            this.signUp();
          }
        } // toggle modal from log in <-> sign up

      }, {
        key: "toggleModalType",
        value: function toggleModalType() {
          this.isLogin = !this.isLogin;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.modalId = 'loginModal';

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login-modal"]],
      viewQuery: function LoginComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalDirective = _t.first);
        }
      },
      decls: 26,
      vars: 7,
      consts: [["mdbModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myBasicModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["loginModal", "mdbModal"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "flex-wrap"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], ["class", "modal-title", 4, "ngIf"], [1, "modal-body"], [1, "text-danger"], [1, "md-form", "form-group"], ["mdbInput", "", "type", "text", "name", "username", "id", "formGroupExampleInputMD", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "formGroupExampleInputMD"], ["mdbInput", "", "type", "password", "name", "password", "id", "formGroupExampleInput2MD", 1, "form-control", 3, "ngModel", "keyup.enter", "ngModelChange"], ["for", "formGroupExampleInput2MD"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-title"], [1, "modal-footer"], [1, "text-primary", "font-weight-bold", 3, "click"], ["type", "button", "mdbBtn", "", "color", "primary", "aria-label", "Log in", "mdbWavesEffect", "", 1, "waves-light", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_h2_8_Template, 2, 0, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_h2_9_Template, 2, 0, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "This site is for demonstration purposes only. Do not enter sensitive information.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.authData.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function LoginComponent_Template_input_keyup_enter_21_listener() {
            return ctx.submit();
          })("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.authData.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LoginComponent_div_24_Template, 7, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LoginComponent_div_25_Template, 7, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.authData.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.authData.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogin);
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["ModalDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesDirective"]],
      styles: [".modal-footer[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtZm9vdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIl19 */", "main[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background-color: #dae0e6;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mr-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.ml-auto[_ngcontent-%COMP%] {\n  margin-left:auto;\n}\n\n.d-block[_ngcontent-%COMP%] {\n  display:block;\n}\n\n.float-left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.flex-space-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n\n\np[_ngcontent-%COMP%] {\n  font-family: \"Robot\",sans-serif;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.text-blue[_ngcontent-%COMP%] {\n  color: rgb(0,123,255);\n}\n\n.text-large[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n.mat-card-body-full[_ngcontent-%COMP%] {\n  height: 1000px;\n  padding-top: 10rem;\n}\n\n.p-large[_ngcontent-%COMP%]{\n  font-size: 1.25rem;\n}\n\n\n\n.btn-p[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  border-style: none;\n  color: white;\n}\n\n.primary-blue[_ngcontent-%COMP%] {\n  background-color: rgb(0,123,255);\n}\n\n.primary-green[_ngcontent-%COMP%] {\n  background-color: #03e875;\n}\n\n.primary-blue[_ngcontent-%COMP%]:hover{\n  background-color: #0476f0;\n}\n\n.primary-green[_ngcontent-%COMP%]:hover{\n  background-color: #02c463;\n}\n\n#content-container[_ngcontent-%COMP%] {\n  width: 40%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 95px;\n}\n\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBR0EsaURBQWlEOztBQUNqRDtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLGlFQUFpRTs7QUFHakU7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU2O1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubXItMCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5tbC1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6YXV0bztcbn1cbi5kLWJsb2NrIHtcbiAgZGlzcGxheTpibG9jaztcbn1cblxuLmZsb2F0LWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmZsb2F0LXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZmxleC1zcGFjZS1iZXR3ZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5cbi8qPC0tLS0tLS0tLS0tLS1URVhUIFNUWUxFUy0tLS0tLS0tLS0tLS0tLS0tLS0tPiovXG5wIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RcIixzYW5zLXNlcmlmO1xufVxuXG4udGV4dC1ncmF5IHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi50ZXh0LWJsdWUge1xuICBjb2xvcjogcmdiKDAsMTIzLDI1NSk7XG59XG5cbi50ZXh0LWxhcmdlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LWNhcmQtYm9keS1mdWxsIHtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcbn1cblxuLnAtbGFyZ2V7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tRU5EIFRFWFQgU1RZTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuLmJ0bi1wIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcmltYXJ5LWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwxMjMsMjU1KTtcbn1cblxuLnByaW1hcnktZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNlODc1O1xufVxuXG4ucHJpbWFyeS1ibHVlOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ3NmYwO1xufVxuXG4ucHJpbWFyeS1ncmVlbjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyYzQ2Mztcbn1cblxuXG4jY29udGVudC1jb250YWluZXIge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogOTVweDtcbn1cblxuLmZsZXgtd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login-modal',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css', '../app.component.css']
        }]
      }], function () {
        return [{
          type: _shared_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]
        }, {
          type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }];
      }, {
        modalDirective: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['loginModal']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/login/login.service.ts":
  /*!****************************************!*\
    !*** ./src/app/login/login.service.ts ***!
    \****************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppLoginLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
      }

      _createClass(LoginService, [{
        key: "login",
        value: function login(username, password) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
              Authorization: 'Basic ' + btoa(username + ':' + password)
            }),
            responseType: 'text'
          };
          return this.http.post('/api/login', {}, httpOptions);
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-module.ts":
  /*!************************************!*\
    !*** ./src/app/material-module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    var MaterialModule = /*#__PURE__*/_createClass(function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    });

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/auth.ts":
  /*!********************************!*\
    !*** ./src/app/models/auth.ts ***!
    \********************************/

  /*! exports provided: Auth */

  /***/
  function srcAppModelsAuthTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Auth", function () {
      return Auth;
    });

    var Auth = /*#__PURE__*/_createClass(function Auth() {
      _classCallCheck(this, Auth);

      this.username = '';
      this.password = '';
    });
    /***/

  },

  /***/
  "./src/app/models/poll-vote.ts":
  /*!*************************************!*\
    !*** ./src/app/models/poll-vote.ts ***!
    \*************************************/

  /*! exports provided: PollVote */

  /***/
  function srcAppModelsPollVoteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PollVote", function () {
      return PollVote;
    });

    var PollVote = /*#__PURE__*/function () {
      function PollVote() {
        _classCallCheck(this, PollVote);
      }

      _createClass(PollVote, [{
        key: "reset",
        value: function reset() {
          this.id = null;
          this.optionIndex = -1;
        }
      }, {
        key: "deserialize",
        value: function deserialize(input) {
          return Object.assign(this, input);
        }
      }], [{
        key: "copy",
        value: function copy(pollVote) {
          var newPollVote = new PollVote();
          newPollVote.id = pollVote.id;
          newPollVote.pollId = pollVote.pollId;
          newPollVote.optionIndex = pollVote.optionIndex;
          return newPollVote;
        }
      }]);

      return PollVote;
    }();
    /***/

  },

  /***/
  "./src/app/models/poll.ts":
  /*!********************************!*\
    !*** ./src/app/models/poll.ts ***!
    \********************************/

  /*! exports provided: Poll */

  /***/
  function srcAppModelsPollTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Poll", function () {
      return Poll;
    });
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _poll_vote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./poll-vote */
    "./src/app/models/poll-vote.ts");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user */
    "./src/app/models/user.ts");

    var Poll = /*#__PURE__*/function () {
      function Poll() {
        _classCallCheck(this, Poll);

        this.optionValues = [];
        this.optionVotes = [];
        this.type = _constants__WEBPACK_IMPORTED_MODULE_0__["RADIO"];
      }

      _createClass(Poll, [{
        key: "deserialize",
        value: function deserialize(input) {
          Object.assign(this, input);
          this.userPollVote = new _poll_vote__WEBPACK_IMPORTED_MODULE_1__["PollVote"]().deserialize(input.userPollVote);
          this.author = new _user__WEBPACK_IMPORTED_MODULE_2__["User"]().deserialize(input.author);
          return this;
        }
      }]);

      return Poll;
    }();
    /***/

  },

  /***/
  "./src/app/models/user.ts":
  /*!********************************!*\
    !*** ./src/app/models/user.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = /*#__PURE__*/function () {
      function User() {
        _classCallCheck(this, User);
      }

      _createClass(User, [{
        key: "deserialize",
        value: function deserialize(input) {
          return Object.assign(this, input);
        }
      }]);

      return User;
    }();
    /***/

  },

  /***/
  "./src/app/poll/poll-card/poll-card.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/poll/poll-card/poll-card.component.ts ***!
    \*******************************************************/

  /*! exports provided: PollCardComponent */

  /***/
  function srcAppPollPollCardPollCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PollCardComponent", function () {
      return PollCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _poll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../poll.service */
    "./src/app/poll/poll.service.ts");
    /* harmony import */


    var _models_poll_vote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/poll-vote */
    "./src/app/models/poll-vote.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/modal.service */
    "./src/app/shared/modal.service.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function PollCardComponent_div_11_mat_radio_button_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r4 = ctx_r7.index;
        var option_r3 = ctx_r7.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r3);
      }
    }

    function PollCardComponent_div_11_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r6.votePct[i_r4]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.poll.optionValues[i_r4]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.votePct[i_r4] + "% (" + ctx_r6.poll.optionVotes[i_r4] + ")");
      }
    }

    function PollCardComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PollCardComponent_div_11_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var i_r4 = ctx.index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.onOptionSelected(i_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PollCardComponent_div_11_mat_radio_button_2_Template, 2, 2, "mat-radio-button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PollCardComponent_div_11_div_3_Template, 6, 3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.poll.userPollVote.optionIndex === 0 - 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.poll.userPollVote.optionIndex !== 0 - 1);
      }
    }

    function PollCardComponent_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PollCardComponent_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.onVote();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vote");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PollCardComponent_button_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PollCardComponent_button_14_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.removeVote();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Revote");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PollCardComponent = /*#__PURE__*/function () {
      function PollCardComponent(pollService, routes, modalService) {
        _classCallCheck(this, PollCardComponent);

        this.pollService = pollService;
        this.routes = routes;
        this.modalService = modalService;
        this.votePct = [];
      }

      _createClass(PollCardComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.userVote = _models_poll_vote__WEBPACK_IMPORTED_MODULE_2__["PollVote"].copy(this.poll.userPollVote);
          this.userVote.pollId = this.poll.id;
          this.setVotePercentages();
        }
      }, {
        key: "setVotePercentages",
        value: function setVotePercentages() {
          var totalVotes = 0;
          this.poll.optionVotes.forEach(function (vote) {
            totalVotes += vote;
          });
          this.votePct = this.poll.optionVotes.map(function (vote) {
            return Math.round(vote / totalVotes * 100);
          });
        }
      }, {
        key: "onOptionSelected",
        value: function onOptionSelected(i) {
          this.userVote.optionIndex = i;
        }
      }, {
        key: "onVote",
        value: function onVote() {
          var _this5 = this;

          this.pollService.voteOnPoll(this.userVote).subscribe(function (pollVote) {
            _this5.poll.userPollVote = _models_poll_vote__WEBPACK_IMPORTED_MODULE_2__["PollVote"].copy(pollVote);
            _this5.userVote = _models_poll_vote__WEBPACK_IMPORTED_MODULE_2__["PollVote"].copy(pollVote);
            _this5.poll.optionVotes[_this5.poll.userPollVote.optionIndex]++;

            _this5.setVotePercentages();
          }, function (error) {
            if (error.status === 401) {
              _this5.modalService.open(_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"].modalId);
            }
          });
        }
      }, {
        key: "removeVote",
        value: function removeVote() {
          var _this6 = this;

          this.pollService.removeVoteOnPoll(this.poll.userPollVote).subscribe(function (res) {
            _this6.poll.optionVotes[_this6.poll.userPollVote.optionIndex]--;

            _this6.setVotePercentages();

            _this6.poll.userPollVote.reset();

            _this6.userVote.reset();
          });
        }
      }, {
        key: "trackByFn",
        value: function trackByFn(index, item) {
          return item.value;
        }
      }, {
        key: "noClick",
        value: function noClick(e) {
          e.preventDefault();
        }
      }]);

      return PollCardComponent;
    }();

    PollCardComponent.ɵfac = function PollCardComponent_Factory(t) {
      return new (t || PollCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_poll_service__WEBPACK_IMPORTED_MODULE_1__["PollService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]));
    };

    PollCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PollCardComponent,
      selectors: [["app-poll-card"]],
      inputs: {
        poll: "poll"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_poll_service__WEBPACK_IMPORTED_MODULE_1__["PollService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 15,
      vars: 7,
      consts: [["id", "poll-card"], ["id", "poll-card-title"], [1, "h2"], [1, "d-inline"], [1, "text-primary", "d-inline"], [3, "ngModel", "ngModelChange"], ["class", "rounded poll-option p-2", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "poll-card-footer"], ["class", "rounded-lg ml-0", "type", "button", "mdbBtn", "", "color", "primary", "mdbWavesEffect", "", 3, "click", 4, "ngIf"], ["class", "rounded-lg ml-0", "type", "button", "mdbBtn", "", "color", "primary", "outline", "true", "mdbWavesEffect", "", 3, "click", 4, "ngIf"], [1, "rounded", "poll-option", "p-2", 3, "click"], ["color", "primary", 3, "value", 4, "ngIf"], [4, "ngIf"], ["color", "primary", 3, "value"], ["color", "accent", 1, "mb-0", "rounded", 3, "value"], [1, "pct-option"], [1, "vote-pct-bar"], ["type", "button", "mdbBtn", "", "color", "primary", "mdbWavesEffect", "", 1, "rounded-lg", "ml-0", 3, "click"], ["type", "button", "mdbBtn", "", "color", "primary", "outline", "true", "mdbWavesEffect", "", 1, "rounded-lg", "ml-0", 3, "click"]],
      template: function PollCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card-body", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mdb-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-radio-group", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PollCardComponent_Template_mat_radio_group_ngModelChange_10_listener($event) {
            return ctx.userVote.optionIndex = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PollCardComponent_div_11_Template, 4, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PollCardComponent_button_13_Template, 2, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PollCardComponent_button_14_Template, 2, 0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.poll.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("u/", ctx.poll.author.username, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userVote.optionIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.poll.optionValues)("ngForTrackBy", ctx.trackByFn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.poll.userPollVote.optionIndex === 0 - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.poll.userPollVote.optionIndex !== 0 - 1);
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardBodyComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardTitleComponent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesDirective"]],
      styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n#poll-card-title[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-left: 0.5rem;\n}\n\nmat-progress-bar[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\n#poll-card[_ngcontent-%COMP%] {\n  background-color: rgb(250,250,250);\n}\n\n.option-unselected[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 0 2px 5px 0 rgba(0,0,12,.16), 0 2px 10px 0 rgba(0,0,16,.12);\n\n}\n\n.poll-option[_ngcontent-%COMP%]:hover {\n}\n\n.option-selected[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 1px;\n  border-color:rgb(0,123,255);\n  box-shadow: 0 2px 5px 0 rgba(0,123,255,.16), 0 2px 10px 0 rgba(0,123,255,.12);\n\n}\n\n  .mat-progress-bar-buffer {\n  background-color: #ffb8a4;\n\n}\n\n  .mat-progress-bar-fill:after {\n  background-color: #ff2200;\n}\n\n#poll-card-footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-left: 0.5rem;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.pct-option[_ngcontent-%COMP%] {\n  position: relative;\n  top: -20px;\n  float:left;\n  margin-left: 3px;\n  margin-bottom: 0px;\n}\n\n.vote-pct-bar[_ngcontent-%COMP%] {\n  position: relative;\n  top: -20px;\n  float:right;\n  margin-right: 3px;\n  margin-bottom: 0;\n}\n\n  .single-poll-option .mat-radio-label {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9sbC9wb2xsLWNhcmQvcG9sbC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVFQUF1RTs7QUFFekU7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLDZFQUE2RTs7QUFFL0U7O0FBQ0E7RUFDRSx5QkFBeUI7O0FBRTNCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wb2xsL3BvbGwtY2FyZC9wb2xsLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNwb2xsLWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xufVxuXG5tYXQtcHJvZ3Jlc3MtYmFyIHtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4jcG9sbC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwyNTAsMjUwKTtcbn1cblxuLm9wdGlvbi11bnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwwLDEyLC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsMCwxNiwuMTIpO1xuXG59XG5cbi5wb2xsLW9wdGlvbjpob3ZlciB7XG59XG5cbi5vcHRpb24tc2VsZWN0ZWQge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOnJnYigwLDEyMywyNTUpO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsMTIzLDI1NSwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDEyMywyNTUsLjEyKTtcblxufVxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI4YTQ7XG5cbn1cbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1maWxsOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMjIwMDtcbn1cblxuI3BvbGwtY2FyZC1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4ucGN0LW9wdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbiAgZmxvYXQ6bGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4udm90ZS1wY3QtYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBmbG9hdDpyaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbjo6bmctZGVlcCAuc2luZ2xlLXBvbGwtb3B0aW9uIC5tYXQtcmFkaW8tbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5cbiJdfQ== */", "main[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background-color: #dae0e6;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mr-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.ml-auto[_ngcontent-%COMP%] {\n  margin-left:auto;\n}\n\n.d-block[_ngcontent-%COMP%] {\n  display:block;\n}\n\n.float-left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.flex-space-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n\n\np[_ngcontent-%COMP%] {\n  font-family: \"Robot\",sans-serif;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.text-blue[_ngcontent-%COMP%] {\n  color: rgb(0,123,255);\n}\n\n.text-large[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n.mat-card-body-full[_ngcontent-%COMP%] {\n  height: 1000px;\n  padding-top: 10rem;\n}\n\n.p-large[_ngcontent-%COMP%]{\n  font-size: 1.25rem;\n}\n\n\n\n.btn-p[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  border-style: none;\n  color: white;\n}\n\n.primary-blue[_ngcontent-%COMP%] {\n  background-color: rgb(0,123,255);\n}\n\n.primary-green[_ngcontent-%COMP%] {\n  background-color: #03e875;\n}\n\n.primary-blue[_ngcontent-%COMP%]:hover{\n  background-color: #0476f0;\n}\n\n.primary-green[_ngcontent-%COMP%]:hover{\n  background-color: #02c463;\n}\n\n#content-container[_ngcontent-%COMP%] {\n  width: 40%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 95px;\n}\n\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBR0EsaURBQWlEOztBQUNqRDtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLGlFQUFpRTs7QUFHakU7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU2O1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubXItMCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5tbC1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6YXV0bztcbn1cbi5kLWJsb2NrIHtcbiAgZGlzcGxheTpibG9jaztcbn1cblxuLmZsb2F0LWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmZsb2F0LXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZmxleC1zcGFjZS1iZXR3ZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5cbi8qPC0tLS0tLS0tLS0tLS1URVhUIFNUWUxFUy0tLS0tLS0tLS0tLS0tLS0tLS0tPiovXG5wIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RcIixzYW5zLXNlcmlmO1xufVxuXG4udGV4dC1ncmF5IHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi50ZXh0LWJsdWUge1xuICBjb2xvcjogcmdiKDAsMTIzLDI1NSk7XG59XG5cbi50ZXh0LWxhcmdlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LWNhcmQtYm9keS1mdWxsIHtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcbn1cblxuLnAtbGFyZ2V7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tRU5EIFRFWFQgU1RZTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuLmJ0bi1wIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcmltYXJ5LWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwxMjMsMjU1KTtcbn1cblxuLnByaW1hcnktZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNlODc1O1xufVxuXG4ucHJpbWFyeS1ibHVlOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ3NmYwO1xufVxuXG4ucHJpbWFyeS1ncmVlbjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyYzQ2Mztcbn1cblxuXG4jY29udGVudC1jb250YWluZXIge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogOTVweDtcbn1cblxuLmZsZXgtd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PollCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-poll-card',
          templateUrl: './poll-card.component.html',
          styleUrls: ['./poll-card.component.css', '../../app.component.css'],
          providers: [_poll_service__WEBPACK_IMPORTED_MODULE_1__["PollService"]]
        }]
      }], function () {
        return [{
          type: _poll_service__WEBPACK_IMPORTED_MODULE_1__["PollService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _shared_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]
        }];
      }, {
        poll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/poll/poll-container/poll-container.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/poll/poll-container/poll-container.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PollContainerComponent */

  /***/
  function srcAppPollPollContainerPollContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PollContainerComponent", function () {
      return PollContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _poll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../poll.service */
    "./src/app/poll/poll.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _poll_card_poll_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../poll-card/poll-card.component */
    "./src/app/poll/poll-card/poll-card.component.ts");

    var PollContainerComponent = /*#__PURE__*/function () {
      function PollContainerComponent(routes, pollService) {
        _classCallCheck(this, PollContainerComponent);

        this.routes = routes;
        this.pollService = pollService;
      }

      _createClass(PollContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.routes.paramMap.subscribe(function (params) {
            var pollId = params.get('pollId');

            _this7.pollService.getPoll(pollId).subscribe(function (poll) {
              _this7.poll = poll;
            });
          });
        }
      }]);

      return PollContainerComponent;
    }();

    PollContainerComponent.ɵfac = function PollContainerComponent_Factory(t) {
      return new (t || PollContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_poll_service__WEBPACK_IMPORTED_MODULE_1__["PollService"]));
    };

    PollContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PollContainerComponent,
      selectors: [["app-poll-container"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_poll_service__WEBPACK_IMPORTED_MODULE_1__["PollService"]])],
      decls: 2,
      vars: 1,
      consts: [[3, "poll"]],
      template: function PollContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-poll-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("poll", ctx.poll);
        }
      },
      directives: [_poll_card_poll_card_component__WEBPACK_IMPORTED_MODULE_3__["PollCardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvbGwvcG9sbC1jb250YWluZXIvcG9sbC1jb250YWluZXIuY29tcG9uZW50LmNzcyJ9 */", "main[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background-color: #dae0e6;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mr-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.ml-auto[_ngcontent-%COMP%] {\n  margin-left:auto;\n}\n\n.d-block[_ngcontent-%COMP%] {\n  display:block;\n}\n\n.float-left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.flex-space-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n\n\np[_ngcontent-%COMP%] {\n  font-family: \"Robot\",sans-serif;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.text-blue[_ngcontent-%COMP%] {\n  color: rgb(0,123,255);\n}\n\n.text-large[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n.mat-card-body-full[_ngcontent-%COMP%] {\n  height: 1000px;\n  padding-top: 10rem;\n}\n\n.p-large[_ngcontent-%COMP%]{\n  font-size: 1.25rem;\n}\n\n\n\n.btn-p[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  border-style: none;\n  color: white;\n}\n\n.primary-blue[_ngcontent-%COMP%] {\n  background-color: rgb(0,123,255);\n}\n\n.primary-green[_ngcontent-%COMP%] {\n  background-color: #03e875;\n}\n\n.primary-blue[_ngcontent-%COMP%]:hover{\n  background-color: #0476f0;\n}\n\n.primary-green[_ngcontent-%COMP%]:hover{\n  background-color: #02c463;\n}\n\n#content-container[_ngcontent-%COMP%] {\n  width: 40%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 95px;\n}\n\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBR0EsaURBQWlEOztBQUNqRDtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLGlFQUFpRTs7QUFHakU7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU2O1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubXItMCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5tbC1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6YXV0bztcbn1cbi5kLWJsb2NrIHtcbiAgZGlzcGxheTpibG9jaztcbn1cblxuLmZsb2F0LWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmZsb2F0LXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZmxleC1zcGFjZS1iZXR3ZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5cbi8qPC0tLS0tLS0tLS0tLS1URVhUIFNUWUxFUy0tLS0tLS0tLS0tLS0tLS0tLS0tPiovXG5wIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RcIixzYW5zLXNlcmlmO1xufVxuXG4udGV4dC1ncmF5IHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi50ZXh0LWJsdWUge1xuICBjb2xvcjogcmdiKDAsMTIzLDI1NSk7XG59XG5cbi50ZXh0LWxhcmdlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LWNhcmQtYm9keS1mdWxsIHtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcbn1cblxuLnAtbGFyZ2V7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tRU5EIFRFWFQgU1RZTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuLmJ0bi1wIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcmltYXJ5LWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwxMjMsMjU1KTtcbn1cblxuLnByaW1hcnktZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNlODc1O1xufVxuXG4ucHJpbWFyeS1ibHVlOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ3NmYwO1xufVxuXG4ucHJpbWFyeS1ncmVlbjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyYzQ2Mztcbn1cblxuXG4jY29udGVudC1jb250YWluZXIge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogOTVweDtcbn1cblxuLmZsZXgtd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PollContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-poll-container',
          templateUrl: './poll-container.component.html',
          styleUrls: ['./poll-container.component.css', '../../app.component.css'],
          providers: [_poll_service__WEBPACK_IMPORTED_MODULE_1__["PollService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _poll_service__WEBPACK_IMPORTED_MODULE_1__["PollService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/poll/poll-creator/poll-creator.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/poll/poll-creator/poll-creator.component.ts ***!
    \*************************************************************/

  /*! exports provided: PollCreatorComponent */

  /***/
  function srcAppPollPollCreatorPollCreatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PollCreatorComponent", function () {
      return PollCreatorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_poll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/poll */
    "./src/app/models/poll.ts");
    /* harmony import */


    var _poll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../poll.service */
    "./src/app/poll/poll.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PollCreatorComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Poll Option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PollCreatorComponent_div_8_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.poll.optionValues[i_r2] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "Option " + (i_r2 + 1))("placeholder", "Eg. Option " + (i_r2 + 1))("ngModel", ctx_r0.poll.optionValues[i_r2]);
      }
    }

    var PollCreatorComponent = /*#__PURE__*/function () {
      function PollCreatorComponent(pollService) {
        _classCallCheck(this, PollCreatorComponent);

        this.pollService = pollService;
        this.poll = null;
        this.poll = new _models_poll__WEBPACK_IMPORTED_MODULE_1__["Poll"]();
      }

      _createClass(PollCreatorComponent, [{
        key: "onAddOption",
        value: function onAddOption() {
          this.poll.optionValues.push('');
          this.poll.optionVotes.push(0);
        }
      }, {
        key: "onSavePoll",
        value: function onSavePoll() {
          this.pollService.savePoll(this.poll).subscribe(function (poll) {
            return console.log(poll);
          });
        }
      }, {
        key: "trackByFn",
        value: function trackByFn(index, item) {
          return item.name;
        }
      }]);

      return PollCreatorComponent;
    }();

    PollCreatorComponent.ɵfac = function PollCreatorComponent_Factory(t) {
      return new (t || PollCreatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_poll_service__WEBPACK_IMPORTED_MODULE_2__["PollService"]));
    };

    PollCreatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PollCreatorComponent,
      selectors: [["app-poll-creator"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_poll_service__WEBPACK_IMPORTED_MODULE_2__["PollService"]])],
      decls: 13,
      vars: 3,
      consts: [[1, "h1"], ["id", "titleSub", 1, "h5"], [1, "md-form"], [1, "font-weight-bold", "mb-1", "text-gray"], ["id", "form7", "placeholder", "Ex. Who is your favorite character?", "rows", "3", 1, "md-textarea", "form-control", "border-blue", "rounded", "p-0", "pl-2", "pt-2", "p-large", 3, "ngModel", "ngModelChange"], ["class", "full-width md-form", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "btn-lg", "btn-p", "primary-blue", "mr-4", 3, "click"], [1, "btn-lg", "btn-p", "primary-green", "mr-2", 3, "click"], [1, "full-width", "md-form"], [1, "font-weight-bold", "text-gray", "mb-1"], ["type", "text", 1, "form-control", "border-blue", "rounded", "pl-2", "form-control-lg", "p-large", 3, "id", "placeholder", "ngModel", "ngModelChange"]],
      template: function PollCreatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create a poll");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enter the fields below to create your poll");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Poll Question");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PollCreatorComponent_Template_textarea_ngModelChange_7_listener($event) {
            return ctx.poll.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PollCreatorComponent_div_8_Template, 4, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PollCreatorComponent_Template_button_click_9_listener() {
            return ctx.onAddOption();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add Option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PollCreatorComponent_Template_button_click_11_listener() {
            return ctx.onSavePoll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Create Poll");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.poll.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.poll.optionValues)("ngForTrackBy", ctx.trackByFn);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["#titleSub[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n\n\n.border-blue[_ngcontent-%COMP%] {\n  border-style: solid !important;\n  border-width: 1px !important;\n  border-color:rgb(0,123,255) !important;\n  box-shadow: 0 2px 5px 0 rgba(0,123,255,.16), 0 2px 10px 0 rgba(0,123,255,.12) !important;\n  background-color: white !important;\n}\n\n\n\n.input-text[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9sbC9wb2xsLWNyZWF0b3IvcG9sbC1jcmVhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7Ozs7QUFJQTtFQUNFLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsc0NBQXNDO0VBQ3RDLHdGQUF3RjtFQUN4RixrQ0FBa0M7QUFDcEM7Ozs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BvbGwvcG9sbC1jcmVhdG9yL3BvbGwtY3JlYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RpdGxlU3ViIHtcbiAgY29sb3I6IGdyZXk7XG59XG5cblxuXG4uYm9yZGVyLWJsdWUge1xuICBib3JkZXItc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjpyZ2IoMCwxMjMsMjU1KSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsMTIzLDI1NSwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDEyMywyNTUsLjEyKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cbiJdfQ== */", "main[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background-color: #dae0e6;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mr-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.ml-auto[_ngcontent-%COMP%] {\n  margin-left:auto;\n}\n\n.d-block[_ngcontent-%COMP%] {\n  display:block;\n}\n\n.float-left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.flex-space-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n\n\np[_ngcontent-%COMP%] {\n  font-family: \"Robot\",sans-serif;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.text-blue[_ngcontent-%COMP%] {\n  color: rgb(0,123,255);\n}\n\n.text-large[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n.mat-card-body-full[_ngcontent-%COMP%] {\n  height: 1000px;\n  padding-top: 10rem;\n}\n\n.p-large[_ngcontent-%COMP%]{\n  font-size: 1.25rem;\n}\n\n\n\n.btn-p[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  border-style: none;\n  color: white;\n}\n\n.primary-blue[_ngcontent-%COMP%] {\n  background-color: rgb(0,123,255);\n}\n\n.primary-green[_ngcontent-%COMP%] {\n  background-color: #03e875;\n}\n\n.primary-blue[_ngcontent-%COMP%]:hover{\n  background-color: #0476f0;\n}\n\n.primary-green[_ngcontent-%COMP%]:hover{\n  background-color: #02c463;\n}\n\n#content-container[_ngcontent-%COMP%] {\n  width: 40%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 95px;\n}\n\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBR0EsaURBQWlEOztBQUNqRDtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLGlFQUFpRTs7QUFHakU7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU2O1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubXItMCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5tbC1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6YXV0bztcbn1cbi5kLWJsb2NrIHtcbiAgZGlzcGxheTpibG9jaztcbn1cblxuLmZsb2F0LWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmZsb2F0LXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZmxleC1zcGFjZS1iZXR3ZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5cbi8qPC0tLS0tLS0tLS0tLS1URVhUIFNUWUxFUy0tLS0tLS0tLS0tLS0tLS0tLS0tPiovXG5wIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RcIixzYW5zLXNlcmlmO1xufVxuXG4udGV4dC1ncmF5IHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi50ZXh0LWJsdWUge1xuICBjb2xvcjogcmdiKDAsMTIzLDI1NSk7XG59XG5cbi50ZXh0LWxhcmdlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LWNhcmQtYm9keS1mdWxsIHtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcbn1cblxuLnAtbGFyZ2V7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tRU5EIFRFWFQgU1RZTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuLmJ0bi1wIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcmltYXJ5LWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwxMjMsMjU1KTtcbn1cblxuLnByaW1hcnktZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNlODc1O1xufVxuXG4ucHJpbWFyeS1ibHVlOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ3NmYwO1xufVxuXG4ucHJpbWFyeS1ncmVlbjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyYzQ2Mztcbn1cblxuXG4jY29udGVudC1jb250YWluZXIge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogOTVweDtcbn1cblxuLmZsZXgtd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PollCreatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-poll-creator',
          templateUrl: './poll-creator.component.html',
          styleUrls: ['./poll-creator.component.css', '../../app.component.css'],
          providers: [_poll_service__WEBPACK_IMPORTED_MODULE_2__["PollService"]]
        }]
      }], function () {
        return [{
          type: _poll_service__WEBPACK_IMPORTED_MODULE_2__["PollService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/poll/poll-list/poll-list.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/poll/poll-list/poll-list.component.ts ***!
    \*******************************************************/

  /*! exports provided: PollListComponent */

  /***/
  function srcAppPollPollListPollListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PollListComponent", function () {
      return PollListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _poll_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../poll.service */
    "./src/app/poll/poll.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _poll_card_poll_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../poll-card/poll-card.component */
    "./src/app/poll/poll-card/poll-card.component.ts");

    function PollListComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-poll-card", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var poll_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("poll", poll_r1);
      }
    }

    var PollListComponent = /*#__PURE__*/_createClass(function PollListComponent(pollService) {
      var _this8 = this;

      _classCallCheck(this, PollListComponent);

      this.pollService = pollService;
      this.pollList = [];
      this.pollService.getPollsByPage(1).subscribe(function (pollList) {
        _this8.pollList = pollList;
      });
    });

    PollListComponent.ɵfac = function PollListComponent_Factory(t) {
      return new (t || PollListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_poll_service__WEBPACK_IMPORTED_MODULE_1__["PollService"]));
    };

    PollListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PollListComponent,
      selectors: [["app-poll-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_poll_service__WEBPACK_IMPORTED_MODULE_1__["PollService"]])],
      decls: 1,
      vars: 1,
      consts: [["id", "poll-list-container", 4, "ngFor", "ngForOf"], ["id", "poll-list-container"], [3, "poll"]],
      template: function PollListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PollListComponent_div_0_Template, 2, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pollList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _poll_card_poll_card_component__WEBPACK_IMPORTED_MODULE_3__["PollCardComponent"]],
      styles: ["#poll-list-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 15px;\n  width:100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9sbC9wb2xsLWxpc3QvcG9sbC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BvbGwvcG9sbC1saXN0L3BvbGwtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BvbGwtbGlzdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICB3aWR0aDoxMDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuIl19 */", "main[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background-color: #dae0e6;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mr-0[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.ml-auto[_ngcontent-%COMP%] {\n  margin-left:auto;\n}\n\n.d-block[_ngcontent-%COMP%] {\n  display:block;\n}\n\n.float-left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.flex-space-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n\n\np[_ngcontent-%COMP%] {\n  font-family: \"Robot\",sans-serif;\n}\n\n.text-gray[_ngcontent-%COMP%] {\n  color: gray;\n}\n\n.text-blue[_ngcontent-%COMP%] {\n  color: rgb(0,123,255);\n}\n\n.text-large[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n.mat-card-body-full[_ngcontent-%COMP%] {\n  height: 1000px;\n  padding-top: 10rem;\n}\n\n.p-large[_ngcontent-%COMP%]{\n  font-size: 1.25rem;\n}\n\n\n\n.btn-p[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  border-style: none;\n  color: white;\n}\n\n.primary-blue[_ngcontent-%COMP%] {\n  background-color: rgb(0,123,255);\n}\n\n.primary-green[_ngcontent-%COMP%] {\n  background-color: #03e875;\n}\n\n.primary-blue[_ngcontent-%COMP%]:hover{\n  background-color: #0476f0;\n}\n\n.primary-green[_ngcontent-%COMP%]:hover{\n  background-color: #02c463;\n}\n\n#content-container[_ngcontent-%COMP%] {\n  width: 40%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 95px;\n}\n\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBR0EsaURBQWlEOztBQUNqRDtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLGlFQUFpRTs7QUFHakU7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlMGU2O1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubXItMCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5tbC1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6YXV0bztcbn1cbi5kLWJsb2NrIHtcbiAgZGlzcGxheTpibG9jaztcbn1cblxuLmZsb2F0LWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmZsb2F0LXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZmxleC1zcGFjZS1iZXR3ZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5cbi8qPC0tLS0tLS0tLS0tLS1URVhUIFNUWUxFUy0tLS0tLS0tLS0tLS0tLS0tLS0tPiovXG5wIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RcIixzYW5zLXNlcmlmO1xufVxuXG4udGV4dC1ncmF5IHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi50ZXh0LWJsdWUge1xuICBjb2xvcjogcmdiKDAsMTIzLDI1NSk7XG59XG5cbi50ZXh0LWxhcmdlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LWNhcmQtYm9keS1mdWxsIHtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHJlbTtcbn1cblxuLnAtbGFyZ2V7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tRU5EIFRFWFQgU1RZTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuLmJ0bi1wIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcmltYXJ5LWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwxMjMsMjU1KTtcbn1cblxuLnByaW1hcnktZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNlODc1O1xufVxuXG4ucHJpbWFyeS1ibHVlOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ3NmYwO1xufVxuXG4ucHJpbWFyeS1ncmVlbjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyYzQ2Mztcbn1cblxuXG4jY29udGVudC1jb250YWluZXIge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogOTVweDtcbn1cblxuLmZsZXgtd3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PollListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-poll-list',
          templateUrl: './poll-list.component.html',
          styleUrls: ['./poll-list.component.css', '../../app.component.css'],
          providers: [_poll_service__WEBPACK_IMPORTED_MODULE_1__["PollService"]]
        }]
      }], function () {
        return [{
          type: _poll_service__WEBPACK_IMPORTED_MODULE_1__["PollService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/poll/poll.service.ts":
  /*!**************************************!*\
    !*** ./src/app/poll/poll.service.ts ***!
    \**************************************/

  /*! exports provided: PollService */

  /***/
  function srcAppPollPollServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PollService", function () {
      return PollService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_poll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/poll */
    "./src/app/models/poll.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_poll_vote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/poll-vote */
    "./src/app/models/poll-vote.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var PollService = /*#__PURE__*/function () {
      function PollService(http) {
        _classCallCheck(this, PollService);

        this.http = http;
      }

      _createClass(PollService, [{
        key: "getPoll",
        value: function getPoll(pollId) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.get('/api/poll/' + pollId, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return new _models_poll__WEBPACK_IMPORTED_MODULE_1__["Poll"]().deserialize(data);
          }));
        }
      }, {
        key: "getPollsByPage",
        value: function getPollsByPage(page) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          var pageParam = 'page=' + page;
          var timeFilter = 't=' + 'YEAR';
          var queryParams = pageParam + '&' + timeFilter;
          return this.http.get('/api/poll?' + queryParams, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (dataList) {
            return dataList.map(function (data) {
              return new _models_poll__WEBPACK_IMPORTED_MODULE_1__["Poll"]().deserialize(data);
            });
          }));
        }
      }, {
        key: "savePoll",
        value: function savePoll(poll) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post('/api/poll/save', poll, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return new _models_poll__WEBPACK_IMPORTED_MODULE_1__["Poll"]().deserialize(data);
          }));
        }
      }, {
        key: "voteOnPoll",
        value: function voteOnPoll(pollVote) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.put('/api/poll/vote', pollVote, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return new _models_poll_vote__WEBPACK_IMPORTED_MODULE_3__["PollVote"]().deserialize(data);
          }));
        }
      }, {
        key: "removeVoteOnPoll",
        value: function removeVoteOnPoll(pollVote) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http["delete"]('/api/poll/vote/' + pollVote.id, httpOptions);
        }
      }, {
        key: "getUserVote",
        value: function getUserVote(pollId) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.get('/api/poll/' + pollId + '/vote/', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return new _models_poll_vote__WEBPACK_IMPORTED_MODULE_3__["PollVote"]().deserialize(data);
          }));
          ;
        }
      }]);

      return PollService;
    }();

    PollService.ɵfac = function PollService_Factory(t) {
      return new (t || PollService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    PollService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PollService,
      factory: PollService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PollService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/auth-interceptor.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/auth-interceptor.ts ***!
    \********************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppSharedAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/shared/auth.service.ts");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(auth) {
        _classCallCheck(this, AuthInterceptor);

        this.auth = auth;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          // if request has 'skipBearer' header will skip adding the bearer token
          var authToken = this.auth.getAuthToken();

          if (req.headers.has('skipBearer')) {
            req.headers["delete"]('skipBearer');
            return next.handle(req);
          } // if auth token was never set skip adding the bearer token


          if (!authToken) {
            return next.handle(req);
          } // Get the auth token from the service.
          // Clone the request and replace the original headers with
          // cloned headers, updated with the authorization.


          var authReq = req.clone({
            headers: req.headers.set('Authorization', 'bearer ' + authToken)
          }); // send cloned request with header to the next handler.

          return next.handle(authReq);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/auth.service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/auth.service.ts ***!
    \****************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/build/jwt-decode.esm.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService() {
        _classCallCheck(this, AuthService);

        var token = localStorage.getItem('token');
        var tokenValid = false;

        if (token !== null) {
          var decodedToken = this.decodeAccessToken(token);
          var tokenExpired = this.tokenIsExpired(decodedToken);

          if (!tokenExpired) {
            this.setUserAuthenticated(true, decodedToken);
            tokenValid = true;
          }
        }

        if (!tokenValid) {
          this.setUserAuthenticated(false, token);
        }
      }

      _createClass(AuthService, [{
        key: "setUserAuthenticated",
        value: function setUserAuthenticated(isAuthenticated, decodedToken) {
          this.userAuthenticated = isAuthenticated;

          if (!isAuthenticated) {
            this.userId = null;
            this.username = null;
            localStorage.removeItem('token');
          } else {
            this.username = decodedToken.sub;
            this.userId = decodedToken.userId;
          }
        }
      }, {
        key: "getAuthToken",
        value: function getAuthToken() {
          return localStorage.getItem('token');
        }
      }, {
        key: "setAuthToken",
        value: function setAuthToken(token) {
          localStorage.setItem('token', token);
          var decodedToken = this.decodeAccessToken(token);
          this.setUserAuthenticated(true, decodedToken);
        }
      }, {
        key: "tokenIsExpired",
        value: function tokenIsExpired(decodedToken) {
          return Math.floor(new Date().getTime() / 1000) >= decodedToken.exp;
        }
      }, {
        key: "decodeAccessToken",
        value: function decodeAccessToken(token) {
          try {
            return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(token);
          } catch (Error) {
            return null;
          }
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)();
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modal.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/modal.service.ts ***!
    \*****************************************/

  /*! exports provided: ModalService */

  /***/
  function srcAppSharedModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return ModalService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ModalService = /*#__PURE__*/function () {
      function ModalService() {
        _classCallCheck(this, ModalService);

        this.idToModal = new Map();
      }

      _createClass(ModalService, [{
        key: "register",
        value: function register(modalId, modal) {
          this.idToModal.set(modalId, modal);
        }
      }, {
        key: "open",
        value: function open(modalId) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          if (this.idToModal.has(modalId)) {
            var modalComponent = this.idToModal.get(modalId);

            if (data) {
              Object.keys(data).forEach(function (key) {
                return modalComponent[key] = data[key];
              });
            }

            modalComponent.modalDirective.show();
          }
        }
      }, {
        key: "close",
        value: function close(modalId) {
          if (this.idToModal.has(modalId)) {
            this.idToModal.get(modalId).modalDirective.hide();
          }
        }
      }]);

      return ModalService;
    }();

    ModalService.ɵfac = function ModalService_Factory(t) {
      return new (t || ModalService)();
    };

    ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalService,
      factory: ModalService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/user.service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/user.service.ts ***!
    \****************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "getUser",
        value: function getUser(userId) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.get('/api/user', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]().deserialize(data);
          }));
        }
      }, {
        key: "createUser",
        value: function createUser(authData) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post('/api/user', authData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]().deserialize(data);
          }));
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! zone.js/dist/zone-error */
    "./node_modules/zone.js/dist/zone-error.js");
    /* harmony import */


    var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    }; // URL of development API

    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  "./src/polyfills.ts":
  /*!**************************!*\
    !*** ./src/polyfills.ts ***!
    \**************************/

  /*! no exports provided */

  /***/
  function srcPolyfillsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! zone.js/dist/zone */
    "./node_modules/zone.js/dist/zone-evergreen.js");
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
    /**
     * This file includes polyfills needed by Angular and is loaded before the app.
     * You can add your own extra polyfills to this file.
     *
     * This file is divided into 2 sections:
     *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
     *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
     *      file.
     *
     * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
     * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
     * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
     *
     * Learn more in https://angular.io/guide/browser-support
     */

    /***************************************************************************************************
     * BROWSER POLYFILLS
     */

    /** IE10 and IE11 requires the following for NgClass support on SVG elements */
    // import 'classlist.js';  // Run `npm install --save classlist.js`.

    /**
     * Web Animations `@angular/platform-browser/animations`
     * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
     * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
     */
    // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

    /**
     * By default, zone.js will patch all possible macroTask and DomEvents
     * user can disable parts of macroTask/DomEvents patch by setting following flags
     * because those flags need to be set before `zone.js` being loaded, and webpack
     * will put import in the top of bundle, so user need to create a separate file
     * in this directory (for example: zone-flags.ts), and put the following flags
     * into that file, and then add the following code before importing zone.js.
     * import './zone-flags';
     *
     * The flags allowed in zone-flags.ts are listed here.
     *
     * The following flags will work for all browsers.
     *
     * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
     * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
     * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
     *
     *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
     *  with the following flag, it will bypass `zone.js` patch for IE/Edge
     *
     *  (window as any).__Zone_enable_cross_context_check = true;
     *
     */

    /***************************************************************************************************
     * Zone JS is required by default for Angular itself.
     */
    // Included with Angular CLI.

    /***************************************************************************************************
     * APPLICATION IMPORTS
     */

    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/todkahler/codeprojects/pollur/app-client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map