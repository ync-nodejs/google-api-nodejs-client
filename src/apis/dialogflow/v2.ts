// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  GaxiosPromise,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace dialogflow_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Dialogflow API
   *
   * Builds conversational interfaces (for example, chatbots, and voice-powered apps and devices).
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const dialogflow = google.dialogflow('v2');
   * ```
   */
  export class Dialogflow {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Metadata associated with the long running operation for Versions.CreateVersion.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata {
    /**
     * Name of the created version. Format: `projects//locations//agents//flows//versions/`.
     */
    version?: string | null;
  }
  /**
   * The response message for Agents.ExportAgent.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1ExportAgentResponse {
    /**
     * Uncompressed raw byte content for agent.
     */
    agentContent?: string | null;
    /**
     * The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in ExportAgentRequest.
     */
    agentUri?: string | null;
  }
  /**
   * Represents page information communicated to and from the webhook.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1PageInfo {
    /**
     * Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the current page. Format: `projects//locations//agents//flows//pages/`.
     */
    currentPage?: string | null;
    /**
     * Optional for both WebhookRequest and WebhookResponse. Information about the form.
     */
    formInfo?: Schema$GoogleCloudDialogflowCxV3beta1PageInfoFormInfo;
  }
  /**
   * Represents form information.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1PageInfoFormInfo {
    /**
     * Optional for both WebhookRequest and WebhookResponse. The parameters contained in the form. Note that the webhook cannot add or remove any form parameter.
     */
    parameterInfo?: Schema$GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo[];
  }
  /**
   * Represents parameter information.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo {
    /**
     * Always present for WebhookRequest. Required for WebhookResponse. The human-readable name of the parameter, unique within the form. This field cannot be modified by the webhook.
     */
    displayName?: string | null;
    /**
     * Optional for WebhookRequest. Ignored for WebhookResponse. Indicates if the parameter value was just collected on the last conversation turn.
     */
    justCollected?: boolean | null;
    /**
     * Optional for both WebhookRequest and WebhookResponse. Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes.
     */
    required?: boolean | null;
    /**
     * Always present for WebhookRequest. Required for WebhookResponse. The state of the parameter. This field can be set to INVALID by the webhook to invalidate the parameter; other values set by the webhook will be ignored.
     */
    state?: string | null;
    /**
     * Optional for both WebhookRequest and WebhookResponse. The value of the parameter. This field can be set by the webhook to change the parameter value.
     */
    value?: any | null;
  }
  /**
   * Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessage {
    /**
     * Indicates that the conversation succeeded.
     */
    conversationSuccess?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess;
    /**
     * Output only. A signal that indicates the interaction with the Dialogflow agent has ended. This message is generated by Dialogflow only when the conversation reaches `END_SESSION` or `END_PAGE` page. It is not supposed to be defined by the user. It's guaranteed that there is at most one such message in each response.
     */
    endInteraction?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction;
    /**
     * Hands off conversation to a human agent.
     */
    liveAgentHandoff?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff;
    /**
     * Output only. An audio response message composed of both the synthesized Dialogflow agent responses and responses defined via play_audio. This message is generated by Dialogflow only and not supposed to be defined by the user.
     */
    mixedAudio?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio;
    /**
     * A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
     */
    outputAudioText?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText;
    /**
     * Returns a response containing a custom, platform-specific payload.
     */
    payload?: {[key: string]: any} | null;
    /**
     * Signal that the client should play an audio clip hosted at a client-specific URI. Dialogflow uses this to construct mixed_audio. However, Dialogflow itself does not try to read or process the URI in any way.
     */
    playAudio?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio;
    /**
     * Returns a text response.
     */
    text?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageText;
  }
  /**
   * Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about. Dialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates that the conversation succeeded. * In a webhook response when you determine that you handled the customer issue.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess {
    /**
     * Custom metadata. Dialogflow doesn't impose any structure on this.
     */
    metadata?: {[key: string]: any} | null;
  }
  /**
   * Indicates that interaction with the Dialogflow agent has ended. This message is generated by Dialogflow only and not supposed to be defined by the user.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction {}
  /**
   * Indicates that the conversation should be handed off to a live agent. Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates something went extremely wrong in the conversation. * In a webhook response when you determine that the customer issue can only be handled by a human.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff {
    /**
     * Custom metadata for your handoff procedure. Dialogflow doesn't impose any structure on this.
     */
    metadata?: {[key: string]: any} | null;
  }
  /**
   * Represents an audio message that is composed of both segments synthesized from the Dialogflow agent prompts and ones hosted externally at the specified URIs. The external URIs are specified via play_audio. This message is generated by Dialogflow only and not supposed to be defined by the user.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio {
    /**
     * Segments this audio response is composed of.
     */
    segments?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment[];
  }
  /**
   * Represents one segment of audio.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment {
    /**
     * Output only. Whether the playback of this segment can be interrupted by the end user's speech and the client should then start the next Dialogflow request.
     */
    allowPlaybackInterruption?: boolean | null;
    /**
     * Raw audio synthesized from the Dialogflow agent's response using the output config specified in the request.
     */
    audio?: string | null;
    /**
     * Client-specific URI that points to an audio clip accessible to the client. Dialogflow does not impose any validation on it.
     */
    uri?: string | null;
  }
  /**
   * A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText {
    /**
     * Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
     */
    allowPlaybackInterruption?: boolean | null;
    /**
     * The SSML text to be synthesized. For more information, see [SSML](/speech/text-to-speech/docs/ssml).
     */
    ssml?: string | null;
    /**
     * The raw text to be synthesized.
     */
    text?: string | null;
  }
  /**
   * Specifies an audio clip to be played by the client as part of the response.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio {
    /**
     * Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
     */
    allowPlaybackInterruption?: boolean | null;
    /**
     * Required. URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.
     */
    audioUri?: string | null;
  }
  /**
   * The text response message.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1ResponseMessageText {
    /**
     * Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
     */
    allowPlaybackInterruption?: boolean | null;
    /**
     * Required. A collection of text responses.
     */
    text?: string[] | null;
  }
  /**
   * Represents session information communicated to and from the webhook.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1SessionInfo {
    /**
     * Optional for WebhookRequest. Optional for WebhookResponse. All parameters collected from forms and intents during the session. Parameters can be created, updated, or removed by the webhook. To remove a parameter from the session, the webhook should explicitly set the parameter value to null in WebhookResponse. The map is keyed by parameters' display names.
     */
    parameters?: {[key: string]: any} | null;
    /**
     * Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the session. This field can be used by the webhook to identify a user. Format: `projects//locations//agents//sessions/`.
     */
    session?: string | null;
  }
  /**
   * The request message for a webhook call.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookRequest {
    /**
     * Always present. The unique identifier of the DetectIntentResponse that will be returned to the API caller.
     */
    detectIntentResponseId?: string | null;
    /**
     * Always present. Information about the fulfillment that triggered this webhook call.
     */
    fulfillmentInfo?: Schema$GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo;
    /**
     * Information about the last matched intent.
     */
    intentInfo?: Schema$GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo;
    /**
     * The list of rich message responses to present to the user. Webhook can choose to append or replace this list in WebhookResponse.fulfillment_response;
     */
    messages?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessage[];
    /**
     * Information about page status.
     */
    pageInfo?: Schema$GoogleCloudDialogflowCxV3beta1PageInfo;
    /**
     * Custom data set in QueryParameters.payload.
     */
    payload?: {[key: string]: any} | null;
    /**
     * Information about session status.
     */
    sessionInfo?: Schema$GoogleCloudDialogflowCxV3beta1SessionInfo;
  }
  /**
   * Represents fulfillment information communicated to the webhook.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo {
    /**
     * Always present. The tag used to identify which fulfillment is being called.
     */
    tag?: string | null;
  }
  /**
   * Represents intent information communicated to the webhook.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo {
    /**
     * Always present. The unique identifier of the last matched intent. Format: `projects//locations//agents//intents/`.
     */
    lastMatchedIntent?: string | null;
    /**
     * Parameters identified as a result of intent matching. This is a map of the name of the identified parameter to the value of the parameter identified from the user's utterance. All parameters defined in the matched intent that are identified will be surfaced here.
     */
    parameters?: {
      [
        key: string
      ]: Schema$GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue;
    } | null;
  }
  /**
   * Represents a value for an intent parameter.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue {
    /**
     * Always present. Original text value extracted from user utterance.
     */
    originalValue?: string | null;
    /**
     * Always present. Structured value for the parameter extracted from user utterance.
     */
    resolvedValue?: any | null;
  }
  /**
   * The response message for a webhook call.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookResponse {
    /**
     * The fulfillment response to send to the user. This field can be omitted by the webhook if it does not intend to send any response to the user.
     */
    fulfillmentResponse?: Schema$GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse;
    /**
     * Information about page status. This field can be omitted by the webhook if it does not intend to modify page status.
     */
    pageInfo?: Schema$GoogleCloudDialogflowCxV3beta1PageInfo;
    /**
     * Value to append directly to QueryResult.webhook_payloads.
     */
    payload?: {[key: string]: any} | null;
    /**
     * Information about session status. This field can be omitted by the webhook if it does not intend to modify session status.
     */
    sessionInfo?: Schema$GoogleCloudDialogflowCxV3beta1SessionInfo;
    /**
     * The target flow to transition to. Format: `projects//locations//agents//flows/`.
     */
    targetFlow?: string | null;
    /**
     * The target page to transition to. Format: `projects//locations//agents//flows//pages/`.
     */
    targetPage?: string | null;
  }
  /**
   * Represents a fulfillment response to the user.
   */
  export interface Schema$GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse {
    /**
     * Merge behavior for `messages`.
     */
    mergeBehavior?: string | null;
    /**
     * The list of rich message responses to present to the user.
     */
    messages?: Schema$GoogleCloudDialogflowCxV3beta1ResponseMessage[];
  }
  /**
   * A Dialogflow agent is a virtual agent that handles conversations with your end-users. It is a natural language understanding module that understands the nuances of human language. Dialogflow translates end-user text or audio during a conversation to structured data that your apps and services can understand. You design and build a Dialogflow agent to handle the types of conversations required for your system. For more information about agents, see the [Agent guide](https://cloud.google.com/dialogflow/docs/agents-overview).
   */
  export interface Schema$GoogleCloudDialogflowV2Agent {
    /**
     * Optional. API version displayed in Dialogflow console. If not specified, V2 API is assumed. Clients are free to query different service endpoints for different API versions. However, bots connectors and webhook calls will follow the specified API version.
     */
    apiVersion?: string | null;
    /**
     * Optional. The URI of the agent's avatar. Avatars are used throughout the Dialogflow console and in the self-hosted [Web Demo](https://cloud.google.com/dialogflow/docs/integrations/web-demo) integration.
     */
    avatarUri?: string | null;
    /**
     * Optional. To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. If the returned score value is less than the threshold value, then a fallback intent will be triggered or, if there are no fallback intents defined, no intent will be triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used.
     */
    classificationThreshold?: number | null;
    /**
     * Required. The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. This field cannot be set by the `Update` method.
     */
    defaultLanguageCode?: string | null;
    /**
     * Optional. The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.
     */
    description?: string | null;
    /**
     * Required. The name of this agent.
     */
    displayName?: string | null;
    /**
     * Optional. Determines whether this agent should log conversation queries.
     */
    enableLogging?: boolean | null;
    /**
     * Optional. Determines how intents are detected from user queries.
     */
    matchMode?: string | null;
    /**
     * Required. The project of this agent. Format: `projects/`.
     */
    parent?: string | null;
    /**
     * Optional. The list of all languages supported by this agent (except for the `default_language_code`).
     */
    supportedLanguageCodes?: string[] | null;
    /**
     * Optional. The agent tier. If not specified, TIER_STANDARD is assumed.
     */
    tier?: string | null;
    /**
     * Required. The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.
     */
    timeZone?: string | null;
  }
  /**
   * Represents a part of a message possibly annotated with an entity. The part can be an entity or purely a part of the message between two entities or message start/end.
   */
  export interface Schema$GoogleCloudDialogflowV2AnnotatedMessagePart {
    /**
     * The [Dialogflow system entity type](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. If this is empty, Dialogflow could not annotate the phrase part with a system entity.
     */
    entityType?: string | null;
    /**
     * The [Dialogflow system entity formatted value ](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. For example for a system entity of type `@sys.unit-currency`, this may contain: { "amount": 5, "currency": "USD" \}
     */
    formattedValue?: any | null;
    /**
     * A part of a message possibly annotated with an entity.
     */
    text?: string | null;
  }
  /**
   * The request message for EntityTypes.BatchCreateEntities.
   */
  export interface Schema$GoogleCloudDialogflowV2BatchCreateEntitiesRequest {
    /**
     * Required. The entities to create.
     */
    entities?: Schema$GoogleCloudDialogflowV2EntityTypeEntity[];
    /**
     * Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     */
    languageCode?: string | null;
  }
  /**
   * The request message for EntityTypes.BatchDeleteEntities.
   */
  export interface Schema$GoogleCloudDialogflowV2BatchDeleteEntitiesRequest {
    /**
     * Required. The reference `values` of the entities to delete. Note that these are not fully-qualified names, i.e. they don't start with `projects/`.
     */
    entityValues?: string[] | null;
    /**
     * Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     */
    languageCode?: string | null;
  }
  /**
   * The request message for EntityTypes.BatchDeleteEntityTypes.
   */
  export interface Schema$GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest {
    /**
     * Required. The names entity types to delete. All names must point to the same agent as `parent`.
     */
    entityTypeNames?: string[] | null;
  }
  /**
   * The request message for Intents.BatchDeleteIntents.
   */
  export interface Schema$GoogleCloudDialogflowV2BatchDeleteIntentsRequest {
    /**
     * Required. The collection of intents to delete. Only intent `name` must be filled in.
     */
    intents?: Schema$GoogleCloudDialogflowV2Intent[];
  }
  /**
   * The request message for EntityTypes.BatchUpdateEntities.
   */
  export interface Schema$GoogleCloudDialogflowV2BatchUpdateEntitiesRequest {
    /**
     * Required. The entities to update or create.
     */
    entities?: Schema$GoogleCloudDialogflowV2EntityTypeEntity[];
    /**
     * Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     */
    languageCode?: string | null;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string | null;
  }
  /**
   * The request message for EntityTypes.BatchUpdateEntityTypes.
   */
  export interface Schema$GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest {
    /**
     * The collection of entity types to update or create.
     */
    entityTypeBatchInline?: Schema$GoogleCloudDialogflowV2EntityTypeBatch;
    /**
     * The URI to a Google Cloud Storage file containing entity types to update or create. The file format can either be a serialized proto (of EntityBatch type) or a JSON object. Note: The URI must start with "gs://".
     */
    entityTypeBatchUri?: string | null;
    /**
     * Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     */
    languageCode?: string | null;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string | null;
  }
  /**
   * The response message for EntityTypes.BatchUpdateEntityTypes.
   */
  export interface Schema$GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse {
    /**
     * The collection of updated or created entity types.
     */
    entityTypes?: Schema$GoogleCloudDialogflowV2EntityType[];
  }
  export interface Schema$GoogleCloudDialogflowV2BatchUpdateIntentsRequest {
    /**
     * The collection of intents to update or create.
     */
    intentBatchInline?: Schema$GoogleCloudDialogflowV2IntentBatch;
    /**
     * The URI to a Google Cloud Storage file containing intents to update or create. The file format can either be a serialized proto (of IntentBatch type) or JSON object. Note: The URI must start with "gs://".
     */
    intentBatchUri?: string | null;
    /**
     * Optional. The resource view to apply to the returned intent.
     */
    intentView?: string | null;
    /**
     * Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     */
    languageCode?: string | null;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string | null;
  }
  /**
   * The response message for Intents.BatchUpdateIntents.
   */
  export interface Schema$GoogleCloudDialogflowV2BatchUpdateIntentsResponse {
    /**
     * The collection of updated or created intents.
     */
    intents?: Schema$GoogleCloudDialogflowV2Intent[];
  }
  /**
   * The response message for EntityTypes.BatchUpdateEntityTypes.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse {
    /**
     * The collection of updated or created entity types.
     */
    entityTypes?: Schema$GoogleCloudDialogflowV2beta1EntityType[];
  }
  /**
   * The response message for Intents.BatchUpdateIntents.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse {
    /**
     * The collection of updated or created intents.
     */
    intents?: Schema$GoogleCloudDialogflowV2beta1Intent[];
  }
  /**
   * Dialogflow contexts are similar to natural language context. If a person says to you "they are orange", you need context in order to understand what "they" is referring to. Similarly, for Dialogflow to handle an end-user expression like that, it needs to be provided with context in order to correctly match an intent. Using contexts, you can control the flow of a conversation. You can configure contexts for an intent by setting input and output contexts, which are identified by string names. When an intent is matched, any configured output contexts for that intent become active. While any contexts are active, Dialogflow is more likely to match intents that are configured with input contexts that correspond to the currently active contexts. For more information about context, see the [Contexts guide](https://cloud.google.com/dialogflow/docs/contexts-overview).
   */
  export interface Schema$GoogleCloudDialogflowV2beta1Context {
    /**
     * Optional. The number of conversational query requests after which the context expires. The default is `0`. If set to `0`, the context expires immediately. Contexts expire automatically after 20 minutes if there are no matching queries.
     */
    lifespanCount?: number | null;
    /**
     * Required. The unique identifier of the context. Supported formats: - `projects//agent/sessions//contexts/`, - `projects//locations//agent/sessions//contexts/`, - `projects//agent/environments//users//sessions//contexts/`, - `projects//locations//agent/environments//users//sessions//contexts/`, The `Context ID` is always converted to lowercase, may only contain characters in a-zA-Z0-9_-% and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size`
     */
    name?: string | null;
    /**
     * Optional. The collection of parameters associated with this context. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: string or number, depending on parameter value type - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
     */
    parameters?: {[key: string]: any} | null;
  }
  /**
   * Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. Dialogflow provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent. For more information, see the [Entity guide](https://cloud.google.com/dialogflow/docs/entities-overview).
   */
  export interface Schema$GoogleCloudDialogflowV2beta1EntityType {
    /**
     * Optional. Indicates whether the entity type can be automatically expanded.
     */
    autoExpansionMode?: string | null;
    /**
     * Required. The name of the entity type.
     */
    displayName?: string | null;
    /**
     * Optional. Enables fuzzy entity extraction during classification.
     */
    enableFuzzyExtraction?: boolean | null;
    /**
     * Optional. The collection of entity entries associated with the entity type.
     */
    entities?: Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity[];
    /**
     * Required. Indicates the kind of entity type.
     */
    kind?: string | null;
    /**
     * The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Supported formats: - `projects//agent/entityTypes/` - `projects//locations//agent/entityTypes/`
     */
    name?: string | null;
  }
  /**
   * An **entity entry** for an associated entity type.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity {
    /**
     * Required. A collection of value synonyms. For example, if the entity type is *vegetable*, and `value` is *scallions*, a synonym could be *green onions*. For `KIND_LIST` entity types: * This collection must contain exactly one synonym equal to `value`.
     */
    synonyms?: string[] | null;
    /**
     * Required. The primary value associated with this entity entry. For example, if the entity type is *vegetable*, the value could be *scallions*. For `KIND_MAP` entity types: * A reference value to be used in place of synonyms. For `KIND_LIST` entity types: * A string that can contain references to other entity types (with or without aliases).
     */
    value?: string | null;
  }
  /**
   * Events allow for matching intents by event name instead of the natural language input. For instance, input `` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `"Hello #welcome_event.name! What can I do for you today?"`.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1EventInput {
    /**
     * Required. The language of this query. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
     */
    languageCode?: string | null;
    /**
     * Required. The unique identifier of the event.
     */
    name?: string | null;
    /**
     * The collection of parameters associated with the event. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: string or number, depending on parameter value type - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
     */
    parameters?: {[key: string]: any} | null;
  }
  /**
   * The response message for Agents.ExportAgent.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1ExportAgentResponse {
    /**
     * Zip compressed raw byte content for agent.
     */
    agentContent?: string | null;
    /**
     * The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in `ExportAgentRequest`.
     */
    agentUri?: string | null;
  }
  /**
   * An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
   */
  export interface Schema$GoogleCloudDialogflowV2beta1Intent {
    /**
     * Optional. The name of the action associated with the intent. Note: The action name must not contain whitespaces.
     */
    action?: string | null;
    /**
     * Optional. The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform).
     */
    defaultResponsePlatforms?: string[] | null;
    /**
     * Required. The name of this intent.
     */
    displayName?: string | null;
    /**
     * Optional. Indicates that this intent ends an interaction. Some integrations (e.g., Actions on Google or Dialogflow phone gateway) use this information to close interaction with an end user. Default is false.
     */
    endInteraction?: boolean | null;
    /**
     * Optional. The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of the contexts must be present in the active user session for an event to trigger this intent. Event names are limited to 150 characters.
     */
    events?: string[] | null;
    /**
     * Output only. Information about all followup intents that have this intent as a direct or indirect parent. We populate this field only in the output.
     */
    followupIntentInfo?: Schema$GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo[];
    /**
     * Optional. The list of context names required for this intent to be triggered. Formats: - `projects//agent/sessions/-/contexts/` - `projects//locations//agent/sessions/-/contexts/`
     */
    inputContextNames?: string[] | null;
    /**
     * Optional. Indicates whether this is a fallback intent.
     */
    isFallback?: boolean | null;
    /**
     * Optional. The collection of rich messages corresponding to the `Response` field in the Dialogflow console.
     */
    messages?: Schema$GoogleCloudDialogflowV2beta1IntentMessage[];
    /**
     * Optional. Indicates whether Machine Learning is disabled for the intent. Note: If `ml_disabled` setting is set to true, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off.
     */
    mlDisabled?: boolean | null;
    /**
     * Optional. Indicates whether Machine Learning is enabled for the intent. Note: If `ml_enabled` setting is set to false, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off. DEPRECATED! Please use `ml_disabled` field instead. NOTE: If both `ml_enabled` and `ml_disabled` are either not set or false, then the default value is determined as follows: - Before April 15th, 2018 the default is: ml_enabled = false / ml_disabled = true. - After April 15th, 2018 the default is: ml_enabled = true / ml_disabled = false.
     */
    mlEnabled?: boolean | null;
    /**
     * Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Supported formats: - `projects//agent/intents/` - `projects//locations//agent/intents/`
     */
    name?: string | null;
    /**
     * Optional. The collection of contexts that are activated when the intent is matched. Context messages in this collection should not set the parameters field. Setting the `lifespan_count` to 0 will reset the context when the intent is matched. Format: `projects//agent/sessions/-/contexts/`.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2beta1Context[];
    /**
     * Optional. The collection of parameters associated with the intent.
     */
    parameters?: Schema$GoogleCloudDialogflowV2beta1IntentParameter[];
    /**
     * Optional. The unique identifier of the parent intent in the chain of followup intents. You can set this field when creating an intent, for example with CreateIntent or BatchUpdateIntents, in order to make this intent a followup intent. It identifies the parent followup intent. Format: `projects//agent/intents/`.
     */
    parentFollowupIntentName?: string | null;
    /**
     * Optional. The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
     */
    priority?: number | null;
    /**
     * Optional. Indicates whether to delete all contexts in the current session when this intent is matched.
     */
    resetContexts?: boolean | null;
    /**
     * Output only. The unique identifier of the root intent in the chain of followup intents. It identifies the correct followup intents chain for this intent. Format: `projects//agent/intents/`.
     */
    rootFollowupIntentName?: string | null;
    /**
     * Optional. The collection of examples that the agent is trained on.
     */
    trainingPhrases?: Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrase[];
    /**
     * Optional. Indicates whether webhooks are enabled for the intent.
     */
    webhookState?: string | null;
  }
  /**
   * Represents a single followup intent in the chain.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo {
    /**
     * The unique identifier of the followup intent. Format: `projects//agent/intents/`.
     */
    followupIntentName?: string | null;
    /**
     * The unique identifier of the followup intent's parent. Format: `projects//agent/intents/`.
     */
    parentFollowupIntentName?: string | null;
  }
  /**
   * Corresponds to the `Response` field in the Dialogflow console.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessage {
    /**
     * Displays a basic card for Actions on Google.
     */
    basicCard?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCard;
    /**
     * Browse carousel card for Actions on Google.
     */
    browseCarouselCard?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard;
    /**
     * Displays a card.
     */
    card?: Schema$GoogleCloudDialogflowV2beta1IntentMessageCard;
    /**
     * Displays a carousel card for Actions on Google.
     */
    carouselSelect?: Schema$GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect;
    /**
     * Displays an image.
     */
    image?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Displays a link out suggestion chip for Actions on Google.
     */
    linkOutSuggestion?: Schema$GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion;
    /**
     * Displays a list card for Actions on Google.
     */
    listSelect?: Schema$GoogleCloudDialogflowV2beta1IntentMessageListSelect;
    /**
     * The media content card for Actions on Google.
     */
    mediaContent?: Schema$GoogleCloudDialogflowV2beta1IntentMessageMediaContent;
    /**
     * A custom platform-specific response.
     */
    payload?: {[key: string]: any} | null;
    /**
     * Optional. The platform that this message is intended for.
     */
    platform?: string | null;
    /**
     * Displays quick replies.
     */
    quickReplies?: Schema$GoogleCloudDialogflowV2beta1IntentMessageQuickReplies;
    /**
     * Rich Business Messaging (RBM) carousel rich card response.
     */
    rbmCarouselRichCard?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard;
    /**
     * Standalone Rich Business Messaging (RBM) rich card response.
     */
    rbmStandaloneRichCard?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard;
    /**
     * Rich Business Messaging (RBM) text response. RBM allows businesses to send enriched and branded versions of SMS. See https://jibe.google.com/business-messaging.
     */
    rbmText?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmText;
    /**
     * Returns a voice or text-only response for Actions on Google.
     */
    simpleResponses?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses;
    /**
     * Displays suggestion chips for Actions on Google.
     */
    suggestions?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSuggestions;
    /**
     * Table card for Actions on Google.
     */
    tableCard?: Schema$GoogleCloudDialogflowV2beta1IntentMessageTableCard;
    /**
     * Plays audio from a file in Telephony Gateway.
     */
    telephonyPlayAudio?: Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio;
    /**
     * Synthesizes speech in Telephony Gateway.
     */
    telephonySynthesizeSpeech?: Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech;
    /**
     * Transfers the call in Telephony Gateway.
     */
    telephonyTransferCall?: Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall;
    /**
     * Returns a text response.
     */
    text?: Schema$GoogleCloudDialogflowV2beta1IntentMessageText;
  }
  /**
   * The basic card message. Useful for displaying information.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCard {
    /**
     * Optional. The collection of card buttons.
     */
    buttons?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton[];
    /**
     * Required, unless image is present. The body text of the card.
     */
    formattedText?: string | null;
    /**
     * Optional. The image for the card.
     */
    image?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Optional. The subtitle of the card.
     */
    subtitle?: string | null;
    /**
     * Optional. The title of the card.
     */
    title?: string | null;
  }
  /**
   * The button object that appears at the bottom of a card.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton {
    /**
     * Required. Action to take when a user taps on the button.
     */
    openUriAction?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction;
    /**
     * Required. The title of the button.
     */
    title?: string | null;
  }
  /**
   * Opens the given URI.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction {
    /**
     * Required. The HTTP or HTTPS scheme URI.
     */
    uri?: string | null;
  }
  /**
   * Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard {
    /**
     * Optional. Settings for displaying the image. Applies to every image in items.
     */
    imageDisplayOptions?: string | null;
    /**
     * Required. List of items in the Browse Carousel Card. Minimum of two items, maximum of ten.
     */
    items?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem[];
  }
  /**
   * Browsing carousel tile
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem {
    /**
     * Optional. Description of the carousel item. Maximum of four lines of text.
     */
    description?: string | null;
    /**
     * Optional. Text that appears at the bottom of the Browse Carousel Card. Maximum of one line of text.
     */
    footer?: string | null;
    /**
     * Optional. Hero image for the carousel item.
     */
    image?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Required. Action to present to the user.
     */
    openUriAction?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
    /**
     * Required. Title of the carousel item. Maximum of two lines of text.
     */
    title?: string | null;
  }
  /**
   * Actions on Google action to open a given url.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction {
    /**
     * Required. URL
     */
    url?: string | null;
    /**
     * Optional. Specifies the type of viewer that is used when opening the URL. Defaults to opening via web browser.
     */
    urlTypeHint?: string | null;
  }
  /**
   * The card response message.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageCard {
    /**
     * Optional. The collection of card buttons.
     */
    buttons?: Schema$GoogleCloudDialogflowV2beta1IntentMessageCardButton[];
    /**
     * Optional. The public URI to an image file for the card.
     */
    imageUri?: string | null;
    /**
     * Optional. The subtitle of the card.
     */
    subtitle?: string | null;
    /**
     * Optional. The title of the card.
     */
    title?: string | null;
  }
  /**
   * Optional. Contains information about a button.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageCardButton {
    /**
     * Optional. The text to send back to the Dialogflow API or a URI to open.
     */
    postback?: string | null;
    /**
     * Optional. The text to show on the button.
     */
    text?: string | null;
  }
  /**
   * The card for presenting a carousel of options to select from.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect {
    /**
     * Required. Carousel items.
     */
    items?: Schema$GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem[];
  }
  /**
   * An item in the carousel.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem {
    /**
     * Optional. The body text of the card.
     */
    description?: string | null;
    /**
     * Optional. The image to display.
     */
    image?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Required. Additional info about the option item.
     */
    info?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
    /**
     * Required. Title of the carousel item.
     */
    title?: string | null;
  }
  /**
   * Column properties for TableCard.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageColumnProperties {
    /**
     * Required. Column heading.
     */
    header?: string | null;
    /**
     * Optional. Defines text alignment for all cells in this column.
     */
    horizontalAlignment?: string | null;
  }
  /**
   * The image response message.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageImage {
    /**
     * A text description of the image to be used for accessibility, e.g., screen readers. Required if image_uri is set for CarouselSelect.
     */
    accessibilityText?: string | null;
    /**
     * Optional. The public URI to an image file.
     */
    imageUri?: string | null;
  }
  /**
   * The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion {
    /**
     * Required. The name of the app or site this chip is linking to.
     */
    destinationName?: string | null;
    /**
     * Required. The URI of the app or site to open when the user taps the suggestion chip.
     */
    uri?: string | null;
  }
  /**
   * The card for presenting a list of options to select from.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageListSelect {
    /**
     * Required. List items.
     */
    items?: Schema$GoogleCloudDialogflowV2beta1IntentMessageListSelectItem[];
    /**
     * Optional. Subtitle of the list.
     */
    subtitle?: string | null;
    /**
     * Optional. The overall title of the list.
     */
    title?: string | null;
  }
  /**
   * An item in the list.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageListSelectItem {
    /**
     * Optional. The main text describing the item.
     */
    description?: string | null;
    /**
     * Optional. The image to display.
     */
    image?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Required. Additional information about this option.
     */
    info?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
    /**
     * Required. The title of the list item.
     */
    title?: string | null;
  }
  /**
   * The media content card for Actions on Google.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageMediaContent {
    /**
     * Required. List of media objects.
     */
    mediaObjects?: Schema$GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject[];
    /**
     * Optional. What type of media is the content (ie "audio").
     */
    mediaType?: string | null;
  }
  /**
   * Response media object for media content card.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject {
    /**
     * Required. Url where the media is stored.
     */
    contentUrl?: string | null;
    /**
     * Optional. Description of media card.
     */
    description?: string | null;
    /**
     * Optional. Icon to display above media content.
     */
    icon?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Optional. Image to display above media content.
     */
    largeImage?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Required. Name of media card.
     */
    name?: string | null;
  }
  /**
   * The quick replies response message.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageQuickReplies {
    /**
     * Optional. The collection of quick replies.
     */
    quickReplies?: string[] | null;
    /**
     * Optional. The title of the collection of quick replies.
     */
    title?: string | null;
  }
  /**
   * Rich Business Messaging (RBM) Card content
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent {
    /**
     * Optional. Description of the card (at most 2000 bytes). At least one of the title, description or media must be set.
     */
    description?: string | null;
    /**
     * Optional. However at least one of the title, description or media must be set. Media (image, GIF or a video) to include in the card.
     */
    media?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia;
    /**
     * Optional. List of suggestions to include in the card.
     */
    suggestions?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion[];
    /**
     * Optional. Title of the card (at most 200 bytes). At least one of the title, description or media must be set.
     */
    title?: string | null;
  }
  /**
   * Rich Business Messaging (RBM) Media displayed in Cards The following media-types are currently supported: Image Types * image/jpeg * image/jpg' * image/gif * image/png Video Types * video/h263 * video/m4v * video/mp4 * video/mpeg * video/mpeg4 * video/webm
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia {
    /**
     * Required. Publicly reachable URI of the file. The RBM platform determines the MIME type of the file from the content-type field in the HTTP headers when the platform fetches the file. The content-type field must be present and accurate in the HTTP response from the URL.
     */
    fileUri?: string | null;
    /**
     * Required for cards with vertical orientation. The height of the media within a rich card with a vertical layout. For a standalone card with horizontal layout, height is not customizable, and this field is ignored.
     */
    height?: string | null;
    /**
     * Optional. Publicly reachable URI of the thumbnail.If you don't provide a thumbnail URI, the RBM platform displays a blank placeholder thumbnail until the user's device downloads the file. Depending on the user's setting, the file may not download automatically and may require the user to tap a download button.
     */
    thumbnailUri?: string | null;
  }
  /**
   * Carousel Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. If you want to show a single card with more control over the layout, please use RbmStandaloneCard instead.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard {
    /**
     * Required. The cards in the carousel. A carousel must have at least 2 cards and at most 10.
     */
    cardContents?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent[];
    /**
     * Required. The width of the cards in the carousel.
     */
    cardWidth?: string | null;
  }
  /**
   * Standalone Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. You can group multiple rich cards into one using RbmCarouselCard but carousel cards will give you less control over the card layout.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard {
    /**
     * Required. Card content.
     */
    cardContent?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent;
    /**
     * Required. Orientation of the card.
     */
    cardOrientation?: string | null;
    /**
     * Required if orientation is horizontal. Image preview alignment for standalone cards with horizontal layout.
     */
    thumbnailImageAlignment?: string | null;
  }
  /**
   * Rich Business Messaging (RBM) suggested client-side action that the user can choose from the card.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction {
    /**
     * Suggested client side action: Dial a phone number
     */
    dial?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial;
    /**
     * Suggested client side action: Open a URI on device
     */
    openUrl?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri;
    /**
     * Opaque payload that the Dialogflow receives in a user event when the user taps the suggested action. This data will be also forwarded to webhook to allow performing custom business logic.
     */
    postbackData?: string | null;
    /**
     * Suggested client side action: Share user location
     */
    shareLocation?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation;
    /**
     * Text to display alongside the action.
     */
    text?: string | null;
  }
  /**
   * Opens the user's default dialer app with the specified phone number but does not dial automatically.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial {
    /**
     * Required. The phone number to fill in the default dialer app. This field should be in [E.164](https://en.wikipedia.org/wiki/E.164) format. An example of a correctly formatted phone number: +15556767888.
     */
    phoneNumber?: string | null;
  }
  /**
   * Opens the user's default web browser app to the specified uri If the user has an app installed that is registered as the default handler for the URL, then this app will be opened instead, and its icon will be used in the suggested action UI.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri {
    /**
     * Required. The uri to open on the user device
     */
    uri?: string | null;
  }
  /**
   * Opens the device's location chooser so the user can pick a location to send back to the agent.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation {}
  /**
   * Rich Business Messaging (RBM) suggested reply that the user can click instead of typing in their own response.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply {
    /**
     * Opaque payload that the Dialogflow receives in a user event when the user taps the suggested reply. This data will be also forwarded to webhook to allow performing custom business logic.
     */
    postbackData?: string | null;
    /**
     * Suggested reply text.
     */
    text?: string | null;
  }
  /**
   * Rich Business Messaging (RBM) suggestion. Suggestions allow user to easily select/click a predefined response or perform an action (like opening a web uri).
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion {
    /**
     * Predefined client side actions that user can choose
     */
    action?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction;
    /**
     * Predefined replies for user to select instead of typing
     */
    reply?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply;
  }
  /**
   * Rich Business Messaging (RBM) text response with suggestions.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmText {
    /**
     * Optional. One or more suggestions to show to the user.
     */
    rbmSuggestion?: Schema$GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion[];
    /**
     * Required. Text sent and displayed to the user.
     */
    text?: string | null;
  }
  /**
   * Additional info about the select item for when it is triggered in a dialog.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo {
    /**
     * Required. A unique key that will be sent back to the agent if this response is given.
     */
    key?: string | null;
    /**
     * Optional. A list of synonyms that can also be used to trigger this item in dialog.
     */
    synonyms?: string[] | null;
  }
  /**
   * The simple response message containing speech or text.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse {
    /**
     * Optional. The text to display.
     */
    displayText?: string | null;
    /**
     * One of text_to_speech or ssml must be provided. Structured spoken response to the user in the SSML format. Mutually exclusive with text_to_speech.
     */
    ssml?: string | null;
    /**
     * One of text_to_speech or ssml must be provided. The plain text of the speech output. Mutually exclusive with ssml.
     */
    textToSpeech?: string | null;
  }
  /**
   * The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses {
    /**
     * Required. The list of simple responses.
     */
    simpleResponses?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse[];
  }
  /**
   * The suggestion chip message that the user can tap to quickly post a reply to the conversation.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSuggestion {
    /**
     * Required. The text shown the in the suggestion chip.
     */
    title?: string | null;
  }
  /**
   * The collection of suggestions.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageSuggestions {
    /**
     * Required. The list of suggested replies.
     */
    suggestions?: Schema$GoogleCloudDialogflowV2beta1IntentMessageSuggestion[];
  }
  /**
   * Table card for Actions on Google.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTableCard {
    /**
     * Optional. List of buttons for the card.
     */
    buttons?: Schema$GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton[];
    /**
     * Optional. Display properties for the columns in this table.
     */
    columnProperties?: Schema$GoogleCloudDialogflowV2beta1IntentMessageColumnProperties[];
    /**
     * Optional. Image which should be displayed on the card.
     */
    image?: Schema$GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Optional. Rows in this table of data.
     */
    rows?: Schema$GoogleCloudDialogflowV2beta1IntentMessageTableCardRow[];
    /**
     * Optional. Subtitle to the title.
     */
    subtitle?: string | null;
    /**
     * Required. Title of the card.
     */
    title?: string | null;
  }
  /**
   * Cell of TableCardRow.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTableCardCell {
    /**
     * Required. Text in this cell.
     */
    text?: string | null;
  }
  /**
   * Row of TableCard.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTableCardRow {
    /**
     * Optional. List of cells that make up this row.
     */
    cells?: Schema$GoogleCloudDialogflowV2beta1IntentMessageTableCardCell[];
    /**
     * Optional. Whether to add a visual divider after this row.
     */
    dividerAfter?: boolean | null;
  }
  /**
   * Plays audio from a file in Telephony Gateway.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio {
    /**
     * Required. URI to a Google Cloud Storage object containing the audio to play, e.g., "gs://bucket/object". The object must contain a single channel (mono) of linear PCM audio (2 bytes / sample) at 8kHz. This object must be readable by the `service-@gcp-sa-dialogflow.iam.gserviceaccount.com` service account where is the number of the Telephony Gateway project (usually the same as the Dialogflow agent project). If the Google Cloud Storage bucket is in the Telephony Gateway project, this permission is added by default when enabling the Dialogflow V2 API. For audio from other sources, consider using the `TelephonySynthesizeSpeech` message with SSML.
     */
    audioUri?: string | null;
  }
  /**
   * Synthesizes speech and plays back the synthesized audio to the caller in Telephony Gateway. Telephony Gateway takes the synthesizer settings from `DetectIntentResponse.output_audio_config` which can either be set at request-level or can come from the agent-level synthesizer config.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech {
    /**
     * The SSML to be synthesized. For more information, see [SSML](https://developers.google.com/actions/reference/ssml).
     */
    ssml?: string | null;
    /**
     * The raw text to be synthesized.
     */
    text?: string | null;
  }
  /**
   * Transfers the call in Telephony Gateway.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall {
    /**
     * Required. The phone number to transfer the call to in [E.164 format](https://en.wikipedia.org/wiki/E.164). We currently only allow transferring to US numbers (+1xxxyyyzzzz).
     */
    phoneNumber?: string | null;
  }
  /**
   * The text response message.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentMessageText {
    /**
     * Optional. The collection of the agent's responses.
     */
    text?: string[] | null;
  }
  /**
   * Represents intent parameters.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentParameter {
    /**
     * Optional. The default value to use when the `value` yields an empty result. Default values can be extracted from contexts by using the following syntax: `#context_name.parameter_name`.
     */
    defaultValue?: string | null;
    /**
     * Required. The name of the parameter.
     */
    displayName?: string | null;
    /**
     * Optional. The name of the entity type, prefixed with `@`, that describes values of the parameter. If the parameter is required, this must be provided.
     */
    entityTypeDisplayName?: string | null;
    /**
     * Optional. Indicates whether the parameter represents a list of values.
     */
    isList?: boolean | null;
    /**
     * Optional. Indicates whether the parameter is required. That is, whether the intent cannot be completed without collecting the parameter value.
     */
    mandatory?: boolean | null;
    /**
     * The unique identifier of this parameter.
     */
    name?: string | null;
    /**
     * Optional. The collection of prompts that the agent can present to the user in order to collect a value for the parameter.
     */
    prompts?: string[] | null;
    /**
     * Optional. The definition of the parameter value. It can be: - a constant string, - a parameter value defined as `$parameter_name`, - an original parameter value defined as `$parameter_name.original`, - a parameter value from some context defined as `#context_name.parameter_name`.
     */
    value?: string | null;
  }
  /**
   * Represents an example that the agent is trained on.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrase {
    /**
     * Output only. The unique identifier of this training phrase.
     */
    name?: string | null;
    /**
     * Required. The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase. Note: The API does not automatically annotate training phrases like the Dialogflow Console does. Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated. If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set. If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways: - `Part.text` is set to a part of the phrase that has no parameters. - `Part.text` is set to a part of the phrase that you want to annotate, and the `entity_type`, `alias`, and `user_defined` fields are all set.
     */
    parts?: Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart[];
    /**
     * Optional. Indicates how many times this example was added to the intent. Each time a developer adds an existing sample by editing an intent or training, this counter is increased.
     */
    timesAddedCount?: number | null;
    /**
     * Required. The type of the training phrase.
     */
    type?: string | null;
  }
  /**
   * Represents a part of a training phrase.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart {
    /**
     * Optional. The parameter name for the value extracted from the annotated part of the example. This field is required for annotated parts of the training phrase.
     */
    alias?: string | null;
    /**
     * Optional. The entity type name prefixed with `@`. This field is required for annotated parts of the training phrase.
     */
    entityType?: string | null;
    /**
     * Required. The text for this part.
     */
    text?: string | null;
    /**
     * Optional. Indicates whether the text was manually annotated. This field is set to true when the Dialogflow Console is used to manually annotate the part. When creating an annotated part with the API, you must set this to true.
     */
    userDefined?: boolean | null;
  }
  /**
   * Represents the result of querying a Knowledge base.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1KnowledgeAnswers {
    /**
     * A list of answers from Knowledge Connector.
     */
    answers?: Schema$GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer[];
  }
  /**
   * An answer from Knowledge Connector.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer {
    /**
     * The piece of text from the `source` knowledge base document that answers this conversational query.
     */
    answer?: string | null;
    /**
     * The corresponding FAQ question if the answer was extracted from a FAQ Document, empty otherwise.
     */
    faqQuestion?: string | null;
    /**
     * The system's confidence score that this Knowledge answer is a good match for this conversational query. The range is from 0.0 (completely uncertain) to 1.0 (completely certain). Note: The confidence score is likely to vary somewhat (possibly even for identical requests), as the underlying model is under constant improvement. It may be deprecated in the future. We recommend using `match_confidence_level` which should be generally more stable.
     */
    matchConfidence?: number | null;
    /**
     * The system's confidence level that this knowledge answer is a good match for this conversational query. NOTE: The confidence level for a given `` pair may change without notice, as it depends on models that are constantly being improved. However, it will change less frequently than the confidence score below, and should be preferred for referencing the quality of an answer.
     */
    matchConfidenceLevel?: string | null;
    /**
     * Indicates which Knowledge Document this answer was extracted from. Format: `projects//knowledgeBases//documents/`.
     */
    source?: string | null;
  }
  /**
   * Metadata in google::longrunning::Operation for Knowledge operations.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata {
    /**
     * Required. Output only. The current state of this operation.
     */
    state?: string | null;
  }
  /**
   * Represents the contents of the original request that was passed to the `[Streaming]DetectIntent` call.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest {
    /**
     * Optional. This field is set to the value of the `QueryParameters.payload` field passed in the request. Some integrations that query a Dialogflow agent may provide additional information in the payload. In particular, for the Dialogflow Phone Gateway integration, this field has the form: { "telephony": { "caller_id": "+18558363987" \} \} Note: The caller ID field (`caller_id`) will be redacted for Trial Edition agents and populated with the caller ID in [E.164 format](https://en.wikipedia.org/wiki/E.164) for Essentials Edition agents.
     */
    payload?: {[key: string]: any} | null;
    /**
     * The source of this request, e.g., `google`, `facebook`, `slack`. It is set by Dialogflow-owned servers.
     */
    source?: string | null;
    /**
     * Optional. The version of the protocol used for this request. This field is AoG-specific.
     */
    version?: string | null;
  }
  /**
   * Represents the result of conversational query or event processing.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1QueryResult {
    /**
     * The action name from the matched intent.
     */
    action?: string | null;
    /**
     * This field is set to: - `false` if the matched intent has required parameters and not all of the required parameter values have been collected. - `true` if all required parameter values have been collected, or if the matched intent doesn't contain any required parameters.
     */
    allRequiredParamsPresent?: boolean | null;
    /**
     * Free-form diagnostic information for the associated detect intent request. The fields of this data can change without notice, so you should not write code that depends on its structure. The data may contain: - webhook call latency - webhook errors
     */
    diagnosticInfo?: {[key: string]: any} | null;
    /**
     * The collection of rich messages to present to the user.
     */
    fulfillmentMessages?: Schema$GoogleCloudDialogflowV2beta1IntentMessage[];
    /**
     * The text to be pronounced to the user or shown on the screen. Note: This is a legacy field, `fulfillment_messages` should be preferred.
     */
    fulfillmentText?: string | null;
    /**
     * The intent that matched the conversational query. Some, not all fields are filled in this message, including but not limited to: `name`, `display_name`, `end_interaction` and `is_fallback`.
     */
    intent?: Schema$GoogleCloudDialogflowV2beta1Intent;
    /**
     * The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. If there are `multiple knowledge_answers` messages, this value is set to the greatest `knowledgeAnswers.match_confidence` value in the list.
     */
    intentDetectionConfidence?: number | null;
    /**
     * The result from Knowledge Connector (if any), ordered by decreasing `KnowledgeAnswers.match_confidence`.
     */
    knowledgeAnswers?: Schema$GoogleCloudDialogflowV2beta1KnowledgeAnswers;
    /**
     * The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.
     */
    languageCode?: string | null;
    /**
     * The collection of output contexts. If applicable, `output_contexts.parameters` contains entries with name `.original` containing the original parameter values before the query.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2beta1Context[];
    /**
     * The collection of extracted parameters. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: string or number, depending on parameter value type - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
     */
    parameters?: {[key: string]: any} | null;
    /**
     * The original conversational query text: - If natural language text was provided as input, `query_text` contains a copy of the input. - If natural language speech audio was provided as input, `query_text` contains the speech recognition result. If speech recognizer produced multiple alternatives, a particular one is picked. - If automatic spell correction is enabled, `query_text` will contain the corrected user input.
     */
    queryText?: string | null;
    /**
     * The sentiment analysis result, which depends on the `sentiment_analysis_request_config` specified in the request.
     */
    sentimentAnalysisResult?: Schema$GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
    /**
     * The Speech recognition confidence between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. The default of 0.0 is a sentinel value indicating that confidence was not set. This field is not guaranteed to be accurate or set. In particular this field isn't set for StreamingDetectIntent since the streaming endpoint has separate confidence estimates per portion of the audio in StreamingRecognitionResult.
     */
    speechRecognitionConfidence?: number | null;
    /**
     * If the query was fulfilled by a webhook call, this field is set to the value of the `payload` field returned in the webhook response.
     */
    webhookPayload?: {[key: string]: any} | null;
    /**
     * If the query was fulfilled by a webhook call, this field is set to the value of the `source` field returned in the webhook response.
     */
    webhookSource?: string | null;
  }
  /**
   * The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1Sentiment {
    /**
     * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
     */
    magnitude?: number | null;
    /**
     * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
     */
    score?: number | null;
  }
  /**
   * The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config
   */
  export interface Schema$GoogleCloudDialogflowV2beta1SentimentAnalysisResult {
    /**
     * The sentiment analysis result for `query_text`.
     */
    queryTextSentiment?: Schema$GoogleCloudDialogflowV2beta1Sentiment;
  }
  /**
   * A session represents a conversation between a Dialogflow agent and an end-user. You can create special entities, called session entities, during a session. Session entities can extend or replace custom entity types and only exist during the session that they were created for. All session data, including session entities, is stored by Dialogflow for 20 minutes. For more information, see the [session entity guide](https://cloud.google.com/dialogflow/docs/entities-session).
   */
  export interface Schema$GoogleCloudDialogflowV2beta1SessionEntityType {
    /**
     * Required. The collection of entities associated with this session entity type.
     */
    entities?: Schema$GoogleCloudDialogflowV2beta1EntityTypeEntity[];
    /**
     * Required. Indicates whether the additional data should override or supplement the custom entity type definition.
     */
    entityOverrideMode?: string | null;
    /**
     * Required. The unique identifier of this session entity type. Supported formats: - `projects//agent/sessions//entityTypes/` - `projects//locations//agent/sessions//entityTypes/` - `projects//agent/environments//users//sessions//entityTypes/` - `projects//locations//agent/environments/ /users//sessions//entityTypes/` If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     */
    name?: string | null;
  }
  /**
   * The request message for a webhook call.
   */
  export interface Schema$GoogleCloudDialogflowV2beta1WebhookRequest {
    /**
     * Alternative query results from KnowledgeService.
     */
    alternativeQueryResults?: Schema$GoogleCloudDialogflowV2beta1QueryResult[];
    /**
     * Optional. The contents of the original request that was passed to `[Streaming]DetectIntent` call.
     */
    originalDetectIntentRequest?: Schema$GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest;
    /**
     * The result of the conversational query or event processing. Contains the same value as `[Streaming]DetectIntentResponse.query_result`.
     */
    queryResult?: Schema$GoogleCloudDialogflowV2beta1QueryResult;
    /**
     * The unique identifier of the response. Contains the same value as `[Streaming]DetectIntentResponse.response_id`.
     */
    responseId?: string | null;
    /**
     * The unique identifier of detectIntent request session. Can be used to identify end-user inside webhook implementation. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`,
     */
    session?: string | null;
  }
  /**
   * The response message for a webhook call. This response is validated by the Dialogflow server. If validation fails, an error will be returned in the QueryResult.diagnostic_info field. Setting JSON fields to an empty value with the wrong type is a common error. To avoid this error: - Use `""` for empty strings - Use `{\}` or `null` for empty objects - Use `[]` or `null` for empty arrays For more information, see the [Protocol Buffers Language Guide](https://developers.google.com/protocol-buffers/docs/proto3#json).
   */
  export interface Schema$GoogleCloudDialogflowV2beta1WebhookResponse {
    /**
     * Optional. Indicates that this intent ends an interaction. Some integrations (e.g., Actions on Google or Dialogflow phone gateway) use this information to close interaction with an end user. Default is false.
     */
    endInteraction?: boolean | null;
    /**
     * Optional. Invokes the supplied events. When this field is set, Dialogflow ignores the `fulfillment_text`, `fulfillment_messages`, and `payload` fields.
     */
    followupEventInput?: Schema$GoogleCloudDialogflowV2beta1EventInput;
    /**
     * Optional. The rich response messages intended for the end-user. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_messages sent to the integration or API caller.
     */
    fulfillmentMessages?: Schema$GoogleCloudDialogflowV2beta1IntentMessage[];
    /**
     * Optional. The text response message intended for the end-user. It is recommended to use `fulfillment_messages.text.text[0]` instead. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_text sent to the integration or API caller.
     */
    fulfillmentText?: string | null;
    /**
     * Optional. The collection of output contexts that will overwrite currently active contexts for the session and reset their lifespans. When provided, Dialogflow uses this field to populate QueryResult.output_contexts sent to the integration or API caller.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2beta1Context[];
    /**
     * Optional. This field can be used to pass custom data from your webhook to the integration or API caller. Arbitrary JSON objects are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_payload sent to the integration or API caller. This field is also used by the [Google Assistant integration](https://cloud.google.com/dialogflow/docs/integrations/aog) for rich response messages. See the format definition at [Google Assistant Dialogflow webhook format](https://developers.google.com/assistant/actions/build/json/dialogflow-webhook-json)
     */
    payload?: {[key: string]: any} | null;
    /**
     * Optional. Additional session entity types to replace or extend developer entity types with. The entity synonyms apply to all languages and persist for the session. Setting this data from a webhook overwrites the session entity types that have been set using `detectIntent`, `streamingDetectIntent` or SessionEntityType management methods.
     */
    sessionEntityTypes?: Schema$GoogleCloudDialogflowV2beta1SessionEntityType[];
    /**
     * Optional. A custom field used to identify the webhook source. Arbitrary strings are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_source sent to the integration or API caller.
     */
    source?: string | null;
  }
  /**
   * Dialogflow contexts are similar to natural language context. If a person says to you "they are orange", you need context in order to understand what "they" is referring to. Similarly, for Dialogflow to handle an end-user expression like that, it needs to be provided with context in order to correctly match an intent. Using contexts, you can control the flow of a conversation. You can configure contexts for an intent by setting input and output contexts, which are identified by string names. When an intent is matched, any configured output contexts for that intent become active. While any contexts are active, Dialogflow is more likely to match intents that are configured with input contexts that correspond to the currently active contexts. For more information about context, see the [Contexts guide](https://cloud.google.com/dialogflow/docs/contexts-overview).
   */
  export interface Schema$GoogleCloudDialogflowV2Context {
    /**
     * Optional. The number of conversational query requests after which the context expires. The default is `0`. If set to `0`, the context expires immediately. Contexts expire automatically after 20 minutes if there are no matching queries.
     */
    lifespanCount?: number | null;
    /**
     * Required. The unique identifier of the context. Format: `projects//agent/sessions//contexts/`, or `projects//agent/environments//users//sessions//contexts/`. The `Context ID` is always converted to lowercase, may only contain characters in a-zA-Z0-9_-% and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size`
     */
    name?: string | null;
    /**
     * Optional. The collection of parameters associated with this context. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: string or number, depending on parameter value type - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
     */
    parameters?: {[key: string]: any} | null;
  }
  /**
   * Represents a notification sent to Pub/Sub subscribers for conversation lifecycle events.
   */
  export interface Schema$GoogleCloudDialogflowV2ConversationEvent {
    /**
     * The unique identifier of the conversation this notification refers to. Format: `projects//conversations/`.
     */
    conversation?: string | null;
    /**
     * More detailed information about an error. Only set for type UNRECOVERABLE_ERROR_IN_PHONE_CALL.
     */
    errorStatus?: Schema$GoogleRpcStatus;
    /**
     * Payload of NEW_MESSAGE event.
     */
    newMessagePayload?: Schema$GoogleCloudDialogflowV2Message;
    /**
     * The type of the event that this notification refers to.
     */
    type?: string | null;
  }
  /**
   * The request to detect user's intent.
   */
  export interface Schema$GoogleCloudDialogflowV2DetectIntentRequest {
    /**
     * The natural language speech audio to be processed. This field should be populated iff `query_input` is set to an input audio config. A single request can contain up to 1 minute of speech audio data.
     */
    inputAudio?: string | null;
    /**
     * Instructs the speech synthesizer how to generate the output audio. If this field is not set and agent-level speech synthesizer is not configured, no output audio is generated.
     */
    outputAudioConfig?: Schema$GoogleCloudDialogflowV2OutputAudioConfig;
    /**
     * Mask for output_audio_config indicating which settings in this request-level config should override speech synthesizer settings defined at agent-level. If unspecified or empty, output_audio_config replaces the agent-level config in its entirety.
     */
    outputAudioConfigMask?: string | null;
    /**
     * Required. The input specification. It can be set to: 1. an audio config which instructs the speech recognizer how to process the speech audio, 2. a conversational query in the form of text, or 3. an event that specifies which intent to trigger.
     */
    queryInput?: Schema$GoogleCloudDialogflowV2QueryInput;
    /**
     * The parameters of this query.
     */
    queryParams?: Schema$GoogleCloudDialogflowV2QueryParameters;
  }
  /**
   * The message returned from the DetectIntent method.
   */
  export interface Schema$GoogleCloudDialogflowV2DetectIntentResponse {
    /**
     * The audio data bytes encoded as specified in the request. Note: The output audio is generated based on the values of default platform text responses found in the `query_result.fulfillment_messages` field. If multiple default text responses exist, they will be concatenated when generating audio. If no default platform text responses exist, the generated audio content will be empty. In some scenarios, multiple output audio fields may be present in the response structure. In these cases, only the top-most-level audio output has content.
     */
    outputAudio?: string | null;
    /**
     * The config used by the speech synthesizer to generate the output audio.
     */
    outputAudioConfig?: Schema$GoogleCloudDialogflowV2OutputAudioConfig;
    /**
     * The selected results of the conversational query or event processing. See `alternative_query_results` for additional potential results.
     */
    queryResult?: Schema$GoogleCloudDialogflowV2QueryResult;
    /**
     * The unique identifier of the response. It can be used to locate a response in the training example set or for reporting issues.
     */
    responseId?: string | null;
    /**
     * Specifies the status of the webhook request.
     */
    webhookStatus?: Schema$GoogleRpcStatus;
  }
  /**
   * Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. Dialogflow provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent. For more information, see the [Entity guide](https://cloud.google.com/dialogflow/docs/entities-overview).
   */
  export interface Schema$GoogleCloudDialogflowV2EntityType {
    /**
     * Optional. Indicates whether the entity type can be automatically expanded.
     */
    autoExpansionMode?: string | null;
    /**
     * Required. The name of the entity type.
     */
    displayName?: string | null;
    /**
     * Optional. Enables fuzzy entity extraction during classification.
     */
    enableFuzzyExtraction?: boolean | null;
    /**
     * Optional. The collection of entity entries associated with the entity type.
     */
    entities?: Schema$GoogleCloudDialogflowV2EntityTypeEntity[];
    /**
     * Required. Indicates the kind of entity type.
     */
    kind?: string | null;
    /**
     * The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Format: `projects//agent/entityTypes/`.
     */
    name?: string | null;
  }
  /**
   * This message is a wrapper around a collection of entity types.
   */
  export interface Schema$GoogleCloudDialogflowV2EntityTypeBatch {
    /**
     * A collection of entity types.
     */
    entityTypes?: Schema$GoogleCloudDialogflowV2EntityType[];
  }
  /**
   * An **entity entry** for an associated entity type.
   */
  export interface Schema$GoogleCloudDialogflowV2EntityTypeEntity {
    /**
     * Required. A collection of value synonyms. For example, if the entity type is *vegetable*, and `value` is *scallions*, a synonym could be *green onions*. For `KIND_LIST` entity types: * This collection must contain exactly one synonym equal to `value`.
     */
    synonyms?: string[] | null;
    /**
     * Required. The primary value associated with this entity entry. For example, if the entity type is *vegetable*, the value could be *scallions*. For `KIND_MAP` entity types: * A reference value to be used in place of synonyms. For `KIND_LIST` entity types: * A string that can contain references to other entity types (with or without aliases).
     */
    value?: string | null;
  }
  /**
   * You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
   */
  export interface Schema$GoogleCloudDialogflowV2Environment {
    /**
     * Optional. The agent version loaded into this environment. Format: `projects//agent/versions/`.
     */
    agentVersion?: string | null;
    /**
     * Optional. The developer-provided description for this environment. The maximum length is 500 characters. If exceeded, the request is rejected.
     */
    description?: string | null;
    /**
     * Output only. The unique identifier of this agent environment. Format: `projects//agent/environments/`. For Environment ID, "-" is reserved for 'draft' environment.
     */
    name?: string | null;
    /**
     * Output only. The state of this environment. This field is read-only, i.e., it cannot be set by create and update methods.
     */
    state?: string | null;
    /**
     * Output only. The last update time of this environment. This field is read-only, i.e., it cannot be set by create and update methods.
     */
    updateTime?: string | null;
  }
  /**
   * Events allow for matching intents by event name instead of the natural language input. For instance, input `` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `"Hello #welcome_event.name! What can I do for you today?"`.
   */
  export interface Schema$GoogleCloudDialogflowV2EventInput {
    /**
     * Required. The language of this query. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
     */
    languageCode?: string | null;
    /**
     * Required. The unique identifier of the event.
     */
    name?: string | null;
    /**
     * The collection of parameters associated with the event. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: string or number, depending on parameter value type - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
     */
    parameters?: {[key: string]: any} | null;
  }
  /**
   * The request message for Agents.ExportAgent.
   */
  export interface Schema$GoogleCloudDialogflowV2ExportAgentRequest {
    /**
     * Required. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the agent to. The format of this URI must be `gs:///`. If left unspecified, the serialized agent is returned inline.
     */
    agentUri?: string | null;
  }
  /**
   * The response message for Agents.ExportAgent.
   */
  export interface Schema$GoogleCloudDialogflowV2ExportAgentResponse {
    /**
     * Zip compressed raw byte content for agent.
     */
    agentContent?: string | null;
    /**
     * The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in `ExportAgentRequest`.
     */
    agentUri?: string | null;
  }
  /**
   * By default, your agent responds to a matched intent with a static response. As an alternative, you can provide a more dynamic response by using fulfillment. When you enable fulfillment for an intent, Dialogflow responds to that intent by calling a service that you define. For example, if an end-user wants to schedule a haircut on Friday, your service can check your database and respond to the end-user with availability information for Friday. For more information, see the [fulfillment guide](https://cloud.google.com/dialogflow/docs/fulfillment-overview).
   */
  export interface Schema$GoogleCloudDialogflowV2Fulfillment {
    /**
     * Optional. The human-readable name of the fulfillment, unique within the agent.
     */
    displayName?: string | null;
    /**
     * Optional. Whether fulfillment is enabled.
     */
    enabled?: boolean | null;
    /**
     * Optional. The field defines whether the fulfillment is enabled for certain features.
     */
    features?: Schema$GoogleCloudDialogflowV2FulfillmentFeature[];
    /**
     * Configuration for a generic web service.
     */
    genericWebService?: Schema$GoogleCloudDialogflowV2FulfillmentGenericWebService;
    /**
     * Required. The unique identifier of the fulfillment. Format: `projects//agent/fulfillment`.
     */
    name?: string | null;
  }
  /**
   * Whether fulfillment is enabled for the specific feature.
   */
  export interface Schema$GoogleCloudDialogflowV2FulfillmentFeature {
    /**
     * The type of the feature that enabled for fulfillment.
     */
    type?: string | null;
  }
  /**
   * Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic authentication with username and password. - Authentication with additional authentication headers. More information could be found at: https://cloud.google.com/dialogflow/docs/fulfillment-configure.
   */
  export interface Schema$GoogleCloudDialogflowV2FulfillmentGenericWebService {
    /**
     * Optional. Indicates if generic web service is created through Cloud Functions integration. Defaults to false.
     */
    isCloudFunction?: boolean | null;
    /**
     * Optional. The password for HTTP Basic authentication.
     */
    password?: string | null;
    /**
     * Optional. The HTTP request headers to send together with fulfillment requests.
     */
    requestHeaders?: {[key: string]: string} | null;
    /**
     * Required. The fulfillment URI for receiving POST requests. It must use https protocol.
     */
    uri?: string | null;
    /**
     * Optional. The user name for HTTP Basic authentication.
     */
    username?: string | null;
  }
  /**
   * The request message for Agents.ImportAgent.
   */
  export interface Schema$GoogleCloudDialogflowV2ImportAgentRequest {
    /**
     * Zip compressed raw byte content for agent.
     */
    agentContent?: string | null;
    /**
     * The URI to a Google Cloud Storage file containing the agent to import. Note: The URI must start with "gs://".
     */
    agentUri?: string | null;
  }
  /**
   * Instructs the speech recognizer how to process the audio content.
   */
  export interface Schema$GoogleCloudDialogflowV2InputAudioConfig {
    /**
     * Required. Audio encoding of the audio content to process.
     */
    audioEncoding?: string | null;
    /**
     * If `true`, Dialogflow returns SpeechWordInfo in StreamingRecognitionResult with information about the recognized speech words, e.g. start and end time offsets. If false or unspecified, Speech doesn't return any word-level information.
     */
    enableWordInfo?: boolean | null;
    /**
     * Required. The language of the supplied audio. Dialogflow does not do translations. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
     */
    languageCode?: string | null;
    /**
     * Which Speech model to select for the given request. Select the model best suited to your domain to get best results. If a model is not explicitly specified, then we auto-select a model based on the parameters in the InputAudioConfig. If enhanced speech model is enabled for the agent and an enhanced version of the specified model for the language does not exist, then the speech is recognized using the standard version of the specified model. Refer to [Cloud Speech API documentation](https://cloud.google.com/speech-to-text/docs/basics#select-model) for more details.
     */
    model?: string | null;
    /**
     * Which variant of the Speech model to use.
     */
    modelVariant?: string | null;
    /**
     * A list of strings containing words and phrases that the speech recognizer should recognize with higher likelihood. See [the Cloud Speech documentation](https://cloud.google.com/speech-to-text/docs/basics#phrase-hints) for more details. This field is deprecated. Please use [speech_contexts]() instead. If you specify both [phrase_hints]() and [speech_contexts](), Dialogflow will treat the [phrase_hints]() as a single additional [SpeechContext]().
     */
    phraseHints?: string[] | null;
    /**
     * Required. Sample rate (in Hertz) of the audio content sent in the query. Refer to [Cloud Speech API documentation](https://cloud.google.com/speech-to-text/docs/basics) for more details.
     */
    sampleRateHertz?: number | null;
    /**
     * If `false` (default), recognition does not cease until the client closes the stream. If `true`, the recognizer will detect a single spoken utterance in input audio. Recognition ceases when it detects the audio's voice has stopped or paused. In this case, once a detected intent is received, the client should close the stream and start a new request with a new stream as needed. Note: This setting is relevant only for streaming methods. Note: When specified, InputAudioConfig.single_utterance takes precedence over StreamingDetectIntentRequest.single_utterance.
     */
    singleUtterance?: boolean | null;
    /**
     * Context information to assist speech recognition. See [the Cloud Speech documentation](https://cloud.google.com/speech-to-text/docs/basics#phrase-hints) for more details.
     */
    speechContexts?: Schema$GoogleCloudDialogflowV2SpeechContext[];
  }
  /**
   * An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
   */
  export interface Schema$GoogleCloudDialogflowV2Intent {
    /**
     * Optional. The name of the action associated with the intent. Note: The action name must not contain whitespaces.
     */
    action?: string | null;
    /**
     * Optional. The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform).
     */
    defaultResponsePlatforms?: string[] | null;
    /**
     * Required. The name of this intent.
     */
    displayName?: string | null;
    /**
     * Optional. The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of the contexts must be present in the active user session for an event to trigger this intent. Event names are limited to 150 characters.
     */
    events?: string[] | null;
    /**
     * Read-only. Information about all followup intents that have this intent as a direct or indirect parent. We populate this field only in the output.
     */
    followupIntentInfo?: Schema$GoogleCloudDialogflowV2IntentFollowupIntentInfo[];
    /**
     * Optional. The list of context names required for this intent to be triggered. Format: `projects//agent/sessions/-/contexts/`.
     */
    inputContextNames?: string[] | null;
    /**
     * Optional. Indicates whether this is a fallback intent.
     */
    isFallback?: boolean | null;
    /**
     * Optional. The collection of rich messages corresponding to the `Response` field in the Dialogflow console.
     */
    messages?: Schema$GoogleCloudDialogflowV2IntentMessage[];
    /**
     * Optional. Indicates whether Machine Learning is disabled for the intent. Note: If `ml_disabled` setting is set to true, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off.
     */
    mlDisabled?: boolean | null;
    /**
     * Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Format: `projects//agent/intents/`.
     */
    name?: string | null;
    /**
     * Optional. The collection of contexts that are activated when the intent is matched. Context messages in this collection should not set the parameters field. Setting the `lifespan_count` to 0 will reset the context when the intent is matched. Format: `projects//agent/sessions/-/contexts/`.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2Context[];
    /**
     * Optional. The collection of parameters associated with the intent.
     */
    parameters?: Schema$GoogleCloudDialogflowV2IntentParameter[];
    /**
     * Read-only after creation. The unique identifier of the parent intent in the chain of followup intents. You can set this field when creating an intent, for example with CreateIntent or BatchUpdateIntents, in order to make this intent a followup intent. It identifies the parent followup intent. Format: `projects//agent/intents/`.
     */
    parentFollowupIntentName?: string | null;
    /**
     * Optional. The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
     */
    priority?: number | null;
    /**
     * Optional. Indicates whether to delete all contexts in the current session when this intent is matched.
     */
    resetContexts?: boolean | null;
    /**
     * Read-only. The unique identifier of the root intent in the chain of followup intents. It identifies the correct followup intents chain for this intent. We populate this field only in the output. Format: `projects//agent/intents/`.
     */
    rootFollowupIntentName?: string | null;
    /**
     * Optional. The collection of examples that the agent is trained on.
     */
    trainingPhrases?: Schema$GoogleCloudDialogflowV2IntentTrainingPhrase[];
    /**
     * Optional. Indicates whether webhooks are enabled for the intent.
     */
    webhookState?: string | null;
  }
  /**
   * This message is a wrapper around a collection of intents.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentBatch {
    /**
     * A collection of intents.
     */
    intents?: Schema$GoogleCloudDialogflowV2Intent[];
  }
  /**
   * Represents a single followup intent in the chain.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentFollowupIntentInfo {
    /**
     * The unique identifier of the followup intent. Format: `projects//agent/intents/`.
     */
    followupIntentName?: string | null;
    /**
     * The unique identifier of the followup intent's parent. Format: `projects//agent/intents/`.
     */
    parentFollowupIntentName?: string | null;
  }
  /**
   * A rich response message. Corresponds to the intent `Response` field in the Dialogflow console. For more information, see [Rich response messages](https://cloud.google.com/dialogflow/docs/intents-rich-messages).
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessage {
    /**
     * The basic card response for Actions on Google.
     */
    basicCard?: Schema$GoogleCloudDialogflowV2IntentMessageBasicCard;
    /**
     * Browse carousel card for Actions on Google.
     */
    browseCarouselCard?: Schema$GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard;
    /**
     * The card response.
     */
    card?: Schema$GoogleCloudDialogflowV2IntentMessageCard;
    /**
     * The carousel card response for Actions on Google.
     */
    carouselSelect?: Schema$GoogleCloudDialogflowV2IntentMessageCarouselSelect;
    /**
     * The image response.
     */
    image?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * The link out suggestion chip for Actions on Google.
     */
    linkOutSuggestion?: Schema$GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion;
    /**
     * The list card response for Actions on Google.
     */
    listSelect?: Schema$GoogleCloudDialogflowV2IntentMessageListSelect;
    /**
     * The media content card for Actions on Google.
     */
    mediaContent?: Schema$GoogleCloudDialogflowV2IntentMessageMediaContent;
    /**
     * A custom platform-specific response.
     */
    payload?: {[key: string]: any} | null;
    /**
     * Optional. The platform that this message is intended for.
     */
    platform?: string | null;
    /**
     * The quick replies response.
     */
    quickReplies?: Schema$GoogleCloudDialogflowV2IntentMessageQuickReplies;
    /**
     * The voice and text-only responses for Actions on Google.
     */
    simpleResponses?: Schema$GoogleCloudDialogflowV2IntentMessageSimpleResponses;
    /**
     * The suggestion chips for Actions on Google.
     */
    suggestions?: Schema$GoogleCloudDialogflowV2IntentMessageSuggestions;
    /**
     * Table card for Actions on Google.
     */
    tableCard?: Schema$GoogleCloudDialogflowV2IntentMessageTableCard;
    /**
     * The text response.
     */
    text?: Schema$GoogleCloudDialogflowV2IntentMessageText;
  }
  /**
   * The basic card message. Useful for displaying information.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageBasicCard {
    /**
     * Optional. The collection of card buttons.
     */
    buttons?: Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButton[];
    /**
     * Required, unless image is present. The body text of the card.
     */
    formattedText?: string | null;
    /**
     * Optional. The image for the card.
     */
    image?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * Optional. The subtitle of the card.
     */
    subtitle?: string | null;
    /**
     * Optional. The title of the card.
     */
    title?: string | null;
  }
  /**
   * The button object that appears at the bottom of a card.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButton {
    /**
     * Required. Action to take when a user taps on the button.
     */
    openUriAction?: Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction;
    /**
     * Required. The title of the button.
     */
    title?: string | null;
  }
  /**
   * Opens the given URI.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction {
    /**
     * Required. The HTTP or HTTPS scheme URI.
     */
    uri?: string | null;
  }
  /**
   * Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard {
    /**
     * Optional. Settings for displaying the image. Applies to every image in items.
     */
    imageDisplayOptions?: string | null;
    /**
     * Required. List of items in the Browse Carousel Card. Minimum of two items, maximum of ten.
     */
    items?: Schema$GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem[];
  }
  /**
   * Browsing carousel tile
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem {
    /**
     * Optional. Description of the carousel item. Maximum of four lines of text.
     */
    description?: string | null;
    /**
     * Optional. Text that appears at the bottom of the Browse Carousel Card. Maximum of one line of text.
     */
    footer?: string | null;
    /**
     * Optional. Hero image for the carousel item.
     */
    image?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * Required. Action to present to the user.
     */
    openUriAction?: Schema$GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction;
    /**
     * Required. Title of the carousel item. Maximum of two lines of text.
     */
    title?: string | null;
  }
  /**
   * Actions on Google action to open a given url.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction {
    /**
     * Required. URL
     */
    url?: string | null;
    /**
     * Optional. Specifies the type of viewer that is used when opening the URL. Defaults to opening via web browser.
     */
    urlTypeHint?: string | null;
  }
  /**
   * The card response message.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageCard {
    /**
     * Optional. The collection of card buttons.
     */
    buttons?: Schema$GoogleCloudDialogflowV2IntentMessageCardButton[];
    /**
     * Optional. The public URI to an image file for the card.
     */
    imageUri?: string | null;
    /**
     * Optional. The subtitle of the card.
     */
    subtitle?: string | null;
    /**
     * Optional. The title of the card.
     */
    title?: string | null;
  }
  /**
   * Contains information about a button.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageCardButton {
    /**
     * Optional. The text to send back to the Dialogflow API or a URI to open.
     */
    postback?: string | null;
    /**
     * Optional. The text to show on the button.
     */
    text?: string | null;
  }
  /**
   * The card for presenting a carousel of options to select from.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageCarouselSelect {
    /**
     * Required. Carousel items.
     */
    items?: Schema$GoogleCloudDialogflowV2IntentMessageCarouselSelectItem[];
  }
  /**
   * An item in the carousel.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageCarouselSelectItem {
    /**
     * Optional. The body text of the card.
     */
    description?: string | null;
    /**
     * Optional. The image to display.
     */
    image?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * Required. Additional info about the option item.
     */
    info?: Schema$GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
    /**
     * Required. Title of the carousel item.
     */
    title?: string | null;
  }
  /**
   * Column properties for TableCard.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageColumnProperties {
    /**
     * Required. Column heading.
     */
    header?: string | null;
    /**
     * Optional. Defines text alignment for all cells in this column.
     */
    horizontalAlignment?: string | null;
  }
  /**
   * The image response message.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageImage {
    /**
     * Optional. A text description of the image to be used for accessibility, e.g., screen readers.
     */
    accessibilityText?: string | null;
    /**
     * Optional. The public URI to an image file.
     */
    imageUri?: string | null;
  }
  /**
   * The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion {
    /**
     * Required. The name of the app or site this chip is linking to.
     */
    destinationName?: string | null;
    /**
     * Required. The URI of the app or site to open when the user taps the suggestion chip.
     */
    uri?: string | null;
  }
  /**
   * The card for presenting a list of options to select from.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageListSelect {
    /**
     * Required. List items.
     */
    items?: Schema$GoogleCloudDialogflowV2IntentMessageListSelectItem[];
    /**
     * Optional. Subtitle of the list.
     */
    subtitle?: string | null;
    /**
     * Optional. The overall title of the list.
     */
    title?: string | null;
  }
  /**
   * An item in the list.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageListSelectItem {
    /**
     * Optional. The main text describing the item.
     */
    description?: string | null;
    /**
     * Optional. The image to display.
     */
    image?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * Required. Additional information about this option.
     */
    info?: Schema$GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
    /**
     * Required. The title of the list item.
     */
    title?: string | null;
  }
  /**
   * The media content card for Actions on Google.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageMediaContent {
    /**
     * Required. List of media objects.
     */
    mediaObjects?: Schema$GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject[];
    /**
     * Optional. What type of media is the content (ie "audio").
     */
    mediaType?: string | null;
  }
  /**
   * Response media object for media content card.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject {
    /**
     * Required. Url where the media is stored.
     */
    contentUrl?: string | null;
    /**
     * Optional. Description of media card.
     */
    description?: string | null;
    /**
     * Optional. Icon to display above media content.
     */
    icon?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * Optional. Image to display above media content.
     */
    largeImage?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * Required. Name of media card.
     */
    name?: string | null;
  }
  /**
   * The quick replies response message.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageQuickReplies {
    /**
     * Optional. The collection of quick replies.
     */
    quickReplies?: string[] | null;
    /**
     * Optional. The title of the collection of quick replies.
     */
    title?: string | null;
  }
  /**
   * Additional info about the select item for when it is triggered in a dialog.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageSelectItemInfo {
    /**
     * Required. A unique key that will be sent back to the agent if this response is given.
     */
    key?: string | null;
    /**
     * Optional. A list of synonyms that can also be used to trigger this item in dialog.
     */
    synonyms?: string[] | null;
  }
  /**
   * The simple response message containing speech or text.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageSimpleResponse {
    /**
     * Optional. The text to display.
     */
    displayText?: string | null;
    /**
     * One of text_to_speech or ssml must be provided. Structured spoken response to the user in the SSML format. Mutually exclusive with text_to_speech.
     */
    ssml?: string | null;
    /**
     * One of text_to_speech or ssml must be provided. The plain text of the speech output. Mutually exclusive with ssml.
     */
    textToSpeech?: string | null;
  }
  /**
   * The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageSimpleResponses {
    /**
     * Required. The list of simple responses.
     */
    simpleResponses?: Schema$GoogleCloudDialogflowV2IntentMessageSimpleResponse[];
  }
  /**
   * The suggestion chip message that the user can tap to quickly post a reply to the conversation.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageSuggestion {
    /**
     * Required. The text shown the in the suggestion chip.
     */
    title?: string | null;
  }
  /**
   * The collection of suggestions.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageSuggestions {
    /**
     * Required. The list of suggested replies.
     */
    suggestions?: Schema$GoogleCloudDialogflowV2IntentMessageSuggestion[];
  }
  /**
   * Table card for Actions on Google.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageTableCard {
    /**
     * Optional. List of buttons for the card.
     */
    buttons?: Schema$GoogleCloudDialogflowV2IntentMessageBasicCardButton[];
    /**
     * Optional. Display properties for the columns in this table.
     */
    columnProperties?: Schema$GoogleCloudDialogflowV2IntentMessageColumnProperties[];
    /**
     * Optional. Image which should be displayed on the card.
     */
    image?: Schema$GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * Optional. Rows in this table of data.
     */
    rows?: Schema$GoogleCloudDialogflowV2IntentMessageTableCardRow[];
    /**
     * Optional. Subtitle to the title.
     */
    subtitle?: string | null;
    /**
     * Required. Title of the card.
     */
    title?: string | null;
  }
  /**
   * Cell of TableCardRow.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageTableCardCell {
    /**
     * Required. Text in this cell.
     */
    text?: string | null;
  }
  /**
   * Row of TableCard.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageTableCardRow {
    /**
     * Optional. List of cells that make up this row.
     */
    cells?: Schema$GoogleCloudDialogflowV2IntentMessageTableCardCell[];
    /**
     * Optional. Whether to add a visual divider after this row.
     */
    dividerAfter?: boolean | null;
  }
  /**
   * The text response message.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentMessageText {
    /**
     * Optional. The collection of the agent's responses.
     */
    text?: string[] | null;
  }
  /**
   * Represents intent parameters.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentParameter {
    /**
     * Optional. The default value to use when the `value` yields an empty result. Default values can be extracted from contexts by using the following syntax: `#context_name.parameter_name`.
     */
    defaultValue?: string | null;
    /**
     * Required. The name of the parameter.
     */
    displayName?: string | null;
    /**
     * Optional. The name of the entity type, prefixed with `@`, that describes values of the parameter. If the parameter is required, this must be provided.
     */
    entityTypeDisplayName?: string | null;
    /**
     * Optional. Indicates whether the parameter represents a list of values.
     */
    isList?: boolean | null;
    /**
     * Optional. Indicates whether the parameter is required. That is, whether the intent cannot be completed without collecting the parameter value.
     */
    mandatory?: boolean | null;
    /**
     * The unique identifier of this parameter.
     */
    name?: string | null;
    /**
     * Optional. The collection of prompts that the agent can present to the user in order to collect a value for the parameter.
     */
    prompts?: string[] | null;
    /**
     * Optional. The definition of the parameter value. It can be: - a constant string, - a parameter value defined as `$parameter_name`, - an original parameter value defined as `$parameter_name.original`, - a parameter value from some context defined as `#context_name.parameter_name`.
     */
    value?: string | null;
  }
  /**
   * Represents an example that the agent is trained on.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentTrainingPhrase {
    /**
     * Output only. The unique identifier of this training phrase.
     */
    name?: string | null;
    /**
     * Required. The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase. Note: The API does not automatically annotate training phrases like the Dialogflow Console does. Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated. If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set. If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways: - `Part.text` is set to a part of the phrase that has no parameters. - `Part.text` is set to a part of the phrase that you want to annotate, and the `entity_type`, `alias`, and `user_defined` fields are all set.
     */
    parts?: Schema$GoogleCloudDialogflowV2IntentTrainingPhrasePart[];
    /**
     * Optional. Indicates how many times this example was added to the intent. Each time a developer adds an existing sample by editing an intent or training, this counter is increased.
     */
    timesAddedCount?: number | null;
    /**
     * Required. The type of the training phrase.
     */
    type?: string | null;
  }
  /**
   * Represents a part of a training phrase.
   */
  export interface Schema$GoogleCloudDialogflowV2IntentTrainingPhrasePart {
    /**
     * Optional. The parameter name for the value extracted from the annotated part of the example. This field is required for annotated parts of the training phrase.
     */
    alias?: string | null;
    /**
     * Optional. The entity type name prefixed with `@`. This field is required for annotated parts of the training phrase.
     */
    entityType?: string | null;
    /**
     * Required. The text for this part.
     */
    text?: string | null;
    /**
     * Optional. Indicates whether the text was manually annotated. This field is set to true when the Dialogflow Console is used to manually annotate the part. When creating an annotated part with the API, you must set this to true.
     */
    userDefined?: boolean | null;
  }
  /**
   * The response message for Contexts.ListContexts.
   */
  export interface Schema$GoogleCloudDialogflowV2ListContextsResponse {
    /**
     * The list of contexts. There will be a maximum number of items returned based on the page_size field in the request.
     */
    contexts?: Schema$GoogleCloudDialogflowV2Context[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for EntityTypes.ListEntityTypes.
   */
  export interface Schema$GoogleCloudDialogflowV2ListEntityTypesResponse {
    /**
     * The list of agent entity types. There will be a maximum number of items returned based on the page_size field in the request.
     */
    entityTypes?: Schema$GoogleCloudDialogflowV2EntityType[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for Environments.ListEnvironments.
   */
  export interface Schema$GoogleCloudDialogflowV2ListEnvironmentsResponse {
    /**
     * The list of agent environments. There will be a maximum number of items returned based on the page_size field in the request.
     */
    environments?: Schema$GoogleCloudDialogflowV2Environment[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for Intents.ListIntents.
   */
  export interface Schema$GoogleCloudDialogflowV2ListIntentsResponse {
    /**
     * The list of agent intents. There will be a maximum number of items returned based on the page_size field in the request.
     */
    intents?: Schema$GoogleCloudDialogflowV2Intent[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for SessionEntityTypes.ListSessionEntityTypes.
   */
  export interface Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * The list of session entity types. There will be a maximum number of items returned based on the page_size field in the request.
     */
    sessionEntityTypes?: Schema$GoogleCloudDialogflowV2SessionEntityType[];
  }
  /**
   * Represents a message posted into a conversation.
   */
  export interface Schema$GoogleCloudDialogflowV2Message {
    /**
     * Required. The message content.
     */
    content?: string | null;
    /**
     * Output only. The time when the message was created.
     */
    createTime?: string | null;
    /**
     * Optional. The message language. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US".
     */
    languageCode?: string | null;
    /**
     * Output only. The annotation for the message.
     */
    messageAnnotation?: Schema$GoogleCloudDialogflowV2MessageAnnotation;
    /**
     * The unique identifier of the message. Format: `projects//locations//conversations//messages/`.
     */
    name?: string | null;
    /**
     * Output only. The participant that sends this message.
     */
    participant?: string | null;
    /**
     * Output only. The role of the participant.
     */
    participantRole?: string | null;
  }
  /**
   * Represents the result of annotation for the message.
   */
  export interface Schema$GoogleCloudDialogflowV2MessageAnnotation {
    /**
     * Indicates whether the text message contains entities.
     */
    containEntities?: boolean | null;
    /**
     * The collection of annotated message parts ordered by their position in the message. You can recover the annotated message by concatenating [AnnotatedMessagePart.text].
     */
    parts?: Schema$GoogleCloudDialogflowV2AnnotatedMessagePart[];
  }
  /**
   * Represents the contents of the original request that was passed to the `[Streaming]DetectIntent` call.
   */
  export interface Schema$GoogleCloudDialogflowV2OriginalDetectIntentRequest {
    /**
     * Optional. This field is set to the value of the `QueryParameters.payload` field passed in the request. Some integrations that query a Dialogflow agent may provide additional information in the payload. In particular, for the Dialogflow Phone Gateway integration, this field has the form: { "telephony": { "caller_id": "+18558363987" \} \} Note: The caller ID field (`caller_id`) will be redacted for Trial Edition agents and populated with the caller ID in [E.164 format](https://en.wikipedia.org/wiki/E.164) for Essentials Edition agents.
     */
    payload?: {[key: string]: any} | null;
    /**
     * The source of this request, e.g., `google`, `facebook`, `slack`. It is set by Dialogflow-owned servers.
     */
    source?: string | null;
    /**
     * Optional. The version of the protocol used for this request. This field is AoG-specific.
     */
    version?: string | null;
  }
  /**
   * Instructs the speech synthesizer on how to generate the output audio content. If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent.
   */
  export interface Schema$GoogleCloudDialogflowV2OutputAudioConfig {
    /**
     * Required. Audio encoding of the synthesized audio content.
     */
    audioEncoding?: string | null;
    /**
     * The synthesis sample rate (in hertz) for this audio. If not provided, then the synthesizer will use the default sample rate based on the audio encoding. If this is different from the voice's natural sample rate, then the synthesizer will honor this request by converting to the desired sample rate (which might result in worse audio quality).
     */
    sampleRateHertz?: number | null;
    /**
     * Configuration of how speech should be synthesized.
     */
    synthesizeSpeechConfig?: Schema$GoogleCloudDialogflowV2SynthesizeSpeechConfig;
  }
  /**
   * Represents the query input. It can contain either: 1. An audio config which instructs the speech recognizer how to process the speech audio. 2. A conversational query in the form of text,. 3. An event that specifies which intent to trigger.
   */
  export interface Schema$GoogleCloudDialogflowV2QueryInput {
    /**
     * Instructs the speech recognizer how to process the speech audio.
     */
    audioConfig?: Schema$GoogleCloudDialogflowV2InputAudioConfig;
    /**
     * The event to be processed.
     */
    event?: Schema$GoogleCloudDialogflowV2EventInput;
    /**
     * The natural language text to be processed.
     */
    text?: Schema$GoogleCloudDialogflowV2TextInput;
  }
  /**
   * Represents the parameters of the conversational query.
   */
  export interface Schema$GoogleCloudDialogflowV2QueryParameters {
    /**
     * The collection of contexts to be activated before this query is executed.
     */
    contexts?: Schema$GoogleCloudDialogflowV2Context[];
    /**
     * The geo location of this conversational query.
     */
    geoLocation?: Schema$GoogleTypeLatLng;
    /**
     * This field can be used to pass custom data to your webhook. Arbitrary JSON objects are supported. If supplied, the value is used to populate the `WebhookRequest.original_detect_intent_request.payload` field sent to your webhook.
     */
    payload?: {[key: string]: any} | null;
    /**
     * Specifies whether to delete all contexts in the current session before the new ones are activated.
     */
    resetContexts?: boolean | null;
    /**
     * Configures the type of sentiment analysis to perform. If not provided, sentiment analysis is not performed.
     */
    sentimentAnalysisRequestConfig?: Schema$GoogleCloudDialogflowV2SentimentAnalysisRequestConfig;
    /**
     * Additional session entity types to replace or extend developer entity types with. The entity synonyms apply to all languages and persist for the session of this query.
     */
    sessionEntityTypes?: Schema$GoogleCloudDialogflowV2SessionEntityType[];
    /**
     * The time zone of this conversational query from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. If not provided, the time zone specified in agent settings is used.
     */
    timeZone?: string | null;
    /**
     * This field can be used to pass HTTP headers for a webhook call. These headers will be sent to webhook along with the headers that have been configured through Dialogflow web console. The headers defined within this field will overwrite the headers configured through Dialogflow console if there is a conflict. Header names are case-insensitive. Google's specified headers are not allowed. Including: "Host", "Content-Length", "Connection", "From", "User-Agent", "Accept-Encoding", "If-Modified-Since", "If-None-Match", "X-Forwarded-For", etc.
     */
    webhookHeaders?: {[key: string]: string} | null;
  }
  /**
   * Represents the result of conversational query or event processing.
   */
  export interface Schema$GoogleCloudDialogflowV2QueryResult {
    /**
     * The action name from the matched intent.
     */
    action?: string | null;
    /**
     * This field is set to: - `false` if the matched intent has required parameters and not all of the required parameter values have been collected. - `true` if all required parameter values have been collected, or if the matched intent doesn't contain any required parameters.
     */
    allRequiredParamsPresent?: boolean | null;
    /**
     * Free-form diagnostic information for the associated detect intent request. The fields of this data can change without notice, so you should not write code that depends on its structure. The data may contain: - webhook call latency - webhook errors
     */
    diagnosticInfo?: {[key: string]: any} | null;
    /**
     * The collection of rich messages to present to the user.
     */
    fulfillmentMessages?: Schema$GoogleCloudDialogflowV2IntentMessage[];
    /**
     * The text to be pronounced to the user or shown on the screen. Note: This is a legacy field, `fulfillment_messages` should be preferred.
     */
    fulfillmentText?: string | null;
    /**
     * The intent that matched the conversational query. Some, not all fields are filled in this message, including but not limited to: `name`, `display_name`, `end_interaction` and `is_fallback`.
     */
    intent?: Schema$GoogleCloudDialogflowV2Intent;
    /**
     * The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. If there are `multiple knowledge_answers` messages, this value is set to the greatest `knowledgeAnswers.match_confidence` value in the list.
     */
    intentDetectionConfidence?: number | null;
    /**
     * The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.
     */
    languageCode?: string | null;
    /**
     * The collection of output contexts. If applicable, `output_contexts.parameters` contains entries with name `.original` containing the original parameter values before the query.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2Context[];
    /**
     * The collection of extracted parameters. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: string or number, depending on parameter value type - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
     */
    parameters?: {[key: string]: any} | null;
    /**
     * The original conversational query text: - If natural language text was provided as input, `query_text` contains a copy of the input. - If natural language speech audio was provided as input, `query_text` contains the speech recognition result. If speech recognizer produced multiple alternatives, a particular one is picked. - If automatic spell correction is enabled, `query_text` will contain the corrected user input.
     */
    queryText?: string | null;
    /**
     * The sentiment analysis result, which depends on the `sentiment_analysis_request_config` specified in the request.
     */
    sentimentAnalysisResult?: Schema$GoogleCloudDialogflowV2SentimentAnalysisResult;
    /**
     * The Speech recognition confidence between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. The default of 0.0 is a sentinel value indicating that confidence was not set. This field is not guaranteed to be accurate or set. In particular this field isn't set for StreamingDetectIntent since the streaming endpoint has separate confidence estimates per portion of the audio in StreamingRecognitionResult.
     */
    speechRecognitionConfidence?: number | null;
    /**
     * If the query was fulfilled by a webhook call, this field is set to the value of the `payload` field returned in the webhook response.
     */
    webhookPayload?: {[key: string]: any} | null;
    /**
     * If the query was fulfilled by a webhook call, this field is set to the value of the `source` field returned in the webhook response.
     */
    webhookSource?: string | null;
  }
  /**
   * The request message for Agents.RestoreAgent.
   */
  export interface Schema$GoogleCloudDialogflowV2RestoreAgentRequest {
    /**
     * Zip compressed raw byte content for agent.
     */
    agentContent?: string | null;
    /**
     * The URI to a Google Cloud Storage file containing the agent to restore. Note: The URI must start with "gs://".
     */
    agentUri?: string | null;
  }
  /**
   * The response message for Agents.SearchAgents.
   */
  export interface Schema$GoogleCloudDialogflowV2SearchAgentsResponse {
    /**
     * The list of agents. There will be a maximum number of items returned based on the page_size field in the request.
     */
    agents?: Schema$GoogleCloudDialogflowV2Agent[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text.
   */
  export interface Schema$GoogleCloudDialogflowV2Sentiment {
    /**
     * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
     */
    magnitude?: number | null;
    /**
     * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
     */
    score?: number | null;
  }
  /**
   * Configures the types of sentiment analysis to perform.
   */
  export interface Schema$GoogleCloudDialogflowV2SentimentAnalysisRequestConfig {
    /**
     * Instructs the service to perform sentiment analysis on `query_text`. If not provided, sentiment analysis is not performed on `query_text`.
     */
    analyzeQueryTextSentiment?: boolean | null;
  }
  /**
   * The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config
   */
  export interface Schema$GoogleCloudDialogflowV2SentimentAnalysisResult {
    /**
     * The sentiment analysis result for `query_text`.
     */
    queryTextSentiment?: Schema$GoogleCloudDialogflowV2Sentiment;
  }
  /**
   * A session represents a conversation between a Dialogflow agent and an end-user. You can create special entities, called session entities, during a session. Session entities can extend or replace custom entity types and only exist during the session that they were created for. All session data, including session entities, is stored by Dialogflow for 20 minutes. For more information, see the [session entity guide](https://cloud.google.com/dialogflow/docs/entities-session).
   */
  export interface Schema$GoogleCloudDialogflowV2SessionEntityType {
    /**
     * Required. The collection of entities associated with this session entity type.
     */
    entities?: Schema$GoogleCloudDialogflowV2EntityTypeEntity[];
    /**
     * Required. Indicates whether the additional data should override or supplement the custom entity type definition.
     */
    entityOverrideMode?: string | null;
    /**
     * Required. The unique identifier of this session entity type. Format: `projects//agent/sessions//entityTypes/`, or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     */
    name?: string | null;
  }
  /**
   * Hints for the speech recognizer to help with recognition in a specific conversation state.
   */
  export interface Schema$GoogleCloudDialogflowV2SpeechContext {
    /**
     * Optional. Boost for this context compared to other contexts: * If the boost is positive, Dialogflow will increase the probability that the phrases in this context are recognized over similar sounding phrases. * If the boost is unspecified or non-positive, Dialogflow will not apply any boost. Dialogflow recommends that you use boosts in the range (0, 20] and that you find a value that fits your use case with binary search.
     */
    boost?: number | null;
    /**
     * Optional. A list of strings containing words and phrases that the speech recognizer should recognize with higher likelihood. This list can be used to: * improve accuracy for words and phrases you expect the user to say, e.g. typical commands for your Dialogflow agent * add additional words to the speech recognizer vocabulary * ... See the [Cloud Speech documentation](https://cloud.google.com/speech-to-text/quotas) for usage limits.
     */
    phrases?: string[] | null;
  }
  /**
   * Configuration of how speech should be synthesized.
   */
  export interface Schema$GoogleCloudDialogflowV2SynthesizeSpeechConfig {
    /**
     * Optional. An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. Effects are applied on top of each other in the order they are given.
     */
    effectsProfileId?: string[] | null;
    /**
     * Optional. Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.
     */
    pitch?: number | null;
    /**
     * Optional. Speaking rate/speed, in the range [0.25, 4.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0 speed. Any other values < 0.25 or \> 4.0 will return an error.
     */
    speakingRate?: number | null;
    /**
     * Optional. The desired voice of the synthesized audio.
     */
    voice?: Schema$GoogleCloudDialogflowV2VoiceSelectionParams;
    /**
     * Optional. Volume gain (in dB) of the normal native volume supported by the specific voice, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.
     */
    volumeGainDb?: number | null;
  }
  /**
   * Represents the natural language text to be processed.
   */
  export interface Schema$GoogleCloudDialogflowV2TextInput {
    /**
     * Required. The language of this conversational query. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
     */
    languageCode?: string | null;
    /**
     * Required. The UTF-8 encoded natural language text to be processed. Text length must not exceed 256 characters.
     */
    text?: string | null;
  }
  /**
   * The request message for Agents.TrainAgent.
   */
  export interface Schema$GoogleCloudDialogflowV2TrainAgentRequest {}
  /**
   * Represents a single validation error.
   */
  export interface Schema$GoogleCloudDialogflowV2ValidationError {
    /**
     * The names of the entries that the error is associated with. Format: - "projects//agent", if the error is associated with the entire agent. - "projects//agent/intents/", if the error is associated with certain intents. - "projects//agent/intents//trainingPhrases/", if the error is associated with certain intent training phrases. - "projects//agent/intents//parameters/", if the error is associated with certain intent parameters. - "projects//agent/entities/", if the error is associated with certain entities.
     */
    entries?: string[] | null;
    /**
     * The detailed error messsage.
     */
    errorMessage?: string | null;
    /**
     * The severity of the error.
     */
    severity?: string | null;
  }
  /**
   * Represents the output of agent validation.
   */
  export interface Schema$GoogleCloudDialogflowV2ValidationResult {
    /**
     * Contains all validation errors.
     */
    validationErrors?: Schema$GoogleCloudDialogflowV2ValidationError[];
  }
  /**
   * Description of which voice to use for speech synthesis.
   */
  export interface Schema$GoogleCloudDialogflowV2VoiceSelectionParams {
    /**
     * Optional. The name of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and ssml_gender.
     */
    name?: string | null;
    /**
     * Optional. The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and name. Note that this is only a preference, not requirement. If a voice of the appropriate gender is not available, the synthesizer should substitute a voice with a different gender rather than failing the request.
     */
    ssmlGender?: string | null;
  }
  /**
   * The request message for a webhook call.
   */
  export interface Schema$GoogleCloudDialogflowV2WebhookRequest {
    /**
     * Optional. The contents of the original request that was passed to `[Streaming]DetectIntent` call.
     */
    originalDetectIntentRequest?: Schema$GoogleCloudDialogflowV2OriginalDetectIntentRequest;
    /**
     * The result of the conversational query or event processing. Contains the same value as `[Streaming]DetectIntentResponse.query_result`.
     */
    queryResult?: Schema$GoogleCloudDialogflowV2QueryResult;
    /**
     * The unique identifier of the response. Contains the same value as `[Streaming]DetectIntentResponse.response_id`.
     */
    responseId?: string | null;
    /**
     * The unique identifier of detectIntent request session. Can be used to identify end-user inside webhook implementation. Format: `projects//agent/sessions/`, or `projects//agent/environments//users//sessions/`.
     */
    session?: string | null;
  }
  /**
   * The response message for a webhook call. This response is validated by the Dialogflow server. If validation fails, an error will be returned in the QueryResult.diagnostic_info field. Setting JSON fields to an empty value with the wrong type is a common error. To avoid this error: - Use `""` for empty strings - Use `{\}` or `null` for empty objects - Use `[]` or `null` for empty arrays For more information, see the [Protocol Buffers Language Guide](https://developers.google.com/protocol-buffers/docs/proto3#json).
   */
  export interface Schema$GoogleCloudDialogflowV2WebhookResponse {
    /**
     * Optional. Invokes the supplied events. When this field is set, Dialogflow ignores the `fulfillment_text`, `fulfillment_messages`, and `payload` fields.
     */
    followupEventInput?: Schema$GoogleCloudDialogflowV2EventInput;
    /**
     * Optional. The rich response messages intended for the end-user. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_messages sent to the integration or API caller.
     */
    fulfillmentMessages?: Schema$GoogleCloudDialogflowV2IntentMessage[];
    /**
     * Optional. The text response message intended for the end-user. It is recommended to use `fulfillment_messages.text.text[0]` instead. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_text sent to the integration or API caller.
     */
    fulfillmentText?: string | null;
    /**
     * Optional. The collection of output contexts that will overwrite currently active contexts for the session and reset their lifespans. When provided, Dialogflow uses this field to populate QueryResult.output_contexts sent to the integration or API caller.
     */
    outputContexts?: Schema$GoogleCloudDialogflowV2Context[];
    /**
     * Optional. This field can be used to pass custom data from your webhook to the integration or API caller. Arbitrary JSON objects are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_payload sent to the integration or API caller. This field is also used by the [Google Assistant integration](https://cloud.google.com/dialogflow/docs/integrations/aog) for rich response messages. See the format definition at [Google Assistant Dialogflow webhook format](https://developers.google.com/assistant/actions/build/json/dialogflow-webhook-json)
     */
    payload?: {[key: string]: any} | null;
    /**
     * Optional. Additional session entity types to replace or extend developer entity types with. The entity synonyms apply to all languages and persist for the session. Setting this data from a webhook overwrites the session entity types that have been set using `detectIntent`, `streamingDetectIntent` or SessionEntityType management methods.
     */
    sessionEntityTypes?: Schema$GoogleCloudDialogflowV2SessionEntityType[];
    /**
     * Optional. A custom field used to identify the webhook source. Arbitrary strings are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_source sent to the integration or API caller.
     */
    source?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunningListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunningOperation[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
    /**
     * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
     */
    done?: boolean | null;
    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: Schema$GoogleRpcStatus;
    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
     */
    name?: string | null;
    /**
     * The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
     */
    response?: {[key: string]: any} | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$GoogleProtobufEmpty {}
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$GoogleRpcStatus {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number | null;
    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<{[key: string]: any}> | null;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
     */
    message?: string | null;
  }
  /**
   * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges.
   */
  export interface Schema$GoogleTypeLatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number | null;
    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    agent: Resource$Projects$Agent;
    locations: Resource$Projects$Locations;
    operations: Resource$Projects$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.agent = new Resource$Projects$Agent(this.context);
      this.locations = new Resource$Projects$Locations(this.context);
      this.operations = new Resource$Projects$Operations(this.context);
    }

    /**
     * Deletes the specified agent.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.deleteAgent({
     *     // Required. The project that the agent to delete is associated with. Format: `projects/`.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    deleteAgent(
      params: Params$Resource$Projects$Deleteagent,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deleteAgent(
      params?: Params$Resource$Projects$Deleteagent,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    deleteAgent(
      params: Params$Resource$Projects$Deleteagent,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteAgent(
      params: Params$Resource$Projects$Deleteagent,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    deleteAgent(
      params: Params$Resource$Projects$Deleteagent,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    deleteAgent(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    deleteAgent(
      paramsOrCallback?:
        | Params$Resource$Projects$Deleteagent
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Deleteagent;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Deleteagent;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/agent').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Retrieves the specified agent.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.getAgent({
     *     // Required. The project that the agent to fetch is associated with. Format: `projects/`.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "avatarUri": "my_avatarUri",
     *   //   "classificationThreshold": {},
     *   //   "defaultLanguageCode": "my_defaultLanguageCode",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "enableLogging": false,
     *   //   "matchMode": "my_matchMode",
     *   //   "parent": "my_parent",
     *   //   "supportedLanguageCodes": [],
     *   //   "tier": "my_tier",
     *   //   "timeZone": "my_timeZone"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getAgent(
      params: Params$Resource$Projects$Getagent,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getAgent(
      params?: Params$Resource$Projects$Getagent,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2Agent>;
    getAgent(
      params: Params$Resource$Projects$Getagent,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getAgent(
      params: Params$Resource$Projects$Getagent,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>
    ): void;
    getAgent(
      params: Params$Resource$Projects$Getagent,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>
    ): void;
    getAgent(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>
    ): void;
    getAgent(
      paramsOrCallback?:
        | Params$Resource$Projects$Getagent
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2Agent>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getagent;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getagent;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/agent').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2Agent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2Agent>(
          parameters
        );
      }
    }

    /**
     * Creates/updates the specified agent.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.setAgent({
     *     // Required. The project of this agent. Format: `projects/`.
     *     parent: 'projects/my-project',
     *     // Optional. The mask to control which fields get updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "apiVersion": "my_apiVersion",
     *       //   "avatarUri": "my_avatarUri",
     *       //   "classificationThreshold": {},
     *       //   "defaultLanguageCode": "my_defaultLanguageCode",
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "enableLogging": false,
     *       //   "matchMode": "my_matchMode",
     *       //   "parent": "my_parent",
     *       //   "supportedLanguageCodes": [],
     *       //   "tier": "my_tier",
     *       //   "timeZone": "my_timeZone"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "apiVersion": "my_apiVersion",
     *   //   "avatarUri": "my_avatarUri",
     *   //   "classificationThreshold": {},
     *   //   "defaultLanguageCode": "my_defaultLanguageCode",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "enableLogging": false,
     *   //   "matchMode": "my_matchMode",
     *   //   "parent": "my_parent",
     *   //   "supportedLanguageCodes": [],
     *   //   "tier": "my_tier",
     *   //   "timeZone": "my_timeZone"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setAgent(
      params: Params$Resource$Projects$Setagent,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setAgent(
      params?: Params$Resource$Projects$Setagent,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2Agent>;
    setAgent(
      params: Params$Resource$Projects$Setagent,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setAgent(
      params: Params$Resource$Projects$Setagent,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>
    ): void;
    setAgent(
      params: Params$Resource$Projects$Setagent,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>
    ): void;
    setAgent(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>
    ): void;
    setAgent(
      paramsOrCallback?:
        | Params$Resource$Projects$Setagent
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Agent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2Agent>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Setagent;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Setagent;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/agent').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2Agent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2Agent>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Deleteagent
    extends StandardParameters {
    /**
     * Required. The project that the agent to delete is associated with. Format: `projects/`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Getagent
    extends StandardParameters {
    /**
     * Required. The project that the agent to fetch is associated with. Format: `projects/`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Setagent
    extends StandardParameters {
    /**
     * Required. The project of this agent. Format: `projects/`.
     */
    parent?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2Agent;
  }

  export class Resource$Projects$Agent {
    context: APIRequestContext;
    entityTypes: Resource$Projects$Agent$Entitytypes;
    environments: Resource$Projects$Agent$Environments;
    intents: Resource$Projects$Agent$Intents;
    sessions: Resource$Projects$Agent$Sessions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.entityTypes = new Resource$Projects$Agent$Entitytypes(this.context);
      this.environments = new Resource$Projects$Agent$Environments(
        this.context
      );
      this.intents = new Resource$Projects$Agent$Intents(this.context);
      this.sessions = new Resource$Projects$Agent$Sessions(this.context);
    }

    /**
     * Exports the specified agent to a ZIP file. Operation
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.export({
     *     // Required. The project that the agent to export is associated with. Format: `projects/`.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "agentUri": "my_agentUri"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    export(
      params: Params$Resource$Projects$Agent$Export,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    export(
      params?: Params$Resource$Projects$Agent$Export,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    export(
      params: Params$Resource$Projects$Agent$Export,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    export(
      params: Params$Resource$Projects$Agent$Export,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    export(
      params: Params$Resource$Projects$Agent$Export,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    export(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    export(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Export
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Export;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Export;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/agent:export').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Retrieves the fulfillment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.getFulfillment({
     *     // Required. The name of the fulfillment. Format: `projects//agent/fulfillment`.
     *     name: 'projects/my-project/agent/fulfillment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "enabled": false,
     *   //   "features": [],
     *   //   "genericWebService": {},
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getFulfillment(
      params: Params$Resource$Projects$Agent$Getfulfillment,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getFulfillment(
      params?: Params$Resource$Projects$Agent$Getfulfillment,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2Fulfillment>;
    getFulfillment(
      params: Params$Resource$Projects$Agent$Getfulfillment,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getFulfillment(
      params: Params$Resource$Projects$Agent$Getfulfillment,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Fulfillment>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Fulfillment>
    ): void;
    getFulfillment(
      params: Params$Resource$Projects$Agent$Getfulfillment,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Fulfillment>
    ): void;
    getFulfillment(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Fulfillment>
    ): void;
    getFulfillment(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Getfulfillment
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Fulfillment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Fulfillment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Fulfillment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2Fulfillment>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Getfulfillment;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Getfulfillment;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2Fulfillment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2Fulfillment>(
          parameters
        );
      }
    }

    /**
     * Gets agent validation result. Agent validation is performed during training time and is updated automatically when training is completed.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.getValidationResult({
     *     // Optional. The language for which you want a validation result. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     *     languageCode: 'placeholder-value',
     *     // Required. The project that the agent is associated with. Format: `projects/`.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "validationErrors": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getValidationResult(
      params: Params$Resource$Projects$Agent$Getvalidationresult,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getValidationResult(
      params?: Params$Resource$Projects$Agent$Getvalidationresult,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2ValidationResult>;
    getValidationResult(
      params: Params$Resource$Projects$Agent$Getvalidationresult,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getValidationResult(
      params: Params$Resource$Projects$Agent$Getvalidationresult,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ValidationResult>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ValidationResult>
    ): void;
    getValidationResult(
      params: Params$Resource$Projects$Agent$Getvalidationresult,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ValidationResult>
    ): void;
    getValidationResult(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ValidationResult>
    ): void;
    getValidationResult(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Getvalidationresult
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ValidationResult>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ValidationResult>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ValidationResult>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2ValidationResult>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Getvalidationresult;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Getvalidationresult;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/agent/validationResult').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2ValidationResult>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2ValidationResult>(
          parameters
        );
      }
    }

    /**
     * Imports the specified agent from a ZIP file. Uploads new intents and entity types without deleting the existing ones. Intents and entity types with the same name are replaced with the new versions from ImportAgentRequest. After the import, the imported draft agent will be trained automatically (unless disabled in agent settings). However, once the import is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. Operation An operation which tracks when importing is complete. It only tracks when the draft agent is updated not when it is done training.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.import({
     *     // Required. The project that the agent to import is associated with. Format: `projects/`.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "agentContent": "my_agentContent",
     *       //   "agentUri": "my_agentUri"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    import(
      params: Params$Resource$Projects$Agent$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Agent$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    import(
      params: Params$Resource$Projects$Agent$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Agent$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      params: Params$Resource$Projects$Agent$Import,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Import
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Import;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/agent:import').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Restores the specified agent from a ZIP file. Replaces the current agent version with a new one. All the intents and entity types in the older version are deleted. After the restore, the restored draft agent will be trained automatically (unless disabled in agent settings). However, once the restore is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. Operation An operation which tracks when restoring is complete. It only tracks when the draft agent is updated not when it is done training.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.restore({
     *     // Required. The project that the agent to restore is associated with. Format: `projects/`.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "agentContent": "my_agentContent",
     *       //   "agentUri": "my_agentUri"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    restore(
      params: Params$Resource$Projects$Agent$Restore,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    restore(
      params?: Params$Resource$Projects$Agent$Restore,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    restore(
      params: Params$Resource$Projects$Agent$Restore,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    restore(
      params: Params$Resource$Projects$Agent$Restore,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    restore(
      params: Params$Resource$Projects$Agent$Restore,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    restore(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    restore(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Restore
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Restore;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Restore;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/agent:restore').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Returns the list of agents. Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to. One can achieve that with a wildcard project collection id "-". Refer to [List Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.search({
     *     // Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     *     pageSize: 'placeholder-value',
     *     // The next_page_token value returned from a previous list request.
     *     pageToken: 'placeholder-value',
     *     // Required. The project to list agents from. Format: `projects/`.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "agents": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    search(
      params: Params$Resource$Projects$Agent$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Projects$Agent$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2SearchAgentsResponse>;
    search(
      params: Params$Resource$Projects$Agent$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Projects$Agent$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SearchAgentsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SearchAgentsResponse>
    ): void;
    search(
      params: Params$Resource$Projects$Agent$Search,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SearchAgentsResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SearchAgentsResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Search
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SearchAgentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SearchAgentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SearchAgentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2SearchAgentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/agent:search').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2SearchAgentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2SearchAgentsResponse>(
          parameters
        );
      }
    }

    /**
     * Trains the specified agent. Operation
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.train({
     *     // Required. The project that the agent to train is associated with. Format: `projects/`.
     *     parent: 'projects/my-project',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    train(
      params: Params$Resource$Projects$Agent$Train,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    train(
      params?: Params$Resource$Projects$Agent$Train,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    train(
      params: Params$Resource$Projects$Agent$Train,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    train(
      params: Params$Resource$Projects$Agent$Train,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    train(
      params: Params$Resource$Projects$Agent$Train,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    train(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    train(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Train
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Train;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Train;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/agent:train').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Updates the fulfillment.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.updateFulfillment({
     *     // Required. The unique identifier of the fulfillment. Format: `projects//agent/fulfillment`.
     *     name: 'projects/my-project/agent/fulfillment',
     *     // Required. The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "displayName": "my_displayName",
     *       //   "enabled": false,
     *       //   "features": [],
     *       //   "genericWebService": {},
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "enabled": false,
     *   //   "features": [],
     *   //   "genericWebService": {},
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    updateFulfillment(
      params: Params$Resource$Projects$Agent$Updatefulfillment,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    updateFulfillment(
      params?: Params$Resource$Projects$Agent$Updatefulfillment,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2Fulfillment>;
    updateFulfillment(
      params: Params$Resource$Projects$Agent$Updatefulfillment,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    updateFulfillment(
      params: Params$Resource$Projects$Agent$Updatefulfillment,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Fulfillment>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Fulfillment>
    ): void;
    updateFulfillment(
      params: Params$Resource$Projects$Agent$Updatefulfillment,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Fulfillment>
    ): void;
    updateFulfillment(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Fulfillment>
    ): void;
    updateFulfillment(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Updatefulfillment
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Fulfillment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Fulfillment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Fulfillment>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2Fulfillment>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Updatefulfillment;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Updatefulfillment;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2Fulfillment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2Fulfillment>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Export
    extends StandardParameters {
    /**
     * Required. The project that the agent to export is associated with. Format: `projects/`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2ExportAgentRequest;
  }
  export interface Params$Resource$Projects$Agent$Getfulfillment
    extends StandardParameters {
    /**
     * Required. The name of the fulfillment. Format: `projects//agent/fulfillment`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Getvalidationresult
    extends StandardParameters {
    /**
     * Optional. The language for which you want a validation result. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     */
    languageCode?: string;
    /**
     * Required. The project that the agent is associated with. Format: `projects/`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Import
    extends StandardParameters {
    /**
     * Required. The project that the agent to import is associated with. Format: `projects/`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2ImportAgentRequest;
  }
  export interface Params$Resource$Projects$Agent$Restore
    extends StandardParameters {
    /**
     * Required. The project that the agent to restore is associated with. Format: `projects/`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2RestoreAgentRequest;
  }
  export interface Params$Resource$Projects$Agent$Search
    extends StandardParameters {
    /**
     * Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous list request.
     */
    pageToken?: string;
    /**
     * Required. The project to list agents from. Format: `projects/`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Train
    extends StandardParameters {
    /**
     * Required. The project that the agent to train is associated with. Format: `projects/`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2TrainAgentRequest;
  }
  export interface Params$Resource$Projects$Agent$Updatefulfillment
    extends StandardParameters {
    /**
     * Required. The unique identifier of the fulfillment. Format: `projects//agent/fulfillment`.
     */
    name?: string;
    /**
     * Required. The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2Fulfillment;
  }

  export class Resource$Projects$Agent$Entitytypes {
    context: APIRequestContext;
    entities: Resource$Projects$Agent$Entitytypes$Entities;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.entities = new Resource$Projects$Agent$Entitytypes$Entities(
        this.context
      );
    }

    /**
     * Deletes entity types in the specified agent. Operation
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.entityTypes.batchDelete({
     *     // Required. The name of the agent to delete all entities types for. Format: `projects//agent`.
     *     parent: 'projects/my-project/agent',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entityTypeNames": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchDelete(
      params: Params$Resource$Projects$Agent$Entitytypes$Batchdelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchDelete(
      params?: Params$Resource$Projects$Agent$Entitytypes$Batchdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchDelete(
      params: Params$Resource$Projects$Agent$Entitytypes$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Projects$Agent$Entitytypes$Batchdelete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDelete(
      params: Params$Resource$Projects$Agent$Entitytypes$Batchdelete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Entitytypes$Batchdelete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Entitytypes$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Entitytypes$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/entityTypes:batchDelete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Updates/Creates multiple entity types in the specified agent. Operation
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.entityTypes.batchUpdate({
     *     // Required. The name of the agent to update or create entity types in. Format: `projects//agent`.
     *     parent: 'projects/my-project/agent',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entityTypeBatchInline": {},
     *       //   "entityTypeBatchUri": "my_entityTypeBatchUri",
     *       //   "languageCode": "my_languageCode",
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchUpdate(
      params: Params$Resource$Projects$Agent$Entitytypes$Batchupdate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchUpdate(
      params?: Params$Resource$Projects$Agent$Entitytypes$Batchupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchUpdate(
      params: Params$Resource$Projects$Agent$Entitytypes$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Projects$Agent$Entitytypes$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchUpdate(
      params: Params$Resource$Projects$Agent$Entitytypes$Batchupdate,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Entitytypes$Batchupdate
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Entitytypes$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Entitytypes$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/entityTypes:batchUpdate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Creates an entity type in the specified agent.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.entityTypes.create({
     *     // Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     *     languageCode: 'placeholder-value',
     *     // Required. The agent to create a entity type for. Format: `projects//agent`.
     *     parent: 'projects/my-project/agent',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "autoExpansionMode": "my_autoExpansionMode",
     *       //   "displayName": "my_displayName",
     *       //   "enableFuzzyExtraction": false,
     *       //   "entities": [],
     *       //   "kind": "my_kind",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autoExpansionMode": "my_autoExpansionMode",
     *   //   "displayName": "my_displayName",
     *   //   "enableFuzzyExtraction": false,
     *   //   "entities": [],
     *   //   "kind": "my_kind",
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Agent$Entitytypes$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Agent$Entitytypes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2EntityType>;
    create(
      params: Params$Resource$Projects$Agent$Entitytypes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Agent$Entitytypes$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void;
    create(
      params: Params$Resource$Projects$Agent$Entitytypes$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Entitytypes$Create
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2EntityType>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Entitytypes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Entitytypes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/entityTypes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2EntityType>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2EntityType>(
          parameters
        );
      }
    }

    /**
     * Deletes the specified entity type.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.entityTypes.delete({
     *     // Required. The name of the entity type to delete. Format: `projects//agent/entityTypes/`.
     *     name: 'projects/my-project/agent/entityTypes/my-entityType',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Agent$Entitytypes$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Agent$Entitytypes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Agent$Entitytypes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Agent$Entitytypes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Agent$Entitytypes$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Entitytypes$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Entitytypes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Entitytypes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Retrieves the specified entity type.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.entityTypes.get({
     *     // Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     *     languageCode: 'placeholder-value',
     *     // Required. The name of the entity type. Format: `projects//agent/entityTypes/`.
     *     name: 'projects/my-project/agent/entityTypes/my-entityType',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autoExpansionMode": "my_autoExpansionMode",
     *   //   "displayName": "my_displayName",
     *   //   "enableFuzzyExtraction": false,
     *   //   "entities": [],
     *   //   "kind": "my_kind",
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Agent$Entitytypes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Agent$Entitytypes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2EntityType>;
    get(
      params: Params$Resource$Projects$Agent$Entitytypes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Agent$Entitytypes$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void;
    get(
      params: Params$Resource$Projects$Agent$Entitytypes$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Entitytypes$Get
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2EntityType>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Entitytypes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Entitytypes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2EntityType>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2EntityType>(
          parameters
        );
      }
    }

    /**
     * Returns the list of all entity types in the specified agent.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.entityTypes.list({
     *     // Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     *     languageCode: 'placeholder-value',
     *     // Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous list request.
     *     pageToken: 'placeholder-value',
     *     // Required. The agent to list all entity types from. Format: `projects//agent`.
     *     parent: 'projects/my-project/agent',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entityTypes": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Agent$Entitytypes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Agent$Entitytypes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2ListEntityTypesResponse>;
    list(
      params: Params$Resource$Projects$Agent$Entitytypes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Agent$Entitytypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListEntityTypesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListEntityTypesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Agent$Entitytypes$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListEntityTypesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListEntityTypesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Entitytypes$List
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListEntityTypesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListEntityTypesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListEntityTypesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2ListEntityTypesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Entitytypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Entitytypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/entityTypes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2ListEntityTypesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2ListEntityTypesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the specified entity type.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.entityTypes.patch({
     *     // Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     *     languageCode: 'placeholder-value',
     *     // The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Format: `projects//agent/entityTypes/`.
     *     name: 'projects/my-project/agent/entityTypes/my-entityType',
     *     // Optional. The mask to control which fields get updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "autoExpansionMode": "my_autoExpansionMode",
     *       //   "displayName": "my_displayName",
     *       //   "enableFuzzyExtraction": false,
     *       //   "entities": [],
     *       //   "kind": "my_kind",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "autoExpansionMode": "my_autoExpansionMode",
     *   //   "displayName": "my_displayName",
     *   //   "enableFuzzyExtraction": false,
     *   //   "entities": [],
     *   //   "kind": "my_kind",
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Agent$Entitytypes$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Agent$Entitytypes$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2EntityType>;
    patch(
      params: Params$Resource$Projects$Agent$Entitytypes$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Agent$Entitytypes$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void;
    patch(
      params: Params$Resource$Projects$Agent$Entitytypes$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Entitytypes$Patch
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2EntityType>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2EntityType>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Entitytypes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Entitytypes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2EntityType>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2EntityType>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Entitytypes$Batchdelete
    extends StandardParameters {
    /**
     * Required. The name of the agent to delete all entities types for. Format: `projects//agent`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Batchupdate
    extends StandardParameters {
    /**
     * Required. The name of the agent to update or create entity types in. Format: `projects//agent`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Create
    extends StandardParameters {
    /**
     * Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     */
    languageCode?: string;
    /**
     * Required. The agent to create a entity type for. Format: `projects//agent`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2EntityType;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Delete
    extends StandardParameters {
    /**
     * Required. The name of the entity type to delete. Format: `projects//agent/entityTypes/`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Get
    extends StandardParameters {
    /**
     * Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     */
    languageCode?: string;
    /**
     * Required. The name of the entity type. Format: `projects//agent/entityTypes/`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$List
    extends StandardParameters {
    /**
     * Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     */
    languageCode?: string;
    /**
     * Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list request.
     */
    pageToken?: string;
    /**
     * Required. The agent to list all entity types from. Format: `projects//agent`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Patch
    extends StandardParameters {
    /**
     * Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     */
    languageCode?: string;
    /**
     * The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Format: `projects//agent/entityTypes/`.
     */
    name?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2EntityType;
  }

  export class Resource$Projects$Agent$Entitytypes$Entities {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates multiple new entities in the specified entity type. Operation
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.entityTypes.entities.batchCreate({
     *     // Required. The name of the entity type to create entities in. Format: `projects//agent/entityTypes/`.
     *     parent: 'projects/my-project/agent/entityTypes/my-entityType',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entities": [],
     *       //   "languageCode": "my_languageCode"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchCreate(
      params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchCreate(
      params?: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchCreate(
      params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchCreate(
      params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchCreate(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchCreate(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/entities:batchCreate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes entities in the specified entity type. Operation
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.entityTypes.entities.batchDelete({
     *     // Required. The name of the entity type to delete entries for. Format: `projects//agent/entityTypes/`.
     *     parent: 'projects/my-project/agent/entityTypes/my-entityType',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entityValues": [],
     *       //   "languageCode": "my_languageCode"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchDelete(
      params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchDelete(
      params?: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchDelete(
      params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDelete(
      params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/entities:batchDelete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. Operation
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.entityTypes.entities.batchUpdate({
     *     // Required. The name of the entity type to update or create entities in. Format: `projects//agent/entityTypes/`.
     *     parent: 'projects/my-project/agent/entityTypes/my-entityType',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entities": [],
     *       //   "languageCode": "my_languageCode",
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchUpdate(
      params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchUpdate(
      params?: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchUpdate(
      params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchUpdate(
      params: Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/entities:batchUpdate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Entitytypes$Entities$Batchcreate
    extends StandardParameters {
    /**
     * Required. The name of the entity type to create entities in. Format: `projects//agent/entityTypes/`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2BatchCreateEntitiesRequest;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Entities$Batchdelete
    extends StandardParameters {
    /**
     * Required. The name of the entity type to delete entries for. Format: `projects//agent/entityTypes/`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2BatchDeleteEntitiesRequest;
  }
  export interface Params$Resource$Projects$Agent$Entitytypes$Entities$Batchupdate
    extends StandardParameters {
    /**
     * Required. The name of the entity type to update or create entities in. Format: `projects//agent/entityTypes/`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2BatchUpdateEntitiesRequest;
  }

  export class Resource$Projects$Agent$Environments {
    context: APIRequestContext;
    users: Resource$Projects$Agent$Environments$Users;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.users = new Resource$Projects$Agent$Environments$Users(this.context);
    }

    /**
     * Returns the list of all non-draft environments of the specified agent.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.environments.list({
     *     // Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous list request.
     *     pageToken: 'placeholder-value',
     *     // Required. The agent to list all environments from. Format: `projects//agent`.
     *     parent: 'projects/my-project/agent',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "environments": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Agent$Environments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Agent$Environments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2ListEnvironmentsResponse>;
    list(
      params: Params$Resource$Projects$Agent$Environments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Agent$Environments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListEnvironmentsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListEnvironmentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Agent$Environments$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListEnvironmentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListEnvironmentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Environments$List
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListEnvironmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListEnvironmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListEnvironmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2ListEnvironmentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Environments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Environments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/environments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2ListEnvironmentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2ListEnvironmentsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Environments$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list request.
     */
    pageToken?: string;
    /**
     * Required. The agent to list all environments from. Format: `projects//agent`.
     */
    parent?: string;
  }

  export class Resource$Projects$Agent$Environments$Users {
    context: APIRequestContext;
    sessions: Resource$Projects$Agent$Environments$Users$Sessions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.sessions = new Resource$Projects$Agent$Environments$Users$Sessions(
        this.context
      );
    }
  }

  export class Resource$Projects$Agent$Environments$Users$Sessions {
    context: APIRequestContext;
    contexts: Resource$Projects$Agent$Environments$Users$Sessions$Contexts;
    entityTypes: Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.contexts = new Resource$Projects$Agent$Environments$Users$Sessions$Contexts(
        this.context
      );
      this.entityTypes = new Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes(
        this.context
      );
    }

    /**
     * Deletes all active contexts in the specified session.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.environments.users.sessions.deleteContexts(
     *     {
     *       // Required. The name of the session to delete all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     *       parent:
     *         'projects/my-project/agent/environments/my-environment/users/my-user/sessions/my-session',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    deleteContexts(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Deletecontexts,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deleteContexts(
      params?: Params$Resource$Projects$Agent$Environments$Users$Sessions$Deletecontexts,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    deleteContexts(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Deletecontexts,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteContexts(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Deletecontexts,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    deleteContexts(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Deletecontexts,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    deleteContexts(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    deleteContexts(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Environments$Users$Sessions$Deletecontexts
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Environments$Users$Sessions$Deletecontexts;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Environments$Users$Sessions$Deletecontexts;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/contexts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.environments.users.sessions.detectIntent(
     *     {
     *       // Required. The name of the session this query is sent to. Format: `projects//agent/sessions/`, or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we are using "-". It's up to the API caller to choose an appropriate `Session ID` and `User Id`. They can be a random number or some type of user and session identifiers (preferably hashed). The length of the `Session ID` and `User ID` must not exceed 36 characters. For more information, see the [API interactions guide](https://cloud.google.com/dialogflow/docs/api-overview). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     *       session:
     *         'projects/my-project/agent/environments/my-environment/users/my-user/sessions/my-session',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "inputAudio": "my_inputAudio",
     *         //   "outputAudioConfig": {},
     *         //   "outputAudioConfigMask": "my_outputAudioConfigMask",
     *         //   "queryInput": {},
     *         //   "queryParams": {}
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "outputAudio": "my_outputAudio",
     *   //   "outputAudioConfig": {},
     *   //   "queryResult": {},
     *   //   "responseId": "my_responseId",
     *   //   "webhookStatus": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    detectIntent(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Detectintent,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    detectIntent(
      params?: Params$Resource$Projects$Agent$Environments$Users$Sessions$Detectintent,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2DetectIntentResponse>;
    detectIntent(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Detectintent,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    detectIntent(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Detectintent,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2DetectIntentResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2DetectIntentResponse>
    ): void;
    detectIntent(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Detectintent,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2DetectIntentResponse>
    ): void;
    detectIntent(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2DetectIntentResponse>
    ): void;
    detectIntent(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Environments$Users$Sessions$Detectintent
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2DetectIntentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2DetectIntentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2DetectIntentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2DetectIntentResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Environments$Users$Sessions$Detectintent;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Environments$Users$Sessions$Detectintent;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+session}:detectIntent').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['session'],
        pathParams: ['session'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2DetectIntentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2DetectIntentResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Deletecontexts
    extends StandardParameters {
    /**
     * Required. The name of the session to delete all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Detectintent
    extends StandardParameters {
    /**
     * Required. The name of the session this query is sent to. Format: `projects//agent/sessions/`, or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we are using "-". It's up to the API caller to choose an appropriate `Session ID` and `User Id`. They can be a random number or some type of user and session identifiers (preferably hashed). The length of the `Session ID` and `User ID` must not exceed 36 characters. For more information, see the [API interactions guide](https://cloud.google.com/dialogflow/docs/api-overview). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     */
    session?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2DetectIntentRequest;
  }

  export class Resource$Projects$Agent$Environments$Users$Sessions$Contexts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a context. If the specified context already exists, overrides the context.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.environments.users.sessions.contexts.create(
     *     {
     *       // Required. The session to create a context for. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     *       parent:
     *         'projects/my-project/agent/environments/my-environment/users/my-user/sessions/my-session',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "lifespanCount": 0,
     *         //   "name": "my_name",
     *         //   "parameters": {}
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "lifespanCount": 0,
     *   //   "name": "my_name",
     *   //   "parameters": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2Context>;
    create(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    create(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Create
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2Context>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/contexts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2Context>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2Context>(
          parameters
        );
      }
    }

    /**
     * Deletes the specified context.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.environments.users.sessions.contexts.delete(
     *     {
     *       // Required. The name of the context to delete. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     *       name:
     *         'projects/my-project/agent/environments/my-environment/users/my-user/sessions/my-session/contexts/my-context',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Retrieves the specified context.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.environments.users.sessions.contexts.get(
     *     {
     *       // Required. The name of the context. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     *       name:
     *         'projects/my-project/agent/environments/my-environment/users/my-user/sessions/my-session/contexts/my-context',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "lifespanCount": 0,
     *   //   "name": "my_name",
     *   //   "parameters": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2Context>;
    get(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    get(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Get
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2Context>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2Context>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2Context>(
          parameters
        );
      }
    }

    /**
     * Returns the list of all contexts in the specified session.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.environments.users.sessions.contexts.list(
     *     {
     *       // Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. The next_page_token value returned from a previous list request.
     *       pageToken: 'placeholder-value',
     *       // Required. The session to list all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     *       parent:
     *         'projects/my-project/agent/environments/my-environment/users/my-user/sessions/my-session',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contexts": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2ListContextsResponse>;
    list(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListContextsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListContextsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListContextsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListContextsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$List
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListContextsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListContextsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListContextsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2ListContextsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/contexts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2ListContextsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2ListContextsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the specified context.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.environments.users.sessions.contexts.patch(
     *     {
     *       // Required. The unique identifier of the context. Format: `projects//agent/sessions//contexts/`, or `projects//agent/environments//users//sessions//contexts/`. The `Context ID` is always converted to lowercase, may only contain characters in a-zA-Z0-9_-% and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size`
     *       name:
     *         'projects/my-project/agent/environments/my-environment/users/my-user/sessions/my-session/contexts/my-context',
     *       // Optional. The mask to control which fields get updated.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "lifespanCount": 0,
     *         //   "name": "my_name",
     *         //   "parameters": {}
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "lifespanCount": 0,
     *   //   "name": "my_name",
     *   //   "parameters": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2Context>;
    patch(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    patch(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Patch
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2Context>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2Context>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2Context>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Create
    extends StandardParameters {
    /**
     * Required. The session to create a context for. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2Context;
  }
  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Delete
    extends StandardParameters {
    /**
     * Required. The name of the context to delete. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Get
    extends StandardParameters {
    /**
     * Required. The name of the context. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list request.
     */
    pageToken?: string;
    /**
     * Required. The session to list all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Contexts$Patch
    extends StandardParameters {
    /**
     * Required. The unique identifier of the context. Format: `projects//agent/sessions//contexts/`, or `projects//agent/environments//users//sessions//contexts/`. The `Context ID` is always converted to lowercase, may only contain characters in a-zA-Z0-9_-% and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size`
     */
    name?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2Context;
  }

  export class Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.environments.users.sessions.entityTypes.create(
     *     {
     *       // Required. The session to create a session entity type for. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     *       parent:
     *         'projects/my-project/agent/environments/my-environment/users/my-user/sessions/my-session',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "entities": [],
     *         //   "entityOverrideMode": "my_entityOverrideMode",
     *         //   "name": "my_name"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entities": [],
     *   //   "entityOverrideMode": "my_entityOverrideMode",
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2SessionEntityType>;
    create(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
    ): void;
    create(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Create
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2SessionEntityType>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/entityTypes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2SessionEntityType>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2SessionEntityType>(
          parameters
        );
      }
    }

    /**
     * Deletes the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.environments.users.sessions.entityTypes.delete(
     *     {
     *       // Required. The name of the entity type to delete. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     *       name:
     *         'projects/my-project/agent/environments/my-environment/users/my-user/sessions/my-session/entityTypes/my-entityType',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Retrieves the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.environments.users.sessions.entityTypes.get(
     *     {
     *       // Required. The name of the session entity type. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     *       name:
     *         'projects/my-project/agent/environments/my-environment/users/my-user/sessions/my-session/entityTypes/my-entityType',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entities": [],
     *   //   "entityOverrideMode": "my_entityOverrideMode",
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2SessionEntityType>;
    get(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
    ): void;
    get(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Get
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2SessionEntityType>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2SessionEntityType>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2SessionEntityType>(
          parameters
        );
      }
    }

    /**
     * Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.environments.users.sessions.entityTypes.list(
     *     {
     *       // Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     *       pageSize: 'placeholder-value',
     *       // Optional. The next_page_token value returned from a previous list request.
     *       pageToken: 'placeholder-value',
     *       // Required. The session to list all session entity types from. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     *       parent:
     *         'projects/my-project/agent/environments/my-environment/users/my-user/sessions/my-session',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "sessionEntityTypes": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>;
    list(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$List
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/entityTypes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.environments.users.sessions.entityTypes.patch(
     *     {
     *       // Required. The unique identifier of this session entity type. Format: `projects//agent/sessions//entityTypes/`, or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     *       name:
     *         'projects/my-project/agent/environments/my-environment/users/my-user/sessions/my-session/entityTypes/my-entityType',
     *       // Optional. The mask to control which fields get updated.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "entities": [],
     *         //   "entityOverrideMode": "my_entityOverrideMode",
     *         //   "name": "my_name"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entities": [],
     *   //   "entityOverrideMode": "my_entityOverrideMode",
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2SessionEntityType>;
    patch(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
    ): void;
    patch(
      params: Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Patch
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2SessionEntityType>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2SessionEntityType>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2SessionEntityType>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Create
    extends StandardParameters {
    /**
     * Required. The session to create a session entity type for. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2SessionEntityType;
  }
  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Delete
    extends StandardParameters {
    /**
     * Required. The name of the entity type to delete. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Get
    extends StandardParameters {
    /**
     * Required. The name of the session entity type. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list request.
     */
    pageToken?: string;
    /**
     * Required. The session to list all session entity types from. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Environments$Users$Sessions$Entitytypes$Patch
    extends StandardParameters {
    /**
     * Required. The unique identifier of this session entity type. Format: `projects//agent/sessions//entityTypes/`, or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     */
    name?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2SessionEntityType;
  }

  export class Resource$Projects$Agent$Intents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes intents in the specified agent. Operation
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.intents.batchDelete({
     *     // Required. The name of the agent to delete all entities types for. Format: `projects//agent`.
     *     parent: 'projects/my-project/agent',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "intents": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchDelete(
      params: Params$Resource$Projects$Agent$Intents$Batchdelete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchDelete(
      params?: Params$Resource$Projects$Agent$Intents$Batchdelete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchDelete(
      params: Params$Resource$Projects$Agent$Intents$Batchdelete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchDelete(
      params: Params$Resource$Projects$Agent$Intents$Batchdelete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDelete(
      params: Params$Resource$Projects$Agent$Intents$Batchdelete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDelete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchDelete(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Intents$Batchdelete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Intents$Batchdelete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Intents$Batchdelete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/intents:batchDelete').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Updates/Creates multiple intents in the specified agent. Operation
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.intents.batchUpdate({
     *     // Required. The name of the agent to update or create intents in. Format: `projects//agent`.
     *     parent: 'projects/my-project/agent',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "intentBatchInline": {},
     *       //   "intentBatchUri": "my_intentBatchUri",
     *       //   "intentView": "my_intentView",
     *       //   "languageCode": "my_languageCode",
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    batchUpdate(
      params: Params$Resource$Projects$Agent$Intents$Batchupdate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchUpdate(
      params?: Params$Resource$Projects$Agent$Intents$Batchupdate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    batchUpdate(
      params: Params$Resource$Projects$Agent$Intents$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Projects$Agent$Intents$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchUpdate(
      params: Params$Resource$Projects$Agent$Intents$Batchupdate,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Intents$Batchupdate
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Intents$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Intents$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/intents:batchUpdate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Creates an intent in the specified agent.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.intents.create({
     *     // Optional. The resource view to apply to the returned intent.
     *     intentView: 'placeholder-value',
     *     // Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     *     languageCode: 'placeholder-value',
     *     // Required. The agent to create a intent for. Format: `projects//agent`.
     *     parent: 'projects/my-project/agent',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "action": "my_action",
     *       //   "defaultResponsePlatforms": [],
     *       //   "displayName": "my_displayName",
     *       //   "events": [],
     *       //   "followupIntentInfo": [],
     *       //   "inputContextNames": [],
     *       //   "isFallback": false,
     *       //   "messages": [],
     *       //   "mlDisabled": false,
     *       //   "name": "my_name",
     *       //   "outputContexts": [],
     *       //   "parameters": [],
     *       //   "parentFollowupIntentName": "my_parentFollowupIntentName",
     *       //   "priority": 0,
     *       //   "resetContexts": false,
     *       //   "rootFollowupIntentName": "my_rootFollowupIntentName",
     *       //   "trainingPhrases": [],
     *       //   "webhookState": "my_webhookState"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "action": "my_action",
     *   //   "defaultResponsePlatforms": [],
     *   //   "displayName": "my_displayName",
     *   //   "events": [],
     *   //   "followupIntentInfo": [],
     *   //   "inputContextNames": [],
     *   //   "isFallback": false,
     *   //   "messages": [],
     *   //   "mlDisabled": false,
     *   //   "name": "my_name",
     *   //   "outputContexts": [],
     *   //   "parameters": [],
     *   //   "parentFollowupIntentName": "my_parentFollowupIntentName",
     *   //   "priority": 0,
     *   //   "resetContexts": false,
     *   //   "rootFollowupIntentName": "my_rootFollowupIntentName",
     *   //   "trainingPhrases": [],
     *   //   "webhookState": "my_webhookState"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Agent$Intents$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Agent$Intents$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2Intent>;
    create(
      params: Params$Resource$Projects$Agent$Intents$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Agent$Intents$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void;
    create(
      params: Params$Resource$Projects$Agent$Intents$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Intents$Create
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2Intent>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Intents$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Intents$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/intents').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2Intent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2Intent>(
          parameters
        );
      }
    }

    /**
     * Deletes the specified intent and its direct or indirect followup intents.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.intents.delete({
     *     // Required. The name of the intent to delete. If this intent has direct or indirect followup intents, we also delete them. Format: `projects//agent/intents/`.
     *     name: 'projects/my-project/agent/intents/my-intent',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Agent$Intents$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Agent$Intents$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Agent$Intents$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Agent$Intents$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Agent$Intents$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Intents$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Intents$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Intents$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Retrieves the specified intent.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.intents.get({
     *     // Optional. The resource view to apply to the returned intent.
     *     intentView: 'placeholder-value',
     *     // Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     *     languageCode: 'placeholder-value',
     *     // Required. The name of the intent. Format: `projects//agent/intents/`.
     *     name: 'projects/my-project/agent/intents/my-intent',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "action": "my_action",
     *   //   "defaultResponsePlatforms": [],
     *   //   "displayName": "my_displayName",
     *   //   "events": [],
     *   //   "followupIntentInfo": [],
     *   //   "inputContextNames": [],
     *   //   "isFallback": false,
     *   //   "messages": [],
     *   //   "mlDisabled": false,
     *   //   "name": "my_name",
     *   //   "outputContexts": [],
     *   //   "parameters": [],
     *   //   "parentFollowupIntentName": "my_parentFollowupIntentName",
     *   //   "priority": 0,
     *   //   "resetContexts": false,
     *   //   "rootFollowupIntentName": "my_rootFollowupIntentName",
     *   //   "trainingPhrases": [],
     *   //   "webhookState": "my_webhookState"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Agent$Intents$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Agent$Intents$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2Intent>;
    get(
      params: Params$Resource$Projects$Agent$Intents$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Agent$Intents$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void;
    get(
      params: Params$Resource$Projects$Agent$Intents$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Intents$Get
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2Intent>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Intents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Intents$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2Intent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2Intent>(
          parameters
        );
      }
    }

    /**
     * Returns the list of all intents in the specified agent.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.intents.list({
     *     // Optional. The resource view to apply to the returned intent.
     *     intentView: 'placeholder-value',
     *     // Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     *     languageCode: 'placeholder-value',
     *     // Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous list request.
     *     pageToken: 'placeholder-value',
     *     // Required. The agent to list all intents from. Format: `projects//agent`.
     *     parent: 'projects/my-project/agent',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "intents": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Agent$Intents$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Agent$Intents$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2ListIntentsResponse>;
    list(
      params: Params$Resource$Projects$Agent$Intents$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Agent$Intents$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListIntentsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListIntentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Agent$Intents$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListIntentsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListIntentsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Intents$List
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListIntentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListIntentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListIntentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2ListIntentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Intents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Intents$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/intents').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2ListIntentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2ListIntentsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the specified intent.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.intents.patch({
     *     // Optional. The resource view to apply to the returned intent.
     *     intentView: 'placeholder-value',
     *     // Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     *     languageCode: 'placeholder-value',
     *     // Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Format: `projects//agent/intents/`.
     *     name: 'projects/my-project/agent/intents/my-intent',
     *     // Optional. The mask to control which fields get updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "action": "my_action",
     *       //   "defaultResponsePlatforms": [],
     *       //   "displayName": "my_displayName",
     *       //   "events": [],
     *       //   "followupIntentInfo": [],
     *       //   "inputContextNames": [],
     *       //   "isFallback": false,
     *       //   "messages": [],
     *       //   "mlDisabled": false,
     *       //   "name": "my_name",
     *       //   "outputContexts": [],
     *       //   "parameters": [],
     *       //   "parentFollowupIntentName": "my_parentFollowupIntentName",
     *       //   "priority": 0,
     *       //   "resetContexts": false,
     *       //   "rootFollowupIntentName": "my_rootFollowupIntentName",
     *       //   "trainingPhrases": [],
     *       //   "webhookState": "my_webhookState"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "action": "my_action",
     *   //   "defaultResponsePlatforms": [],
     *   //   "displayName": "my_displayName",
     *   //   "events": [],
     *   //   "followupIntentInfo": [],
     *   //   "inputContextNames": [],
     *   //   "isFallback": false,
     *   //   "messages": [],
     *   //   "mlDisabled": false,
     *   //   "name": "my_name",
     *   //   "outputContexts": [],
     *   //   "parameters": [],
     *   //   "parentFollowupIntentName": "my_parentFollowupIntentName",
     *   //   "priority": 0,
     *   //   "resetContexts": false,
     *   //   "rootFollowupIntentName": "my_rootFollowupIntentName",
     *   //   "trainingPhrases": [],
     *   //   "webhookState": "my_webhookState"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Agent$Intents$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Agent$Intents$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2Intent>;
    patch(
      params: Params$Resource$Projects$Agent$Intents$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Agent$Intents$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void;
    patch(
      params: Params$Resource$Projects$Agent$Intents$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Intents$Patch
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Intent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2Intent>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Intents$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Intents$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2Intent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2Intent>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Intents$Batchdelete
    extends StandardParameters {
    /**
     * Required. The name of the agent to delete all entities types for. Format: `projects//agent`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2BatchDeleteIntentsRequest;
  }
  export interface Params$Resource$Projects$Agent$Intents$Batchupdate
    extends StandardParameters {
    /**
     * Required. The name of the agent to update or create intents in. Format: `projects//agent`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2BatchUpdateIntentsRequest;
  }
  export interface Params$Resource$Projects$Agent$Intents$Create
    extends StandardParameters {
    /**
     * Optional. The resource view to apply to the returned intent.
     */
    intentView?: string;
    /**
     * Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     */
    languageCode?: string;
    /**
     * Required. The agent to create a intent for. Format: `projects//agent`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2Intent;
  }
  export interface Params$Resource$Projects$Agent$Intents$Delete
    extends StandardParameters {
    /**
     * Required. The name of the intent to delete. If this intent has direct or indirect followup intents, we also delete them. Format: `projects//agent/intents/`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Intents$Get
    extends StandardParameters {
    /**
     * Optional. The resource view to apply to the returned intent.
     */
    intentView?: string;
    /**
     * Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     */
    languageCode?: string;
    /**
     * Required. The name of the intent. Format: `projects//agent/intents/`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Intents$List
    extends StandardParameters {
    /**
     * Optional. The resource view to apply to the returned intent.
     */
    intentView?: string;
    /**
     * Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     */
    languageCode?: string;
    /**
     * Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list request.
     */
    pageToken?: string;
    /**
     * Required. The agent to list all intents from. Format: `projects//agent`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Intents$Patch
    extends StandardParameters {
    /**
     * Optional. The resource view to apply to the returned intent.
     */
    intentView?: string;
    /**
     * Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     */
    languageCode?: string;
    /**
     * Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Format: `projects//agent/intents/`.
     */
    name?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2Intent;
  }

  export class Resource$Projects$Agent$Sessions {
    context: APIRequestContext;
    contexts: Resource$Projects$Agent$Sessions$Contexts;
    entityTypes: Resource$Projects$Agent$Sessions$Entitytypes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.contexts = new Resource$Projects$Agent$Sessions$Contexts(
        this.context
      );
      this.entityTypes = new Resource$Projects$Agent$Sessions$Entitytypes(
        this.context
      );
    }

    /**
     * Deletes all active contexts in the specified session.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.sessions.deleteContexts({
     *     // Required. The name of the session to delete all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     *     parent: 'projects/my-project/agent/sessions/my-session',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    deleteContexts(
      params: Params$Resource$Projects$Agent$Sessions$Deletecontexts,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    deleteContexts(
      params?: Params$Resource$Projects$Agent$Sessions$Deletecontexts,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    deleteContexts(
      params: Params$Resource$Projects$Agent$Sessions$Deletecontexts,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    deleteContexts(
      params: Params$Resource$Projects$Agent$Sessions$Deletecontexts,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    deleteContexts(
      params: Params$Resource$Projects$Agent$Sessions$Deletecontexts,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    deleteContexts(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    deleteContexts(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Deletecontexts
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Deletecontexts;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Deletecontexts;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/contexts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.sessions.detectIntent({
     *     // Required. The name of the session this query is sent to. Format: `projects//agent/sessions/`, or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we are using "-". It's up to the API caller to choose an appropriate `Session ID` and `User Id`. They can be a random number or some type of user and session identifiers (preferably hashed). The length of the `Session ID` and `User ID` must not exceed 36 characters. For more information, see the [API interactions guide](https://cloud.google.com/dialogflow/docs/api-overview). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     *     session: 'projects/my-project/agent/sessions/my-session',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "inputAudio": "my_inputAudio",
     *       //   "outputAudioConfig": {},
     *       //   "outputAudioConfigMask": "my_outputAudioConfigMask",
     *       //   "queryInput": {},
     *       //   "queryParams": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "outputAudio": "my_outputAudio",
     *   //   "outputAudioConfig": {},
     *   //   "queryResult": {},
     *   //   "responseId": "my_responseId",
     *   //   "webhookStatus": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    detectIntent(
      params: Params$Resource$Projects$Agent$Sessions$Detectintent,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    detectIntent(
      params?: Params$Resource$Projects$Agent$Sessions$Detectintent,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2DetectIntentResponse>;
    detectIntent(
      params: Params$Resource$Projects$Agent$Sessions$Detectintent,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    detectIntent(
      params: Params$Resource$Projects$Agent$Sessions$Detectintent,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2DetectIntentResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2DetectIntentResponse>
    ): void;
    detectIntent(
      params: Params$Resource$Projects$Agent$Sessions$Detectintent,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2DetectIntentResponse>
    ): void;
    detectIntent(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2DetectIntentResponse>
    ): void;
    detectIntent(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Detectintent
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2DetectIntentResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2DetectIntentResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2DetectIntentResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2DetectIntentResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Detectintent;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Detectintent;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+session}:detectIntent').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['session'],
        pathParams: ['session'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2DetectIntentResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2DetectIntentResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Sessions$Deletecontexts
    extends StandardParameters {
    /**
     * Required. The name of the session to delete all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Detectintent
    extends StandardParameters {
    /**
     * Required. The name of the session this query is sent to. Format: `projects//agent/sessions/`, or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we are using "-". It's up to the API caller to choose an appropriate `Session ID` and `User Id`. They can be a random number or some type of user and session identifiers (preferably hashed). The length of the `Session ID` and `User ID` must not exceed 36 characters. For more information, see the [API interactions guide](https://cloud.google.com/dialogflow/docs/api-overview). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     */
    session?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2DetectIntentRequest;
  }

  export class Resource$Projects$Agent$Sessions$Contexts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a context. If the specified context already exists, overrides the context.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.sessions.contexts.create({
     *     // Required. The session to create a context for. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     *     parent: 'projects/my-project/agent/sessions/my-session',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "lifespanCount": 0,
     *       //   "name": "my_name",
     *       //   "parameters": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "lifespanCount": 0,
     *   //   "name": "my_name",
     *   //   "parameters": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Agent$Sessions$Contexts$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2Context>;
    create(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    create(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Contexts$Create
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2Context>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Contexts$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Contexts$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/contexts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2Context>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2Context>(
          parameters
        );
      }
    }

    /**
     * Deletes the specified context.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.sessions.contexts.delete({
     *     // Required. The name of the context to delete. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     *     name: 'projects/my-project/agent/sessions/my-session/contexts/my-context',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Agent$Sessions$Contexts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Contexts$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Contexts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Contexts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Retrieves the specified context.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.sessions.contexts.get({
     *     // Required. The name of the context. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     *     name: 'projects/my-project/agent/sessions/my-session/contexts/my-context',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "lifespanCount": 0,
     *   //   "name": "my_name",
     *   //   "parameters": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Agent$Sessions$Contexts$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2Context>;
    get(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    get(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Contexts$Get
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2Context>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Contexts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Contexts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2Context>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2Context>(
          parameters
        );
      }
    }

    /**
     * Returns the list of all contexts in the specified session.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.sessions.contexts.list({
     *     // Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous list request.
     *     pageToken: 'placeholder-value',
     *     // Required. The session to list all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     *     parent: 'projects/my-project/agent/sessions/my-session',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contexts": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Agent$Sessions$Contexts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2ListContextsResponse>;
    list(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListContextsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListContextsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListContextsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListContextsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Contexts$List
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListContextsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListContextsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListContextsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2ListContextsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Contexts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Contexts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/contexts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2ListContextsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2ListContextsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the specified context.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.sessions.contexts.patch({
     *     // Required. The unique identifier of the context. Format: `projects//agent/sessions//contexts/`, or `projects//agent/environments//users//sessions//contexts/`. The `Context ID` is always converted to lowercase, may only contain characters in a-zA-Z0-9_-% and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size`
     *     name: 'projects/my-project/agent/sessions/my-session/contexts/my-context',
     *     // Optional. The mask to control which fields get updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "lifespanCount": 0,
     *       //   "name": "my_name",
     *       //   "parameters": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "lifespanCount": 0,
     *   //   "name": "my_name",
     *   //   "parameters": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Agent$Sessions$Contexts$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2Context>;
    patch(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    patch(
      params: Params$Resource$Projects$Agent$Sessions$Contexts$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Contexts$Patch
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2Context>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2Context>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Contexts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Contexts$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2Context>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2Context>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Sessions$Contexts$Create
    extends StandardParameters {
    /**
     * Required. The session to create a context for. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2Context;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Contexts$Delete
    extends StandardParameters {
    /**
     * Required. The name of the context to delete. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Contexts$Get
    extends StandardParameters {
    /**
     * Required. The name of the context. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Contexts$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list request.
     */
    pageToken?: string;
    /**
     * Required. The session to list all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Contexts$Patch
    extends StandardParameters {
    /**
     * Required. The unique identifier of the context. Format: `projects//agent/sessions//contexts/`, or `projects//agent/environments//users//sessions//contexts/`. The `Context ID` is always converted to lowercase, may only contain characters in a-zA-Z0-9_-% and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size`
     */
    name?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2Context;
  }

  export class Resource$Projects$Agent$Sessions$Entitytypes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.sessions.entityTypes.create({
     *     // Required. The session to create a session entity type for. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     *     parent: 'projects/my-project/agent/sessions/my-session',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entities": [],
     *       //   "entityOverrideMode": "my_entityOverrideMode",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entities": [],
     *   //   "entityOverrideMode": "my_entityOverrideMode",
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Agent$Sessions$Entitytypes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2SessionEntityType>;
    create(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
    ): void;
    create(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Entitytypes$Create
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2SessionEntityType>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Entitytypes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Entitytypes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/entityTypes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2SessionEntityType>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2SessionEntityType>(
          parameters
        );
      }
    }

    /**
     * Deletes the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.sessions.entityTypes.delete({
     *     // Required. The name of the entity type to delete. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     *     name:
     *       'projects/my-project/agent/sessions/my-session/entityTypes/my-entityType',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    delete(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Retrieves the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.sessions.entityTypes.get({
     *     // Required. The name of the session entity type. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     *     name:
     *       'projects/my-project/agent/sessions/my-session/entityTypes/my-entityType',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entities": [],
     *   //   "entityOverrideMode": "my_entityOverrideMode",
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Agent$Sessions$Entitytypes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2SessionEntityType>;
    get(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
    ): void;
    get(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Entitytypes$Get
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2SessionEntityType>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Entitytypes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Entitytypes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2SessionEntityType>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2SessionEntityType>(
          parameters
        );
      }
    }

    /**
     * Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.sessions.entityTypes.list({
     *     // Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     *     pageSize: 'placeholder-value',
     *     // Optional. The next_page_token value returned from a previous list request.
     *     pageToken: 'placeholder-value',
     *     // Required. The session to list all session entity types from. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     *     parent: 'projects/my-project/agent/sessions/my-session',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "sessionEntityTypes": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Agent$Sessions$Entitytypes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>;
    list(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$List,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Entitytypes$List
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Entitytypes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Entitytypes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+parent}/entityTypes').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2ListSessionEntityTypesResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.agent.sessions.entityTypes.patch({
     *     // Required. The unique identifier of this session entity type. Format: `projects//agent/sessions//entityTypes/`, or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     *     name:
     *       'projects/my-project/agent/sessions/my-session/entityTypes/my-entityType',
     *     // Optional. The mask to control which fields get updated.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "entities": [],
     *       //   "entityOverrideMode": "my_entityOverrideMode",
     *       //   "name": "my_name"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "entities": [],
     *   //   "entityOverrideMode": "my_entityOverrideMode",
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudDialogflowV2SessionEntityType>;
    patch(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
    ): void;
    patch(
      params: Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudDialogflowV2SessionEntityType>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudDialogflowV2SessionEntityType>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudDialogflowV2SessionEntityType>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudDialogflowV2SessionEntityType>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Agent$Sessions$Entitytypes$Create
    extends StandardParameters {
    /**
     * Required. The session to create a session entity type for. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2SessionEntityType;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Entitytypes$Delete
    extends StandardParameters {
    /**
     * Required. The name of the entity type to delete. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Entitytypes$Get
    extends StandardParameters {
    /**
     * Required. The name of the session entity type. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Entitytypes$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous list request.
     */
    pageToken?: string;
    /**
     * Required. The session to list all session entity types from. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Agent$Sessions$Entitytypes$Patch
    extends StandardParameters {
    /**
     * Required. The unique identifier of this session entity type. Format: `projects//agent/sessions//entityTypes/`, or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     */
    name?: string;
    /**
     * Optional. The mask to control which fields get updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudDialogflowV2SessionEntityType;
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.locations.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Cancel
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.locations.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x\}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {}
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(
      params: Params$Resource$Projects$Operations$Cancel,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Cancel
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleProtobufEmpty>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleProtobufEmpty>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleProtobufEmpty>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleProtobufEmpty>(parameters);
      }
    }

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x\}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/dialogflow.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const dialogflow = google.dialogflow('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/dialogflow',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await dialogflow.projects.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}/operations').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Operations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The name of the operation's parent resource.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }
}
