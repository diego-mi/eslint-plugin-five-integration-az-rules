/**
 * @fileoverview Integration Converters need to have Converter in your names
 * @author Diego Campos
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "layout", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Integration Converters need to have Converter in your names",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      needConverterPrefix: "Files in the 'converters' folder should contain the word 'Converter' in their name"
    }
  },

  create(context) {
    return {
      'Program:exit'(node) {
        const fileName = context.getFilename();
        if (/^.*\/domain\/converters\//.test(fileName)) {
          if (!/.*Converter.*\..*$/.test(fileName)) {
            context.report({
              node,
              messageId: 'needConverterPrefix',
            });
          }
        }
      },
    };
  },
};



