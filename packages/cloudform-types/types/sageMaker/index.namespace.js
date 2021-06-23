"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const workteam_1 = require("./workteam");
const imageVersion_1 = require("./imageVersion");
const featureGroup_1 = require("./featureGroup");
const dataQualityJobDefinition_1 = require("./dataQualityJobDefinition");
const notebookInstanceLifecycleConfig_1 = require("./notebookInstanceLifecycleConfig");
const monitoringSchedule_1 = require("./monitoringSchedule");
const userProfile_1 = require("./userProfile");
const modelExplainabilityJobDefinition_1 = require("./modelExplainabilityJobDefinition");
const modelPackageGroup_1 = require("./modelPackageGroup");
const endpointConfig_1 = require("./endpointConfig");
const endpoint_1 = require("./endpoint");
const modelBiasJobDefinition_1 = require("./modelBiasJobDefinition");
const modelQualityJobDefinition_1 = require("./modelQualityJobDefinition");
const notebookInstance_1 = require("./notebookInstance");
const codeRepository_1 = require("./codeRepository");
const appImageConfig_1 = require("./appImageConfig");
const pipeline_1 = require("./pipeline");
const model_1 = require("./model");
const deviceFleet_1 = require("./deviceFleet");
const app_1 = require("./app");
const domain_1 = require("./domain");
const project_1 = require("./project");
const image_1 = require("./image");
const device_1 = require("./device");
var SageMaker;
(function (SageMaker) {
    SageMaker.Workteam = workteam_1.default;
    SageMaker.ImageVersion = imageVersion_1.default;
    SageMaker.FeatureGroup = featureGroup_1.default;
    SageMaker.DataQualityJobDefinition = dataQualityJobDefinition_1.default;
    SageMaker.NotebookInstanceLifecycleConfig = notebookInstanceLifecycleConfig_1.default;
    SageMaker.MonitoringSchedule = monitoringSchedule_1.default;
    SageMaker.UserProfile = userProfile_1.default;
    SageMaker.ModelExplainabilityJobDefinition = modelExplainabilityJobDefinition_1.default;
    SageMaker.ModelPackageGroup = modelPackageGroup_1.default;
    SageMaker.EndpointConfig = endpointConfig_1.default;
    SageMaker.Endpoint = endpoint_1.default;
    SageMaker.ModelBiasJobDefinition = modelBiasJobDefinition_1.default;
    SageMaker.ModelQualityJobDefinition = modelQualityJobDefinition_1.default;
    SageMaker.NotebookInstance = notebookInstance_1.default;
    SageMaker.CodeRepository = codeRepository_1.default;
    SageMaker.AppImageConfig = appImageConfig_1.default;
    SageMaker.Pipeline = pipeline_1.default;
    SageMaker.Model = model_1.default;
    SageMaker.DeviceFleet = deviceFleet_1.default;
    SageMaker.App = app_1.default;
    SageMaker.Domain = domain_1.default;
    SageMaker.Project = project_1.default;
    SageMaker.Image = image_1.default;
    SageMaker.Device = device_1.default;
})(SageMaker = exports.SageMaker || (exports.SageMaker = {}));
