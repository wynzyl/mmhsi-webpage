CREATE TABLE "activities" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"category" text NOT NULL,
	"date" text NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "alumni" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"batch" text NOT NULL,
	"university" text NOT NULL,
	"program" text NOT NULL,
	"achievement" text NOT NULL,
	"story" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "board_passers" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"exam" text NOT NULL,
	"year" integer NOT NULL,
	"class" text NOT NULL,
	"image" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "events" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"date" text NOT NULL,
	"time" text NOT NULL,
	"location" text NOT NULL,
	"description" text NOT NULL,
	"category" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "graduates" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"university" text NOT NULL,
	"course" text NOT NULL,
	"batch" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "math_science" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"participants" text NOT NULL,
	"award" text NOT NULL,
	"level" text NOT NULL,
	"date" text NOT NULL,
	"category" text NOT NULL,
	"image" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "news" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"date" text NOT NULL,
	"category" text NOT NULL,
	"excerpt" text NOT NULL
);
