export PATH=$PATH:$HOME/.local/bin
export SPARK_HOME=/usr/lib/spark
export PYSPARK_PYTHON=python 3
export PYSPARK_DRIVER_PYTHON=jupyter
export PYSPARK_DRIVER_PYTHON_OPTS='notebook'

nohup pyspark \
        --master yarn\
        --packages com.amazonaws:aws-java-sdk-pom:1.10.34,org.apache.hadoop:hadoop-aws:2.7.2 \
        --conf spark.executor.instances=2 \
        --conf spark.executor.cores=8 \
        --conf spark.executor.memory=20G \
        --conf spark.default.parallelism=32 >> pyspark.log 2>&1 &

tail -n 20 -f pyspark.log
