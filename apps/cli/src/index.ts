#!/usr/bin/env node
import { Command } from "commander";

import { backupCommand } from "./commands/backup.js";
import { doctorCommand } from "./commands/doctor.js";
import { exportCommand } from "./commands/export.js";
import { infoCommand } from "./commands/info.js";
import { importCommand } from "./commands/import.js";
import { installCommand } from "./commands/install.js";
import { listReviewsCommand } from "./commands/list-reviews.js";
import { loginCommand } from "./commands/login.js";
import { logoutCommand } from "./commands/logout.js";
import { publishCommand } from "./commands/publish.js";
import { reviewCommand } from "./commands/review.js";
import { searchCommand } from "./commands/search.js";
import { syncCommand } from "./commands/sync.js";
import { validateCommand } from "./commands/validate.js";

const program = new Command();

program.name("agentx").description("Private AI Agent artifact platform CLI");

program
  .command("login")
  .requiredOption("--api-url <url>", "Registry API base URL")
  .option("--token <token>", "Existing access token")
  .option("--email <email>", "Member email")
  .option("--password <password>", "Member password")
  .action((options) => loginCommand(options));

program.command("logout").action(logoutCommand);

program.command("search").argument("<query>").action(searchCommand);
program.command("info").argument("<slug>").action(infoCommand);

program
  .command("install")
  .argument("<slug>")
  .option("--agent <agent>", "Target agent", "cursor")
  .option("--dir <dir>", "Install directory")
  .action((slug, options) => installCommand(slug, options));

program.command("publish").argument("<manifestPath>").action(publishCommand);
program.command("validate").argument("<manifestPath>").action(validateCommand);
program.command("reviews").action(listReviewsCommand);
program.command("export").requiredOption("--out <path>", "Export JSON file path").action((options) => exportCommand(options.out));
program.command("import").argument("<path>").action(importCommand);
program.command("backup").option("--label <label>", "Optional backup label").action((options) => backupCommand(options.label));

program
  .command("review")
  .argument("<reviewId>")
  .requiredOption("--decision <decision>", "approved or rejected")
  .option("--reviewer <reviewer>", "Reviewer identity", "cli-reviewer")
  .option("--notes <notes>", "Review notes")
  .action((reviewId, options) => reviewCommand(reviewId, options));

program
  .command("sync")
  .argument("<slug>")
  .option("--agent <agent>", "Target agent", "cursor")
  .option("--dir <dir>", "Target directory")
  .action((slug, options) => syncCommand(slug, options));

program.command("doctor").action(doctorCommand);

await program.parseAsync(process.argv);
