/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class SyncConfig {
    ConflictHandler?: Value<string>
    ConflictDetection!: Value<string>
    LambdaConflictHandlerConfig?: LambdaConflictHandlerConfig

    constructor(properties: SyncConfig) {
        Object.assign(this, properties)
    }
}

export class LambdaConflictHandlerConfig {
    LambdaConflictHandlerArn?: Value<string>

    constructor(properties: LambdaConflictHandlerConfig) {
        Object.assign(this, properties)
    }
}

export interface FunctionConfigurationProperties {
    ResponseMappingTemplateS3Location?: Value<string>
    Description?: Value<string>
    DataSourceName: Value<string>
    RequestMappingTemplate?: Value<string>
    ResponseMappingTemplate?: Value<string>
    FunctionVersion: Value<string>
    SyncConfig?: SyncConfig
    RequestMappingTemplateS3Location?: Value<string>
    ApiId: Value<string>
    Name: Value<string>
}

export default class FunctionConfiguration extends ResourceBase<FunctionConfigurationProperties> {
    static SyncConfig = SyncConfig
    static LambdaConflictHandlerConfig = LambdaConflictHandlerConfig

    constructor(properties: FunctionConfigurationProperties) {
        super('AWS::AppSync::FunctionConfiguration', properties)
    }
}
