"use strict";
/* Generated from:
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DestinationConfiguration = DestinationConfiguration;
class S3DestinationConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3DestinationConfiguration = S3DestinationConfiguration;
class RecordingConfiguration extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::IVS::RecordingConfiguration', properties);
    }
}
exports.default = RecordingConfiguration;
RecordingConfiguration.DestinationConfiguration = DestinationConfiguration;
RecordingConfiguration.S3DestinationConfiguration = S3DestinationConfiguration;
