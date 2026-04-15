CREATE TABLE "accounts" (
	"id" text PRIMARY KEY NOT NULL,
	"account_id" text NOT NULL,
	"provider_id" text NOT NULL,
	"user_id" text NOT NULL,
	"access_token" text,
	"refresh_token" text,
	"id_token" text,
	"access_token_expires_at" timestamp,
	"refresh_token_expires_at" timestamp,
	"scope" text,
	"password" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sessions" (
	"id" text PRIMARY KEY NOT NULL,
	"expires_at" timestamp NOT NULL,
	"token" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	"ip_address" text,
	"user_agent" text,
	"user_id" text NOT NULL,
	"timezone" text,
	"city" text,
	"country" text,
	"region" text,
	"region_code" text,
	"colo" text,
	"latitude" text,
	"longitude" text,
	CONSTRAINT "sessions_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"email_verified" boolean DEFAULT false NOT NULL,
	"image" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "verifications" (
	"id" text PRIMARY KEY NOT NULL,
	"identifier" text NOT NULL,
	"value" text NOT NULL,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "AgentConversation" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"agentType" text NOT NULL,
	"messages" json NOT NULL,
	"userProfile" json,
	"status" text DEFAULT 'active' NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Plan" (
	"id" text PRIMARY KEY NOT NULL,
	"productId" integer NOT NULL,
	"productName" text,
	"variantId" integer NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"price" text NOT NULL,
	"isUsageBased" boolean DEFAULT false,
	"interval" text,
	"intervalCount" integer,
	"trialInterval" text,
	"trialIntervalCount" integer,
	"sort" integer,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "Plan_variantId_unique" UNIQUE("variantId")
);
--> statement-breakpoint
CREATE TABLE "Subscription" (
	"id" text PRIMARY KEY NOT NULL,
	"lemonSqueezyId" text NOT NULL,
	"orderId" integer NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"status" text NOT NULL,
	"statusFormatted" text NOT NULL,
	"renewsAt" text,
	"endsAt" text,
	"trialEndsAt" text,
	"price" text NOT NULL,
	"isUsageBased" boolean DEFAULT false,
	"isPaused" boolean DEFAULT false,
	"subscriptionItemId" integer,
	"userId" text NOT NULL,
	"planId" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "Subscription_lemonSqueezyId_unique" UNIQUE("lemonSqueezyId")
);
--> statement-breakpoint
CREATE TABLE "UsageTracking" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"subscriptionId" text NOT NULL,
	"periodStart" timestamp NOT NULL,
	"periodEnd" timestamp NOT NULL,
	"compilesUsed" integer DEFAULT 0 NOT NULL,
	"compilesLimit" integer DEFAULT 1 NOT NULL,
	"routineEditsUsed" integer DEFAULT 0 NOT NULL,
	"routineEditsLimit" integer DEFAULT 5 NOT NULL,
	"aiMessagesUsed" integer DEFAULT 0 NOT NULL,
	"aiMessagesLimit" integer DEFAULT 50 NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "WebhookEvent" (
	"id" text PRIMARY KEY NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"eventName" text NOT NULL,
	"processed" boolean DEFAULT false,
	"body" json NOT NULL,
	"processingError" text
);
--> statement-breakpoint
CREATE TABLE "UserPreferences" (
	"userId" text PRIMARY KEY NOT NULL,
	"units" text DEFAULT 'lbs' NOT NULL,
	"restTimerDefault" integer DEFAULT 90 NOT NULL,
	"trainingGoal" text,
	"experienceLevel" text,
	"availableDays" integer
);
--> statement-breakpoint
CREATE TABLE "Exercise" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"muscleGroup" text NOT NULL,
	"equipmentType" text NOT NULL,
	"difficulty" text NOT NULL,
	"videoUrl" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "Exercise_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "PersonalRecord" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"exerciseId" text NOT NULL,
	"weight" real NOT NULL,
	"reps" integer NOT NULL,
	"recordType" text NOT NULL,
	"achievedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ProgramExercise" (
	"id" text PRIMARY KEY NOT NULL,
	"workoutDayId" text NOT NULL,
	"exerciseId" text NOT NULL,
	"sets" integer NOT NULL,
	"reps" text NOT NULL,
	"restSeconds" integer DEFAULT 90 NOT NULL,
	"notes" text,
	"order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "WorkoutDay" (
	"id" text PRIMARY KEY NOT NULL,
	"programId" text NOT NULL,
	"dayNumber" integer NOT NULL,
	"name" text NOT NULL,
	"type" text NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "WorkoutProgram" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"goalType" text NOT NULL,
	"experienceLevel" text NOT NULL,
	"frequency" integer NOT NULL,
	"durationWeeks" integer NOT NULL,
	"isActive" boolean DEFAULT true NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "WorkoutRoutine" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"routine" json NOT NULL,
	"agentType" text DEFAULT 'bodybuilding' NOT NULL,
	"conversationId" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "WorkoutSession" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"workoutDayId" text,
	"startTime" timestamp DEFAULT now() NOT NULL,
	"endTime" timestamp,
	"notes" text,
	"completedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE "WorkoutSet" (
	"id" text PRIMARY KEY NOT NULL,
	"sessionId" text NOT NULL,
	"exerciseId" text NOT NULL,
	"setNumber" integer NOT NULL,
	"reps" integer NOT NULL,
	"weight" real NOT NULL,
	"rpe" integer,
	"completedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "AgentConversation" ADD CONSTRAINT "AgentConversation_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_planId_Plan_id_fk" FOREIGN KEY ("planId") REFERENCES "public"."Plan"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "UsageTracking" ADD CONSTRAINT "UsageTracking_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "UsageTracking" ADD CONSTRAINT "UsageTracking_subscriptionId_Subscription_id_fk" FOREIGN KEY ("subscriptionId") REFERENCES "public"."Subscription"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "UserPreferences" ADD CONSTRAINT "UserPreferences_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "PersonalRecord" ADD CONSTRAINT "PersonalRecord_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "PersonalRecord" ADD CONSTRAINT "PersonalRecord_exerciseId_Exercise_id_fk" FOREIGN KEY ("exerciseId") REFERENCES "public"."Exercise"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ProgramExercise" ADD CONSTRAINT "ProgramExercise_workoutDayId_WorkoutDay_id_fk" FOREIGN KEY ("workoutDayId") REFERENCES "public"."WorkoutDay"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ProgramExercise" ADD CONSTRAINT "ProgramExercise_exerciseId_Exercise_id_fk" FOREIGN KEY ("exerciseId") REFERENCES "public"."Exercise"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "WorkoutDay" ADD CONSTRAINT "WorkoutDay_programId_WorkoutProgram_id_fk" FOREIGN KEY ("programId") REFERENCES "public"."WorkoutProgram"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "WorkoutProgram" ADD CONSTRAINT "WorkoutProgram_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "WorkoutRoutine" ADD CONSTRAINT "WorkoutRoutine_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "WorkoutSession" ADD CONSTRAINT "WorkoutSession_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "WorkoutSession" ADD CONSTRAINT "WorkoutSession_workoutDayId_WorkoutDay_id_fk" FOREIGN KEY ("workoutDayId") REFERENCES "public"."WorkoutDay"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "WorkoutSet" ADD CONSTRAINT "WorkoutSet_sessionId_WorkoutSession_id_fk" FOREIGN KEY ("sessionId") REFERENCES "public"."WorkoutSession"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "WorkoutSet" ADD CONSTRAINT "WorkoutSet_exerciseId_Exercise_id_fk" FOREIGN KEY ("exerciseId") REFERENCES "public"."Exercise"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "AgentConversation_userId_idx" ON "AgentConversation" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "AgentConversation_status_idx" ON "AgentConversation" USING btree ("status");--> statement-breakpoint
CREATE INDEX "Subscription_userId_idx" ON "Subscription" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "Subscription_planId_idx" ON "Subscription" USING btree ("planId");--> statement-breakpoint
CREATE INDEX "Subscription_lemonSqueezyId_idx" ON "Subscription" USING btree ("lemonSqueezyId");--> statement-breakpoint
CREATE INDEX "UsageTracking_userId_idx" ON "UsageTracking" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "UsageTracking_subscriptionId_idx" ON "UsageTracking" USING btree ("subscriptionId");--> statement-breakpoint
CREATE INDEX "UsageTracking_period_idx" ON "UsageTracking" USING btree ("periodStart","periodEnd");--> statement-breakpoint
CREATE INDEX "WebhookEvent_eventName_idx" ON "WebhookEvent" USING btree ("eventName");--> statement-breakpoint
CREATE INDEX "WebhookEvent_processed_idx" ON "WebhookEvent" USING btree ("processed");--> statement-breakpoint
CREATE INDEX "PersonalRecord_userId_idx" ON "PersonalRecord" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "PersonalRecord_exerciseId_idx" ON "PersonalRecord" USING btree ("exerciseId");--> statement-breakpoint
CREATE INDEX "ProgramExercise_workoutDayId_idx" ON "ProgramExercise" USING btree ("workoutDayId");--> statement-breakpoint
CREATE INDEX "ProgramExercise_exerciseId_idx" ON "ProgramExercise" USING btree ("exerciseId");--> statement-breakpoint
CREATE INDEX "WorkoutDay_programId_idx" ON "WorkoutDay" USING btree ("programId");--> statement-breakpoint
CREATE INDEX "WorkoutProgram_userId_idx" ON "WorkoutProgram" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "WorkoutRoutine_userId_idx" ON "WorkoutRoutine" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "WorkoutRoutine_conversationId_idx" ON "WorkoutRoutine" USING btree ("conversationId");--> statement-breakpoint
CREATE INDEX "WorkoutSession_userId_idx" ON "WorkoutSession" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "WorkoutSession_workoutDayId_idx" ON "WorkoutSession" USING btree ("workoutDayId");--> statement-breakpoint
CREATE INDEX "WorkoutSet_sessionId_idx" ON "WorkoutSet" USING btree ("sessionId");--> statement-breakpoint
CREATE INDEX "WorkoutSet_exerciseId_idx" ON "WorkoutSet" USING btree ("exerciseId");