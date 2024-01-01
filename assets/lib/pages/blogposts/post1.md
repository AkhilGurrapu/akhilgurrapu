
## Data

### Structured Data

- **Format:** Tabular format with rows and columns.
- **Examples:** Relational databases, Excel spreadsheets.

### Unstructured Data

- **Format:** No predefined structure; lacks a tabular format.
- **Examples:** Image files (e.g., PNG, JPEG), audio files (e.g., MP3), video files, text documents.

### Semi Structured Data

- **Format:** Has some structure but doesn't conform to the formal structure of a relational database.
- **Examples:** JSON, XML, CSV.

## Big Data

**Big Data** refers to large and complex datasets characterized by:

- **Velocity:** The speed at which data is generated, processed, and analyzed.
- **Volume:** The sheer amount of data produced and collected, often exceeding traditional storage capacities.
- **Variety:** Diverse types of data, including structured, unstructured, and semi-structured formats.
- **Veracity:** The quality and reliability of the data, considering its accuracy and trustworthiness.
- **Value:** The goal of extracting meaningful insights and value from the data for informed decision-making.

### Challenges

Handling big data comes with various challenges; here are two key problems:

1. **Problem:** Hard to Store
   - **Solution:** Hadoop Distributed File System (HDFS)
     - Storing large volumes of data efficiently is challenging with traditional storage systems. HDFS, part of the Hadoop ecosystem, addresses this by distributing data across multiple nodes in a cluster, providing scalability, fault tolerance, and efficient storage.

2. **Problem:** Hard to Process
   - **Solution:** MapReduce
     - Processing vast amounts of data in a timely manner is a significant challenge. MapReduce, also part of Hadoop, offers a programming model for distributed processing. It divides tasks into smaller sub-tasks, processes them in parallel on nodes in the cluster, and then aggregates the results. This parallel processing approach enables the efficient handling of large datasets.

Both HDFS and MapReduce are fundamental components of the Hadoop framework and have played a crucial role in making it possible to handle and analyze massive datasets that exceed the capabilities of traditional systems.

# HDFS Architecture

![HDFS Architecture](/assets/posts/hdfsA.png)

**HDFS**, or Hadoop Distributed File System, is a distributed storage system designed to handle large amounts of data across multiple machines. Let's break down its architecture in a simpler way:

- **NameNode:**
  - Think of it as the master or manager.
  - Manages the file system namespace (directory structure) and metadata (information about files and their locations).
  - There's only one NameNode in a cluster.
  - If the NameNode fails, the entire file system becomes inaccessible, so it's crucial.

- **DataNode:**
  - These are like workers or storage units.
  - Store the actual data.
  - There can be many DataNodes in a cluster, each responsible for storing a portion of the data.
  - They periodically send heartbeat signals to the NameNode to show they are alive and well.

- **Blocks:**
  - Data is divided into fixed-size blocks (typically 128 MB or 256 MB).
  - Each block is stored on multiple DataNodes for fault tolerance. This replication ensures that if one DataNode fails, the data can still be retrieved from other copies.

- **Rack:**
  - DataNodes are organized into racks, which are essentially groups of machines.
  - HDFS tries to store multiple copies of a block on different racks for additional fault tolerance. This helps in scenarios where an entire rack or network segment fails.

- **Client:**
  - Any application that uses HDFS to store or retrieve data is a client.
  - Clients interact with the NameNode for metadata and with DataNodes for actual data.
  - They are responsible for reading or writing data to the HDFS.

**How it works:**
- When a client wants to store a file, it talks to the NameNode to get information on where to store each block.
- The client then communicates directly with the relevant DataNodes to store the data.
- When the client wants to read a file, it asks the NameNode for the locations of the blocks and then reads them directly from the DataNodes.

# MapReduce Architecture

![MapReduce Architecture](/assets/posts/MapRA.png)

Imagine you have a huge task, like counting the number of words in a massive book. This task is so big that you can't do it all at once on one computer because it would take too long. So, you decide to divide and conquer.

## Map Phase

- **Map:**
  - You give different parts of the book to different people. Each person counts the words in their assigned section. This is the "map" part. They are mapping the words in their section.
- **Intermediate Result:**
  - Each person hands you a piece of paper with the count for their section.

## Shuffle and Sort Phase

- You collect all those pieces of paper and organize them. If two people counted words for the same word, you group those counts together. This is like shuffling and sorting the results.

## Reduce Phase

- **Reduce:**
  - Now, you (or someone else) take each group of counts and add them up. This is the "reduce" part. You're reducing all those individual word counts into a final total count.
- **Final Result:**
  - You end up with the total count of words in the entire book.

![MapReduce Architecture](/assets/posts/MapREx.png)

In simple terms, MapReduce is a way of breaking down a big task into smaller tasks, having different workers do those tasks, organizing the results, and then combining them to get the final answer. It's a method for parallel processing and handling large amounts of data more efficiently.

Think of MapReduce like sorting and counting words in two sentences. First, each word is counted separately for both sentences (like counting apples in two baskets). Then, all the counts are combined and added up to get a final count for each word. So, for "This is an Apple" and "Apple is red in color," the result is (This-1), (is-2), (an-1), (Apple-2), (red-1), (in-1), (color-1).

# Hadoop

The key components of the Hadoop framework include:

- **Hadoop Distributed File System (HDFS):**
  - HDFS is a distributed file system designed to store vast amounts of data across multiple machines. It divides large files into smaller blocks and replicates them across the cluster for fault tolerance.

- **MapReduce:**
  - MapReduce is a programming model and processing engine for processing and generating large datasets. It consists of two main steps: the Map phase, where data is divided into smaller chunks and processed in parallel, and the Reduce phase, where the results from the Map phase are aggregated.

- **YARN (Yet Another Resource Negotiator):**
  - YARN is the resource management layer of Hadoop. It manages and schedules resources in a Hadoop cluster, allowing multiple applications to share resources dynamically.

# Resources - Research Papers:

[The Hadoop Distributed File System](https://storageconference.us/2010/Papers/MSST/Shvachko.pdf)

[MapReduce: Simplified Data Processing on Large Clusters](https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf)


# Video Resources:

[![Map Reduce]](https://www.youtube.com/watch?v=cHGaQz0E7AU&t=120s)

[![Hadoop Distributed File System (HDFS) Introduction]](https://www.youtube.com/watch?v=GJYEsEEfjvk&t=567s)


---

<div style="text-align:center">
  <img src="path/to/your/image.png" alt="Hadoop Logo" width="300"/>
</div>