import User_ from './user';
import UserGroup_ from './userGroup';
import SecurityGroup_ from './securityGroup';
import SubnetGroup_ from './subnetGroup';
import SecurityGroupIngress_ from './securityGroupIngress';
import ReplicationGroup_ from './replicationGroup';
import ParameterGroup_ from './parameterGroup';
import GlobalReplicationGroup_ from './globalReplicationGroup';
import CacheCluster_ from './cacheCluster';
export declare namespace ElastiCache {
    const User: typeof User_;
    const UserGroup: typeof UserGroup_;
    const SecurityGroup: typeof SecurityGroup_;
    const SubnetGroup: typeof SubnetGroup_;
    const SecurityGroupIngress: typeof SecurityGroupIngress_;
    const ReplicationGroup: typeof ReplicationGroup_;
    const ParameterGroup: typeof ParameterGroup_;
    const GlobalReplicationGroup: typeof GlobalReplicationGroup_;
    const CacheCluster: typeof CacheCluster_;
    type User = User_;
    type UserGroup = UserGroup_;
    type SecurityGroup = SecurityGroup_;
    type SubnetGroup = SubnetGroup_;
    type SecurityGroupIngress = SecurityGroupIngress_;
    type ReplicationGroup = ReplicationGroup_;
    type ParameterGroup = ParameterGroup_;
    type GlobalReplicationGroup = GlobalReplicationGroup_;
    type CacheCluster = CacheCluster_;
}
