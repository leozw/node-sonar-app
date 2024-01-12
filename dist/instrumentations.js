"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_node_1 = require("@opentelemetry/sdk-node");
const auto_instrumentations_node_1 = require("@opentelemetry/auto-instrumentations-node");
const exporter_trace_otlp_proto_1 = require("@opentelemetry/exporter-trace-otlp-proto");
const exporter_metrics_otlp_proto_1 = require("@opentelemetry/exporter-metrics-otlp-proto");
const sdk_metrics_1 = require("@opentelemetry/sdk-metrics");
const sdk = new sdk_node_1.NodeSDK({
    traceExporter: new exporter_trace_otlp_proto_1.OTLPTraceExporter({
        url: 'http://otel-collector:4318/v1/traces'
    }),
    metricReader: new sdk_metrics_1.PeriodicExportingMetricReader({
        exporter: new exporter_metrics_otlp_proto_1.OTLPMetricExporter({
            url: 'http://otel-collector:4318/v1/metrics'
        })
    }),
    instrumentations: [(0, auto_instrumentations_node_1.getNodeAutoInstrumentations)()]
});
sdk.start();
