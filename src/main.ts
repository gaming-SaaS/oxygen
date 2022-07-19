
import { bootstrap } from '@gaming-saas/nest-plus';
import { version } from "../package.json";
import { AppModule } from "./app.module";

bootstrap(version.split('.')[0], AppModule);
