"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
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
const resource_1 = require("../resource");
class ModelExplainabilityAppSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ModelExplainabilityAppSpecification = ModelExplainabilityAppSpecification;
class ModelExplainabilityJobInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ModelExplainabilityJobInput = ModelExplainabilityJobInput;
class ClusterConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ClusterConfig = ClusterConfig;
class ConstraintsResource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConstraintsResource = ConstraintsResource;
class StoppingCondition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StoppingCondition = StoppingCondition;
class S3Output {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3Output = S3Output;
class NetworkConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NetworkConfig = NetworkConfig;
class ModelExplainabilityBaselineConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ModelExplainabilityBaselineConfig = ModelExplainabilityBaselineConfig;
class MonitoringOutput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MonitoringOutput = MonitoringOutput;
class MonitoringResources {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MonitoringResources = MonitoringResources;
class MonitoringOutputConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MonitoringOutputConfig = MonitoringOutputConfig;
class VpcConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VpcConfig = VpcConfig;
class EndpointInput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EndpointInput = EndpointInput;
class ModelExplainabilityJobDefinition extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SageMaker::ModelExplainabilityJobDefinition', properties);
    }
}
exports.default = ModelExplainabilityJobDefinition;
ModelExplainabilityJobDefinition.ModelExplainabilityAppSpecification = ModelExplainabilityAppSpecification;
ModelExplainabilityJobDefinition.ModelExplainabilityJobInput = ModelExplainabilityJobInput;
ModelExplainabilityJobDefinition.ClusterConfig = ClusterConfig;
ModelExplainabilityJobDefinition.ConstraintsResource = ConstraintsResource;
ModelExplainabilityJobDefinition.StoppingCondition = StoppingCondition;
ModelExplainabilityJobDefinition.S3Output = S3Output;
ModelExplainabilityJobDefinition.NetworkConfig = NetworkConfig;
ModelExplainabilityJobDefinition.ModelExplainabilityBaselineConfig = ModelExplainabilityBaselineConfig;
ModelExplainabilityJobDefinition.MonitoringOutput = MonitoringOutput;
ModelExplainabilityJobDefinition.MonitoringResources = MonitoringResources;
ModelExplainabilityJobDefinition.MonitoringOutputConfig = MonitoringOutputConfig;
ModelExplainabilityJobDefinition.VpcConfig = VpcConfig;
ModelExplainabilityJobDefinition.EndpointInput = EndpointInput;
