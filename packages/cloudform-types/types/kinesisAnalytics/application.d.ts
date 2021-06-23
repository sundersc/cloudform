import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CSVMappingParameters {
    RecordRowDelimiter: Value<string>;
    RecordColumnDelimiter: Value<string>;
    constructor(properties: CSVMappingParameters);
}
export declare class Input {
    NamePrefix: Value<string>;
    InputSchema: InputSchema;
    KinesisStreamsInput?: KinesisStreamsInput;
    KinesisFirehoseInput?: KinesisFirehoseInput;
    InputProcessingConfiguration?: InputProcessingConfiguration;
    InputParallelism?: InputParallelism;
    constructor(properties: Input);
}
export declare class JSONMappingParameters {
    RecordRowPath: Value<string>;
    constructor(properties: JSONMappingParameters);
}
export declare class KinesisStreamsInput {
    ResourceARN: Value<string>;
    RoleARN: Value<string>;
    constructor(properties: KinesisStreamsInput);
}
export declare class RecordColumn {
    Mapping?: Value<string>;
    SqlType: Value<string>;
    Name: Value<string>;
    constructor(properties: RecordColumn);
}
export declare class KinesisFirehoseInput {
    ResourceARN: Value<string>;
    RoleARN: Value<string>;
    constructor(properties: KinesisFirehoseInput);
}
export declare class InputParallelism {
    Count?: Value<number>;
    constructor(properties: InputParallelism);
}
export declare class InputSchema {
    RecordEncoding?: Value<string>;
    RecordColumns: List<RecordColumn>;
    RecordFormat: RecordFormat;
    constructor(properties: InputSchema);
}
export declare class MappingParameters {
    JSONMappingParameters?: JSONMappingParameters;
    CSVMappingParameters?: CSVMappingParameters;
    constructor(properties: MappingParameters);
}
export declare class RecordFormat {
    MappingParameters?: MappingParameters;
    RecordFormatType: Value<string>;
    constructor(properties: RecordFormat);
}
export declare class InputProcessingConfiguration {
    InputLambdaProcessor?: InputLambdaProcessor;
    constructor(properties: InputProcessingConfiguration);
}
export declare class InputLambdaProcessor {
    ResourceARN: Value<string>;
    RoleARN: Value<string>;
    constructor(properties: InputLambdaProcessor);
}
export interface ApplicationProperties {
    ApplicationName?: Value<string>;
    Inputs: List<Input>;
    ApplicationDescription?: Value<string>;
    ApplicationCode?: Value<string>;
}
export default class Application extends ResourceBase<ApplicationProperties> {
    static CSVMappingParameters: typeof CSVMappingParameters;
    static Input: typeof Input;
    static JSONMappingParameters: typeof JSONMappingParameters;
    static KinesisStreamsInput: typeof KinesisStreamsInput;
    static RecordColumn: typeof RecordColumn;
    static KinesisFirehoseInput: typeof KinesisFirehoseInput;
    static InputParallelism: typeof InputParallelism;
    static InputSchema: typeof InputSchema;
    static MappingParameters: typeof MappingParameters;
    static RecordFormat: typeof RecordFormat;
    static InputProcessingConfiguration: typeof InputProcessingConfiguration;
    static InputLambdaProcessor: typeof InputLambdaProcessor;
    constructor(properties: ApplicationProperties);
}
