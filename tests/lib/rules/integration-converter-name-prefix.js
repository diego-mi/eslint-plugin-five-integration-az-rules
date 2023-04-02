/**
 * @fileoverview Integration Converters need to have Converter in your names
 * @author Diego Campos
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/integration-converter-name-prefix"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("integration-converter-name-prefix", rule, {
  valid: [
    {
      filename: 'src/core/b2c/integration/domain/interfaces/converters/TestConvert.ts',
      code: '"hello world";'
    },
    {
      filename: 'src/component/converters/TestConvert.ts',
      code: '"hello world";'
    },
  ],

  invalid: [
    {
      filename: 'src/core/b2c/integration/domain/converters/TestConvert.ts',
      code: '"hello world failed";',
      errors: [
        {
          messageId: 'needConverterPrefix',
        }
      ]
      ,
    },
  ],
});
