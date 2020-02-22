import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

// Causes "rootDir" error
import { AppModule } from '../../../apps/default/src/app/app.module';

export default function(schema: any): Rule {
  return (tree, context) => tree;
}
