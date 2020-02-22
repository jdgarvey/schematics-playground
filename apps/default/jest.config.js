module.exports = {
  name: 'default',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/default',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
