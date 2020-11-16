pipeline {
  agent {
    node {
      label 'v10.16.3'
    }

  }
  stages {
    stage('test') {
      steps {
        echo 'start build'
        sh 'echo "aaaa"'
      }
    }

    stage('build') {
      steps {
        sh '''# !/bin/bash
echo "$(pwd)"
# cd antdesign-stu/ &&
# npm install && npm run build'''
      }
    }

  }
}