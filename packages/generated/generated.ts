import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
	DateTime: string;
};

export type AllPeopleInput = {
	mass?: InputMaybe<Scalars['Float']>;
	page?: InputMaybe<Scalars['Int']>;
	perPage?: InputMaybe<Scalars['Int']>;
	search?: InputMaybe<Scalars['String']>;
};

export type AllStarshipsInput = {
	page?: InputMaybe<Scalars['Int']>;
	perPage?: InputMaybe<Scalars['Int']>;
	search?: InputMaybe<Scalars['String']>;
};

export type ConnectInput = {
	id: Scalars['Float'];
};

export type CreatePersonInput = {
	mass: Scalars['Int'];
	name: Scalars['String'];
	starshipId?: InputMaybe<Scalars['Int']>;
};

export type CreateStarshipInput = {
	crew: Array<ConnectInput>;
	name: Scalars['String'];
};

export type DeletePersonInput = {
	id: Scalars['Int'];
};

export type DeleteStarshipInput = {
	id: Scalars['Int'];
};

export type Mutation = {
	__typename?: 'Mutation';
	createPerson: Person;
	createStarship: Starship;
	deletePerson: Person;
	deleteStarship: Starship;
	updatePerson: Person;
	updateStarship: Starship;
};

export type MutationCreatePersonArgs = {
	createPersonInput: CreatePersonInput;
};

export type MutationCreateStarshipArgs = {
	createStarshipInput: CreateStarshipInput;
};

export type MutationDeletePersonArgs = {
	deletePersonInput: DeletePersonInput;
};

export type MutationDeleteStarshipArgs = {
	deleteStarshipInput: DeleteStarshipInput;
};

export type MutationUpdatePersonArgs = {
	updatePersonInput: UpdatePersonInput;
};

export type MutationUpdateStarshipArgs = {
	updateStarshipInput: UpdateStarshipInput;
};

export type Person = {
	__typename?: 'Person';
	createdAt: Scalars['DateTime'];
	id: Scalars['Int'];
	mass: Scalars['Int'];
	name: Scalars['String'];
	starship?: Maybe<StarshipWithoutCrew>;
	starshipId?: Maybe<Scalars['Int']>;
	updatedAt: Scalars['DateTime'];
};

export type PersonInput = {
	id?: InputMaybe<Scalars['Int']>;
	search?: InputMaybe<Scalars['String']>;
};

export type PersonWithoutStarship = {
	__typename?: 'PersonWithoutStarship';
	createdAt: Scalars['DateTime'];
	id: Scalars['Int'];
	mass: Scalars['Int'];
	name: Scalars['String'];
	starshipId?: Maybe<Scalars['Int']>;
	updatedAt: Scalars['DateTime'];
};

export type Query = {
	__typename?: 'Query';
	allPeople: Array<Person>;
	allStarships: Array<Starship>;
	person: Person;
	randomPerson: Person;
	randomStarship: Starship;
	starship: Starship;
};

export type QueryAllPeopleArgs = {
	allPeopleInput?: InputMaybe<AllPeopleInput>;
};

export type QueryAllStarshipsArgs = {
	allStarshipsInput?: InputMaybe<AllStarshipsInput>;
};

export type QueryPersonArgs = {
	personInput: PersonInput;
};

export type QueryRandomPersonArgs = {
	id: Scalars['Float'];
};

export type QueryRandomStarshipArgs = {
	id: Scalars['Float'];
};

export type QueryStarshipArgs = {
	starshipInput: StarshipInput;
};

export type Starship = {
	__typename?: 'Starship';
	createdAt: Scalars['DateTime'];
	crew?: Maybe<Array<PersonWithoutStarship>>;
	id: Scalars['Int'];
	name: Scalars['String'];
	updatedAt: Scalars['DateTime'];
};

export type StarshipInput = {
	id?: InputMaybe<Scalars['Int']>;
	search?: InputMaybe<Scalars['String']>;
};

export type StarshipWithoutCrew = {
	__typename?: 'StarshipWithoutCrew';
	createdAt: Scalars['DateTime'];
	id: Scalars['Int'];
	name: Scalars['String'];
	updatedAt: Scalars['DateTime'];
};

export type UpdatePersonInput = {
	id: Scalars['Int'];
	mass?: InputMaybe<Scalars['Int']>;
	name?: InputMaybe<Scalars['String']>;
	starshipId?: InputMaybe<Scalars['Int']>;
};

export type UpdateStarshipInput = {
	crew?: InputMaybe<Array<ConnectInput>>;
	id: Scalars['Int'];
	name?: InputMaybe<Scalars['String']>;
};

export type TwoRandomPeopleQueryVariables = Exact<{ [key: string]: never }>;

export type TwoRandomPeopleQuery = {
	__typename?: 'Query';
	p1: { __typename?: 'Person'; id: number; name: string; mass: number };
	p2: { __typename?: 'Person'; id: number; name: string; mass: number };
};

export type TwoRandomStarshipsQueryVariables = Exact<{ [key: string]: never }>;

export type TwoRandomStarshipsQuery = {
	__typename?: 'Query';
	p1: {
		__typename?: 'Starship';
		id: number;
		name: string;
		crew?: Array<{ __typename?: 'PersonWithoutStarship'; id: number }> | null;
	};
	p2: {
		__typename?: 'Starship';
		id: number;
		name: string;
		crew?: Array<{ __typename?: 'PersonWithoutStarship'; id: number }> | null;
	};
};

export const TwoRandomPeopleDocument = gql`
	query TwoRandomPeople {
		p1: randomPerson(id: 1) {
			id
			name
			mass
		}
		p2: randomPerson(id: 2) {
			id
			name
			mass
		}
	}
`;

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
export function useTwoRandomPeopleQuery(
	baseOptions?: Apollo.QueryHookOptions<TwoRandomPeopleQuery, TwoRandomPeopleQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<TwoRandomPeopleQuery, TwoRandomPeopleQueryVariables>(
		TwoRandomPeopleDocument,
		options,
	);
}
export function useTwoRandomPeopleLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<TwoRandomPeopleQuery, TwoRandomPeopleQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<TwoRandomPeopleQuery, TwoRandomPeopleQueryVariables>(
		TwoRandomPeopleDocument,
		options,
	);
}
export type TwoRandomPeopleQueryHookResult = ReturnType<typeof useTwoRandomPeopleQuery>;
export type TwoRandomPeopleLazyQueryHookResult = ReturnType<typeof useTwoRandomPeopleLazyQuery>;
export type TwoRandomPeopleQueryResult = Apollo.QueryResult<
	TwoRandomPeopleQuery,
	TwoRandomPeopleQueryVariables
>;
export const TwoRandomStarshipsDocument = gql`
	query TwoRandomStarships {
		p1: randomStarship(id: 1) {
			id
			name
			crew {
				id
			}
		}
		p2: randomStarship(id: 2) {
			id
			name
			crew {
				id
			}
		}
	}
`;

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
export function useTwoRandomStarshipsQuery(
	baseOptions?: Apollo.QueryHookOptions<TwoRandomStarshipsQuery, TwoRandomStarshipsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<TwoRandomStarshipsQuery, TwoRandomStarshipsQueryVariables>(
		TwoRandomStarshipsDocument,
		options,
	);
}
export function useTwoRandomStarshipsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		TwoRandomStarshipsQuery,
		TwoRandomStarshipsQueryVariables
	>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<TwoRandomStarshipsQuery, TwoRandomStarshipsQueryVariables>(
		TwoRandomStarshipsDocument,
		options,
	);
}
export type TwoRandomStarshipsQueryHookResult = ReturnType<typeof useTwoRandomStarshipsQuery>;
export type TwoRandomStarshipsLazyQueryHookResult = ReturnType<
	typeof useTwoRandomStarshipsLazyQuery
>;
export type TwoRandomStarshipsQueryResult = Apollo.QueryResult<
	TwoRandomStarshipsQuery,
	TwoRandomStarshipsQueryVariables
>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> {
	subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
	resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {},
> =
	| ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	AllPeopleInput: AllPeopleInput;
	AllStarshipsInput: AllStarshipsInput;
	Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
	ConnectInput: ConnectInput;
	CreatePersonInput: CreatePersonInput;
	CreateStarshipInput: CreateStarshipInput;
	DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
	DeletePersonInput: DeletePersonInput;
	DeleteStarshipInput: DeleteStarshipInput;
	Float: ResolverTypeWrapper<Scalars['Float']>;
	Int: ResolverTypeWrapper<Scalars['Int']>;
	Mutation: ResolverTypeWrapper<{}>;
	Person: ResolverTypeWrapper<Person>;
	PersonInput: PersonInput;
	PersonWithoutStarship: ResolverTypeWrapper<PersonWithoutStarship>;
	Query: ResolverTypeWrapper<{}>;
	Starship: ResolverTypeWrapper<Starship>;
	StarshipInput: StarshipInput;
	StarshipWithoutCrew: ResolverTypeWrapper<StarshipWithoutCrew>;
	String: ResolverTypeWrapper<Scalars['String']>;
	UpdatePersonInput: UpdatePersonInput;
	UpdateStarshipInput: UpdateStarshipInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	AllPeopleInput: AllPeopleInput;
	AllStarshipsInput: AllStarshipsInput;
	Boolean: Scalars['Boolean'];
	ConnectInput: ConnectInput;
	CreatePersonInput: CreatePersonInput;
	CreateStarshipInput: CreateStarshipInput;
	DateTime: Scalars['DateTime'];
	DeletePersonInput: DeletePersonInput;
	DeleteStarshipInput: DeleteStarshipInput;
	Float: Scalars['Float'];
	Int: Scalars['Int'];
	Mutation: {};
	Person: Person;
	PersonInput: PersonInput;
	PersonWithoutStarship: PersonWithoutStarship;
	Query: {};
	Starship: Starship;
	StarshipInput: StarshipInput;
	StarshipWithoutCrew: StarshipWithoutCrew;
	String: Scalars['String'];
	UpdatePersonInput: UpdatePersonInput;
	UpdateStarshipInput: UpdateStarshipInput;
};

export interface DateTimeScalarConfig
	extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
	name: 'DateTime';
}

export type MutationResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
	createPerson?: Resolver<
		ResolversTypes['Person'],
		ParentType,
		ContextType,
		RequireFields<MutationCreatePersonArgs, 'createPersonInput'>
	>;
	createStarship?: Resolver<
		ResolversTypes['Starship'],
		ParentType,
		ContextType,
		RequireFields<MutationCreateStarshipArgs, 'createStarshipInput'>
	>;
	deletePerson?: Resolver<
		ResolversTypes['Person'],
		ParentType,
		ContextType,
		RequireFields<MutationDeletePersonArgs, 'deletePersonInput'>
	>;
	deleteStarship?: Resolver<
		ResolversTypes['Starship'],
		ParentType,
		ContextType,
		RequireFields<MutationDeleteStarshipArgs, 'deleteStarshipInput'>
	>;
	updatePerson?: Resolver<
		ResolversTypes['Person'],
		ParentType,
		ContextType,
		RequireFields<MutationUpdatePersonArgs, 'updatePersonInput'>
	>;
	updateStarship?: Resolver<
		ResolversTypes['Starship'],
		ParentType,
		ContextType,
		RequireFields<MutationUpdateStarshipArgs, 'updateStarshipInput'>
	>;
};

export type PersonResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person'],
> = {
	createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	mass?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	starship?: Resolver<Maybe<ResolversTypes['StarshipWithoutCrew']>, ParentType, ContextType>;
	starshipId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonWithoutStarshipResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['PersonWithoutStarship'] = ResolversParentTypes['PersonWithoutStarship'],
> = {
	createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	mass?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	starshipId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
	allPeople?: Resolver<
		Array<ResolversTypes['Person']>,
		ParentType,
		ContextType,
		Partial<QueryAllPeopleArgs>
	>;
	allStarships?: Resolver<
		Array<ResolversTypes['Starship']>,
		ParentType,
		ContextType,
		Partial<QueryAllStarshipsArgs>
	>;
	person?: Resolver<
		ResolversTypes['Person'],
		ParentType,
		ContextType,
		RequireFields<QueryPersonArgs, 'personInput'>
	>;
	randomPerson?: Resolver<
		ResolversTypes['Person'],
		ParentType,
		ContextType,
		RequireFields<QueryRandomPersonArgs, 'id'>
	>;
	randomStarship?: Resolver<
		ResolversTypes['Starship'],
		ParentType,
		ContextType,
		RequireFields<QueryRandomStarshipArgs, 'id'>
	>;
	starship?: Resolver<
		ResolversTypes['Starship'],
		ParentType,
		ContextType,
		RequireFields<QueryStarshipArgs, 'starshipInput'>
	>;
};

export type StarshipResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Starship'] = ResolversParentTypes['Starship'],
> = {
	createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	crew?: Resolver<Maybe<Array<ResolversTypes['PersonWithoutStarship']>>, ParentType, ContextType>;
	id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StarshipWithoutCrewResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['StarshipWithoutCrew'] = ResolversParentTypes['StarshipWithoutCrew'],
> = {
	createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
	DateTime?: GraphQLScalarType;
	Mutation?: MutationResolvers<ContextType>;
	Person?: PersonResolvers<ContextType>;
	PersonWithoutStarship?: PersonWithoutStarshipResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	Starship?: StarshipResolvers<ContextType>;
	StarshipWithoutCrew?: StarshipWithoutCrewResolvers<ContextType>;
};
