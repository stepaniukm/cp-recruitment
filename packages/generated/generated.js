var __makeTemplateObject =
	(this && this.__makeTemplateObject) ||
	function (cooked, raw) {
		if (Object.defineProperty) {
			Object.defineProperty(cooked, 'raw', { value: raw });
		} else {
			cooked.raw = raw;
		}
		return cooked;
	};
var __assign =
	(this && this.__assign) ||
	function () {
		__assign =
			Object.assign ||
			function (t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i];
					for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
				}
				return t;
			};
		return __assign.apply(this, arguments);
	};
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
var defaultOptions = {};
export var AllPeopleDocument = gql(
	templateObject_1 ||
		(templateObject_1 = __makeTemplateObject(
			[
				'\n    query AllPeople {\n  allPeople {\n    id\n    name\n    mass\n    starship {\n      id\n      name\n    }\n  }\n}\n    ',
			],
			[
				'\n    query AllPeople {\n  allPeople {\n    id\n    name\n    mass\n    starship {\n      id\n      name\n    }\n  }\n}\n    ',
			],
		)),
);
/**
 * __useAllPeopleQuery__
 *
 * To run a query within a React component, call `useAllPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPeopleQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPeopleQuery(baseOptions) {
	var options = __assign(__assign({}, defaultOptions), baseOptions);
	return Apollo.useQuery(AllPeopleDocument, options);
}
export function useAllPeopleLazyQuery(baseOptions) {
	var options = __assign(__assign({}, defaultOptions), baseOptions);
	return Apollo.useLazyQuery(AllPeopleDocument, options);
}
var templateObject_1;
