class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
      return;
    }

    this.items.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - ${item.pages} pages`);
    });
  }
}

class PrinterQueue {
  constructor() {
    this.queue = new Queue();
  }

  addJob(name, pages) {
    if (!name || pages <= 0) {
      console.log("Print job must have a name and a positive number of pages.");
      return;
    }

    const job = { name, pages };
    this.queue.enqueue(job);
    console.log(`Added print job: ${job.name} (${job.pages} pages)`);
  }

  processJob() {
    const job = this.queue.dequeue();

    if (!job) {
      console.log("No print jobs to process.");
      return;
    }

    console.log(`Printing: ${job.name} (${job.pages} pages)`);
  }

  printQueue() {
    console.log("Current print queue:");
    this.queue.print();
  }

  nextJob() {
    const job = this.queue.peek();

    if (!job) {
      console.log("There is no next job.");
      return;
    }

    console.log(`Next job: ${job.name} (${job.pages} pages)`);
  }
}

// Testing the printer queue simulation
const officePrinter = new PrinterQueue();

console.log("Adding print jobs...");
officePrinter.addJob("Employee Report", 8);
officePrinter.addJob("Meeting Agenda", 2);
officePrinter.addJob("Budget Spreadsheet", 5);

console.log("");
officePrinter.printQueue();

console.log("");
officePrinter.nextJob();

console.log("\nProcessing jobs...");
officePrinter.processJob();
officePrinter.processJob();

console.log("");
officePrinter.printQueue();

console.log("\nAdding another print job...");
officePrinter.addJob("Project Proposal", 12);

console.log("");
officePrinter.printQueue();

console.log("\nProcessing remaining jobs...");
officePrinter.processJob();
officePrinter.processJob();
officePrinter.processJob();
