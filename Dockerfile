FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV OTEL_SERVICE_NAME=node-app-dev
ENV OTEL_TRACES_EXPORTER=otlp
ENV OTEL_METRICS_EXPORTER=otlp
ENV OTEL_EXPORTER_OTLP_TRACES_ENDPOINT=opentelemetrycollector.default.svc.cluster.local:4317
ENV OTEL_EXPORTER_OTLP_METRICS_ENDPOINT=opentelemetrycollector.default.svc.cluster.local:4317
ENV OTEL_EXPORTER_OTLP_TRACES_INSECURE=true
ENV OTEL_EXPORTER_OTLP_METRICS_INSECURE=true

EXPOSE 3000

CMD ["node", "dist/app.js"]
