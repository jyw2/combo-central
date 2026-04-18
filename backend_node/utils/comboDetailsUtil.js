const { comboDetailsSchema } = require("../utils/envResolverUtil")

function getFormattedUIDetails() {
  const result = {};
  for (var [detailGroupName, detailGroupSchemaType] of Object.entries(
    comboDetailsSchema.paths
  )) {
    const detailGroup = {}
    for (var [detailName, detailSchemaType] of Object.entries(
      detailGroupSchemaType.schema.paths
    )) {
      if (detailSchemaType.$embeddedSchemaType) {
        detailGroup[detailName] = {
          enum: detailSchemaType.$embeddedSchemaType.options.enum,
          uiType: detailSchemaType.$embeddedSchemaType.options.uiType
        };
      } else {
        detailGroup[detailName] = {
          enum: detailSchemaType.options.enum,
          uiType: detailSchemaType.options.uiType
        };
      }
    }
    result[detailGroupName] = detailGroup
  }
  return result;
}

function getStringDetailsWithOptions() {
  // only returns "string_single_select" type details

  const result = {};
  for (var [detailGroupName, detailGroupSchemaType] of Object.entries(
    comboDetailsSchema.paths
  )) {
    for (var [detailName, detailSchemaType] of Object.entries(
      detailGroupSchemaType.schema.paths
    )) {
      if (detailSchemaType.$embeddedSchemaType
        || detailSchemaType.options.uiType !== "string_single_select") continue;

      result[detailName.replace("_", " ")] = {
        values: detailSchemaType.options.enum,
        category: detailGroupName.replace("_", " "),
      };
    }
  }
  return result;
}

function getArrayDetailsWithOptions() {
  const result = {};
  for (var [detailGroupName, detailGroupSchemaType] of Object.entries(
    comboDetailsSchema.paths
  )) {
    for (var [detailName, detailSchemaType] of Object.entries(
      detailGroupSchemaType.schema.paths
    )) {
      if (!detailSchemaType.$embeddedSchemaType) continue;

      result[detailName.replace("_", " ")] = {
        values: detailSchemaType.$embeddedSchemaType.options.enum,
        category: detailGroupName.replace("_", " "),
      };
    }
  }
  return result;
}

module.exports = { getArrayDetailsWithOptions, getStringDetailsWithOptions, getFormattedUIDetails };
