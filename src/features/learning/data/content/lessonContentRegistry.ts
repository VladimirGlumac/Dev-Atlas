import type { LessonContent } from "../../types/learning";

import { useStateContent } from "./react/useStateContent";
import { useEffectContent } from "./react/useEffectContent";
import { useRefContent } from "./react/useRefContent";
import { useContextContent } from "./react/useContextContent";
import { useMemoContent } from "./react/useMemoContent";
import { useCallbackContent } from "./react/useCallbackContent";
import { useTransitionContent } from "./react/useTransitionContent";
import { useOptimisticContent } from "./react/useOptimisticContent";
import { serverStateVsClientStateContent } from "./tanstack/serverStateVsClientStateContent";
import { queryClientProviderContent } from "./tanstack/queryClientProviderContent";
import { useQueryContent } from "./tanstack/useQueryContent";
import { queryKeysContent } from "./tanstack/queryKeysContent";
import { essentialGitCommandsContent } from "./git/essentialGitCommandsContent";
import { staleTimeContent } from "./tanstack/staleTimeContent";
import { cacheUpdatesContent } from "./tanstack/cacheUpdatesContent";
import { basicTypesContent } from "./typescript/basicTypesContent";
import { arraysObjectsContent } from "./typescript/arraysObjectsContent";
import { typeAliasesInterfacesContent } from "./typescript/typeAliasesInterfacesContent";
import { unionLiteralTypesContent } from "./typescript/unionLiteralTypesContent";
import { functionsContent } from "./typescript/functionsContent";
import { arrayMethodsContent } from "./typescript/arrayMethodsContent";
import { unknownNarrowingContent } from "./typescript/unknownNarrowingContent";
import { typeGuardsContent } from "./typescript/typeGuardsContent";
import { genericsContent } from "./typescript/genericsContent";
import { genericConstraintsKeyofContent } from "./typescript/genericConstraintsKeyofContent";
import { utilityTypesContent } from "./typescript/utilityTypesContent";
import { readonlyTuplesAsConstContent } from "./typescript/readonlyTuplesAsConstContent";
import { nullUndefinedContent } from "./typescript/nullUndefinedContent";
import { asyncApiResponseContent } from "./typescript/asyncApiResponseContent";
import { runtimeValidationContent } from "./typescript/runtimeValidationContent";
import { discriminatedUnionsContent } from "./typescript/discriminatedUnionsContent";
import { apiBoundaryPatternContent } from "./typescript/apiBoundaryPatternContent";
import { stagingCommitsContent } from "./git/stagingCommitsContent";
import { branchesContent } from "./git/branchesContent";
import { mergeContent } from "./git/mergeContent";
import { pushPullFetchContent } from "./git/pushPullFetchContent";
import { restoreResetRevertContent } from "./git/restoreResetRevertContent";
import { stashContent } from "./git/stashContent";
import { mergeConflictsContent } from "./git/mergeConflictsContent";
import { pullRequestsContent } from "./git/pullRequestsContent";
import { projectStructureContent } from "./react/projectStructureContent";
import { featureBasedArchitectureContent } from "./react/featureBasedArchitectureContent";
import { stateOwnershipContent } from "./react/stateOwnershipContent";
import { serviceLayerContent } from "./react/serviceLayerContent";
import { customHooksArchitectureContent } from "./react/customHooksArchitectureContent";
import { componentResponsibilitiesContent } from "./react/componentResponsibilitiesContent";
import { testingPhilosophyContent } from "./react/testingPhilosophyContent";
import { testingSetupContent } from "./react/testingSetupContent";
import { testingRenderingQueriesContent } from "./react/testingRenderingQueriesContent";
import { testingUserEventContent } from "./react/testingUserEventContent";
import { testingAsyncUiContent } from "./react/testingAsyncUiContent";
import { testingFormsContent } from "./react/testingFormsContent";
import { testingRouterContent } from "./react/testingRouterContent";
import { testingTanStackQueryContent } from "./react/testingTanStackQueryContent";
import { testingWhatNotToTestContent } from "./react/testingWhatNotToTestContent";
import { whyReduxToolkitContent } from "./redux/whyReduxToolkitContent";
import { storeSetupContent } from "./redux/storeSetupContent";
import { slicesReducersContent } from "./redux/slicesReducersContent";
import { typedHooksContent } from "./redux/typedHooksContent";
import { selectorsContent } from "./redux/selectorsContent";
import { payloadActionContent } from "./redux/payloadActionContent";
import { normalizedStateContent } from "./redux/normalizedStateContent";
import { entityAdapterContent } from "./redux/entityAdapterContent";
import { createAsyncThunkContent } from "./redux/createAsyncThunkContent";
import { asyncStateContent } from "./redux/asyncStateContent";
import { reduxVsTanStackContent } from "./redux/reduxVsTanStackContent";
import { reduxVsContextContent } from "./redux/reduxVsContextContent";
import { reduxProjectStructureContent } from "./redux/projectStructureContent";
import { reduxBestPracticesContent } from "./redux/bestPracticesContent";
import { requestResponseContent } from "./rest-api/requestResponseContent";
import { httpMethodsContent } from "./rest-api/httpMethodsContent";
import { statusCodesContent } from "./rest-api/statusCodesContent";
import { httpHeadersContent } from "./rest-api/httpHeadersContent";
import { resourceUrlsContent } from "./rest-api/resourceUrlsContent";
import { pathQueryParamsContent } from "./rest-api/pathQueryParamsContent";
import { putVsPatchContent } from "./rest-api/putVsPatchContent";
import { idempotencyContent } from "./rest-api/idempotencyContent";
import { filteringContent } from "./rest-api/filteringContent";
import { sortingContent } from "./rest-api/sortingContent";
import { paginationContent } from "./rest-api/paginationContent";
import { errorResponsesContent } from "./rest-api/errorResponsesContent";
import { authenticationAuthorizationContent } from "./rest-api/authenticationAuthorizationContent";
import { apiVersioningContent } from "./rest-api/apiVersioningContent";
import { restBestPracticesContent } from "./rest-api/bestPracticesContent";
import { endpointChecklistContent } from "./rest-api/endpointChecklistContent";
import { loadingErrorEmptyContent } from "./react/loadingErrorEmptyContent";
import { errorBoundariesContent } from "./react/errorBoundariesContent";
import { accessibilityBasicsContent } from "./react/accessibilityBasicsContent";
import { apiBoundariesContent } from "./react/apiBoundariesContent";
import { reusableComponentDesignContent } from "./react/reusableComponentDesignContent";
import { codeSmellsContent } from "./react/codeSmellsContent";
import { productionChecklistContent } from "./react/productionChecklistContent";
import { queryStatesContent } from "./tanstack/queryStatesContent";
import { conditionalQueriesContent } from "./tanstack/conditionalQueriesContent";
import { useMutationContent } from "./tanstack/useMutationContent";
import { invalidateQueriesContent } from "./tanstack/invalidateQueriesContent";
import { dependentQueriesContent } from "./tanstack/dependentQueriesContent";
import { tanStackPaginationContent } from "./tanstack/paginationContent";
import { prefetchingContent } from "./tanstack/prefetchingContent";
import { tanStackProductionBestPracticesContent } from "./tanstack/productionBestPracticesContent";
import { mappedTypesContent } from "./typescript/mappedTypesContent";
import { conditionalTypesContent } from "./typescript/conditionalTypesContent";
import { templateLiteralTypesContent } from "./typescript/templateLiteralTypesContent";

export const lessonContentRegistry: Record<string, LessonContent> = {
  [useStateContent.lessonId]: useStateContent,

  [useEffectContent.lessonId]: useEffectContent,

  [useRefContent.lessonId]: useRefContent,

  [useContextContent.lessonId]: useContextContent,

  [useMemoContent.lessonId]: useMemoContent,

  [useCallbackContent.lessonId]: useCallbackContent,

  [useTransitionContent.lessonId]: useTransitionContent,

  [useOptimisticContent.lessonId]: useOptimisticContent,

  [serverStateVsClientStateContent.lessonId]: serverStateVsClientStateContent,

  [queryClientProviderContent.lessonId]: queryClientProviderContent,

  [useQueryContent.lessonId]: useQueryContent,

  [queryKeysContent.lessonId]: queryKeysContent,

  [essentialGitCommandsContent.lessonId]: essentialGitCommandsContent,

  [staleTimeContent.lessonId]: staleTimeContent,

  [cacheUpdatesContent.lessonId]: cacheUpdatesContent,

  [basicTypesContent.lessonId]: basicTypesContent,

  [arraysObjectsContent.lessonId]: arraysObjectsContent,

  [typeAliasesInterfacesContent.lessonId]: typeAliasesInterfacesContent,

  [unionLiteralTypesContent.lessonId]: unionLiteralTypesContent,

  [functionsContent.lessonId]: functionsContent,

  [arrayMethodsContent.lessonId]: arrayMethodsContent,

  [unknownNarrowingContent.lessonId]: unknownNarrowingContent,

  [typeGuardsContent.lessonId]: typeGuardsContent,

  [genericsContent.lessonId]: genericsContent,

  [genericConstraintsKeyofContent.lessonId]: genericConstraintsKeyofContent,

  [utilityTypesContent.lessonId]: utilityTypesContent,

  [readonlyTuplesAsConstContent.lessonId]: readonlyTuplesAsConstContent,

  [nullUndefinedContent.lessonId]: nullUndefinedContent,

  [asyncApiResponseContent.lessonId]: asyncApiResponseContent,

  [runtimeValidationContent.lessonId]: runtimeValidationContent,

  [discriminatedUnionsContent.lessonId]: discriminatedUnionsContent,

  [apiBoundaryPatternContent.lessonId]: apiBoundaryPatternContent,

  [stagingCommitsContent.lessonId]: stagingCommitsContent,

  [branchesContent.lessonId]: branchesContent,

  [mergeContent.lessonId]: mergeContent,

  [pushPullFetchContent.lessonId]: pushPullFetchContent,

  [restoreResetRevertContent.lessonId]: restoreResetRevertContent,

  [stashContent.lessonId]: stashContent,

  [mergeConflictsContent.lessonId]: mergeConflictsContent,

  [pullRequestsContent.lessonId]: pullRequestsContent,

  [projectStructureContent.lessonId]: projectStructureContent,

  [featureBasedArchitectureContent.lessonId]: featureBasedArchitectureContent,

  [stateOwnershipContent.lessonId]: stateOwnershipContent,

  [serviceLayerContent.lessonId]: serviceLayerContent,

  [customHooksArchitectureContent.lessonId]: customHooksArchitectureContent,

  [componentResponsibilitiesContent.lessonId]: componentResponsibilitiesContent,

  [testingPhilosophyContent.lessonId]: testingPhilosophyContent,

  [testingSetupContent.lessonId]: testingSetupContent,

  [testingRenderingQueriesContent.lessonId]: testingRenderingQueriesContent,

  [testingUserEventContent.lessonId]: testingUserEventContent,

  [testingAsyncUiContent.lessonId]: testingAsyncUiContent,

  [testingFormsContent.lessonId]: testingFormsContent,

  [testingRouterContent.lessonId]: testingRouterContent,

  [testingTanStackQueryContent.lessonId]: testingTanStackQueryContent,

  [testingWhatNotToTestContent.lessonId]: testingWhatNotToTestContent,

  [whyReduxToolkitContent.lessonId]: whyReduxToolkitContent,

  [storeSetupContent.lessonId]: storeSetupContent,

  [slicesReducersContent.lessonId]: slicesReducersContent,

  [typedHooksContent.lessonId]: typedHooksContent,

  [selectorsContent.lessonId]: selectorsContent,

  [payloadActionContent.lessonId]: payloadActionContent,

  [normalizedStateContent.lessonId]: normalizedStateContent,

  [entityAdapterContent.lessonId]: entityAdapterContent,

  [createAsyncThunkContent.lessonId]: createAsyncThunkContent,

  [asyncStateContent.lessonId]: asyncStateContent,

  [reduxVsTanStackContent.lessonId]: reduxVsTanStackContent,

  [reduxVsContextContent.lessonId]: reduxVsContextContent,

  [reduxProjectStructureContent.lessonId]: reduxProjectStructureContent,

  [reduxBestPracticesContent.lessonId]: reduxBestPracticesContent,

  [requestResponseContent.lessonId]: requestResponseContent,

  [httpMethodsContent.lessonId]: httpMethodsContent,

  [statusCodesContent.lessonId]: statusCodesContent,

  [httpHeadersContent.lessonId]: httpHeadersContent,

  [resourceUrlsContent.lessonId]: resourceUrlsContent,

  [pathQueryParamsContent.lessonId]: pathQueryParamsContent,

  [putVsPatchContent.lessonId]: putVsPatchContent,

  [idempotencyContent.lessonId]: idempotencyContent,

  [filteringContent.lessonId]: filteringContent,

  [sortingContent.lessonId]: sortingContent,

  [paginationContent.lessonId]: paginationContent,

  [errorResponsesContent.lessonId]: errorResponsesContent,

  [authenticationAuthorizationContent.lessonId]:
    authenticationAuthorizationContent,

  [apiVersioningContent.lessonId]: apiVersioningContent,

  [restBestPracticesContent.lessonId]: restBestPracticesContent,

  [endpointChecklistContent.lessonId]: endpointChecklistContent,

  [loadingErrorEmptyContent.lessonId]: loadingErrorEmptyContent,

  [errorBoundariesContent.lessonId]: errorBoundariesContent,

  [accessibilityBasicsContent.lessonId]: accessibilityBasicsContent,

  [apiBoundariesContent.lessonId]: apiBoundariesContent,

  [reusableComponentDesignContent.lessonId]: reusableComponentDesignContent,

  [codeSmellsContent.lessonId]: codeSmellsContent,

  [productionChecklistContent.lessonId]: productionChecklistContent,

  [queryStatesContent.lessonId]: queryStatesContent,

  [conditionalQueriesContent.lessonId]: conditionalQueriesContent,

  [useMutationContent.lessonId]: useMutationContent,

  [invalidateQueriesContent.lessonId]: invalidateQueriesContent,

  [dependentQueriesContent.lessonId]: dependentQueriesContent,

  [tanStackPaginationContent.lessonId]: tanStackPaginationContent,

  [prefetchingContent.lessonId]: prefetchingContent,

  [tanStackProductionBestPracticesContent.lessonId]:
    tanStackProductionBestPracticesContent,

  [mappedTypesContent.lessonId]: mappedTypesContent,

  [conditionalTypesContent.lessonId]: conditionalTypesContent,

  [templateLiteralTypesContent.lessonId]: templateLiteralTypesContent,
};
