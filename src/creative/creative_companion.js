import { createCreative } from './creative';

export function createCreativeCompanion(creativeAttributes = {}) {
  const { id, adId, sequence, apiFramework } = createCreative(
    creativeAttributes
  );
  return {
    id,
    adId,
    sequence,
    apiFramework,
    type: 'companion',
    required: null,
    variations: [],
  };
}
