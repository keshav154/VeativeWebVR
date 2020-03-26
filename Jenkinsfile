#!/bin/groovy
pipeline {
  tools {
    nodejs 'node'
  }
  stages {
    stage('Startup') {
      steps {
        script {
          bat 'npm install'
        }
      }
    }
    stage('Test') {
      steps {
        script {
          bat 'npm run test'
        }
      }
      post {
        always {
          step([$class: 'CoberturaPublisher', coberturaReportFile: 'output/coverage/jest/cobertura-coverage.xml'])
        }
      }
    }
  }
}
