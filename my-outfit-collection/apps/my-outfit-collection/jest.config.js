module.exports = {
  name: 'my-outfit-collection',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/my-outfit-collection',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
