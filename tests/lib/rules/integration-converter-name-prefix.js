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
    {
      filename: 'src/component/converters/TestConvert.ts',
      code: 'export default class FooConverter {};',
      parserOptions: {ecmaVersion: 6, sourceType: "module"}
    },
    {
      code: 'class Foo {};',
      filename: "/some/dir/foo.js",
      parserOptions: {ecmaVersion: 6},
    },
    {
      code: 'class FooConverter {};',
      filename: "src/component/converters/foo.js",
      parserOptions: {ecmaVersion: 6},
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
    },
    {
      code: 'class FooConvert {};',
      filename: "src/core/b2c/integration/domain/converters/foo.js",
      parserOptions: {ecmaVersion: 6},
      errors: [
        {
          messageId: 'needConverterPrefix',
        }
      ]
    },
  ],
});
