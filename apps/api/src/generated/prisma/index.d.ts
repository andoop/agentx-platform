
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model WorkspaceMember
 * 
 */
export type WorkspaceMember = $Result.DefaultSelection<Prisma.$WorkspaceMemberPayload>
/**
 * Model Artifact
 * 
 */
export type Artifact = $Result.DefaultSelection<Prisma.$ArtifactPayload>
/**
 * Model ArtifactVersion
 * 
 */
export type ArtifactVersion = $Result.DefaultSelection<Prisma.$ArtifactVersionPayload>
/**
 * Model ReviewRequest
 * 
 */
export type ReviewRequest = $Result.DefaultSelection<Prisma.$ReviewRequestPayload>
/**
 * Model InstallEvent
 * 
 */
export type InstallEvent = $Result.DefaultSelection<Prisma.$InstallEventPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more WorkspaceMembers
 * const workspaceMembers = await prisma.workspaceMember.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more WorkspaceMembers
   * const workspaceMembers = await prisma.workspaceMember.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.workspaceMember`: Exposes CRUD operations for the **WorkspaceMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkspaceMembers
    * const workspaceMembers = await prisma.workspaceMember.findMany()
    * ```
    */
  get workspaceMember(): Prisma.WorkspaceMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artifact`: Exposes CRUD operations for the **Artifact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artifacts
    * const artifacts = await prisma.artifact.findMany()
    * ```
    */
  get artifact(): Prisma.ArtifactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artifactVersion`: Exposes CRUD operations for the **ArtifactVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtifactVersions
    * const artifactVersions = await prisma.artifactVersion.findMany()
    * ```
    */
  get artifactVersion(): Prisma.ArtifactVersionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewRequest`: Exposes CRUD operations for the **ReviewRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewRequests
    * const reviewRequests = await prisma.reviewRequest.findMany()
    * ```
    */
  get reviewRequest(): Prisma.ReviewRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.installEvent`: Exposes CRUD operations for the **InstallEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstallEvents
    * const installEvents = await prisma.installEvent.findMany()
    * ```
    */
  get installEvent(): Prisma.InstallEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    WorkspaceMember: 'WorkspaceMember',
    Artifact: 'Artifact',
    ArtifactVersion: 'ArtifactVersion',
    ReviewRequest: 'ReviewRequest',
    InstallEvent: 'InstallEvent',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "workspaceMember" | "artifact" | "artifactVersion" | "reviewRequest" | "installEvent" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      WorkspaceMember: {
        payload: Prisma.$WorkspaceMemberPayload<ExtArgs>
        fields: Prisma.WorkspaceMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>
          }
          findFirst: {
            args: Prisma.WorkspaceMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>
          }
          findMany: {
            args: Prisma.WorkspaceMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>[]
          }
          create: {
            args: Prisma.WorkspaceMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>
          }
          createMany: {
            args: Prisma.WorkspaceMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>[]
          }
          delete: {
            args: Prisma.WorkspaceMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>
          }
          update: {
            args: Prisma.WorkspaceMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkspaceMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>[]
          }
          upsert: {
            args: Prisma.WorkspaceMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>
          }
          aggregate: {
            args: Prisma.WorkspaceMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspaceMember>
          }
          groupBy: {
            args: Prisma.WorkspaceMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceMemberCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceMemberCountAggregateOutputType> | number
          }
        }
      }
      Artifact: {
        payload: Prisma.$ArtifactPayload<ExtArgs>
        fields: Prisma.ArtifactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtifactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtifactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          findFirst: {
            args: Prisma.ArtifactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtifactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          findMany: {
            args: Prisma.ArtifactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>[]
          }
          create: {
            args: Prisma.ArtifactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          createMany: {
            args: Prisma.ArtifactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtifactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>[]
          }
          delete: {
            args: Prisma.ArtifactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          update: {
            args: Prisma.ArtifactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          deleteMany: {
            args: Prisma.ArtifactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtifactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtifactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>[]
          }
          upsert: {
            args: Prisma.ArtifactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          aggregate: {
            args: Prisma.ArtifactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtifact>
          }
          groupBy: {
            args: Prisma.ArtifactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtifactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtifactCountArgs<ExtArgs>
            result: $Utils.Optional<ArtifactCountAggregateOutputType> | number
          }
        }
      }
      ArtifactVersion: {
        payload: Prisma.$ArtifactVersionPayload<ExtArgs>
        fields: Prisma.ArtifactVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtifactVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtifactVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactVersionPayload>
          }
          findFirst: {
            args: Prisma.ArtifactVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtifactVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactVersionPayload>
          }
          findMany: {
            args: Prisma.ArtifactVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactVersionPayload>[]
          }
          create: {
            args: Prisma.ArtifactVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactVersionPayload>
          }
          createMany: {
            args: Prisma.ArtifactVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtifactVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactVersionPayload>[]
          }
          delete: {
            args: Prisma.ArtifactVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactVersionPayload>
          }
          update: {
            args: Prisma.ArtifactVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactVersionPayload>
          }
          deleteMany: {
            args: Prisma.ArtifactVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtifactVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtifactVersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactVersionPayload>[]
          }
          upsert: {
            args: Prisma.ArtifactVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactVersionPayload>
          }
          aggregate: {
            args: Prisma.ArtifactVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtifactVersion>
          }
          groupBy: {
            args: Prisma.ArtifactVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtifactVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtifactVersionCountArgs<ExtArgs>
            result: $Utils.Optional<ArtifactVersionCountAggregateOutputType> | number
          }
        }
      }
      ReviewRequest: {
        payload: Prisma.$ReviewRequestPayload<ExtArgs>
        fields: Prisma.ReviewRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRequestPayload>
          }
          findFirst: {
            args: Prisma.ReviewRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRequestPayload>
          }
          findMany: {
            args: Prisma.ReviewRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRequestPayload>[]
          }
          create: {
            args: Prisma.ReviewRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRequestPayload>
          }
          createMany: {
            args: Prisma.ReviewRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRequestPayload>[]
          }
          delete: {
            args: Prisma.ReviewRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRequestPayload>
          }
          update: {
            args: Prisma.ReviewRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRequestPayload>
          }
          deleteMany: {
            args: Prisma.ReviewRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRequestPayload>[]
          }
          upsert: {
            args: Prisma.ReviewRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewRequestPayload>
          }
          aggregate: {
            args: Prisma.ReviewRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewRequest>
          }
          groupBy: {
            args: Prisma.ReviewRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewRequestCountAggregateOutputType> | number
          }
        }
      }
      InstallEvent: {
        payload: Prisma.$InstallEventPayload<ExtArgs>
        fields: Prisma.InstallEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstallEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstallEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallEventPayload>
          }
          findFirst: {
            args: Prisma.InstallEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstallEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallEventPayload>
          }
          findMany: {
            args: Prisma.InstallEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallEventPayload>[]
          }
          create: {
            args: Prisma.InstallEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallEventPayload>
          }
          createMany: {
            args: Prisma.InstallEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstallEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallEventPayload>[]
          }
          delete: {
            args: Prisma.InstallEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallEventPayload>
          }
          update: {
            args: Prisma.InstallEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallEventPayload>
          }
          deleteMany: {
            args: Prisma.InstallEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstallEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstallEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallEventPayload>[]
          }
          upsert: {
            args: Prisma.InstallEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallEventPayload>
          }
          aggregate: {
            args: Prisma.InstallEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstallEvent>
          }
          groupBy: {
            args: Prisma.InstallEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstallEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstallEventCountArgs<ExtArgs>
            result: $Utils.Optional<InstallEventCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    workspaceMember?: WorkspaceMemberOmit
    artifact?: ArtifactOmit
    artifactVersion?: ArtifactVersionOmit
    reviewRequest?: ReviewRequestOmit
    installEvent?: InstallEventOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ArtifactCountOutputType
   */

  export type ArtifactCountOutputType = {
    versions: number
    reviews: number
    installEvents: number
  }

  export type ArtifactCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | ArtifactCountOutputTypeCountVersionsArgs
    reviews?: boolean | ArtifactCountOutputTypeCountReviewsArgs
    installEvents?: boolean | ArtifactCountOutputTypeCountInstallEventsArgs
  }

  // Custom InputTypes
  /**
   * ArtifactCountOutputType without action
   */
  export type ArtifactCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactCountOutputType
     */
    select?: ArtifactCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtifactCountOutputType without action
   */
  export type ArtifactCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtifactVersionWhereInput
  }

  /**
   * ArtifactCountOutputType without action
   */
  export type ArtifactCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewRequestWhereInput
  }

  /**
   * ArtifactCountOutputType without action
   */
  export type ArtifactCountOutputTypeCountInstallEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstallEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model WorkspaceMember
   */

  export type AggregateWorkspaceMember = {
    _count: WorkspaceMemberCountAggregateOutputType | null
    _min: WorkspaceMemberMinAggregateOutputType | null
    _max: WorkspaceMemberMaxAggregateOutputType | null
  }

  export type WorkspaceMemberMinAggregateOutputType = {
    id: string | null
    email: string | null
    team: string | null
    passwordHash: string | null
    disabledAt: Date | null
    createdAt: Date | null
  }

  export type WorkspaceMemberMaxAggregateOutputType = {
    id: string | null
    email: string | null
    team: string | null
    passwordHash: string | null
    disabledAt: Date | null
    createdAt: Date | null
  }

  export type WorkspaceMemberCountAggregateOutputType = {
    id: number
    email: number
    team: number
    roles: number
    passwordHash: number
    disabledAt: number
    createdAt: number
    _all: number
  }


  export type WorkspaceMemberMinAggregateInputType = {
    id?: true
    email?: true
    team?: true
    passwordHash?: true
    disabledAt?: true
    createdAt?: true
  }

  export type WorkspaceMemberMaxAggregateInputType = {
    id?: true
    email?: true
    team?: true
    passwordHash?: true
    disabledAt?: true
    createdAt?: true
  }

  export type WorkspaceMemberCountAggregateInputType = {
    id?: true
    email?: true
    team?: true
    roles?: true
    passwordHash?: true
    disabledAt?: true
    createdAt?: true
    _all?: true
  }

  export type WorkspaceMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkspaceMember to aggregate.
     */
    where?: WorkspaceMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceMembers to fetch.
     */
    orderBy?: WorkspaceMemberOrderByWithRelationInput | WorkspaceMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkspaceMembers
    **/
    _count?: true | WorkspaceMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMemberMaxAggregateInputType
  }

  export type GetWorkspaceMemberAggregateType<T extends WorkspaceMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspaceMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspaceMember[P]>
      : GetScalarType<T[P], AggregateWorkspaceMember[P]>
  }




  export type WorkspaceMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceMemberWhereInput
    orderBy?: WorkspaceMemberOrderByWithAggregationInput | WorkspaceMemberOrderByWithAggregationInput[]
    by: WorkspaceMemberScalarFieldEnum[] | WorkspaceMemberScalarFieldEnum
    having?: WorkspaceMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceMemberCountAggregateInputType | true
    _min?: WorkspaceMemberMinAggregateInputType
    _max?: WorkspaceMemberMaxAggregateInputType
  }

  export type WorkspaceMemberGroupByOutputType = {
    id: string
    email: string
    team: string
    roles: JsonValue
    passwordHash: string
    disabledAt: Date | null
    createdAt: Date
    _count: WorkspaceMemberCountAggregateOutputType | null
    _min: WorkspaceMemberMinAggregateOutputType | null
    _max: WorkspaceMemberMaxAggregateOutputType | null
  }

  type GetWorkspaceMemberGroupByPayload<T extends WorkspaceMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceMemberGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceMemberGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    team?: boolean
    roles?: boolean
    passwordHash?: boolean
    disabledAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["workspaceMember"]>

  export type WorkspaceMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    team?: boolean
    roles?: boolean
    passwordHash?: boolean
    disabledAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["workspaceMember"]>

  export type WorkspaceMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    team?: boolean
    roles?: boolean
    passwordHash?: boolean
    disabledAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["workspaceMember"]>

  export type WorkspaceMemberSelectScalar = {
    id?: boolean
    email?: boolean
    team?: boolean
    roles?: boolean
    passwordHash?: boolean
    disabledAt?: boolean
    createdAt?: boolean
  }

  export type WorkspaceMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "team" | "roles" | "passwordHash" | "disabledAt" | "createdAt", ExtArgs["result"]["workspaceMember"]>

  export type $WorkspaceMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkspaceMember"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      team: string
      roles: Prisma.JsonValue
      passwordHash: string
      disabledAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["workspaceMember"]>
    composites: {}
  }

  type WorkspaceMemberGetPayload<S extends boolean | null | undefined | WorkspaceMemberDefaultArgs> = $Result.GetResult<Prisma.$WorkspaceMemberPayload, S>

  type WorkspaceMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkspaceMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceMemberCountAggregateInputType | true
    }

  export interface WorkspaceMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkspaceMember'], meta: { name: 'WorkspaceMember' } }
    /**
     * Find zero or one WorkspaceMember that matches the filter.
     * @param {WorkspaceMemberFindUniqueArgs} args - Arguments to find a WorkspaceMember
     * @example
     * // Get one WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceMemberFindUniqueArgs>(args: SelectSubset<T, WorkspaceMemberFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkspaceMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkspaceMemberFindUniqueOrThrowArgs} args - Arguments to find a WorkspaceMember
     * @example
     * // Get one WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkspaceMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberFindFirstArgs} args - Arguments to find a WorkspaceMember
     * @example
     * // Get one WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceMemberFindFirstArgs>(args?: SelectSubset<T, WorkspaceMemberFindFirstArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkspaceMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberFindFirstOrThrowArgs} args - Arguments to find a WorkspaceMember
     * @example
     * // Get one WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkspaceMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkspaceMembers
     * const workspaceMembers = await prisma.workspaceMember.findMany()
     * 
     * // Get first 10 WorkspaceMembers
     * const workspaceMembers = await prisma.workspaceMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceMemberWithIdOnly = await prisma.workspaceMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceMemberFindManyArgs>(args?: SelectSubset<T, WorkspaceMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkspaceMember.
     * @param {WorkspaceMemberCreateArgs} args - Arguments to create a WorkspaceMember.
     * @example
     * // Create one WorkspaceMember
     * const WorkspaceMember = await prisma.workspaceMember.create({
     *   data: {
     *     // ... data to create a WorkspaceMember
     *   }
     * })
     * 
     */
    create<T extends WorkspaceMemberCreateArgs>(args: SelectSubset<T, WorkspaceMemberCreateArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkspaceMembers.
     * @param {WorkspaceMemberCreateManyArgs} args - Arguments to create many WorkspaceMembers.
     * @example
     * // Create many WorkspaceMembers
     * const workspaceMember = await prisma.workspaceMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceMemberCreateManyArgs>(args?: SelectSubset<T, WorkspaceMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkspaceMembers and returns the data saved in the database.
     * @param {WorkspaceMemberCreateManyAndReturnArgs} args - Arguments to create many WorkspaceMembers.
     * @example
     * // Create many WorkspaceMembers
     * const workspaceMember = await prisma.workspaceMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkspaceMembers and only return the `id`
     * const workspaceMemberWithIdOnly = await prisma.workspaceMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkspaceMember.
     * @param {WorkspaceMemberDeleteArgs} args - Arguments to delete one WorkspaceMember.
     * @example
     * // Delete one WorkspaceMember
     * const WorkspaceMember = await prisma.workspaceMember.delete({
     *   where: {
     *     // ... filter to delete one WorkspaceMember
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceMemberDeleteArgs>(args: SelectSubset<T, WorkspaceMemberDeleteArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkspaceMember.
     * @param {WorkspaceMemberUpdateArgs} args - Arguments to update one WorkspaceMember.
     * @example
     * // Update one WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceMemberUpdateArgs>(args: SelectSubset<T, WorkspaceMemberUpdateArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkspaceMembers.
     * @param {WorkspaceMemberDeleteManyArgs} args - Arguments to filter WorkspaceMembers to delete.
     * @example
     * // Delete a few WorkspaceMembers
     * const { count } = await prisma.workspaceMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceMemberDeleteManyArgs>(args?: SelectSubset<T, WorkspaceMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkspaceMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkspaceMembers
     * const workspaceMember = await prisma.workspaceMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceMemberUpdateManyArgs>(args: SelectSubset<T, WorkspaceMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkspaceMembers and returns the data updated in the database.
     * @param {WorkspaceMemberUpdateManyAndReturnArgs} args - Arguments to update many WorkspaceMembers.
     * @example
     * // Update many WorkspaceMembers
     * const workspaceMember = await prisma.workspaceMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkspaceMembers and only return the `id`
     * const workspaceMemberWithIdOnly = await prisma.workspaceMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkspaceMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkspaceMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkspaceMember.
     * @param {WorkspaceMemberUpsertArgs} args - Arguments to update or create a WorkspaceMember.
     * @example
     * // Update or create a WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.upsert({
     *   create: {
     *     // ... data to create a WorkspaceMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkspaceMember we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceMemberUpsertArgs>(args: SelectSubset<T, WorkspaceMemberUpsertArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkspaceMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberCountArgs} args - Arguments to filter WorkspaceMembers to count.
     * @example
     * // Count the number of WorkspaceMembers
     * const count = await prisma.workspaceMember.count({
     *   where: {
     *     // ... the filter for the WorkspaceMembers we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceMemberCountArgs>(
      args?: Subset<T, WorkspaceMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkspaceMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkspaceMemberAggregateArgs>(args: Subset<T, WorkspaceMemberAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceMemberAggregateType<T>>

    /**
     * Group by WorkspaceMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkspaceMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceMemberGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkspaceMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkspaceMember model
   */
  readonly fields: WorkspaceMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkspaceMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkspaceMember model
   */
  interface WorkspaceMemberFieldRefs {
    readonly id: FieldRef<"WorkspaceMember", 'String'>
    readonly email: FieldRef<"WorkspaceMember", 'String'>
    readonly team: FieldRef<"WorkspaceMember", 'String'>
    readonly roles: FieldRef<"WorkspaceMember", 'Json'>
    readonly passwordHash: FieldRef<"WorkspaceMember", 'String'>
    readonly disabledAt: FieldRef<"WorkspaceMember", 'DateTime'>
    readonly createdAt: FieldRef<"WorkspaceMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkspaceMember findUnique
   */
  export type WorkspaceMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Filter, which WorkspaceMember to fetch.
     */
    where: WorkspaceMemberWhereUniqueInput
  }

  /**
   * WorkspaceMember findUniqueOrThrow
   */
  export type WorkspaceMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Filter, which WorkspaceMember to fetch.
     */
    where: WorkspaceMemberWhereUniqueInput
  }

  /**
   * WorkspaceMember findFirst
   */
  export type WorkspaceMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Filter, which WorkspaceMember to fetch.
     */
    where?: WorkspaceMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceMembers to fetch.
     */
    orderBy?: WorkspaceMemberOrderByWithRelationInput | WorkspaceMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceMembers.
     */
    cursor?: WorkspaceMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceMembers.
     */
    distinct?: WorkspaceMemberScalarFieldEnum | WorkspaceMemberScalarFieldEnum[]
  }

  /**
   * WorkspaceMember findFirstOrThrow
   */
  export type WorkspaceMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Filter, which WorkspaceMember to fetch.
     */
    where?: WorkspaceMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceMembers to fetch.
     */
    orderBy?: WorkspaceMemberOrderByWithRelationInput | WorkspaceMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceMembers.
     */
    cursor?: WorkspaceMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceMembers.
     */
    distinct?: WorkspaceMemberScalarFieldEnum | WorkspaceMemberScalarFieldEnum[]
  }

  /**
   * WorkspaceMember findMany
   */
  export type WorkspaceMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Filter, which WorkspaceMembers to fetch.
     */
    where?: WorkspaceMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceMembers to fetch.
     */
    orderBy?: WorkspaceMemberOrderByWithRelationInput | WorkspaceMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkspaceMembers.
     */
    cursor?: WorkspaceMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceMembers.
     */
    distinct?: WorkspaceMemberScalarFieldEnum | WorkspaceMemberScalarFieldEnum[]
  }

  /**
   * WorkspaceMember create
   */
  export type WorkspaceMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * The data needed to create a WorkspaceMember.
     */
    data: XOR<WorkspaceMemberCreateInput, WorkspaceMemberUncheckedCreateInput>
  }

  /**
   * WorkspaceMember createMany
   */
  export type WorkspaceMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkspaceMembers.
     */
    data: WorkspaceMemberCreateManyInput | WorkspaceMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkspaceMember createManyAndReturn
   */
  export type WorkspaceMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * The data used to create many WorkspaceMembers.
     */
    data: WorkspaceMemberCreateManyInput | WorkspaceMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkspaceMember update
   */
  export type WorkspaceMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * The data needed to update a WorkspaceMember.
     */
    data: XOR<WorkspaceMemberUpdateInput, WorkspaceMemberUncheckedUpdateInput>
    /**
     * Choose, which WorkspaceMember to update.
     */
    where: WorkspaceMemberWhereUniqueInput
  }

  /**
   * WorkspaceMember updateMany
   */
  export type WorkspaceMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkspaceMembers.
     */
    data: XOR<WorkspaceMemberUpdateManyMutationInput, WorkspaceMemberUncheckedUpdateManyInput>
    /**
     * Filter which WorkspaceMembers to update
     */
    where?: WorkspaceMemberWhereInput
    /**
     * Limit how many WorkspaceMembers to update.
     */
    limit?: number
  }

  /**
   * WorkspaceMember updateManyAndReturn
   */
  export type WorkspaceMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * The data used to update WorkspaceMembers.
     */
    data: XOR<WorkspaceMemberUpdateManyMutationInput, WorkspaceMemberUncheckedUpdateManyInput>
    /**
     * Filter which WorkspaceMembers to update
     */
    where?: WorkspaceMemberWhereInput
    /**
     * Limit how many WorkspaceMembers to update.
     */
    limit?: number
  }

  /**
   * WorkspaceMember upsert
   */
  export type WorkspaceMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * The filter to search for the WorkspaceMember to update in case it exists.
     */
    where: WorkspaceMemberWhereUniqueInput
    /**
     * In case the WorkspaceMember found by the `where` argument doesn't exist, create a new WorkspaceMember with this data.
     */
    create: XOR<WorkspaceMemberCreateInput, WorkspaceMemberUncheckedCreateInput>
    /**
     * In case the WorkspaceMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceMemberUpdateInput, WorkspaceMemberUncheckedUpdateInput>
  }

  /**
   * WorkspaceMember delete
   */
  export type WorkspaceMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Filter which WorkspaceMember to delete.
     */
    where: WorkspaceMemberWhereUniqueInput
  }

  /**
   * WorkspaceMember deleteMany
   */
  export type WorkspaceMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkspaceMembers to delete
     */
    where?: WorkspaceMemberWhereInput
    /**
     * Limit how many WorkspaceMembers to delete.
     */
    limit?: number
  }

  /**
   * WorkspaceMember without action
   */
  export type WorkspaceMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
  }


  /**
   * Model Artifact
   */

  export type AggregateArtifact = {
    _count: ArtifactCountAggregateOutputType | null
    _min: ArtifactMinAggregateOutputType | null
    _max: ArtifactMaxAggregateOutputType | null
  }

  export type ArtifactMinAggregateOutputType = {
    id: string | null
    type: string | null
    slug: string | null
    name: string | null
    summary: string | null
    description: string | null
    ownerTeam: string | null
    visibility: string | null
    status: string | null
    currentVersion: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtifactMaxAggregateOutputType = {
    id: string | null
    type: string | null
    slug: string | null
    name: string | null
    summary: string | null
    description: string | null
    ownerTeam: string | null
    visibility: string | null
    status: string | null
    currentVersion: string | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtifactCountAggregateOutputType = {
    id: number
    type: number
    slug: number
    name: number
    summary: number
    description: number
    ownerTeam: number
    visibility: number
    status: number
    currentVersion: number
    tags: number
    labels: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArtifactMinAggregateInputType = {
    id?: true
    type?: true
    slug?: true
    name?: true
    summary?: true
    description?: true
    ownerTeam?: true
    visibility?: true
    status?: true
    currentVersion?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtifactMaxAggregateInputType = {
    id?: true
    type?: true
    slug?: true
    name?: true
    summary?: true
    description?: true
    ownerTeam?: true
    visibility?: true
    status?: true
    currentVersion?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtifactCountAggregateInputType = {
    id?: true
    type?: true
    slug?: true
    name?: true
    summary?: true
    description?: true
    ownerTeam?: true
    visibility?: true
    status?: true
    currentVersion?: true
    tags?: true
    labels?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArtifactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artifact to aggregate.
     */
    where?: ArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artifacts to fetch.
     */
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artifacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artifacts
    **/
    _count?: true | ArtifactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtifactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtifactMaxAggregateInputType
  }

  export type GetArtifactAggregateType<T extends ArtifactAggregateArgs> = {
        [P in keyof T & keyof AggregateArtifact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtifact[P]>
      : GetScalarType<T[P], AggregateArtifact[P]>
  }




  export type ArtifactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtifactWhereInput
    orderBy?: ArtifactOrderByWithAggregationInput | ArtifactOrderByWithAggregationInput[]
    by: ArtifactScalarFieldEnum[] | ArtifactScalarFieldEnum
    having?: ArtifactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtifactCountAggregateInputType | true
    _min?: ArtifactMinAggregateInputType
    _max?: ArtifactMaxAggregateInputType
  }

  export type ArtifactGroupByOutputType = {
    id: string
    type: string
    slug: string
    name: string
    summary: string
    description: string
    ownerTeam: string
    visibility: string
    status: string
    currentVersion: string | null
    tags: JsonValue
    labels: JsonValue
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: ArtifactCountAggregateOutputType | null
    _min: ArtifactMinAggregateOutputType | null
    _max: ArtifactMaxAggregateOutputType | null
  }

  type GetArtifactGroupByPayload<T extends ArtifactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtifactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtifactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtifactGroupByOutputType[P]>
            : GetScalarType<T[P], ArtifactGroupByOutputType[P]>
        }
      >
    >


  export type ArtifactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    slug?: boolean
    name?: boolean
    summary?: boolean
    description?: boolean
    ownerTeam?: boolean
    visibility?: boolean
    status?: boolean
    currentVersion?: boolean
    tags?: boolean
    labels?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    versions?: boolean | Artifact$versionsArgs<ExtArgs>
    reviews?: boolean | Artifact$reviewsArgs<ExtArgs>
    installEvents?: boolean | Artifact$installEventsArgs<ExtArgs>
    _count?: boolean | ArtifactCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artifact"]>

  export type ArtifactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    slug?: boolean
    name?: boolean
    summary?: boolean
    description?: boolean
    ownerTeam?: boolean
    visibility?: boolean
    status?: boolean
    currentVersion?: boolean
    tags?: boolean
    labels?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["artifact"]>

  export type ArtifactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    slug?: boolean
    name?: boolean
    summary?: boolean
    description?: boolean
    ownerTeam?: boolean
    visibility?: boolean
    status?: boolean
    currentVersion?: boolean
    tags?: boolean
    labels?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["artifact"]>

  export type ArtifactSelectScalar = {
    id?: boolean
    type?: boolean
    slug?: boolean
    name?: boolean
    summary?: boolean
    description?: boolean
    ownerTeam?: boolean
    visibility?: boolean
    status?: boolean
    currentVersion?: boolean
    tags?: boolean
    labels?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArtifactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "slug" | "name" | "summary" | "description" | "ownerTeam" | "visibility" | "status" | "currentVersion" | "tags" | "labels" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["artifact"]>
  export type ArtifactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    versions?: boolean | Artifact$versionsArgs<ExtArgs>
    reviews?: boolean | Artifact$reviewsArgs<ExtArgs>
    installEvents?: boolean | Artifact$installEventsArgs<ExtArgs>
    _count?: boolean | ArtifactCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtifactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArtifactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArtifactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artifact"
    objects: {
      versions: Prisma.$ArtifactVersionPayload<ExtArgs>[]
      reviews: Prisma.$ReviewRequestPayload<ExtArgs>[]
      installEvents: Prisma.$InstallEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      slug: string
      name: string
      summary: string
      description: string
      ownerTeam: string
      visibility: string
      status: string
      currentVersion: string | null
      tags: Prisma.JsonValue
      labels: Prisma.JsonValue
      createdBy: string | null
      updatedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["artifact"]>
    composites: {}
  }

  type ArtifactGetPayload<S extends boolean | null | undefined | ArtifactDefaultArgs> = $Result.GetResult<Prisma.$ArtifactPayload, S>

  type ArtifactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtifactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtifactCountAggregateInputType | true
    }

  export interface ArtifactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artifact'], meta: { name: 'Artifact' } }
    /**
     * Find zero or one Artifact that matches the filter.
     * @param {ArtifactFindUniqueArgs} args - Arguments to find a Artifact
     * @example
     * // Get one Artifact
     * const artifact = await prisma.artifact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtifactFindUniqueArgs>(args: SelectSubset<T, ArtifactFindUniqueArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artifact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtifactFindUniqueOrThrowArgs} args - Arguments to find a Artifact
     * @example
     * // Get one Artifact
     * const artifact = await prisma.artifact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtifactFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtifactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artifact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactFindFirstArgs} args - Arguments to find a Artifact
     * @example
     * // Get one Artifact
     * const artifact = await prisma.artifact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtifactFindFirstArgs>(args?: SelectSubset<T, ArtifactFindFirstArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artifact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactFindFirstOrThrowArgs} args - Arguments to find a Artifact
     * @example
     * // Get one Artifact
     * const artifact = await prisma.artifact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtifactFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtifactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artifacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artifacts
     * const artifacts = await prisma.artifact.findMany()
     * 
     * // Get first 10 Artifacts
     * const artifacts = await prisma.artifact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artifactWithIdOnly = await prisma.artifact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtifactFindManyArgs>(args?: SelectSubset<T, ArtifactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artifact.
     * @param {ArtifactCreateArgs} args - Arguments to create a Artifact.
     * @example
     * // Create one Artifact
     * const Artifact = await prisma.artifact.create({
     *   data: {
     *     // ... data to create a Artifact
     *   }
     * })
     * 
     */
    create<T extends ArtifactCreateArgs>(args: SelectSubset<T, ArtifactCreateArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artifacts.
     * @param {ArtifactCreateManyArgs} args - Arguments to create many Artifacts.
     * @example
     * // Create many Artifacts
     * const artifact = await prisma.artifact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtifactCreateManyArgs>(args?: SelectSubset<T, ArtifactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artifacts and returns the data saved in the database.
     * @param {ArtifactCreateManyAndReturnArgs} args - Arguments to create many Artifacts.
     * @example
     * // Create many Artifacts
     * const artifact = await prisma.artifact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artifacts and only return the `id`
     * const artifactWithIdOnly = await prisma.artifact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtifactCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtifactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artifact.
     * @param {ArtifactDeleteArgs} args - Arguments to delete one Artifact.
     * @example
     * // Delete one Artifact
     * const Artifact = await prisma.artifact.delete({
     *   where: {
     *     // ... filter to delete one Artifact
     *   }
     * })
     * 
     */
    delete<T extends ArtifactDeleteArgs>(args: SelectSubset<T, ArtifactDeleteArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artifact.
     * @param {ArtifactUpdateArgs} args - Arguments to update one Artifact.
     * @example
     * // Update one Artifact
     * const artifact = await prisma.artifact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtifactUpdateArgs>(args: SelectSubset<T, ArtifactUpdateArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artifacts.
     * @param {ArtifactDeleteManyArgs} args - Arguments to filter Artifacts to delete.
     * @example
     * // Delete a few Artifacts
     * const { count } = await prisma.artifact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtifactDeleteManyArgs>(args?: SelectSubset<T, ArtifactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artifacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artifacts
     * const artifact = await prisma.artifact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtifactUpdateManyArgs>(args: SelectSubset<T, ArtifactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artifacts and returns the data updated in the database.
     * @param {ArtifactUpdateManyAndReturnArgs} args - Arguments to update many Artifacts.
     * @example
     * // Update many Artifacts
     * const artifact = await prisma.artifact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artifacts and only return the `id`
     * const artifactWithIdOnly = await prisma.artifact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtifactUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtifactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artifact.
     * @param {ArtifactUpsertArgs} args - Arguments to update or create a Artifact.
     * @example
     * // Update or create a Artifact
     * const artifact = await prisma.artifact.upsert({
     *   create: {
     *     // ... data to create a Artifact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artifact we want to update
     *   }
     * })
     */
    upsert<T extends ArtifactUpsertArgs>(args: SelectSubset<T, ArtifactUpsertArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artifacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactCountArgs} args - Arguments to filter Artifacts to count.
     * @example
     * // Count the number of Artifacts
     * const count = await prisma.artifact.count({
     *   where: {
     *     // ... the filter for the Artifacts we want to count
     *   }
     * })
    **/
    count<T extends ArtifactCountArgs>(
      args?: Subset<T, ArtifactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtifactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artifact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtifactAggregateArgs>(args: Subset<T, ArtifactAggregateArgs>): Prisma.PrismaPromise<GetArtifactAggregateType<T>>

    /**
     * Group by Artifact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtifactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtifactGroupByArgs['orderBy'] }
        : { orderBy?: ArtifactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtifactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtifactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artifact model
   */
  readonly fields: ArtifactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artifact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtifactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    versions<T extends Artifact$versionsArgs<ExtArgs> = {}>(args?: Subset<T, Artifact$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Artifact$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Artifact$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    installEvents<T extends Artifact$installEventsArgs<ExtArgs> = {}>(args?: Subset<T, Artifact$installEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Artifact model
   */
  interface ArtifactFieldRefs {
    readonly id: FieldRef<"Artifact", 'String'>
    readonly type: FieldRef<"Artifact", 'String'>
    readonly slug: FieldRef<"Artifact", 'String'>
    readonly name: FieldRef<"Artifact", 'String'>
    readonly summary: FieldRef<"Artifact", 'String'>
    readonly description: FieldRef<"Artifact", 'String'>
    readonly ownerTeam: FieldRef<"Artifact", 'String'>
    readonly visibility: FieldRef<"Artifact", 'String'>
    readonly status: FieldRef<"Artifact", 'String'>
    readonly currentVersion: FieldRef<"Artifact", 'String'>
    readonly tags: FieldRef<"Artifact", 'Json'>
    readonly labels: FieldRef<"Artifact", 'Json'>
    readonly createdBy: FieldRef<"Artifact", 'String'>
    readonly updatedBy: FieldRef<"Artifact", 'String'>
    readonly createdAt: FieldRef<"Artifact", 'DateTime'>
    readonly updatedAt: FieldRef<"Artifact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Artifact findUnique
   */
  export type ArtifactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * Filter, which Artifact to fetch.
     */
    where: ArtifactWhereUniqueInput
  }

  /**
   * Artifact findUniqueOrThrow
   */
  export type ArtifactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * Filter, which Artifact to fetch.
     */
    where: ArtifactWhereUniqueInput
  }

  /**
   * Artifact findFirst
   */
  export type ArtifactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * Filter, which Artifact to fetch.
     */
    where?: ArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artifacts to fetch.
     */
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artifacts.
     */
    cursor?: ArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artifacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artifacts.
     */
    distinct?: ArtifactScalarFieldEnum | ArtifactScalarFieldEnum[]
  }

  /**
   * Artifact findFirstOrThrow
   */
  export type ArtifactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * Filter, which Artifact to fetch.
     */
    where?: ArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artifacts to fetch.
     */
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artifacts.
     */
    cursor?: ArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artifacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artifacts.
     */
    distinct?: ArtifactScalarFieldEnum | ArtifactScalarFieldEnum[]
  }

  /**
   * Artifact findMany
   */
  export type ArtifactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * Filter, which Artifacts to fetch.
     */
    where?: ArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artifacts to fetch.
     */
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artifacts.
     */
    cursor?: ArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artifacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artifacts.
     */
    distinct?: ArtifactScalarFieldEnum | ArtifactScalarFieldEnum[]
  }

  /**
   * Artifact create
   */
  export type ArtifactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * The data needed to create a Artifact.
     */
    data: XOR<ArtifactCreateInput, ArtifactUncheckedCreateInput>
  }

  /**
   * Artifact createMany
   */
  export type ArtifactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artifacts.
     */
    data: ArtifactCreateManyInput | ArtifactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artifact createManyAndReturn
   */
  export type ArtifactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * The data used to create many Artifacts.
     */
    data: ArtifactCreateManyInput | ArtifactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artifact update
   */
  export type ArtifactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * The data needed to update a Artifact.
     */
    data: XOR<ArtifactUpdateInput, ArtifactUncheckedUpdateInput>
    /**
     * Choose, which Artifact to update.
     */
    where: ArtifactWhereUniqueInput
  }

  /**
   * Artifact updateMany
   */
  export type ArtifactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artifacts.
     */
    data: XOR<ArtifactUpdateManyMutationInput, ArtifactUncheckedUpdateManyInput>
    /**
     * Filter which Artifacts to update
     */
    where?: ArtifactWhereInput
    /**
     * Limit how many Artifacts to update.
     */
    limit?: number
  }

  /**
   * Artifact updateManyAndReturn
   */
  export type ArtifactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * The data used to update Artifacts.
     */
    data: XOR<ArtifactUpdateManyMutationInput, ArtifactUncheckedUpdateManyInput>
    /**
     * Filter which Artifacts to update
     */
    where?: ArtifactWhereInput
    /**
     * Limit how many Artifacts to update.
     */
    limit?: number
  }

  /**
   * Artifact upsert
   */
  export type ArtifactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * The filter to search for the Artifact to update in case it exists.
     */
    where: ArtifactWhereUniqueInput
    /**
     * In case the Artifact found by the `where` argument doesn't exist, create a new Artifact with this data.
     */
    create: XOR<ArtifactCreateInput, ArtifactUncheckedCreateInput>
    /**
     * In case the Artifact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtifactUpdateInput, ArtifactUncheckedUpdateInput>
  }

  /**
   * Artifact delete
   */
  export type ArtifactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
    /**
     * Filter which Artifact to delete.
     */
    where: ArtifactWhereUniqueInput
  }

  /**
   * Artifact deleteMany
   */
  export type ArtifactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artifacts to delete
     */
    where?: ArtifactWhereInput
    /**
     * Limit how many Artifacts to delete.
     */
    limit?: number
  }

  /**
   * Artifact.versions
   */
  export type Artifact$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactVersion
     */
    select?: ArtifactVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactVersion
     */
    omit?: ArtifactVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactVersionInclude<ExtArgs> | null
    where?: ArtifactVersionWhereInput
    orderBy?: ArtifactVersionOrderByWithRelationInput | ArtifactVersionOrderByWithRelationInput[]
    cursor?: ArtifactVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtifactVersionScalarFieldEnum | ArtifactVersionScalarFieldEnum[]
  }

  /**
   * Artifact.reviews
   */
  export type Artifact$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRequest
     */
    select?: ReviewRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRequest
     */
    omit?: ReviewRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRequestInclude<ExtArgs> | null
    where?: ReviewRequestWhereInput
    orderBy?: ReviewRequestOrderByWithRelationInput | ReviewRequestOrderByWithRelationInput[]
    cursor?: ReviewRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewRequestScalarFieldEnum | ReviewRequestScalarFieldEnum[]
  }

  /**
   * Artifact.installEvents
   */
  export type Artifact$installEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstallEvent
     */
    select?: InstallEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstallEvent
     */
    omit?: InstallEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallEventInclude<ExtArgs> | null
    where?: InstallEventWhereInput
    orderBy?: InstallEventOrderByWithRelationInput | InstallEventOrderByWithRelationInput[]
    cursor?: InstallEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstallEventScalarFieldEnum | InstallEventScalarFieldEnum[]
  }

  /**
   * Artifact without action
   */
  export type ArtifactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artifact
     */
    omit?: ArtifactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactInclude<ExtArgs> | null
  }


  /**
   * Model ArtifactVersion
   */

  export type AggregateArtifactVersion = {
    _count: ArtifactVersionCountAggregateOutputType | null
    _min: ArtifactVersionMinAggregateOutputType | null
    _max: ArtifactVersionMaxAggregateOutputType | null
  }

  export type ArtifactVersionMinAggregateOutputType = {
    id: string | null
    artifactId: string | null
    version: string | null
    packageUri: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type ArtifactVersionMaxAggregateOutputType = {
    id: string | null
    artifactId: string | null
    version: string | null
    packageUri: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type ArtifactVersionCountAggregateOutputType = {
    id: number
    artifactId: number
    version: number
    manifest: number
    packageUri: number
    checksums: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type ArtifactVersionMinAggregateInputType = {
    id?: true
    artifactId?: true
    version?: true
    packageUri?: true
    createdBy?: true
    createdAt?: true
  }

  export type ArtifactVersionMaxAggregateInputType = {
    id?: true
    artifactId?: true
    version?: true
    packageUri?: true
    createdBy?: true
    createdAt?: true
  }

  export type ArtifactVersionCountAggregateInputType = {
    id?: true
    artifactId?: true
    version?: true
    manifest?: true
    packageUri?: true
    checksums?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type ArtifactVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtifactVersion to aggregate.
     */
    where?: ArtifactVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtifactVersions to fetch.
     */
    orderBy?: ArtifactVersionOrderByWithRelationInput | ArtifactVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtifactVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtifactVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtifactVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtifactVersions
    **/
    _count?: true | ArtifactVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtifactVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtifactVersionMaxAggregateInputType
  }

  export type GetArtifactVersionAggregateType<T extends ArtifactVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateArtifactVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtifactVersion[P]>
      : GetScalarType<T[P], AggregateArtifactVersion[P]>
  }




  export type ArtifactVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtifactVersionWhereInput
    orderBy?: ArtifactVersionOrderByWithAggregationInput | ArtifactVersionOrderByWithAggregationInput[]
    by: ArtifactVersionScalarFieldEnum[] | ArtifactVersionScalarFieldEnum
    having?: ArtifactVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtifactVersionCountAggregateInputType | true
    _min?: ArtifactVersionMinAggregateInputType
    _max?: ArtifactVersionMaxAggregateInputType
  }

  export type ArtifactVersionGroupByOutputType = {
    id: string
    artifactId: string
    version: string
    manifest: JsonValue
    packageUri: string | null
    checksums: JsonValue
    createdBy: string | null
    createdAt: Date
    _count: ArtifactVersionCountAggregateOutputType | null
    _min: ArtifactVersionMinAggregateOutputType | null
    _max: ArtifactVersionMaxAggregateOutputType | null
  }

  type GetArtifactVersionGroupByPayload<T extends ArtifactVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtifactVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtifactVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtifactVersionGroupByOutputType[P]>
            : GetScalarType<T[P], ArtifactVersionGroupByOutputType[P]>
        }
      >
    >


  export type ArtifactVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artifactId?: boolean
    version?: boolean
    manifest?: boolean
    packageUri?: boolean
    checksums?: boolean
    createdBy?: boolean
    createdAt?: boolean
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artifactVersion"]>

  export type ArtifactVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artifactId?: boolean
    version?: boolean
    manifest?: boolean
    packageUri?: boolean
    checksums?: boolean
    createdBy?: boolean
    createdAt?: boolean
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artifactVersion"]>

  export type ArtifactVersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artifactId?: boolean
    version?: boolean
    manifest?: boolean
    packageUri?: boolean
    checksums?: boolean
    createdBy?: boolean
    createdAt?: boolean
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artifactVersion"]>

  export type ArtifactVersionSelectScalar = {
    id?: boolean
    artifactId?: boolean
    version?: boolean
    manifest?: boolean
    packageUri?: boolean
    checksums?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type ArtifactVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "artifactId" | "version" | "manifest" | "packageUri" | "checksums" | "createdBy" | "createdAt", ExtArgs["result"]["artifactVersion"]>
  export type ArtifactVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
  }
  export type ArtifactVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
  }
  export type ArtifactVersionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
  }

  export type $ArtifactVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArtifactVersion"
    objects: {
      artifact: Prisma.$ArtifactPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      artifactId: string
      version: string
      manifest: Prisma.JsonValue
      packageUri: string | null
      checksums: Prisma.JsonValue
      createdBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["artifactVersion"]>
    composites: {}
  }

  type ArtifactVersionGetPayload<S extends boolean | null | undefined | ArtifactVersionDefaultArgs> = $Result.GetResult<Prisma.$ArtifactVersionPayload, S>

  type ArtifactVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtifactVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtifactVersionCountAggregateInputType | true
    }

  export interface ArtifactVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArtifactVersion'], meta: { name: 'ArtifactVersion' } }
    /**
     * Find zero or one ArtifactVersion that matches the filter.
     * @param {ArtifactVersionFindUniqueArgs} args - Arguments to find a ArtifactVersion
     * @example
     * // Get one ArtifactVersion
     * const artifactVersion = await prisma.artifactVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtifactVersionFindUniqueArgs>(args: SelectSubset<T, ArtifactVersionFindUniqueArgs<ExtArgs>>): Prisma__ArtifactVersionClient<$Result.GetResult<Prisma.$ArtifactVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArtifactVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtifactVersionFindUniqueOrThrowArgs} args - Arguments to find a ArtifactVersion
     * @example
     * // Get one ArtifactVersion
     * const artifactVersion = await prisma.artifactVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtifactVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtifactVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtifactVersionClient<$Result.GetResult<Prisma.$ArtifactVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtifactVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactVersionFindFirstArgs} args - Arguments to find a ArtifactVersion
     * @example
     * // Get one ArtifactVersion
     * const artifactVersion = await prisma.artifactVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtifactVersionFindFirstArgs>(args?: SelectSubset<T, ArtifactVersionFindFirstArgs<ExtArgs>>): Prisma__ArtifactVersionClient<$Result.GetResult<Prisma.$ArtifactVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtifactVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactVersionFindFirstOrThrowArgs} args - Arguments to find a ArtifactVersion
     * @example
     * // Get one ArtifactVersion
     * const artifactVersion = await prisma.artifactVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtifactVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtifactVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtifactVersionClient<$Result.GetResult<Prisma.$ArtifactVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArtifactVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtifactVersions
     * const artifactVersions = await prisma.artifactVersion.findMany()
     * 
     * // Get first 10 ArtifactVersions
     * const artifactVersions = await prisma.artifactVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artifactVersionWithIdOnly = await prisma.artifactVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtifactVersionFindManyArgs>(args?: SelectSubset<T, ArtifactVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArtifactVersion.
     * @param {ArtifactVersionCreateArgs} args - Arguments to create a ArtifactVersion.
     * @example
     * // Create one ArtifactVersion
     * const ArtifactVersion = await prisma.artifactVersion.create({
     *   data: {
     *     // ... data to create a ArtifactVersion
     *   }
     * })
     * 
     */
    create<T extends ArtifactVersionCreateArgs>(args: SelectSubset<T, ArtifactVersionCreateArgs<ExtArgs>>): Prisma__ArtifactVersionClient<$Result.GetResult<Prisma.$ArtifactVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArtifactVersions.
     * @param {ArtifactVersionCreateManyArgs} args - Arguments to create many ArtifactVersions.
     * @example
     * // Create many ArtifactVersions
     * const artifactVersion = await prisma.artifactVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtifactVersionCreateManyArgs>(args?: SelectSubset<T, ArtifactVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArtifactVersions and returns the data saved in the database.
     * @param {ArtifactVersionCreateManyAndReturnArgs} args - Arguments to create many ArtifactVersions.
     * @example
     * // Create many ArtifactVersions
     * const artifactVersion = await prisma.artifactVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArtifactVersions and only return the `id`
     * const artifactVersionWithIdOnly = await prisma.artifactVersion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtifactVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtifactVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArtifactVersion.
     * @param {ArtifactVersionDeleteArgs} args - Arguments to delete one ArtifactVersion.
     * @example
     * // Delete one ArtifactVersion
     * const ArtifactVersion = await prisma.artifactVersion.delete({
     *   where: {
     *     // ... filter to delete one ArtifactVersion
     *   }
     * })
     * 
     */
    delete<T extends ArtifactVersionDeleteArgs>(args: SelectSubset<T, ArtifactVersionDeleteArgs<ExtArgs>>): Prisma__ArtifactVersionClient<$Result.GetResult<Prisma.$ArtifactVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArtifactVersion.
     * @param {ArtifactVersionUpdateArgs} args - Arguments to update one ArtifactVersion.
     * @example
     * // Update one ArtifactVersion
     * const artifactVersion = await prisma.artifactVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtifactVersionUpdateArgs>(args: SelectSubset<T, ArtifactVersionUpdateArgs<ExtArgs>>): Prisma__ArtifactVersionClient<$Result.GetResult<Prisma.$ArtifactVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArtifactVersions.
     * @param {ArtifactVersionDeleteManyArgs} args - Arguments to filter ArtifactVersions to delete.
     * @example
     * // Delete a few ArtifactVersions
     * const { count } = await prisma.artifactVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtifactVersionDeleteManyArgs>(args?: SelectSubset<T, ArtifactVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtifactVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtifactVersions
     * const artifactVersion = await prisma.artifactVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtifactVersionUpdateManyArgs>(args: SelectSubset<T, ArtifactVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtifactVersions and returns the data updated in the database.
     * @param {ArtifactVersionUpdateManyAndReturnArgs} args - Arguments to update many ArtifactVersions.
     * @example
     * // Update many ArtifactVersions
     * const artifactVersion = await prisma.artifactVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArtifactVersions and only return the `id`
     * const artifactVersionWithIdOnly = await prisma.artifactVersion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtifactVersionUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtifactVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArtifactVersion.
     * @param {ArtifactVersionUpsertArgs} args - Arguments to update or create a ArtifactVersion.
     * @example
     * // Update or create a ArtifactVersion
     * const artifactVersion = await prisma.artifactVersion.upsert({
     *   create: {
     *     // ... data to create a ArtifactVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtifactVersion we want to update
     *   }
     * })
     */
    upsert<T extends ArtifactVersionUpsertArgs>(args: SelectSubset<T, ArtifactVersionUpsertArgs<ExtArgs>>): Prisma__ArtifactVersionClient<$Result.GetResult<Prisma.$ArtifactVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArtifactVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactVersionCountArgs} args - Arguments to filter ArtifactVersions to count.
     * @example
     * // Count the number of ArtifactVersions
     * const count = await prisma.artifactVersion.count({
     *   where: {
     *     // ... the filter for the ArtifactVersions we want to count
     *   }
     * })
    **/
    count<T extends ArtifactVersionCountArgs>(
      args?: Subset<T, ArtifactVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtifactVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtifactVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtifactVersionAggregateArgs>(args: Subset<T, ArtifactVersionAggregateArgs>): Prisma.PrismaPromise<GetArtifactVersionAggregateType<T>>

    /**
     * Group by ArtifactVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtifactVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtifactVersionGroupByArgs['orderBy'] }
        : { orderBy?: ArtifactVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtifactVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtifactVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArtifactVersion model
   */
  readonly fields: ArtifactVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtifactVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtifactVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artifact<T extends ArtifactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtifactDefaultArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArtifactVersion model
   */
  interface ArtifactVersionFieldRefs {
    readonly id: FieldRef<"ArtifactVersion", 'String'>
    readonly artifactId: FieldRef<"ArtifactVersion", 'String'>
    readonly version: FieldRef<"ArtifactVersion", 'String'>
    readonly manifest: FieldRef<"ArtifactVersion", 'Json'>
    readonly packageUri: FieldRef<"ArtifactVersion", 'String'>
    readonly checksums: FieldRef<"ArtifactVersion", 'Json'>
    readonly createdBy: FieldRef<"ArtifactVersion", 'String'>
    readonly createdAt: FieldRef<"ArtifactVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ArtifactVersion findUnique
   */
  export type ArtifactVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactVersion
     */
    select?: ArtifactVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactVersion
     */
    omit?: ArtifactVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactVersionInclude<ExtArgs> | null
    /**
     * Filter, which ArtifactVersion to fetch.
     */
    where: ArtifactVersionWhereUniqueInput
  }

  /**
   * ArtifactVersion findUniqueOrThrow
   */
  export type ArtifactVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactVersion
     */
    select?: ArtifactVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactVersion
     */
    omit?: ArtifactVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactVersionInclude<ExtArgs> | null
    /**
     * Filter, which ArtifactVersion to fetch.
     */
    where: ArtifactVersionWhereUniqueInput
  }

  /**
   * ArtifactVersion findFirst
   */
  export type ArtifactVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactVersion
     */
    select?: ArtifactVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactVersion
     */
    omit?: ArtifactVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactVersionInclude<ExtArgs> | null
    /**
     * Filter, which ArtifactVersion to fetch.
     */
    where?: ArtifactVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtifactVersions to fetch.
     */
    orderBy?: ArtifactVersionOrderByWithRelationInput | ArtifactVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtifactVersions.
     */
    cursor?: ArtifactVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtifactVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtifactVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtifactVersions.
     */
    distinct?: ArtifactVersionScalarFieldEnum | ArtifactVersionScalarFieldEnum[]
  }

  /**
   * ArtifactVersion findFirstOrThrow
   */
  export type ArtifactVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactVersion
     */
    select?: ArtifactVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactVersion
     */
    omit?: ArtifactVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactVersionInclude<ExtArgs> | null
    /**
     * Filter, which ArtifactVersion to fetch.
     */
    where?: ArtifactVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtifactVersions to fetch.
     */
    orderBy?: ArtifactVersionOrderByWithRelationInput | ArtifactVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtifactVersions.
     */
    cursor?: ArtifactVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtifactVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtifactVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtifactVersions.
     */
    distinct?: ArtifactVersionScalarFieldEnum | ArtifactVersionScalarFieldEnum[]
  }

  /**
   * ArtifactVersion findMany
   */
  export type ArtifactVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactVersion
     */
    select?: ArtifactVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactVersion
     */
    omit?: ArtifactVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactVersionInclude<ExtArgs> | null
    /**
     * Filter, which ArtifactVersions to fetch.
     */
    where?: ArtifactVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtifactVersions to fetch.
     */
    orderBy?: ArtifactVersionOrderByWithRelationInput | ArtifactVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtifactVersions.
     */
    cursor?: ArtifactVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtifactVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtifactVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtifactVersions.
     */
    distinct?: ArtifactVersionScalarFieldEnum | ArtifactVersionScalarFieldEnum[]
  }

  /**
   * ArtifactVersion create
   */
  export type ArtifactVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactVersion
     */
    select?: ArtifactVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactVersion
     */
    omit?: ArtifactVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a ArtifactVersion.
     */
    data: XOR<ArtifactVersionCreateInput, ArtifactVersionUncheckedCreateInput>
  }

  /**
   * ArtifactVersion createMany
   */
  export type ArtifactVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArtifactVersions.
     */
    data: ArtifactVersionCreateManyInput | ArtifactVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArtifactVersion createManyAndReturn
   */
  export type ArtifactVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactVersion
     */
    select?: ArtifactVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactVersion
     */
    omit?: ArtifactVersionOmit<ExtArgs> | null
    /**
     * The data used to create many ArtifactVersions.
     */
    data: ArtifactVersionCreateManyInput | ArtifactVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtifactVersion update
   */
  export type ArtifactVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactVersion
     */
    select?: ArtifactVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactVersion
     */
    omit?: ArtifactVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a ArtifactVersion.
     */
    data: XOR<ArtifactVersionUpdateInput, ArtifactVersionUncheckedUpdateInput>
    /**
     * Choose, which ArtifactVersion to update.
     */
    where: ArtifactVersionWhereUniqueInput
  }

  /**
   * ArtifactVersion updateMany
   */
  export type ArtifactVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArtifactVersions.
     */
    data: XOR<ArtifactVersionUpdateManyMutationInput, ArtifactVersionUncheckedUpdateManyInput>
    /**
     * Filter which ArtifactVersions to update
     */
    where?: ArtifactVersionWhereInput
    /**
     * Limit how many ArtifactVersions to update.
     */
    limit?: number
  }

  /**
   * ArtifactVersion updateManyAndReturn
   */
  export type ArtifactVersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactVersion
     */
    select?: ArtifactVersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactVersion
     */
    omit?: ArtifactVersionOmit<ExtArgs> | null
    /**
     * The data used to update ArtifactVersions.
     */
    data: XOR<ArtifactVersionUpdateManyMutationInput, ArtifactVersionUncheckedUpdateManyInput>
    /**
     * Filter which ArtifactVersions to update
     */
    where?: ArtifactVersionWhereInput
    /**
     * Limit how many ArtifactVersions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactVersionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtifactVersion upsert
   */
  export type ArtifactVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactVersion
     */
    select?: ArtifactVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactVersion
     */
    omit?: ArtifactVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the ArtifactVersion to update in case it exists.
     */
    where: ArtifactVersionWhereUniqueInput
    /**
     * In case the ArtifactVersion found by the `where` argument doesn't exist, create a new ArtifactVersion with this data.
     */
    create: XOR<ArtifactVersionCreateInput, ArtifactVersionUncheckedCreateInput>
    /**
     * In case the ArtifactVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtifactVersionUpdateInput, ArtifactVersionUncheckedUpdateInput>
  }

  /**
   * ArtifactVersion delete
   */
  export type ArtifactVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactVersion
     */
    select?: ArtifactVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactVersion
     */
    omit?: ArtifactVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactVersionInclude<ExtArgs> | null
    /**
     * Filter which ArtifactVersion to delete.
     */
    where: ArtifactVersionWhereUniqueInput
  }

  /**
   * ArtifactVersion deleteMany
   */
  export type ArtifactVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtifactVersions to delete
     */
    where?: ArtifactVersionWhereInput
    /**
     * Limit how many ArtifactVersions to delete.
     */
    limit?: number
  }

  /**
   * ArtifactVersion without action
   */
  export type ArtifactVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtifactVersion
     */
    select?: ArtifactVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtifactVersion
     */
    omit?: ArtifactVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtifactVersionInclude<ExtArgs> | null
  }


  /**
   * Model ReviewRequest
   */

  export type AggregateReviewRequest = {
    _count: ReviewRequestCountAggregateOutputType | null
    _min: ReviewRequestMinAggregateOutputType | null
    _max: ReviewRequestMaxAggregateOutputType | null
  }

  export type ReviewRequestMinAggregateOutputType = {
    id: string | null
    artifactId: string | null
    version: string | null
    submittedBy: string | null
    reviewer: string | null
    status: string | null
    notes: string | null
    submittedAt: Date | null
    decidedAt: Date | null
  }

  export type ReviewRequestMaxAggregateOutputType = {
    id: string | null
    artifactId: string | null
    version: string | null
    submittedBy: string | null
    reviewer: string | null
    status: string | null
    notes: string | null
    submittedAt: Date | null
    decidedAt: Date | null
  }

  export type ReviewRequestCountAggregateOutputType = {
    id: number
    artifactId: number
    version: number
    submittedBy: number
    reviewer: number
    status: number
    notes: number
    submittedAt: number
    decidedAt: number
    _all: number
  }


  export type ReviewRequestMinAggregateInputType = {
    id?: true
    artifactId?: true
    version?: true
    submittedBy?: true
    reviewer?: true
    status?: true
    notes?: true
    submittedAt?: true
    decidedAt?: true
  }

  export type ReviewRequestMaxAggregateInputType = {
    id?: true
    artifactId?: true
    version?: true
    submittedBy?: true
    reviewer?: true
    status?: true
    notes?: true
    submittedAt?: true
    decidedAt?: true
  }

  export type ReviewRequestCountAggregateInputType = {
    id?: true
    artifactId?: true
    version?: true
    submittedBy?: true
    reviewer?: true
    status?: true
    notes?: true
    submittedAt?: true
    decidedAt?: true
    _all?: true
  }

  export type ReviewRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewRequest to aggregate.
     */
    where?: ReviewRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewRequests to fetch.
     */
    orderBy?: ReviewRequestOrderByWithRelationInput | ReviewRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewRequests
    **/
    _count?: true | ReviewRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewRequestMaxAggregateInputType
  }

  export type GetReviewRequestAggregateType<T extends ReviewRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewRequest[P]>
      : GetScalarType<T[P], AggregateReviewRequest[P]>
  }




  export type ReviewRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewRequestWhereInput
    orderBy?: ReviewRequestOrderByWithAggregationInput | ReviewRequestOrderByWithAggregationInput[]
    by: ReviewRequestScalarFieldEnum[] | ReviewRequestScalarFieldEnum
    having?: ReviewRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewRequestCountAggregateInputType | true
    _min?: ReviewRequestMinAggregateInputType
    _max?: ReviewRequestMaxAggregateInputType
  }

  export type ReviewRequestGroupByOutputType = {
    id: string
    artifactId: string
    version: string
    submittedBy: string
    reviewer: string | null
    status: string
    notes: string | null
    submittedAt: Date
    decidedAt: Date | null
    _count: ReviewRequestCountAggregateOutputType | null
    _min: ReviewRequestMinAggregateOutputType | null
    _max: ReviewRequestMaxAggregateOutputType | null
  }

  type GetReviewRequestGroupByPayload<T extends ReviewRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewRequestGroupByOutputType[P]>
        }
      >
    >


  export type ReviewRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artifactId?: boolean
    version?: boolean
    submittedBy?: boolean
    reviewer?: boolean
    status?: boolean
    notes?: boolean
    submittedAt?: boolean
    decidedAt?: boolean
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewRequest"]>

  export type ReviewRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artifactId?: boolean
    version?: boolean
    submittedBy?: boolean
    reviewer?: boolean
    status?: boolean
    notes?: boolean
    submittedAt?: boolean
    decidedAt?: boolean
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewRequest"]>

  export type ReviewRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artifactId?: boolean
    version?: boolean
    submittedBy?: boolean
    reviewer?: boolean
    status?: boolean
    notes?: boolean
    submittedAt?: boolean
    decidedAt?: boolean
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewRequest"]>

  export type ReviewRequestSelectScalar = {
    id?: boolean
    artifactId?: boolean
    version?: boolean
    submittedBy?: boolean
    reviewer?: boolean
    status?: boolean
    notes?: boolean
    submittedAt?: boolean
    decidedAt?: boolean
  }

  export type ReviewRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "artifactId" | "version" | "submittedBy" | "reviewer" | "status" | "notes" | "submittedAt" | "decidedAt", ExtArgs["result"]["reviewRequest"]>
  export type ReviewRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
  }
  export type ReviewRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
  }
  export type ReviewRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
  }

  export type $ReviewRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewRequest"
    objects: {
      artifact: Prisma.$ArtifactPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      artifactId: string
      version: string
      submittedBy: string
      reviewer: string | null
      status: string
      notes: string | null
      submittedAt: Date
      decidedAt: Date | null
    }, ExtArgs["result"]["reviewRequest"]>
    composites: {}
  }

  type ReviewRequestGetPayload<S extends boolean | null | undefined | ReviewRequestDefaultArgs> = $Result.GetResult<Prisma.$ReviewRequestPayload, S>

  type ReviewRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewRequestCountAggregateInputType | true
    }

  export interface ReviewRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewRequest'], meta: { name: 'ReviewRequest' } }
    /**
     * Find zero or one ReviewRequest that matches the filter.
     * @param {ReviewRequestFindUniqueArgs} args - Arguments to find a ReviewRequest
     * @example
     * // Get one ReviewRequest
     * const reviewRequest = await prisma.reviewRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewRequestFindUniqueArgs>(args: SelectSubset<T, ReviewRequestFindUniqueArgs<ExtArgs>>): Prisma__ReviewRequestClient<$Result.GetResult<Prisma.$ReviewRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewRequestFindUniqueOrThrowArgs} args - Arguments to find a ReviewRequest
     * @example
     * // Get one ReviewRequest
     * const reviewRequest = await prisma.reviewRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewRequestClient<$Result.GetResult<Prisma.$ReviewRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRequestFindFirstArgs} args - Arguments to find a ReviewRequest
     * @example
     * // Get one ReviewRequest
     * const reviewRequest = await prisma.reviewRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewRequestFindFirstArgs>(args?: SelectSubset<T, ReviewRequestFindFirstArgs<ExtArgs>>): Prisma__ReviewRequestClient<$Result.GetResult<Prisma.$ReviewRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRequestFindFirstOrThrowArgs} args - Arguments to find a ReviewRequest
     * @example
     * // Get one ReviewRequest
     * const reviewRequest = await prisma.reviewRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewRequestClient<$Result.GetResult<Prisma.$ReviewRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewRequests
     * const reviewRequests = await prisma.reviewRequest.findMany()
     * 
     * // Get first 10 ReviewRequests
     * const reviewRequests = await prisma.reviewRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewRequestWithIdOnly = await prisma.reviewRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewRequestFindManyArgs>(args?: SelectSubset<T, ReviewRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewRequest.
     * @param {ReviewRequestCreateArgs} args - Arguments to create a ReviewRequest.
     * @example
     * // Create one ReviewRequest
     * const ReviewRequest = await prisma.reviewRequest.create({
     *   data: {
     *     // ... data to create a ReviewRequest
     *   }
     * })
     * 
     */
    create<T extends ReviewRequestCreateArgs>(args: SelectSubset<T, ReviewRequestCreateArgs<ExtArgs>>): Prisma__ReviewRequestClient<$Result.GetResult<Prisma.$ReviewRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewRequests.
     * @param {ReviewRequestCreateManyArgs} args - Arguments to create many ReviewRequests.
     * @example
     * // Create many ReviewRequests
     * const reviewRequest = await prisma.reviewRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewRequestCreateManyArgs>(args?: SelectSubset<T, ReviewRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewRequests and returns the data saved in the database.
     * @param {ReviewRequestCreateManyAndReturnArgs} args - Arguments to create many ReviewRequests.
     * @example
     * // Create many ReviewRequests
     * const reviewRequest = await prisma.reviewRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewRequests and only return the `id`
     * const reviewRequestWithIdOnly = await prisma.reviewRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReviewRequest.
     * @param {ReviewRequestDeleteArgs} args - Arguments to delete one ReviewRequest.
     * @example
     * // Delete one ReviewRequest
     * const ReviewRequest = await prisma.reviewRequest.delete({
     *   where: {
     *     // ... filter to delete one ReviewRequest
     *   }
     * })
     * 
     */
    delete<T extends ReviewRequestDeleteArgs>(args: SelectSubset<T, ReviewRequestDeleteArgs<ExtArgs>>): Prisma__ReviewRequestClient<$Result.GetResult<Prisma.$ReviewRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewRequest.
     * @param {ReviewRequestUpdateArgs} args - Arguments to update one ReviewRequest.
     * @example
     * // Update one ReviewRequest
     * const reviewRequest = await prisma.reviewRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewRequestUpdateArgs>(args: SelectSubset<T, ReviewRequestUpdateArgs<ExtArgs>>): Prisma__ReviewRequestClient<$Result.GetResult<Prisma.$ReviewRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewRequests.
     * @param {ReviewRequestDeleteManyArgs} args - Arguments to filter ReviewRequests to delete.
     * @example
     * // Delete a few ReviewRequests
     * const { count } = await prisma.reviewRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewRequestDeleteManyArgs>(args?: SelectSubset<T, ReviewRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewRequests
     * const reviewRequest = await prisma.reviewRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewRequestUpdateManyArgs>(args: SelectSubset<T, ReviewRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewRequests and returns the data updated in the database.
     * @param {ReviewRequestUpdateManyAndReturnArgs} args - Arguments to update many ReviewRequests.
     * @example
     * // Update many ReviewRequests
     * const reviewRequest = await prisma.reviewRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReviewRequests and only return the `id`
     * const reviewRequestWithIdOnly = await prisma.reviewRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReviewRequest.
     * @param {ReviewRequestUpsertArgs} args - Arguments to update or create a ReviewRequest.
     * @example
     * // Update or create a ReviewRequest
     * const reviewRequest = await prisma.reviewRequest.upsert({
     *   create: {
     *     // ... data to create a ReviewRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewRequest we want to update
     *   }
     * })
     */
    upsert<T extends ReviewRequestUpsertArgs>(args: SelectSubset<T, ReviewRequestUpsertArgs<ExtArgs>>): Prisma__ReviewRequestClient<$Result.GetResult<Prisma.$ReviewRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRequestCountArgs} args - Arguments to filter ReviewRequests to count.
     * @example
     * // Count the number of ReviewRequests
     * const count = await prisma.reviewRequest.count({
     *   where: {
     *     // ... the filter for the ReviewRequests we want to count
     *   }
     * })
    **/
    count<T extends ReviewRequestCountArgs>(
      args?: Subset<T, ReviewRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewRequestAggregateArgs>(args: Subset<T, ReviewRequestAggregateArgs>): Prisma.PrismaPromise<GetReviewRequestAggregateType<T>>

    /**
     * Group by ReviewRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewRequestGroupByArgs['orderBy'] }
        : { orderBy?: ReviewRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewRequest model
   */
  readonly fields: ReviewRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artifact<T extends ArtifactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtifactDefaultArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReviewRequest model
   */
  interface ReviewRequestFieldRefs {
    readonly id: FieldRef<"ReviewRequest", 'String'>
    readonly artifactId: FieldRef<"ReviewRequest", 'String'>
    readonly version: FieldRef<"ReviewRequest", 'String'>
    readonly submittedBy: FieldRef<"ReviewRequest", 'String'>
    readonly reviewer: FieldRef<"ReviewRequest", 'String'>
    readonly status: FieldRef<"ReviewRequest", 'String'>
    readonly notes: FieldRef<"ReviewRequest", 'String'>
    readonly submittedAt: FieldRef<"ReviewRequest", 'DateTime'>
    readonly decidedAt: FieldRef<"ReviewRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReviewRequest findUnique
   */
  export type ReviewRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRequest
     */
    select?: ReviewRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRequest
     */
    omit?: ReviewRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRequestInclude<ExtArgs> | null
    /**
     * Filter, which ReviewRequest to fetch.
     */
    where: ReviewRequestWhereUniqueInput
  }

  /**
   * ReviewRequest findUniqueOrThrow
   */
  export type ReviewRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRequest
     */
    select?: ReviewRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRequest
     */
    omit?: ReviewRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRequestInclude<ExtArgs> | null
    /**
     * Filter, which ReviewRequest to fetch.
     */
    where: ReviewRequestWhereUniqueInput
  }

  /**
   * ReviewRequest findFirst
   */
  export type ReviewRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRequest
     */
    select?: ReviewRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRequest
     */
    omit?: ReviewRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRequestInclude<ExtArgs> | null
    /**
     * Filter, which ReviewRequest to fetch.
     */
    where?: ReviewRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewRequests to fetch.
     */
    orderBy?: ReviewRequestOrderByWithRelationInput | ReviewRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewRequests.
     */
    cursor?: ReviewRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewRequests.
     */
    distinct?: ReviewRequestScalarFieldEnum | ReviewRequestScalarFieldEnum[]
  }

  /**
   * ReviewRequest findFirstOrThrow
   */
  export type ReviewRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRequest
     */
    select?: ReviewRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRequest
     */
    omit?: ReviewRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRequestInclude<ExtArgs> | null
    /**
     * Filter, which ReviewRequest to fetch.
     */
    where?: ReviewRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewRequests to fetch.
     */
    orderBy?: ReviewRequestOrderByWithRelationInput | ReviewRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewRequests.
     */
    cursor?: ReviewRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewRequests.
     */
    distinct?: ReviewRequestScalarFieldEnum | ReviewRequestScalarFieldEnum[]
  }

  /**
   * ReviewRequest findMany
   */
  export type ReviewRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRequest
     */
    select?: ReviewRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRequest
     */
    omit?: ReviewRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRequestInclude<ExtArgs> | null
    /**
     * Filter, which ReviewRequests to fetch.
     */
    where?: ReviewRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewRequests to fetch.
     */
    orderBy?: ReviewRequestOrderByWithRelationInput | ReviewRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewRequests.
     */
    cursor?: ReviewRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewRequests.
     */
    distinct?: ReviewRequestScalarFieldEnum | ReviewRequestScalarFieldEnum[]
  }

  /**
   * ReviewRequest create
   */
  export type ReviewRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRequest
     */
    select?: ReviewRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRequest
     */
    omit?: ReviewRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewRequest.
     */
    data: XOR<ReviewRequestCreateInput, ReviewRequestUncheckedCreateInput>
  }

  /**
   * ReviewRequest createMany
   */
  export type ReviewRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewRequests.
     */
    data: ReviewRequestCreateManyInput | ReviewRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewRequest createManyAndReturn
   */
  export type ReviewRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRequest
     */
    select?: ReviewRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRequest
     */
    omit?: ReviewRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ReviewRequests.
     */
    data: ReviewRequestCreateManyInput | ReviewRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewRequest update
   */
  export type ReviewRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRequest
     */
    select?: ReviewRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRequest
     */
    omit?: ReviewRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewRequest.
     */
    data: XOR<ReviewRequestUpdateInput, ReviewRequestUncheckedUpdateInput>
    /**
     * Choose, which ReviewRequest to update.
     */
    where: ReviewRequestWhereUniqueInput
  }

  /**
   * ReviewRequest updateMany
   */
  export type ReviewRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewRequests.
     */
    data: XOR<ReviewRequestUpdateManyMutationInput, ReviewRequestUncheckedUpdateManyInput>
    /**
     * Filter which ReviewRequests to update
     */
    where?: ReviewRequestWhereInput
    /**
     * Limit how many ReviewRequests to update.
     */
    limit?: number
  }

  /**
   * ReviewRequest updateManyAndReturn
   */
  export type ReviewRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRequest
     */
    select?: ReviewRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRequest
     */
    omit?: ReviewRequestOmit<ExtArgs> | null
    /**
     * The data used to update ReviewRequests.
     */
    data: XOR<ReviewRequestUpdateManyMutationInput, ReviewRequestUncheckedUpdateManyInput>
    /**
     * Filter which ReviewRequests to update
     */
    where?: ReviewRequestWhereInput
    /**
     * Limit how many ReviewRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewRequest upsert
   */
  export type ReviewRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRequest
     */
    select?: ReviewRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRequest
     */
    omit?: ReviewRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewRequest to update in case it exists.
     */
    where: ReviewRequestWhereUniqueInput
    /**
     * In case the ReviewRequest found by the `where` argument doesn't exist, create a new ReviewRequest with this data.
     */
    create: XOR<ReviewRequestCreateInput, ReviewRequestUncheckedCreateInput>
    /**
     * In case the ReviewRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewRequestUpdateInput, ReviewRequestUncheckedUpdateInput>
  }

  /**
   * ReviewRequest delete
   */
  export type ReviewRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRequest
     */
    select?: ReviewRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRequest
     */
    omit?: ReviewRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRequestInclude<ExtArgs> | null
    /**
     * Filter which ReviewRequest to delete.
     */
    where: ReviewRequestWhereUniqueInput
  }

  /**
   * ReviewRequest deleteMany
   */
  export type ReviewRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewRequests to delete
     */
    where?: ReviewRequestWhereInput
    /**
     * Limit how many ReviewRequests to delete.
     */
    limit?: number
  }

  /**
   * ReviewRequest without action
   */
  export type ReviewRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewRequest
     */
    select?: ReviewRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewRequest
     */
    omit?: ReviewRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewRequestInclude<ExtArgs> | null
  }


  /**
   * Model InstallEvent
   */

  export type AggregateInstallEvent = {
    _count: InstallEventCountAggregateOutputType | null
    _min: InstallEventMinAggregateOutputType | null
    _max: InstallEventMaxAggregateOutputType | null
  }

  export type InstallEventMinAggregateOutputType = {
    id: string | null
    artifactId: string | null
    version: string | null
    installedBy: string | null
    targetAgent: string | null
    targetWorkspace: string | null
    createdAt: Date | null
  }

  export type InstallEventMaxAggregateOutputType = {
    id: string | null
    artifactId: string | null
    version: string | null
    installedBy: string | null
    targetAgent: string | null
    targetWorkspace: string | null
    createdAt: Date | null
  }

  export type InstallEventCountAggregateOutputType = {
    id: number
    artifactId: number
    version: number
    installedBy: number
    targetAgent: number
    targetWorkspace: number
    createdAt: number
    _all: number
  }


  export type InstallEventMinAggregateInputType = {
    id?: true
    artifactId?: true
    version?: true
    installedBy?: true
    targetAgent?: true
    targetWorkspace?: true
    createdAt?: true
  }

  export type InstallEventMaxAggregateInputType = {
    id?: true
    artifactId?: true
    version?: true
    installedBy?: true
    targetAgent?: true
    targetWorkspace?: true
    createdAt?: true
  }

  export type InstallEventCountAggregateInputType = {
    id?: true
    artifactId?: true
    version?: true
    installedBy?: true
    targetAgent?: true
    targetWorkspace?: true
    createdAt?: true
    _all?: true
  }

  export type InstallEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstallEvent to aggregate.
     */
    where?: InstallEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstallEvents to fetch.
     */
    orderBy?: InstallEventOrderByWithRelationInput | InstallEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstallEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstallEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstallEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstallEvents
    **/
    _count?: true | InstallEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstallEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstallEventMaxAggregateInputType
  }

  export type GetInstallEventAggregateType<T extends InstallEventAggregateArgs> = {
        [P in keyof T & keyof AggregateInstallEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstallEvent[P]>
      : GetScalarType<T[P], AggregateInstallEvent[P]>
  }




  export type InstallEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstallEventWhereInput
    orderBy?: InstallEventOrderByWithAggregationInput | InstallEventOrderByWithAggregationInput[]
    by: InstallEventScalarFieldEnum[] | InstallEventScalarFieldEnum
    having?: InstallEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstallEventCountAggregateInputType | true
    _min?: InstallEventMinAggregateInputType
    _max?: InstallEventMaxAggregateInputType
  }

  export type InstallEventGroupByOutputType = {
    id: string
    artifactId: string
    version: string
    installedBy: string | null
    targetAgent: string
    targetWorkspace: string | null
    createdAt: Date
    _count: InstallEventCountAggregateOutputType | null
    _min: InstallEventMinAggregateOutputType | null
    _max: InstallEventMaxAggregateOutputType | null
  }

  type GetInstallEventGroupByPayload<T extends InstallEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstallEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstallEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstallEventGroupByOutputType[P]>
            : GetScalarType<T[P], InstallEventGroupByOutputType[P]>
        }
      >
    >


  export type InstallEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artifactId?: boolean
    version?: boolean
    installedBy?: boolean
    targetAgent?: boolean
    targetWorkspace?: boolean
    createdAt?: boolean
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["installEvent"]>

  export type InstallEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artifactId?: boolean
    version?: boolean
    installedBy?: boolean
    targetAgent?: boolean
    targetWorkspace?: boolean
    createdAt?: boolean
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["installEvent"]>

  export type InstallEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artifactId?: boolean
    version?: boolean
    installedBy?: boolean
    targetAgent?: boolean
    targetWorkspace?: boolean
    createdAt?: boolean
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["installEvent"]>

  export type InstallEventSelectScalar = {
    id?: boolean
    artifactId?: boolean
    version?: boolean
    installedBy?: boolean
    targetAgent?: boolean
    targetWorkspace?: boolean
    createdAt?: boolean
  }

  export type InstallEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "artifactId" | "version" | "installedBy" | "targetAgent" | "targetWorkspace" | "createdAt", ExtArgs["result"]["installEvent"]>
  export type InstallEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
  }
  export type InstallEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
  }
  export type InstallEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artifact?: boolean | ArtifactDefaultArgs<ExtArgs>
  }

  export type $InstallEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstallEvent"
    objects: {
      artifact: Prisma.$ArtifactPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      artifactId: string
      version: string
      installedBy: string | null
      targetAgent: string
      targetWorkspace: string | null
      createdAt: Date
    }, ExtArgs["result"]["installEvent"]>
    composites: {}
  }

  type InstallEventGetPayload<S extends boolean | null | undefined | InstallEventDefaultArgs> = $Result.GetResult<Prisma.$InstallEventPayload, S>

  type InstallEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstallEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstallEventCountAggregateInputType | true
    }

  export interface InstallEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstallEvent'], meta: { name: 'InstallEvent' } }
    /**
     * Find zero or one InstallEvent that matches the filter.
     * @param {InstallEventFindUniqueArgs} args - Arguments to find a InstallEvent
     * @example
     * // Get one InstallEvent
     * const installEvent = await prisma.installEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstallEventFindUniqueArgs>(args: SelectSubset<T, InstallEventFindUniqueArgs<ExtArgs>>): Prisma__InstallEventClient<$Result.GetResult<Prisma.$InstallEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstallEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstallEventFindUniqueOrThrowArgs} args - Arguments to find a InstallEvent
     * @example
     * // Get one InstallEvent
     * const installEvent = await prisma.installEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstallEventFindUniqueOrThrowArgs>(args: SelectSubset<T, InstallEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstallEventClient<$Result.GetResult<Prisma.$InstallEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstallEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallEventFindFirstArgs} args - Arguments to find a InstallEvent
     * @example
     * // Get one InstallEvent
     * const installEvent = await prisma.installEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstallEventFindFirstArgs>(args?: SelectSubset<T, InstallEventFindFirstArgs<ExtArgs>>): Prisma__InstallEventClient<$Result.GetResult<Prisma.$InstallEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstallEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallEventFindFirstOrThrowArgs} args - Arguments to find a InstallEvent
     * @example
     * // Get one InstallEvent
     * const installEvent = await prisma.installEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstallEventFindFirstOrThrowArgs>(args?: SelectSubset<T, InstallEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstallEventClient<$Result.GetResult<Prisma.$InstallEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstallEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstallEvents
     * const installEvents = await prisma.installEvent.findMany()
     * 
     * // Get first 10 InstallEvents
     * const installEvents = await prisma.installEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const installEventWithIdOnly = await prisma.installEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstallEventFindManyArgs>(args?: SelectSubset<T, InstallEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstallEvent.
     * @param {InstallEventCreateArgs} args - Arguments to create a InstallEvent.
     * @example
     * // Create one InstallEvent
     * const InstallEvent = await prisma.installEvent.create({
     *   data: {
     *     // ... data to create a InstallEvent
     *   }
     * })
     * 
     */
    create<T extends InstallEventCreateArgs>(args: SelectSubset<T, InstallEventCreateArgs<ExtArgs>>): Prisma__InstallEventClient<$Result.GetResult<Prisma.$InstallEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstallEvents.
     * @param {InstallEventCreateManyArgs} args - Arguments to create many InstallEvents.
     * @example
     * // Create many InstallEvents
     * const installEvent = await prisma.installEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstallEventCreateManyArgs>(args?: SelectSubset<T, InstallEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstallEvents and returns the data saved in the database.
     * @param {InstallEventCreateManyAndReturnArgs} args - Arguments to create many InstallEvents.
     * @example
     * // Create many InstallEvents
     * const installEvent = await prisma.installEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstallEvents and only return the `id`
     * const installEventWithIdOnly = await prisma.installEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstallEventCreateManyAndReturnArgs>(args?: SelectSubset<T, InstallEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstallEvent.
     * @param {InstallEventDeleteArgs} args - Arguments to delete one InstallEvent.
     * @example
     * // Delete one InstallEvent
     * const InstallEvent = await prisma.installEvent.delete({
     *   where: {
     *     // ... filter to delete one InstallEvent
     *   }
     * })
     * 
     */
    delete<T extends InstallEventDeleteArgs>(args: SelectSubset<T, InstallEventDeleteArgs<ExtArgs>>): Prisma__InstallEventClient<$Result.GetResult<Prisma.$InstallEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstallEvent.
     * @param {InstallEventUpdateArgs} args - Arguments to update one InstallEvent.
     * @example
     * // Update one InstallEvent
     * const installEvent = await prisma.installEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstallEventUpdateArgs>(args: SelectSubset<T, InstallEventUpdateArgs<ExtArgs>>): Prisma__InstallEventClient<$Result.GetResult<Prisma.$InstallEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstallEvents.
     * @param {InstallEventDeleteManyArgs} args - Arguments to filter InstallEvents to delete.
     * @example
     * // Delete a few InstallEvents
     * const { count } = await prisma.installEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstallEventDeleteManyArgs>(args?: SelectSubset<T, InstallEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstallEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstallEvents
     * const installEvent = await prisma.installEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstallEventUpdateManyArgs>(args: SelectSubset<T, InstallEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstallEvents and returns the data updated in the database.
     * @param {InstallEventUpdateManyAndReturnArgs} args - Arguments to update many InstallEvents.
     * @example
     * // Update many InstallEvents
     * const installEvent = await prisma.installEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstallEvents and only return the `id`
     * const installEventWithIdOnly = await prisma.installEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstallEventUpdateManyAndReturnArgs>(args: SelectSubset<T, InstallEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstallEvent.
     * @param {InstallEventUpsertArgs} args - Arguments to update or create a InstallEvent.
     * @example
     * // Update or create a InstallEvent
     * const installEvent = await prisma.installEvent.upsert({
     *   create: {
     *     // ... data to create a InstallEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstallEvent we want to update
     *   }
     * })
     */
    upsert<T extends InstallEventUpsertArgs>(args: SelectSubset<T, InstallEventUpsertArgs<ExtArgs>>): Prisma__InstallEventClient<$Result.GetResult<Prisma.$InstallEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstallEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallEventCountArgs} args - Arguments to filter InstallEvents to count.
     * @example
     * // Count the number of InstallEvents
     * const count = await prisma.installEvent.count({
     *   where: {
     *     // ... the filter for the InstallEvents we want to count
     *   }
     * })
    **/
    count<T extends InstallEventCountArgs>(
      args?: Subset<T, InstallEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstallEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstallEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstallEventAggregateArgs>(args: Subset<T, InstallEventAggregateArgs>): Prisma.PrismaPromise<GetInstallEventAggregateType<T>>

    /**
     * Group by InstallEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstallEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstallEventGroupByArgs['orderBy'] }
        : { orderBy?: InstallEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstallEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstallEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstallEvent model
   */
  readonly fields: InstallEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstallEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstallEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artifact<T extends ArtifactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtifactDefaultArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InstallEvent model
   */
  interface InstallEventFieldRefs {
    readonly id: FieldRef<"InstallEvent", 'String'>
    readonly artifactId: FieldRef<"InstallEvent", 'String'>
    readonly version: FieldRef<"InstallEvent", 'String'>
    readonly installedBy: FieldRef<"InstallEvent", 'String'>
    readonly targetAgent: FieldRef<"InstallEvent", 'String'>
    readonly targetWorkspace: FieldRef<"InstallEvent", 'String'>
    readonly createdAt: FieldRef<"InstallEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InstallEvent findUnique
   */
  export type InstallEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstallEvent
     */
    select?: InstallEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstallEvent
     */
    omit?: InstallEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallEventInclude<ExtArgs> | null
    /**
     * Filter, which InstallEvent to fetch.
     */
    where: InstallEventWhereUniqueInput
  }

  /**
   * InstallEvent findUniqueOrThrow
   */
  export type InstallEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstallEvent
     */
    select?: InstallEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstallEvent
     */
    omit?: InstallEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallEventInclude<ExtArgs> | null
    /**
     * Filter, which InstallEvent to fetch.
     */
    where: InstallEventWhereUniqueInput
  }

  /**
   * InstallEvent findFirst
   */
  export type InstallEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstallEvent
     */
    select?: InstallEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstallEvent
     */
    omit?: InstallEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallEventInclude<ExtArgs> | null
    /**
     * Filter, which InstallEvent to fetch.
     */
    where?: InstallEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstallEvents to fetch.
     */
    orderBy?: InstallEventOrderByWithRelationInput | InstallEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstallEvents.
     */
    cursor?: InstallEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstallEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstallEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstallEvents.
     */
    distinct?: InstallEventScalarFieldEnum | InstallEventScalarFieldEnum[]
  }

  /**
   * InstallEvent findFirstOrThrow
   */
  export type InstallEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstallEvent
     */
    select?: InstallEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstallEvent
     */
    omit?: InstallEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallEventInclude<ExtArgs> | null
    /**
     * Filter, which InstallEvent to fetch.
     */
    where?: InstallEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstallEvents to fetch.
     */
    orderBy?: InstallEventOrderByWithRelationInput | InstallEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstallEvents.
     */
    cursor?: InstallEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstallEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstallEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstallEvents.
     */
    distinct?: InstallEventScalarFieldEnum | InstallEventScalarFieldEnum[]
  }

  /**
   * InstallEvent findMany
   */
  export type InstallEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstallEvent
     */
    select?: InstallEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstallEvent
     */
    omit?: InstallEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallEventInclude<ExtArgs> | null
    /**
     * Filter, which InstallEvents to fetch.
     */
    where?: InstallEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstallEvents to fetch.
     */
    orderBy?: InstallEventOrderByWithRelationInput | InstallEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstallEvents.
     */
    cursor?: InstallEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstallEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstallEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstallEvents.
     */
    distinct?: InstallEventScalarFieldEnum | InstallEventScalarFieldEnum[]
  }

  /**
   * InstallEvent create
   */
  export type InstallEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstallEvent
     */
    select?: InstallEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstallEvent
     */
    omit?: InstallEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallEventInclude<ExtArgs> | null
    /**
     * The data needed to create a InstallEvent.
     */
    data: XOR<InstallEventCreateInput, InstallEventUncheckedCreateInput>
  }

  /**
   * InstallEvent createMany
   */
  export type InstallEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstallEvents.
     */
    data: InstallEventCreateManyInput | InstallEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstallEvent createManyAndReturn
   */
  export type InstallEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstallEvent
     */
    select?: InstallEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstallEvent
     */
    omit?: InstallEventOmit<ExtArgs> | null
    /**
     * The data used to create many InstallEvents.
     */
    data: InstallEventCreateManyInput | InstallEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstallEvent update
   */
  export type InstallEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstallEvent
     */
    select?: InstallEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstallEvent
     */
    omit?: InstallEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallEventInclude<ExtArgs> | null
    /**
     * The data needed to update a InstallEvent.
     */
    data: XOR<InstallEventUpdateInput, InstallEventUncheckedUpdateInput>
    /**
     * Choose, which InstallEvent to update.
     */
    where: InstallEventWhereUniqueInput
  }

  /**
   * InstallEvent updateMany
   */
  export type InstallEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstallEvents.
     */
    data: XOR<InstallEventUpdateManyMutationInput, InstallEventUncheckedUpdateManyInput>
    /**
     * Filter which InstallEvents to update
     */
    where?: InstallEventWhereInput
    /**
     * Limit how many InstallEvents to update.
     */
    limit?: number
  }

  /**
   * InstallEvent updateManyAndReturn
   */
  export type InstallEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstallEvent
     */
    select?: InstallEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstallEvent
     */
    omit?: InstallEventOmit<ExtArgs> | null
    /**
     * The data used to update InstallEvents.
     */
    data: XOR<InstallEventUpdateManyMutationInput, InstallEventUncheckedUpdateManyInput>
    /**
     * Filter which InstallEvents to update
     */
    where?: InstallEventWhereInput
    /**
     * Limit how many InstallEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstallEvent upsert
   */
  export type InstallEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstallEvent
     */
    select?: InstallEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstallEvent
     */
    omit?: InstallEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallEventInclude<ExtArgs> | null
    /**
     * The filter to search for the InstallEvent to update in case it exists.
     */
    where: InstallEventWhereUniqueInput
    /**
     * In case the InstallEvent found by the `where` argument doesn't exist, create a new InstallEvent with this data.
     */
    create: XOR<InstallEventCreateInput, InstallEventUncheckedCreateInput>
    /**
     * In case the InstallEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstallEventUpdateInput, InstallEventUncheckedUpdateInput>
  }

  /**
   * InstallEvent delete
   */
  export type InstallEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstallEvent
     */
    select?: InstallEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstallEvent
     */
    omit?: InstallEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallEventInclude<ExtArgs> | null
    /**
     * Filter which InstallEvent to delete.
     */
    where: InstallEventWhereUniqueInput
  }

  /**
   * InstallEvent deleteMany
   */
  export type InstallEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstallEvents to delete
     */
    where?: InstallEventWhereInput
    /**
     * Limit how many InstallEvents to delete.
     */
    limit?: number
  }

  /**
   * InstallEvent without action
   */
  export type InstallEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstallEvent
     */
    select?: InstallEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstallEvent
     */
    omit?: InstallEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallEventInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    action: string | null
    actor: string | null
    resourceType: string | null
    resourceId: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    actor: string | null
    resourceType: string | null
    resourceId: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    action: number
    actor: number
    resourceType: number
    resourceId: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    action?: true
    actor?: true
    resourceType?: true
    resourceId?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    action?: true
    actor?: true
    resourceType?: true
    resourceId?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    action?: true
    actor?: true
    resourceType?: true
    resourceId?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    action: string
    actor: string
    resourceType: string
    resourceId: string | null
    metadata: JsonValue
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    actor?: boolean
    resourceType?: boolean
    resourceId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    actor?: boolean
    resourceType?: boolean
    resourceId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    actor?: boolean
    resourceType?: boolean
    resourceId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    action?: boolean
    actor?: boolean
    resourceType?: boolean
    resourceId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "actor" | "resourceType" | "resourceId" | "metadata" | "createdAt", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      actor: string
      resourceType: string
      resourceId: string | null
      metadata: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly actor: FieldRef<"AuditLog", 'String'>
    readonly resourceType: FieldRef<"AuditLog", 'String'>
    readonly resourceId: FieldRef<"AuditLog", 'String'>
    readonly metadata: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WorkspaceMemberScalarFieldEnum: {
    id: 'id',
    email: 'email',
    team: 'team',
    roles: 'roles',
    passwordHash: 'passwordHash',
    disabledAt: 'disabledAt',
    createdAt: 'createdAt'
  };

  export type WorkspaceMemberScalarFieldEnum = (typeof WorkspaceMemberScalarFieldEnum)[keyof typeof WorkspaceMemberScalarFieldEnum]


  export const ArtifactScalarFieldEnum: {
    id: 'id',
    type: 'type',
    slug: 'slug',
    name: 'name',
    summary: 'summary',
    description: 'description',
    ownerTeam: 'ownerTeam',
    visibility: 'visibility',
    status: 'status',
    currentVersion: 'currentVersion',
    tags: 'tags',
    labels: 'labels',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArtifactScalarFieldEnum = (typeof ArtifactScalarFieldEnum)[keyof typeof ArtifactScalarFieldEnum]


  export const ArtifactVersionScalarFieldEnum: {
    id: 'id',
    artifactId: 'artifactId',
    version: 'version',
    manifest: 'manifest',
    packageUri: 'packageUri',
    checksums: 'checksums',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type ArtifactVersionScalarFieldEnum = (typeof ArtifactVersionScalarFieldEnum)[keyof typeof ArtifactVersionScalarFieldEnum]


  export const ReviewRequestScalarFieldEnum: {
    id: 'id',
    artifactId: 'artifactId',
    version: 'version',
    submittedBy: 'submittedBy',
    reviewer: 'reviewer',
    status: 'status',
    notes: 'notes',
    submittedAt: 'submittedAt',
    decidedAt: 'decidedAt'
  };

  export type ReviewRequestScalarFieldEnum = (typeof ReviewRequestScalarFieldEnum)[keyof typeof ReviewRequestScalarFieldEnum]


  export const InstallEventScalarFieldEnum: {
    id: 'id',
    artifactId: 'artifactId',
    version: 'version',
    installedBy: 'installedBy',
    targetAgent: 'targetAgent',
    targetWorkspace: 'targetWorkspace',
    createdAt: 'createdAt'
  };

  export type InstallEventScalarFieldEnum = (typeof InstallEventScalarFieldEnum)[keyof typeof InstallEventScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    actor: 'actor',
    resourceType: 'resourceType',
    resourceId: 'resourceId',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type WorkspaceMemberWhereInput = {
    AND?: WorkspaceMemberWhereInput | WorkspaceMemberWhereInput[]
    OR?: WorkspaceMemberWhereInput[]
    NOT?: WorkspaceMemberWhereInput | WorkspaceMemberWhereInput[]
    id?: StringFilter<"WorkspaceMember"> | string
    email?: StringFilter<"WorkspaceMember"> | string
    team?: StringFilter<"WorkspaceMember"> | string
    roles?: JsonFilter<"WorkspaceMember">
    passwordHash?: StringFilter<"WorkspaceMember"> | string
    disabledAt?: DateTimeNullableFilter<"WorkspaceMember"> | Date | string | null
    createdAt?: DateTimeFilter<"WorkspaceMember"> | Date | string
  }

  export type WorkspaceMemberOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    team?: SortOrder
    roles?: SortOrder
    passwordHash?: SortOrder
    disabledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type WorkspaceMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: WorkspaceMemberWhereInput | WorkspaceMemberWhereInput[]
    OR?: WorkspaceMemberWhereInput[]
    NOT?: WorkspaceMemberWhereInput | WorkspaceMemberWhereInput[]
    team?: StringFilter<"WorkspaceMember"> | string
    roles?: JsonFilter<"WorkspaceMember">
    passwordHash?: StringFilter<"WorkspaceMember"> | string
    disabledAt?: DateTimeNullableFilter<"WorkspaceMember"> | Date | string | null
    createdAt?: DateTimeFilter<"WorkspaceMember"> | Date | string
  }, "id" | "email">

  export type WorkspaceMemberOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    team?: SortOrder
    roles?: SortOrder
    passwordHash?: SortOrder
    disabledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WorkspaceMemberCountOrderByAggregateInput
    _max?: WorkspaceMemberMaxOrderByAggregateInput
    _min?: WorkspaceMemberMinOrderByAggregateInput
  }

  export type WorkspaceMemberScalarWhereWithAggregatesInput = {
    AND?: WorkspaceMemberScalarWhereWithAggregatesInput | WorkspaceMemberScalarWhereWithAggregatesInput[]
    OR?: WorkspaceMemberScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceMemberScalarWhereWithAggregatesInput | WorkspaceMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkspaceMember"> | string
    email?: StringWithAggregatesFilter<"WorkspaceMember"> | string
    team?: StringWithAggregatesFilter<"WorkspaceMember"> | string
    roles?: JsonWithAggregatesFilter<"WorkspaceMember">
    passwordHash?: StringWithAggregatesFilter<"WorkspaceMember"> | string
    disabledAt?: DateTimeNullableWithAggregatesFilter<"WorkspaceMember"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkspaceMember"> | Date | string
  }

  export type ArtifactWhereInput = {
    AND?: ArtifactWhereInput | ArtifactWhereInput[]
    OR?: ArtifactWhereInput[]
    NOT?: ArtifactWhereInput | ArtifactWhereInput[]
    id?: StringFilter<"Artifact"> | string
    type?: StringFilter<"Artifact"> | string
    slug?: StringFilter<"Artifact"> | string
    name?: StringFilter<"Artifact"> | string
    summary?: StringFilter<"Artifact"> | string
    description?: StringFilter<"Artifact"> | string
    ownerTeam?: StringFilter<"Artifact"> | string
    visibility?: StringFilter<"Artifact"> | string
    status?: StringFilter<"Artifact"> | string
    currentVersion?: StringNullableFilter<"Artifact"> | string | null
    tags?: JsonFilter<"Artifact">
    labels?: JsonFilter<"Artifact">
    createdBy?: StringNullableFilter<"Artifact"> | string | null
    updatedBy?: StringNullableFilter<"Artifact"> | string | null
    createdAt?: DateTimeFilter<"Artifact"> | Date | string
    updatedAt?: DateTimeFilter<"Artifact"> | Date | string
    versions?: ArtifactVersionListRelationFilter
    reviews?: ReviewRequestListRelationFilter
    installEvents?: InstallEventListRelationFilter
  }

  export type ArtifactOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    ownerTeam?: SortOrder
    visibility?: SortOrder
    status?: SortOrder
    currentVersion?: SortOrderInput | SortOrder
    tags?: SortOrder
    labels?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    versions?: ArtifactVersionOrderByRelationAggregateInput
    reviews?: ReviewRequestOrderByRelationAggregateInput
    installEvents?: InstallEventOrderByRelationAggregateInput
  }

  export type ArtifactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ArtifactWhereInput | ArtifactWhereInput[]
    OR?: ArtifactWhereInput[]
    NOT?: ArtifactWhereInput | ArtifactWhereInput[]
    type?: StringFilter<"Artifact"> | string
    name?: StringFilter<"Artifact"> | string
    summary?: StringFilter<"Artifact"> | string
    description?: StringFilter<"Artifact"> | string
    ownerTeam?: StringFilter<"Artifact"> | string
    visibility?: StringFilter<"Artifact"> | string
    status?: StringFilter<"Artifact"> | string
    currentVersion?: StringNullableFilter<"Artifact"> | string | null
    tags?: JsonFilter<"Artifact">
    labels?: JsonFilter<"Artifact">
    createdBy?: StringNullableFilter<"Artifact"> | string | null
    updatedBy?: StringNullableFilter<"Artifact"> | string | null
    createdAt?: DateTimeFilter<"Artifact"> | Date | string
    updatedAt?: DateTimeFilter<"Artifact"> | Date | string
    versions?: ArtifactVersionListRelationFilter
    reviews?: ReviewRequestListRelationFilter
    installEvents?: InstallEventListRelationFilter
  }, "id" | "slug">

  export type ArtifactOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    ownerTeam?: SortOrder
    visibility?: SortOrder
    status?: SortOrder
    currentVersion?: SortOrderInput | SortOrder
    tags?: SortOrder
    labels?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArtifactCountOrderByAggregateInput
    _max?: ArtifactMaxOrderByAggregateInput
    _min?: ArtifactMinOrderByAggregateInput
  }

  export type ArtifactScalarWhereWithAggregatesInput = {
    AND?: ArtifactScalarWhereWithAggregatesInput | ArtifactScalarWhereWithAggregatesInput[]
    OR?: ArtifactScalarWhereWithAggregatesInput[]
    NOT?: ArtifactScalarWhereWithAggregatesInput | ArtifactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artifact"> | string
    type?: StringWithAggregatesFilter<"Artifact"> | string
    slug?: StringWithAggregatesFilter<"Artifact"> | string
    name?: StringWithAggregatesFilter<"Artifact"> | string
    summary?: StringWithAggregatesFilter<"Artifact"> | string
    description?: StringWithAggregatesFilter<"Artifact"> | string
    ownerTeam?: StringWithAggregatesFilter<"Artifact"> | string
    visibility?: StringWithAggregatesFilter<"Artifact"> | string
    status?: StringWithAggregatesFilter<"Artifact"> | string
    currentVersion?: StringNullableWithAggregatesFilter<"Artifact"> | string | null
    tags?: JsonWithAggregatesFilter<"Artifact">
    labels?: JsonWithAggregatesFilter<"Artifact">
    createdBy?: StringNullableWithAggregatesFilter<"Artifact"> | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"Artifact"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Artifact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Artifact"> | Date | string
  }

  export type ArtifactVersionWhereInput = {
    AND?: ArtifactVersionWhereInput | ArtifactVersionWhereInput[]
    OR?: ArtifactVersionWhereInput[]
    NOT?: ArtifactVersionWhereInput | ArtifactVersionWhereInput[]
    id?: StringFilter<"ArtifactVersion"> | string
    artifactId?: StringFilter<"ArtifactVersion"> | string
    version?: StringFilter<"ArtifactVersion"> | string
    manifest?: JsonFilter<"ArtifactVersion">
    packageUri?: StringNullableFilter<"ArtifactVersion"> | string | null
    checksums?: JsonFilter<"ArtifactVersion">
    createdBy?: StringNullableFilter<"ArtifactVersion"> | string | null
    createdAt?: DateTimeFilter<"ArtifactVersion"> | Date | string
    artifact?: XOR<ArtifactScalarRelationFilter, ArtifactWhereInput>
  }

  export type ArtifactVersionOrderByWithRelationInput = {
    id?: SortOrder
    artifactId?: SortOrder
    version?: SortOrder
    manifest?: SortOrder
    packageUri?: SortOrderInput | SortOrder
    checksums?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    artifact?: ArtifactOrderByWithRelationInput
  }

  export type ArtifactVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    artifactId_version?: ArtifactVersionArtifactIdVersionCompoundUniqueInput
    AND?: ArtifactVersionWhereInput | ArtifactVersionWhereInput[]
    OR?: ArtifactVersionWhereInput[]
    NOT?: ArtifactVersionWhereInput | ArtifactVersionWhereInput[]
    artifactId?: StringFilter<"ArtifactVersion"> | string
    version?: StringFilter<"ArtifactVersion"> | string
    manifest?: JsonFilter<"ArtifactVersion">
    packageUri?: StringNullableFilter<"ArtifactVersion"> | string | null
    checksums?: JsonFilter<"ArtifactVersion">
    createdBy?: StringNullableFilter<"ArtifactVersion"> | string | null
    createdAt?: DateTimeFilter<"ArtifactVersion"> | Date | string
    artifact?: XOR<ArtifactScalarRelationFilter, ArtifactWhereInput>
  }, "id" | "artifactId_version">

  export type ArtifactVersionOrderByWithAggregationInput = {
    id?: SortOrder
    artifactId?: SortOrder
    version?: SortOrder
    manifest?: SortOrder
    packageUri?: SortOrderInput | SortOrder
    checksums?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ArtifactVersionCountOrderByAggregateInput
    _max?: ArtifactVersionMaxOrderByAggregateInput
    _min?: ArtifactVersionMinOrderByAggregateInput
  }

  export type ArtifactVersionScalarWhereWithAggregatesInput = {
    AND?: ArtifactVersionScalarWhereWithAggregatesInput | ArtifactVersionScalarWhereWithAggregatesInput[]
    OR?: ArtifactVersionScalarWhereWithAggregatesInput[]
    NOT?: ArtifactVersionScalarWhereWithAggregatesInput | ArtifactVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArtifactVersion"> | string
    artifactId?: StringWithAggregatesFilter<"ArtifactVersion"> | string
    version?: StringWithAggregatesFilter<"ArtifactVersion"> | string
    manifest?: JsonWithAggregatesFilter<"ArtifactVersion">
    packageUri?: StringNullableWithAggregatesFilter<"ArtifactVersion"> | string | null
    checksums?: JsonWithAggregatesFilter<"ArtifactVersion">
    createdBy?: StringNullableWithAggregatesFilter<"ArtifactVersion"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ArtifactVersion"> | Date | string
  }

  export type ReviewRequestWhereInput = {
    AND?: ReviewRequestWhereInput | ReviewRequestWhereInput[]
    OR?: ReviewRequestWhereInput[]
    NOT?: ReviewRequestWhereInput | ReviewRequestWhereInput[]
    id?: StringFilter<"ReviewRequest"> | string
    artifactId?: StringFilter<"ReviewRequest"> | string
    version?: StringFilter<"ReviewRequest"> | string
    submittedBy?: StringFilter<"ReviewRequest"> | string
    reviewer?: StringNullableFilter<"ReviewRequest"> | string | null
    status?: StringFilter<"ReviewRequest"> | string
    notes?: StringNullableFilter<"ReviewRequest"> | string | null
    submittedAt?: DateTimeFilter<"ReviewRequest"> | Date | string
    decidedAt?: DateTimeNullableFilter<"ReviewRequest"> | Date | string | null
    artifact?: XOR<ArtifactScalarRelationFilter, ArtifactWhereInput>
  }

  export type ReviewRequestOrderByWithRelationInput = {
    id?: SortOrder
    artifactId?: SortOrder
    version?: SortOrder
    submittedBy?: SortOrder
    reviewer?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    submittedAt?: SortOrder
    decidedAt?: SortOrderInput | SortOrder
    artifact?: ArtifactOrderByWithRelationInput
  }

  export type ReviewRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewRequestWhereInput | ReviewRequestWhereInput[]
    OR?: ReviewRequestWhereInput[]
    NOT?: ReviewRequestWhereInput | ReviewRequestWhereInput[]
    artifactId?: StringFilter<"ReviewRequest"> | string
    version?: StringFilter<"ReviewRequest"> | string
    submittedBy?: StringFilter<"ReviewRequest"> | string
    reviewer?: StringNullableFilter<"ReviewRequest"> | string | null
    status?: StringFilter<"ReviewRequest"> | string
    notes?: StringNullableFilter<"ReviewRequest"> | string | null
    submittedAt?: DateTimeFilter<"ReviewRequest"> | Date | string
    decidedAt?: DateTimeNullableFilter<"ReviewRequest"> | Date | string | null
    artifact?: XOR<ArtifactScalarRelationFilter, ArtifactWhereInput>
  }, "id">

  export type ReviewRequestOrderByWithAggregationInput = {
    id?: SortOrder
    artifactId?: SortOrder
    version?: SortOrder
    submittedBy?: SortOrder
    reviewer?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    submittedAt?: SortOrder
    decidedAt?: SortOrderInput | SortOrder
    _count?: ReviewRequestCountOrderByAggregateInput
    _max?: ReviewRequestMaxOrderByAggregateInput
    _min?: ReviewRequestMinOrderByAggregateInput
  }

  export type ReviewRequestScalarWhereWithAggregatesInput = {
    AND?: ReviewRequestScalarWhereWithAggregatesInput | ReviewRequestScalarWhereWithAggregatesInput[]
    OR?: ReviewRequestScalarWhereWithAggregatesInput[]
    NOT?: ReviewRequestScalarWhereWithAggregatesInput | ReviewRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReviewRequest"> | string
    artifactId?: StringWithAggregatesFilter<"ReviewRequest"> | string
    version?: StringWithAggregatesFilter<"ReviewRequest"> | string
    submittedBy?: StringWithAggregatesFilter<"ReviewRequest"> | string
    reviewer?: StringNullableWithAggregatesFilter<"ReviewRequest"> | string | null
    status?: StringWithAggregatesFilter<"ReviewRequest"> | string
    notes?: StringNullableWithAggregatesFilter<"ReviewRequest"> | string | null
    submittedAt?: DateTimeWithAggregatesFilter<"ReviewRequest"> | Date | string
    decidedAt?: DateTimeNullableWithAggregatesFilter<"ReviewRequest"> | Date | string | null
  }

  export type InstallEventWhereInput = {
    AND?: InstallEventWhereInput | InstallEventWhereInput[]
    OR?: InstallEventWhereInput[]
    NOT?: InstallEventWhereInput | InstallEventWhereInput[]
    id?: StringFilter<"InstallEvent"> | string
    artifactId?: StringFilter<"InstallEvent"> | string
    version?: StringFilter<"InstallEvent"> | string
    installedBy?: StringNullableFilter<"InstallEvent"> | string | null
    targetAgent?: StringFilter<"InstallEvent"> | string
    targetWorkspace?: StringNullableFilter<"InstallEvent"> | string | null
    createdAt?: DateTimeFilter<"InstallEvent"> | Date | string
    artifact?: XOR<ArtifactScalarRelationFilter, ArtifactWhereInput>
  }

  export type InstallEventOrderByWithRelationInput = {
    id?: SortOrder
    artifactId?: SortOrder
    version?: SortOrder
    installedBy?: SortOrderInput | SortOrder
    targetAgent?: SortOrder
    targetWorkspace?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    artifact?: ArtifactOrderByWithRelationInput
  }

  export type InstallEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InstallEventWhereInput | InstallEventWhereInput[]
    OR?: InstallEventWhereInput[]
    NOT?: InstallEventWhereInput | InstallEventWhereInput[]
    artifactId?: StringFilter<"InstallEvent"> | string
    version?: StringFilter<"InstallEvent"> | string
    installedBy?: StringNullableFilter<"InstallEvent"> | string | null
    targetAgent?: StringFilter<"InstallEvent"> | string
    targetWorkspace?: StringNullableFilter<"InstallEvent"> | string | null
    createdAt?: DateTimeFilter<"InstallEvent"> | Date | string
    artifact?: XOR<ArtifactScalarRelationFilter, ArtifactWhereInput>
  }, "id">

  export type InstallEventOrderByWithAggregationInput = {
    id?: SortOrder
    artifactId?: SortOrder
    version?: SortOrder
    installedBy?: SortOrderInput | SortOrder
    targetAgent?: SortOrder
    targetWorkspace?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: InstallEventCountOrderByAggregateInput
    _max?: InstallEventMaxOrderByAggregateInput
    _min?: InstallEventMinOrderByAggregateInput
  }

  export type InstallEventScalarWhereWithAggregatesInput = {
    AND?: InstallEventScalarWhereWithAggregatesInput | InstallEventScalarWhereWithAggregatesInput[]
    OR?: InstallEventScalarWhereWithAggregatesInput[]
    NOT?: InstallEventScalarWhereWithAggregatesInput | InstallEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InstallEvent"> | string
    artifactId?: StringWithAggregatesFilter<"InstallEvent"> | string
    version?: StringWithAggregatesFilter<"InstallEvent"> | string
    installedBy?: StringNullableWithAggregatesFilter<"InstallEvent"> | string | null
    targetAgent?: StringWithAggregatesFilter<"InstallEvent"> | string
    targetWorkspace?: StringNullableWithAggregatesFilter<"InstallEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InstallEvent"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    actor?: StringFilter<"AuditLog"> | string
    resourceType?: StringFilter<"AuditLog"> | string
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    actor?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    action?: StringFilter<"AuditLog"> | string
    actor?: StringFilter<"AuditLog"> | string
    resourceType?: StringFilter<"AuditLog"> | string
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: JsonFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    actor?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    actor?: StringWithAggregatesFilter<"AuditLog"> | string
    resourceType?: StringWithAggregatesFilter<"AuditLog"> | string
    resourceId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    metadata?: JsonWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type WorkspaceMemberCreateInput = {
    id?: string
    email: string
    team: string
    roles: JsonNullValueInput | InputJsonValue
    passwordHash: string
    disabledAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WorkspaceMemberUncheckedCreateInput = {
    id?: string
    email: string
    team: string
    roles: JsonNullValueInput | InputJsonValue
    passwordHash: string
    disabledAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WorkspaceMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    roles?: JsonNullValueInput | InputJsonValue
    passwordHash?: StringFieldUpdateOperationsInput | string
    disabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    roles?: JsonNullValueInput | InputJsonValue
    passwordHash?: StringFieldUpdateOperationsInput | string
    disabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceMemberCreateManyInput = {
    id?: string
    email: string
    team: string
    roles: JsonNullValueInput | InputJsonValue
    passwordHash: string
    disabledAt?: Date | string | null
    createdAt?: Date | string
  }

  export type WorkspaceMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    roles?: JsonNullValueInput | InputJsonValue
    passwordHash?: StringFieldUpdateOperationsInput | string
    disabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    roles?: JsonNullValueInput | InputJsonValue
    passwordHash?: StringFieldUpdateOperationsInput | string
    disabledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactCreateInput = {
    id?: string
    type: string
    slug: string
    name: string
    summary: string
    description: string
    ownerTeam: string
    visibility: string
    status: string
    currentVersion?: string | null
    tags: JsonNullValueInput | InputJsonValue
    labels: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ArtifactVersionCreateNestedManyWithoutArtifactInput
    reviews?: ReviewRequestCreateNestedManyWithoutArtifactInput
    installEvents?: InstallEventCreateNestedManyWithoutArtifactInput
  }

  export type ArtifactUncheckedCreateInput = {
    id?: string
    type: string
    slug: string
    name: string
    summary: string
    description: string
    ownerTeam: string
    visibility: string
    status: string
    currentVersion?: string | null
    tags: JsonNullValueInput | InputJsonValue
    labels: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ArtifactVersionUncheckedCreateNestedManyWithoutArtifactInput
    reviews?: ReviewRequestUncheckedCreateNestedManyWithoutArtifactInput
    installEvents?: InstallEventUncheckedCreateNestedManyWithoutArtifactInput
  }

  export type ArtifactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerTeam?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentVersion?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JsonNullValueInput | InputJsonValue
    labels?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ArtifactVersionUpdateManyWithoutArtifactNestedInput
    reviews?: ReviewRequestUpdateManyWithoutArtifactNestedInput
    installEvents?: InstallEventUpdateManyWithoutArtifactNestedInput
  }

  export type ArtifactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerTeam?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentVersion?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JsonNullValueInput | InputJsonValue
    labels?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ArtifactVersionUncheckedUpdateManyWithoutArtifactNestedInput
    reviews?: ReviewRequestUncheckedUpdateManyWithoutArtifactNestedInput
    installEvents?: InstallEventUncheckedUpdateManyWithoutArtifactNestedInput
  }

  export type ArtifactCreateManyInput = {
    id?: string
    type: string
    slug: string
    name: string
    summary: string
    description: string
    ownerTeam: string
    visibility: string
    status: string
    currentVersion?: string | null
    tags: JsonNullValueInput | InputJsonValue
    labels: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtifactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerTeam?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentVersion?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JsonNullValueInput | InputJsonValue
    labels?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerTeam?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentVersion?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JsonNullValueInput | InputJsonValue
    labels?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactVersionCreateInput = {
    id?: string
    version: string
    manifest: JsonNullValueInput | InputJsonValue
    packageUri?: string | null
    checksums: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    createdAt?: Date | string
    artifact: ArtifactCreateNestedOneWithoutVersionsInput
  }

  export type ArtifactVersionUncheckedCreateInput = {
    id?: string
    artifactId: string
    version: string
    manifest: JsonNullValueInput | InputJsonValue
    packageUri?: string | null
    checksums: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type ArtifactVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    manifest?: JsonNullValueInput | InputJsonValue
    packageUri?: NullableStringFieldUpdateOperationsInput | string | null
    checksums?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifact?: ArtifactUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type ArtifactVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    artifactId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    manifest?: JsonNullValueInput | InputJsonValue
    packageUri?: NullableStringFieldUpdateOperationsInput | string | null
    checksums?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactVersionCreateManyInput = {
    id?: string
    artifactId: string
    version: string
    manifest: JsonNullValueInput | InputJsonValue
    packageUri?: string | null
    checksums: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type ArtifactVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    manifest?: JsonNullValueInput | InputJsonValue
    packageUri?: NullableStringFieldUpdateOperationsInput | string | null
    checksums?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    artifactId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    manifest?: JsonNullValueInput | InputJsonValue
    packageUri?: NullableStringFieldUpdateOperationsInput | string | null
    checksums?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewRequestCreateInput = {
    id?: string
    version: string
    submittedBy: string
    reviewer?: string | null
    status: string
    notes?: string | null
    submittedAt?: Date | string
    decidedAt?: Date | string | null
    artifact: ArtifactCreateNestedOneWithoutReviewsInput
  }

  export type ReviewRequestUncheckedCreateInput = {
    id?: string
    artifactId: string
    version: string
    submittedBy: string
    reviewer?: string | null
    status: string
    notes?: string | null
    submittedAt?: Date | string
    decidedAt?: Date | string | null
  }

  export type ReviewRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    reviewer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    artifact?: ArtifactUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    artifactId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    reviewer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewRequestCreateManyInput = {
    id?: string
    artifactId: string
    version: string
    submittedBy: string
    reviewer?: string | null
    status: string
    notes?: string | null
    submittedAt?: Date | string
    decidedAt?: Date | string | null
  }

  export type ReviewRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    reviewer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    artifactId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    reviewer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InstallEventCreateInput = {
    id?: string
    version: string
    installedBy?: string | null
    targetAgent: string
    targetWorkspace?: string | null
    createdAt?: Date | string
    artifact: ArtifactCreateNestedOneWithoutInstallEventsInput
  }

  export type InstallEventUncheckedCreateInput = {
    id?: string
    artifactId: string
    version: string
    installedBy?: string | null
    targetAgent: string
    targetWorkspace?: string | null
    createdAt?: Date | string
  }

  export type InstallEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    installedBy?: NullableStringFieldUpdateOperationsInput | string | null
    targetAgent?: StringFieldUpdateOperationsInput | string
    targetWorkspace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artifact?: ArtifactUpdateOneRequiredWithoutInstallEventsNestedInput
  }

  export type InstallEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    artifactId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    installedBy?: NullableStringFieldUpdateOperationsInput | string | null
    targetAgent?: StringFieldUpdateOperationsInput | string
    targetWorkspace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstallEventCreateManyInput = {
    id?: string
    artifactId: string
    version: string
    installedBy?: string | null
    targetAgent: string
    targetWorkspace?: string | null
    createdAt?: Date | string
  }

  export type InstallEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    installedBy?: NullableStringFieldUpdateOperationsInput | string | null
    targetAgent?: StringFieldUpdateOperationsInput | string
    targetWorkspace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstallEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    artifactId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    installedBy?: NullableStringFieldUpdateOperationsInput | string | null
    targetAgent?: StringFieldUpdateOperationsInput | string
    targetWorkspace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    actor: string
    resourceType: string
    resourceId?: string | null
    metadata: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    action: string
    actor: string
    resourceType: string
    resourceId?: string | null
    metadata: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    action: string
    actor: string
    resourceType: string
    resourceId?: string | null
    metadata: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    actor?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkspaceMemberCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    team?: SortOrder
    roles?: SortOrder
    passwordHash?: SortOrder
    disabledAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkspaceMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    team?: SortOrder
    passwordHash?: SortOrder
    disabledAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkspaceMemberMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    team?: SortOrder
    passwordHash?: SortOrder
    disabledAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ArtifactVersionListRelationFilter = {
    every?: ArtifactVersionWhereInput
    some?: ArtifactVersionWhereInput
    none?: ArtifactVersionWhereInput
  }

  export type ReviewRequestListRelationFilter = {
    every?: ReviewRequestWhereInput
    some?: ReviewRequestWhereInput
    none?: ReviewRequestWhereInput
  }

  export type InstallEventListRelationFilter = {
    every?: InstallEventWhereInput
    some?: InstallEventWhereInput
    none?: InstallEventWhereInput
  }

  export type ArtifactVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstallEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtifactCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    ownerTeam?: SortOrder
    visibility?: SortOrder
    status?: SortOrder
    currentVersion?: SortOrder
    tags?: SortOrder
    labels?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtifactMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    ownerTeam?: SortOrder
    visibility?: SortOrder
    status?: SortOrder
    currentVersion?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtifactMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    ownerTeam?: SortOrder
    visibility?: SortOrder
    status?: SortOrder
    currentVersion?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ArtifactScalarRelationFilter = {
    is?: ArtifactWhereInput
    isNot?: ArtifactWhereInput
  }

  export type ArtifactVersionArtifactIdVersionCompoundUniqueInput = {
    artifactId: string
    version: string
  }

  export type ArtifactVersionCountOrderByAggregateInput = {
    id?: SortOrder
    artifactId?: SortOrder
    version?: SortOrder
    manifest?: SortOrder
    packageUri?: SortOrder
    checksums?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ArtifactVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    artifactId?: SortOrder
    version?: SortOrder
    packageUri?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ArtifactVersionMinOrderByAggregateInput = {
    id?: SortOrder
    artifactId?: SortOrder
    version?: SortOrder
    packageUri?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewRequestCountOrderByAggregateInput = {
    id?: SortOrder
    artifactId?: SortOrder
    version?: SortOrder
    submittedBy?: SortOrder
    reviewer?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    submittedAt?: SortOrder
    decidedAt?: SortOrder
  }

  export type ReviewRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    artifactId?: SortOrder
    version?: SortOrder
    submittedBy?: SortOrder
    reviewer?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    submittedAt?: SortOrder
    decidedAt?: SortOrder
  }

  export type ReviewRequestMinOrderByAggregateInput = {
    id?: SortOrder
    artifactId?: SortOrder
    version?: SortOrder
    submittedBy?: SortOrder
    reviewer?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    submittedAt?: SortOrder
    decidedAt?: SortOrder
  }

  export type InstallEventCountOrderByAggregateInput = {
    id?: SortOrder
    artifactId?: SortOrder
    version?: SortOrder
    installedBy?: SortOrder
    targetAgent?: SortOrder
    targetWorkspace?: SortOrder
    createdAt?: SortOrder
  }

  export type InstallEventMaxOrderByAggregateInput = {
    id?: SortOrder
    artifactId?: SortOrder
    version?: SortOrder
    installedBy?: SortOrder
    targetAgent?: SortOrder
    targetWorkspace?: SortOrder
    createdAt?: SortOrder
  }

  export type InstallEventMinOrderByAggregateInput = {
    id?: SortOrder
    artifactId?: SortOrder
    version?: SortOrder
    installedBy?: SortOrder
    targetAgent?: SortOrder
    targetWorkspace?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    actor?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    actor?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    actor?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    createdAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ArtifactVersionCreateNestedManyWithoutArtifactInput = {
    create?: XOR<ArtifactVersionCreateWithoutArtifactInput, ArtifactVersionUncheckedCreateWithoutArtifactInput> | ArtifactVersionCreateWithoutArtifactInput[] | ArtifactVersionUncheckedCreateWithoutArtifactInput[]
    connectOrCreate?: ArtifactVersionCreateOrConnectWithoutArtifactInput | ArtifactVersionCreateOrConnectWithoutArtifactInput[]
    createMany?: ArtifactVersionCreateManyArtifactInputEnvelope
    connect?: ArtifactVersionWhereUniqueInput | ArtifactVersionWhereUniqueInput[]
  }

  export type ReviewRequestCreateNestedManyWithoutArtifactInput = {
    create?: XOR<ReviewRequestCreateWithoutArtifactInput, ReviewRequestUncheckedCreateWithoutArtifactInput> | ReviewRequestCreateWithoutArtifactInput[] | ReviewRequestUncheckedCreateWithoutArtifactInput[]
    connectOrCreate?: ReviewRequestCreateOrConnectWithoutArtifactInput | ReviewRequestCreateOrConnectWithoutArtifactInput[]
    createMany?: ReviewRequestCreateManyArtifactInputEnvelope
    connect?: ReviewRequestWhereUniqueInput | ReviewRequestWhereUniqueInput[]
  }

  export type InstallEventCreateNestedManyWithoutArtifactInput = {
    create?: XOR<InstallEventCreateWithoutArtifactInput, InstallEventUncheckedCreateWithoutArtifactInput> | InstallEventCreateWithoutArtifactInput[] | InstallEventUncheckedCreateWithoutArtifactInput[]
    connectOrCreate?: InstallEventCreateOrConnectWithoutArtifactInput | InstallEventCreateOrConnectWithoutArtifactInput[]
    createMany?: InstallEventCreateManyArtifactInputEnvelope
    connect?: InstallEventWhereUniqueInput | InstallEventWhereUniqueInput[]
  }

  export type ArtifactVersionUncheckedCreateNestedManyWithoutArtifactInput = {
    create?: XOR<ArtifactVersionCreateWithoutArtifactInput, ArtifactVersionUncheckedCreateWithoutArtifactInput> | ArtifactVersionCreateWithoutArtifactInput[] | ArtifactVersionUncheckedCreateWithoutArtifactInput[]
    connectOrCreate?: ArtifactVersionCreateOrConnectWithoutArtifactInput | ArtifactVersionCreateOrConnectWithoutArtifactInput[]
    createMany?: ArtifactVersionCreateManyArtifactInputEnvelope
    connect?: ArtifactVersionWhereUniqueInput | ArtifactVersionWhereUniqueInput[]
  }

  export type ReviewRequestUncheckedCreateNestedManyWithoutArtifactInput = {
    create?: XOR<ReviewRequestCreateWithoutArtifactInput, ReviewRequestUncheckedCreateWithoutArtifactInput> | ReviewRequestCreateWithoutArtifactInput[] | ReviewRequestUncheckedCreateWithoutArtifactInput[]
    connectOrCreate?: ReviewRequestCreateOrConnectWithoutArtifactInput | ReviewRequestCreateOrConnectWithoutArtifactInput[]
    createMany?: ReviewRequestCreateManyArtifactInputEnvelope
    connect?: ReviewRequestWhereUniqueInput | ReviewRequestWhereUniqueInput[]
  }

  export type InstallEventUncheckedCreateNestedManyWithoutArtifactInput = {
    create?: XOR<InstallEventCreateWithoutArtifactInput, InstallEventUncheckedCreateWithoutArtifactInput> | InstallEventCreateWithoutArtifactInput[] | InstallEventUncheckedCreateWithoutArtifactInput[]
    connectOrCreate?: InstallEventCreateOrConnectWithoutArtifactInput | InstallEventCreateOrConnectWithoutArtifactInput[]
    createMany?: InstallEventCreateManyArtifactInputEnvelope
    connect?: InstallEventWhereUniqueInput | InstallEventWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ArtifactVersionUpdateManyWithoutArtifactNestedInput = {
    create?: XOR<ArtifactVersionCreateWithoutArtifactInput, ArtifactVersionUncheckedCreateWithoutArtifactInput> | ArtifactVersionCreateWithoutArtifactInput[] | ArtifactVersionUncheckedCreateWithoutArtifactInput[]
    connectOrCreate?: ArtifactVersionCreateOrConnectWithoutArtifactInput | ArtifactVersionCreateOrConnectWithoutArtifactInput[]
    upsert?: ArtifactVersionUpsertWithWhereUniqueWithoutArtifactInput | ArtifactVersionUpsertWithWhereUniqueWithoutArtifactInput[]
    createMany?: ArtifactVersionCreateManyArtifactInputEnvelope
    set?: ArtifactVersionWhereUniqueInput | ArtifactVersionWhereUniqueInput[]
    disconnect?: ArtifactVersionWhereUniqueInput | ArtifactVersionWhereUniqueInput[]
    delete?: ArtifactVersionWhereUniqueInput | ArtifactVersionWhereUniqueInput[]
    connect?: ArtifactVersionWhereUniqueInput | ArtifactVersionWhereUniqueInput[]
    update?: ArtifactVersionUpdateWithWhereUniqueWithoutArtifactInput | ArtifactVersionUpdateWithWhereUniqueWithoutArtifactInput[]
    updateMany?: ArtifactVersionUpdateManyWithWhereWithoutArtifactInput | ArtifactVersionUpdateManyWithWhereWithoutArtifactInput[]
    deleteMany?: ArtifactVersionScalarWhereInput | ArtifactVersionScalarWhereInput[]
  }

  export type ReviewRequestUpdateManyWithoutArtifactNestedInput = {
    create?: XOR<ReviewRequestCreateWithoutArtifactInput, ReviewRequestUncheckedCreateWithoutArtifactInput> | ReviewRequestCreateWithoutArtifactInput[] | ReviewRequestUncheckedCreateWithoutArtifactInput[]
    connectOrCreate?: ReviewRequestCreateOrConnectWithoutArtifactInput | ReviewRequestCreateOrConnectWithoutArtifactInput[]
    upsert?: ReviewRequestUpsertWithWhereUniqueWithoutArtifactInput | ReviewRequestUpsertWithWhereUniqueWithoutArtifactInput[]
    createMany?: ReviewRequestCreateManyArtifactInputEnvelope
    set?: ReviewRequestWhereUniqueInput | ReviewRequestWhereUniqueInput[]
    disconnect?: ReviewRequestWhereUniqueInput | ReviewRequestWhereUniqueInput[]
    delete?: ReviewRequestWhereUniqueInput | ReviewRequestWhereUniqueInput[]
    connect?: ReviewRequestWhereUniqueInput | ReviewRequestWhereUniqueInput[]
    update?: ReviewRequestUpdateWithWhereUniqueWithoutArtifactInput | ReviewRequestUpdateWithWhereUniqueWithoutArtifactInput[]
    updateMany?: ReviewRequestUpdateManyWithWhereWithoutArtifactInput | ReviewRequestUpdateManyWithWhereWithoutArtifactInput[]
    deleteMany?: ReviewRequestScalarWhereInput | ReviewRequestScalarWhereInput[]
  }

  export type InstallEventUpdateManyWithoutArtifactNestedInput = {
    create?: XOR<InstallEventCreateWithoutArtifactInput, InstallEventUncheckedCreateWithoutArtifactInput> | InstallEventCreateWithoutArtifactInput[] | InstallEventUncheckedCreateWithoutArtifactInput[]
    connectOrCreate?: InstallEventCreateOrConnectWithoutArtifactInput | InstallEventCreateOrConnectWithoutArtifactInput[]
    upsert?: InstallEventUpsertWithWhereUniqueWithoutArtifactInput | InstallEventUpsertWithWhereUniqueWithoutArtifactInput[]
    createMany?: InstallEventCreateManyArtifactInputEnvelope
    set?: InstallEventWhereUniqueInput | InstallEventWhereUniqueInput[]
    disconnect?: InstallEventWhereUniqueInput | InstallEventWhereUniqueInput[]
    delete?: InstallEventWhereUniqueInput | InstallEventWhereUniqueInput[]
    connect?: InstallEventWhereUniqueInput | InstallEventWhereUniqueInput[]
    update?: InstallEventUpdateWithWhereUniqueWithoutArtifactInput | InstallEventUpdateWithWhereUniqueWithoutArtifactInput[]
    updateMany?: InstallEventUpdateManyWithWhereWithoutArtifactInput | InstallEventUpdateManyWithWhereWithoutArtifactInput[]
    deleteMany?: InstallEventScalarWhereInput | InstallEventScalarWhereInput[]
  }

  export type ArtifactVersionUncheckedUpdateManyWithoutArtifactNestedInput = {
    create?: XOR<ArtifactVersionCreateWithoutArtifactInput, ArtifactVersionUncheckedCreateWithoutArtifactInput> | ArtifactVersionCreateWithoutArtifactInput[] | ArtifactVersionUncheckedCreateWithoutArtifactInput[]
    connectOrCreate?: ArtifactVersionCreateOrConnectWithoutArtifactInput | ArtifactVersionCreateOrConnectWithoutArtifactInput[]
    upsert?: ArtifactVersionUpsertWithWhereUniqueWithoutArtifactInput | ArtifactVersionUpsertWithWhereUniqueWithoutArtifactInput[]
    createMany?: ArtifactVersionCreateManyArtifactInputEnvelope
    set?: ArtifactVersionWhereUniqueInput | ArtifactVersionWhereUniqueInput[]
    disconnect?: ArtifactVersionWhereUniqueInput | ArtifactVersionWhereUniqueInput[]
    delete?: ArtifactVersionWhereUniqueInput | ArtifactVersionWhereUniqueInput[]
    connect?: ArtifactVersionWhereUniqueInput | ArtifactVersionWhereUniqueInput[]
    update?: ArtifactVersionUpdateWithWhereUniqueWithoutArtifactInput | ArtifactVersionUpdateWithWhereUniqueWithoutArtifactInput[]
    updateMany?: ArtifactVersionUpdateManyWithWhereWithoutArtifactInput | ArtifactVersionUpdateManyWithWhereWithoutArtifactInput[]
    deleteMany?: ArtifactVersionScalarWhereInput | ArtifactVersionScalarWhereInput[]
  }

  export type ReviewRequestUncheckedUpdateManyWithoutArtifactNestedInput = {
    create?: XOR<ReviewRequestCreateWithoutArtifactInput, ReviewRequestUncheckedCreateWithoutArtifactInput> | ReviewRequestCreateWithoutArtifactInput[] | ReviewRequestUncheckedCreateWithoutArtifactInput[]
    connectOrCreate?: ReviewRequestCreateOrConnectWithoutArtifactInput | ReviewRequestCreateOrConnectWithoutArtifactInput[]
    upsert?: ReviewRequestUpsertWithWhereUniqueWithoutArtifactInput | ReviewRequestUpsertWithWhereUniqueWithoutArtifactInput[]
    createMany?: ReviewRequestCreateManyArtifactInputEnvelope
    set?: ReviewRequestWhereUniqueInput | ReviewRequestWhereUniqueInput[]
    disconnect?: ReviewRequestWhereUniqueInput | ReviewRequestWhereUniqueInput[]
    delete?: ReviewRequestWhereUniqueInput | ReviewRequestWhereUniqueInput[]
    connect?: ReviewRequestWhereUniqueInput | ReviewRequestWhereUniqueInput[]
    update?: ReviewRequestUpdateWithWhereUniqueWithoutArtifactInput | ReviewRequestUpdateWithWhereUniqueWithoutArtifactInput[]
    updateMany?: ReviewRequestUpdateManyWithWhereWithoutArtifactInput | ReviewRequestUpdateManyWithWhereWithoutArtifactInput[]
    deleteMany?: ReviewRequestScalarWhereInput | ReviewRequestScalarWhereInput[]
  }

  export type InstallEventUncheckedUpdateManyWithoutArtifactNestedInput = {
    create?: XOR<InstallEventCreateWithoutArtifactInput, InstallEventUncheckedCreateWithoutArtifactInput> | InstallEventCreateWithoutArtifactInput[] | InstallEventUncheckedCreateWithoutArtifactInput[]
    connectOrCreate?: InstallEventCreateOrConnectWithoutArtifactInput | InstallEventCreateOrConnectWithoutArtifactInput[]
    upsert?: InstallEventUpsertWithWhereUniqueWithoutArtifactInput | InstallEventUpsertWithWhereUniqueWithoutArtifactInput[]
    createMany?: InstallEventCreateManyArtifactInputEnvelope
    set?: InstallEventWhereUniqueInput | InstallEventWhereUniqueInput[]
    disconnect?: InstallEventWhereUniqueInput | InstallEventWhereUniqueInput[]
    delete?: InstallEventWhereUniqueInput | InstallEventWhereUniqueInput[]
    connect?: InstallEventWhereUniqueInput | InstallEventWhereUniqueInput[]
    update?: InstallEventUpdateWithWhereUniqueWithoutArtifactInput | InstallEventUpdateWithWhereUniqueWithoutArtifactInput[]
    updateMany?: InstallEventUpdateManyWithWhereWithoutArtifactInput | InstallEventUpdateManyWithWhereWithoutArtifactInput[]
    deleteMany?: InstallEventScalarWhereInput | InstallEventScalarWhereInput[]
  }

  export type ArtifactCreateNestedOneWithoutVersionsInput = {
    create?: XOR<ArtifactCreateWithoutVersionsInput, ArtifactUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ArtifactCreateOrConnectWithoutVersionsInput
    connect?: ArtifactWhereUniqueInput
  }

  export type ArtifactUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<ArtifactCreateWithoutVersionsInput, ArtifactUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ArtifactCreateOrConnectWithoutVersionsInput
    upsert?: ArtifactUpsertWithoutVersionsInput
    connect?: ArtifactWhereUniqueInput
    update?: XOR<XOR<ArtifactUpdateToOneWithWhereWithoutVersionsInput, ArtifactUpdateWithoutVersionsInput>, ArtifactUncheckedUpdateWithoutVersionsInput>
  }

  export type ArtifactCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ArtifactCreateWithoutReviewsInput, ArtifactUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ArtifactCreateOrConnectWithoutReviewsInput
    connect?: ArtifactWhereUniqueInput
  }

  export type ArtifactUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ArtifactCreateWithoutReviewsInput, ArtifactUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ArtifactCreateOrConnectWithoutReviewsInput
    upsert?: ArtifactUpsertWithoutReviewsInput
    connect?: ArtifactWhereUniqueInput
    update?: XOR<XOR<ArtifactUpdateToOneWithWhereWithoutReviewsInput, ArtifactUpdateWithoutReviewsInput>, ArtifactUncheckedUpdateWithoutReviewsInput>
  }

  export type ArtifactCreateNestedOneWithoutInstallEventsInput = {
    create?: XOR<ArtifactCreateWithoutInstallEventsInput, ArtifactUncheckedCreateWithoutInstallEventsInput>
    connectOrCreate?: ArtifactCreateOrConnectWithoutInstallEventsInput
    connect?: ArtifactWhereUniqueInput
  }

  export type ArtifactUpdateOneRequiredWithoutInstallEventsNestedInput = {
    create?: XOR<ArtifactCreateWithoutInstallEventsInput, ArtifactUncheckedCreateWithoutInstallEventsInput>
    connectOrCreate?: ArtifactCreateOrConnectWithoutInstallEventsInput
    upsert?: ArtifactUpsertWithoutInstallEventsInput
    connect?: ArtifactWhereUniqueInput
    update?: XOR<XOR<ArtifactUpdateToOneWithWhereWithoutInstallEventsInput, ArtifactUpdateWithoutInstallEventsInput>, ArtifactUncheckedUpdateWithoutInstallEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ArtifactVersionCreateWithoutArtifactInput = {
    id?: string
    version: string
    manifest: JsonNullValueInput | InputJsonValue
    packageUri?: string | null
    checksums: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type ArtifactVersionUncheckedCreateWithoutArtifactInput = {
    id?: string
    version: string
    manifest: JsonNullValueInput | InputJsonValue
    packageUri?: string | null
    checksums: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type ArtifactVersionCreateOrConnectWithoutArtifactInput = {
    where: ArtifactVersionWhereUniqueInput
    create: XOR<ArtifactVersionCreateWithoutArtifactInput, ArtifactVersionUncheckedCreateWithoutArtifactInput>
  }

  export type ArtifactVersionCreateManyArtifactInputEnvelope = {
    data: ArtifactVersionCreateManyArtifactInput | ArtifactVersionCreateManyArtifactInput[]
    skipDuplicates?: boolean
  }

  export type ReviewRequestCreateWithoutArtifactInput = {
    id?: string
    version: string
    submittedBy: string
    reviewer?: string | null
    status: string
    notes?: string | null
    submittedAt?: Date | string
    decidedAt?: Date | string | null
  }

  export type ReviewRequestUncheckedCreateWithoutArtifactInput = {
    id?: string
    version: string
    submittedBy: string
    reviewer?: string | null
    status: string
    notes?: string | null
    submittedAt?: Date | string
    decidedAt?: Date | string | null
  }

  export type ReviewRequestCreateOrConnectWithoutArtifactInput = {
    where: ReviewRequestWhereUniqueInput
    create: XOR<ReviewRequestCreateWithoutArtifactInput, ReviewRequestUncheckedCreateWithoutArtifactInput>
  }

  export type ReviewRequestCreateManyArtifactInputEnvelope = {
    data: ReviewRequestCreateManyArtifactInput | ReviewRequestCreateManyArtifactInput[]
    skipDuplicates?: boolean
  }

  export type InstallEventCreateWithoutArtifactInput = {
    id?: string
    version: string
    installedBy?: string | null
    targetAgent: string
    targetWorkspace?: string | null
    createdAt?: Date | string
  }

  export type InstallEventUncheckedCreateWithoutArtifactInput = {
    id?: string
    version: string
    installedBy?: string | null
    targetAgent: string
    targetWorkspace?: string | null
    createdAt?: Date | string
  }

  export type InstallEventCreateOrConnectWithoutArtifactInput = {
    where: InstallEventWhereUniqueInput
    create: XOR<InstallEventCreateWithoutArtifactInput, InstallEventUncheckedCreateWithoutArtifactInput>
  }

  export type InstallEventCreateManyArtifactInputEnvelope = {
    data: InstallEventCreateManyArtifactInput | InstallEventCreateManyArtifactInput[]
    skipDuplicates?: boolean
  }

  export type ArtifactVersionUpsertWithWhereUniqueWithoutArtifactInput = {
    where: ArtifactVersionWhereUniqueInput
    update: XOR<ArtifactVersionUpdateWithoutArtifactInput, ArtifactVersionUncheckedUpdateWithoutArtifactInput>
    create: XOR<ArtifactVersionCreateWithoutArtifactInput, ArtifactVersionUncheckedCreateWithoutArtifactInput>
  }

  export type ArtifactVersionUpdateWithWhereUniqueWithoutArtifactInput = {
    where: ArtifactVersionWhereUniqueInput
    data: XOR<ArtifactVersionUpdateWithoutArtifactInput, ArtifactVersionUncheckedUpdateWithoutArtifactInput>
  }

  export type ArtifactVersionUpdateManyWithWhereWithoutArtifactInput = {
    where: ArtifactVersionScalarWhereInput
    data: XOR<ArtifactVersionUpdateManyMutationInput, ArtifactVersionUncheckedUpdateManyWithoutArtifactInput>
  }

  export type ArtifactVersionScalarWhereInput = {
    AND?: ArtifactVersionScalarWhereInput | ArtifactVersionScalarWhereInput[]
    OR?: ArtifactVersionScalarWhereInput[]
    NOT?: ArtifactVersionScalarWhereInput | ArtifactVersionScalarWhereInput[]
    id?: StringFilter<"ArtifactVersion"> | string
    artifactId?: StringFilter<"ArtifactVersion"> | string
    version?: StringFilter<"ArtifactVersion"> | string
    manifest?: JsonFilter<"ArtifactVersion">
    packageUri?: StringNullableFilter<"ArtifactVersion"> | string | null
    checksums?: JsonFilter<"ArtifactVersion">
    createdBy?: StringNullableFilter<"ArtifactVersion"> | string | null
    createdAt?: DateTimeFilter<"ArtifactVersion"> | Date | string
  }

  export type ReviewRequestUpsertWithWhereUniqueWithoutArtifactInput = {
    where: ReviewRequestWhereUniqueInput
    update: XOR<ReviewRequestUpdateWithoutArtifactInput, ReviewRequestUncheckedUpdateWithoutArtifactInput>
    create: XOR<ReviewRequestCreateWithoutArtifactInput, ReviewRequestUncheckedCreateWithoutArtifactInput>
  }

  export type ReviewRequestUpdateWithWhereUniqueWithoutArtifactInput = {
    where: ReviewRequestWhereUniqueInput
    data: XOR<ReviewRequestUpdateWithoutArtifactInput, ReviewRequestUncheckedUpdateWithoutArtifactInput>
  }

  export type ReviewRequestUpdateManyWithWhereWithoutArtifactInput = {
    where: ReviewRequestScalarWhereInput
    data: XOR<ReviewRequestUpdateManyMutationInput, ReviewRequestUncheckedUpdateManyWithoutArtifactInput>
  }

  export type ReviewRequestScalarWhereInput = {
    AND?: ReviewRequestScalarWhereInput | ReviewRequestScalarWhereInput[]
    OR?: ReviewRequestScalarWhereInput[]
    NOT?: ReviewRequestScalarWhereInput | ReviewRequestScalarWhereInput[]
    id?: StringFilter<"ReviewRequest"> | string
    artifactId?: StringFilter<"ReviewRequest"> | string
    version?: StringFilter<"ReviewRequest"> | string
    submittedBy?: StringFilter<"ReviewRequest"> | string
    reviewer?: StringNullableFilter<"ReviewRequest"> | string | null
    status?: StringFilter<"ReviewRequest"> | string
    notes?: StringNullableFilter<"ReviewRequest"> | string | null
    submittedAt?: DateTimeFilter<"ReviewRequest"> | Date | string
    decidedAt?: DateTimeNullableFilter<"ReviewRequest"> | Date | string | null
  }

  export type InstallEventUpsertWithWhereUniqueWithoutArtifactInput = {
    where: InstallEventWhereUniqueInput
    update: XOR<InstallEventUpdateWithoutArtifactInput, InstallEventUncheckedUpdateWithoutArtifactInput>
    create: XOR<InstallEventCreateWithoutArtifactInput, InstallEventUncheckedCreateWithoutArtifactInput>
  }

  export type InstallEventUpdateWithWhereUniqueWithoutArtifactInput = {
    where: InstallEventWhereUniqueInput
    data: XOR<InstallEventUpdateWithoutArtifactInput, InstallEventUncheckedUpdateWithoutArtifactInput>
  }

  export type InstallEventUpdateManyWithWhereWithoutArtifactInput = {
    where: InstallEventScalarWhereInput
    data: XOR<InstallEventUpdateManyMutationInput, InstallEventUncheckedUpdateManyWithoutArtifactInput>
  }

  export type InstallEventScalarWhereInput = {
    AND?: InstallEventScalarWhereInput | InstallEventScalarWhereInput[]
    OR?: InstallEventScalarWhereInput[]
    NOT?: InstallEventScalarWhereInput | InstallEventScalarWhereInput[]
    id?: StringFilter<"InstallEvent"> | string
    artifactId?: StringFilter<"InstallEvent"> | string
    version?: StringFilter<"InstallEvent"> | string
    installedBy?: StringNullableFilter<"InstallEvent"> | string | null
    targetAgent?: StringFilter<"InstallEvent"> | string
    targetWorkspace?: StringNullableFilter<"InstallEvent"> | string | null
    createdAt?: DateTimeFilter<"InstallEvent"> | Date | string
  }

  export type ArtifactCreateWithoutVersionsInput = {
    id?: string
    type: string
    slug: string
    name: string
    summary: string
    description: string
    ownerTeam: string
    visibility: string
    status: string
    currentVersion?: string | null
    tags: JsonNullValueInput | InputJsonValue
    labels: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewRequestCreateNestedManyWithoutArtifactInput
    installEvents?: InstallEventCreateNestedManyWithoutArtifactInput
  }

  export type ArtifactUncheckedCreateWithoutVersionsInput = {
    id?: string
    type: string
    slug: string
    name: string
    summary: string
    description: string
    ownerTeam: string
    visibility: string
    status: string
    currentVersion?: string | null
    tags: JsonNullValueInput | InputJsonValue
    labels: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewRequestUncheckedCreateNestedManyWithoutArtifactInput
    installEvents?: InstallEventUncheckedCreateNestedManyWithoutArtifactInput
  }

  export type ArtifactCreateOrConnectWithoutVersionsInput = {
    where: ArtifactWhereUniqueInput
    create: XOR<ArtifactCreateWithoutVersionsInput, ArtifactUncheckedCreateWithoutVersionsInput>
  }

  export type ArtifactUpsertWithoutVersionsInput = {
    update: XOR<ArtifactUpdateWithoutVersionsInput, ArtifactUncheckedUpdateWithoutVersionsInput>
    create: XOR<ArtifactCreateWithoutVersionsInput, ArtifactUncheckedCreateWithoutVersionsInput>
    where?: ArtifactWhereInput
  }

  export type ArtifactUpdateToOneWithWhereWithoutVersionsInput = {
    where?: ArtifactWhereInput
    data: XOR<ArtifactUpdateWithoutVersionsInput, ArtifactUncheckedUpdateWithoutVersionsInput>
  }

  export type ArtifactUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerTeam?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentVersion?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JsonNullValueInput | InputJsonValue
    labels?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewRequestUpdateManyWithoutArtifactNestedInput
    installEvents?: InstallEventUpdateManyWithoutArtifactNestedInput
  }

  export type ArtifactUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerTeam?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentVersion?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JsonNullValueInput | InputJsonValue
    labels?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewRequestUncheckedUpdateManyWithoutArtifactNestedInput
    installEvents?: InstallEventUncheckedUpdateManyWithoutArtifactNestedInput
  }

  export type ArtifactCreateWithoutReviewsInput = {
    id?: string
    type: string
    slug: string
    name: string
    summary: string
    description: string
    ownerTeam: string
    visibility: string
    status: string
    currentVersion?: string | null
    tags: JsonNullValueInput | InputJsonValue
    labels: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ArtifactVersionCreateNestedManyWithoutArtifactInput
    installEvents?: InstallEventCreateNestedManyWithoutArtifactInput
  }

  export type ArtifactUncheckedCreateWithoutReviewsInput = {
    id?: string
    type: string
    slug: string
    name: string
    summary: string
    description: string
    ownerTeam: string
    visibility: string
    status: string
    currentVersion?: string | null
    tags: JsonNullValueInput | InputJsonValue
    labels: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ArtifactVersionUncheckedCreateNestedManyWithoutArtifactInput
    installEvents?: InstallEventUncheckedCreateNestedManyWithoutArtifactInput
  }

  export type ArtifactCreateOrConnectWithoutReviewsInput = {
    where: ArtifactWhereUniqueInput
    create: XOR<ArtifactCreateWithoutReviewsInput, ArtifactUncheckedCreateWithoutReviewsInput>
  }

  export type ArtifactUpsertWithoutReviewsInput = {
    update: XOR<ArtifactUpdateWithoutReviewsInput, ArtifactUncheckedUpdateWithoutReviewsInput>
    create: XOR<ArtifactCreateWithoutReviewsInput, ArtifactUncheckedCreateWithoutReviewsInput>
    where?: ArtifactWhereInput
  }

  export type ArtifactUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ArtifactWhereInput
    data: XOR<ArtifactUpdateWithoutReviewsInput, ArtifactUncheckedUpdateWithoutReviewsInput>
  }

  export type ArtifactUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerTeam?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentVersion?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JsonNullValueInput | InputJsonValue
    labels?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ArtifactVersionUpdateManyWithoutArtifactNestedInput
    installEvents?: InstallEventUpdateManyWithoutArtifactNestedInput
  }

  export type ArtifactUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerTeam?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentVersion?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JsonNullValueInput | InputJsonValue
    labels?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ArtifactVersionUncheckedUpdateManyWithoutArtifactNestedInput
    installEvents?: InstallEventUncheckedUpdateManyWithoutArtifactNestedInput
  }

  export type ArtifactCreateWithoutInstallEventsInput = {
    id?: string
    type: string
    slug: string
    name: string
    summary: string
    description: string
    ownerTeam: string
    visibility: string
    status: string
    currentVersion?: string | null
    tags: JsonNullValueInput | InputJsonValue
    labels: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ArtifactVersionCreateNestedManyWithoutArtifactInput
    reviews?: ReviewRequestCreateNestedManyWithoutArtifactInput
  }

  export type ArtifactUncheckedCreateWithoutInstallEventsInput = {
    id?: string
    type: string
    slug: string
    name: string
    summary: string
    description: string
    ownerTeam: string
    visibility: string
    status: string
    currentVersion?: string | null
    tags: JsonNullValueInput | InputJsonValue
    labels: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    versions?: ArtifactVersionUncheckedCreateNestedManyWithoutArtifactInput
    reviews?: ReviewRequestUncheckedCreateNestedManyWithoutArtifactInput
  }

  export type ArtifactCreateOrConnectWithoutInstallEventsInput = {
    where: ArtifactWhereUniqueInput
    create: XOR<ArtifactCreateWithoutInstallEventsInput, ArtifactUncheckedCreateWithoutInstallEventsInput>
  }

  export type ArtifactUpsertWithoutInstallEventsInput = {
    update: XOR<ArtifactUpdateWithoutInstallEventsInput, ArtifactUncheckedUpdateWithoutInstallEventsInput>
    create: XOR<ArtifactCreateWithoutInstallEventsInput, ArtifactUncheckedCreateWithoutInstallEventsInput>
    where?: ArtifactWhereInput
  }

  export type ArtifactUpdateToOneWithWhereWithoutInstallEventsInput = {
    where?: ArtifactWhereInput
    data: XOR<ArtifactUpdateWithoutInstallEventsInput, ArtifactUncheckedUpdateWithoutInstallEventsInput>
  }

  export type ArtifactUpdateWithoutInstallEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerTeam?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentVersion?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JsonNullValueInput | InputJsonValue
    labels?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ArtifactVersionUpdateManyWithoutArtifactNestedInput
    reviews?: ReviewRequestUpdateManyWithoutArtifactNestedInput
  }

  export type ArtifactUncheckedUpdateWithoutInstallEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerTeam?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentVersion?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JsonNullValueInput | InputJsonValue
    labels?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    versions?: ArtifactVersionUncheckedUpdateManyWithoutArtifactNestedInput
    reviews?: ReviewRequestUncheckedUpdateManyWithoutArtifactNestedInput
  }

  export type ArtifactVersionCreateManyArtifactInput = {
    id?: string
    version: string
    manifest: JsonNullValueInput | InputJsonValue
    packageUri?: string | null
    checksums: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type ReviewRequestCreateManyArtifactInput = {
    id?: string
    version: string
    submittedBy: string
    reviewer?: string | null
    status: string
    notes?: string | null
    submittedAt?: Date | string
    decidedAt?: Date | string | null
  }

  export type InstallEventCreateManyArtifactInput = {
    id?: string
    version: string
    installedBy?: string | null
    targetAgent: string
    targetWorkspace?: string | null
    createdAt?: Date | string
  }

  export type ArtifactVersionUpdateWithoutArtifactInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    manifest?: JsonNullValueInput | InputJsonValue
    packageUri?: NullableStringFieldUpdateOperationsInput | string | null
    checksums?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactVersionUncheckedUpdateWithoutArtifactInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    manifest?: JsonNullValueInput | InputJsonValue
    packageUri?: NullableStringFieldUpdateOperationsInput | string | null
    checksums?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtifactVersionUncheckedUpdateManyWithoutArtifactInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    manifest?: JsonNullValueInput | InputJsonValue
    packageUri?: NullableStringFieldUpdateOperationsInput | string | null
    checksums?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewRequestUpdateWithoutArtifactInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    reviewer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewRequestUncheckedUpdateWithoutArtifactInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    reviewer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewRequestUncheckedUpdateManyWithoutArtifactInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    submittedBy?: StringFieldUpdateOperationsInput | string
    reviewer?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InstallEventUpdateWithoutArtifactInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    installedBy?: NullableStringFieldUpdateOperationsInput | string | null
    targetAgent?: StringFieldUpdateOperationsInput | string
    targetWorkspace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstallEventUncheckedUpdateWithoutArtifactInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    installedBy?: NullableStringFieldUpdateOperationsInput | string | null
    targetAgent?: StringFieldUpdateOperationsInput | string
    targetWorkspace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstallEventUncheckedUpdateManyWithoutArtifactInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    installedBy?: NullableStringFieldUpdateOperationsInput | string | null
    targetAgent?: StringFieldUpdateOperationsInput | string
    targetWorkspace?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}