### 安装
```
mkdir /root/jenkins_home &&
docker run   -u root   --rm   -d   -p 8080:8080   -p 50000:50000   -v /root/jenkins_home:/var/jenkins_home   -v /var/run/docker.sock:/var/run/docker.sock   jenkinsci/blueocean
```
用户名： admin/admin
### Pipeline
#### 什么是Jenkins的流水线?    
- 流水线（pipeline）是用户定义的一个CD流水线模型 。流水线的代码定义了整个的构建过程, 他通常包括构建, 测试和交付应用程序的阶段 。
- 阶段（stage） 块定义了在整个流水线的执行任务的概念性地不同的的子集(比如 "Build", "Test" 和 "Deploy" 阶段), 它被许多插件用于可视化 或Jenkins流水线目前的 状态/进展.
- 步骤（step）本质上 ，一个单一的任务, a step 告诉Jenkins 在特定的时间点要做_what_ (或过程中的 "step")。 举个例子,要执行shell命令 ，请使用 sh 步骤: sh 'make'。当一个插件扩展了流水线DSL, [1] 通常意味着插件已经实现了一个新的 step。

对Jenkins 流水线的定义被写在一个文本文件中 (成为 Jenkinsfile)，该文件可以被提交到项目的源代码的控制仓库。 [2] 这是"流水线即代码"的基础; 将CD 流水线作为应用程序的一部分，像其他代码一样进行版本化和审查。 创建 `Jenkinsfile`并提交它到源代码控制中提供了一些即时的好处:

自动地为所有分支创建流水线构建过程并拉取请求。
在流水线上代码复查/迭代 (以及剩余的源代码)。
对流水线进行审计跟踪。
该流水线的真正的源代码 [3], 可以被项目的多个成员查看和编辑。

#### 流水线编写
Jenkinsfile 能使用两种语法进行编写 - 声明式和脚本化。声明式和脚本化的流水线从根本上是不同的。 声明式流水线的是 Jenkins 流水线更近的特性:
相比脚本化的流水线语法，它提供更丰富的语法特性,
是为了使编写和读取流水线代码更容易而设计的。

声明式流水线基础
在声明式流水线语法中, pipeline 块定义了整个流水线中完成的所有的工作。
```
Jenkinsfile (Declarative Pipeline)
pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                // 
            }
        }
        stage('Test') { 
            steps {
                // 
            }
        }
        stage('Deploy') { 
            steps {
                // 
            }
        }
    }
}
```

#### 创建流水线
流水线可以通过以下任一方式来创建：
- 通过 **Blue Ocean** - 在 Blue Ocean 中设置一个流水线项目后，Blue Ocean UI 会帮你编写流水线的 Jenkinsfile 文件 **并提交到源代码** 管理系统。
- 通过经典 UI - 你可以通过经典 UI 在 Jenkins 中直接输入基本的流水线。经典 UI 创建的 Jenkinsfile 由 Jenkins 自己保存（在 Jenkins 的主目录下）
- 在源码管理系统中定义 - 你可以手动编写一个 Jenkinsfile 文件，然后提交到项目的源代码管理仓库中。

- 注意： 通过经典的 UI 定义流水线可以很方便的测试流水线代码片段，也可以处理简单的或不需要从源代码仓库中检出/克隆的流水线。    源代码管理系统中那些复杂的项目，建议使用 Blue Ocean 或 源码管理系统来定义你的 Jenkinsfile 文件。不过通常认为创建一个 Jenkinsfile 并将其检入源代码控制仓库是最佳实践。


-----
参考 [官方文档](https://www.jenkins.io/zh/doc)