// The MIT License

// Copyright (c) 2015-2020 Yakdu. http://typeorm.github.io

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

export class ParamTypeMissingError extends Error {
  constructor(object: Object, propertyName: string, index: number) {
    super(
      `Cannot get reflected type for a "${propertyName}" method's ${
        index + 1
      }. parameter of ${object.constructor.name} class. ` +
        `Make sure you have turned on an "emitDecoratorMetadata": true, option in tsconfig.json. ` +
        `and that you have imported "reflect-metadata" on top of the main entry file in your application.` +
        `And make sure that you have annotated the property type correctly with: ` +
        `Repository, MongoRepository, TreeRepository or custom repository class type.`
    );

    Object.setPrototypeOf(this, ParamTypeMissingError.prototype);
  }
}
