import { IAccessInfo, IQueryInfo } from './core';
export declare const RESERVED_KEYWORDS: string[];
export declare function type(o: any): string;
export declare function hasDefined(o: any, propName: string): boolean;
export declare function toStringArray(value: any): string[];
export declare function isFilledStringArray(arr: any[]): boolean;
export declare function isEmptyArray(value: any): boolean;
export declare function uniqConcat(arrA: string[], arrB: string[]): string[];
export declare function pushUniq(arr: string[], item: string): string[];
export declare function each(array: any[], callback: any, thisArg?: any): void;
export declare function eachKey(object: any, callback: any, thisArg?: any): void;
export declare function eachRole(grants: any, callback: (role: any, roleName: string) => void): void;
export declare function eachRoleResource(grants: any, callback: (role: string, resource: string, resourceDefinition: any) => void): void;
export declare function isInfoFulfilled(info: IAccessInfo | IQueryInfo): boolean;
export declare function normalizeActionPossession(info: IQueryInfo | IAccessInfo, asString?: boolean): IQueryInfo | IAccessInfo | string;
export declare function normalizeAccessInfo(access: IAccessInfo, all?: boolean): IAccessInfo;
export declare function normalizeQueryInfo(query: IQueryInfo): IQueryInfo;
export declare function getResources(grants: any): string[];
export declare function resetAttributes(access: IAccessInfo): IAccessInfo;
export declare function getFlatRoles(grants: any, roles: string | string[]): string[];
export declare function getNonExistentRoles(grants: any, roles: string[]): string[];
export declare function getCrossExtendingRole(grants: any, roleName: string, extenderRoles: string | string[]): string;
export declare function extendRole(grants: any, roles: string | string[], extenderRoles: string | string[]): void;
export declare function preCreateRoles(grants: any, roles: string | string[]): void;
export declare function getRoleHierarchyOf(grants: any, roleName: string, rootRole?: string): string[];
export declare function validResourceObject(o: any): boolean;
export declare function validRoleObject(grants: any, roleName: string): boolean;
export declare function validName(name: string, throwOnInvalid?: boolean): boolean;
export declare function hasValidNames(list: any, throwOnInvalid?: boolean): boolean;
export declare function getInspectedGrants(grantsObject: any): any;
export declare function commitToGrants(grants: any, access: IAccessInfo, normalizeAll?: boolean): void;
export declare function getUnionAttrsOfRoles(grants: any, query: IQueryInfo): string[];
export declare function filter(object: any, attributes: string[]): any;
export declare function filterAll(arrOrObj: any, attributes: string[]): any;
