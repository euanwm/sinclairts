# SinclairTS

SinclairTS is a simple library to calculate the IWF Sinclair Coefficient. We have bundled in as many different coefficients relating to each Olympic training cycle. See the ./src/coefficients.ts file for a full list of coefficients.

## Installation

To use SinclairGo in your TS project, you can simply use npm:

```bash
npm install sinclairts
```

## Usage
```typescript
import SinclairCalculator from 'sinclairts';

SinclairCalculator.getSinclair("2021", true, "81", "235");
```