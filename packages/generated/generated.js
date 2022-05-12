var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
var defaultOptions = {};
export var TwoRandomPeopleDocument = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query TwoRandomPeople {\n  p1: randomPerson(id: 1) {\n    id\n    name\n    mass\n  }\n  p2: randomPerson(id: 2) {\n    id\n    name\n    mass\n  }\n}\n    "], ["\n    query TwoRandomPeople {\n  p1: randomPerson(id: 1) {\n    id\n    name\n    mass\n  }\n  p2: randomPerson(id: 2) {\n    id\n    name\n    mass\n  }\n}\n    "])));
/**
 * __useTwoRandomPeopleQuery__
 *
 * To run a query within a React component, call `useTwoRandomPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useTwoRandomPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTwoRandomPeopleQuery({
 *   variables: {
 *   },
 * });
 */
export function useTwoRandomPeopleQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(TwoRandomPeopleDocument, options);
}
export function useTwoRandomPeopleLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(TwoRandomPeopleDocument, options);
}
export var TwoRandomStarshipsDocument = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    query TwoRandomStarships {\n  p1: randomStarship(id: 1) {\n    id\n    name\n    crew {\n      id\n    }\n  }\n  p2: randomStarship(id: 2) {\n    id\n    name\n    crew {\n      id\n    }\n  }\n}\n    "], ["\n    query TwoRandomStarships {\n  p1: randomStarship(id: 1) {\n    id\n    name\n    crew {\n      id\n    }\n  }\n  p2: randomStarship(id: 2) {\n    id\n    name\n    crew {\n      id\n    }\n  }\n}\n    "])));
/**
 * __useTwoRandomStarshipsQuery__
 *
 * To run a query within a React component, call `useTwoRandomStarshipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTwoRandomStarshipsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTwoRandomStarshipsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTwoRandomStarshipsQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(TwoRandomStarshipsDocument, options);
}
export function useTwoRandomStarshipsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(TwoRandomStarshipsDocument, options);
}
var templateObject_1, templateObject_2;
