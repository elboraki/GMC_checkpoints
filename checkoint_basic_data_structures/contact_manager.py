class Contact:
    def __init__(self, name, phone):
        self.name = name
        self.phone = phone

    def __str__(self):
        return f"{self.name} - {self.phone}"


class Node:
    def __init__(self, contact):
        self.contact = contact
        self.prev = None
        self.next = None


class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, contact):
        new_node = Node(contact)

        if self.head is None:
            self.head = new_node
            self.tail = new_node
            return

        self.tail.next = new_node
        new_node.prev = self.tail
        self.tail = new_node

    def display_forward(self):
        if self.head is None:
            print("No contacts found.")
            return

        current = self.head
        while current is not None:
            print(current.contact)
            current = current.next

    def display_backward(self):
        if self.tail is None:
            print("No contacts found.")
            return

        current = self.tail
        while current is not None:
            print(current.contact)
            current = current.prev

    def get_contacts(self):
        contacts = []
        current = self.head

        while current is not None:
            contacts.append(current.contact)
            current = current.next

        return contacts


class ContactManager:
    def __init__(self):
        self.contacts_list = DoublyLinkedList()
        self.contacts_table = {}

    def add_contact(self, name, phone):
        contact = Contact(name, phone)
        self.contacts_list.append(contact)
        self.contacts_table[name.lower()] = contact
        print("Contact added.")

    def search_by_exact_name(self, name):
        contact = self.contacts_table.get(name.lower())

        if contact is None:
            print("No contact found with that name.")
        else:
            print(f"Contact found: {contact}")

    def search_by_keyword(self, keyword):
        found = False

        for contact in self.contacts_list.get_contacts():
            if contains_substring(contact.name.lower(), keyword.lower()):
                print(f"Match found: {contact}")
                found = True

        if not found:
            print("No matches found.")

    def display_forward(self):
        self.contacts_list.display_forward()

    def display_backward(self):
        self.contacts_list.display_backward()


def contains_substring(text, pattern):
    if pattern == "":
        return True

    if len(pattern) > len(text):
        return False

    for i in range(len(text) - len(pattern) + 1):
        match = True

        for j in range(len(pattern)):
            if text[i + j] != pattern[j]:
                match = False
                break

        if match:
            return True

    return False


def show_menu():
    print("\n1. Add Contact")
    print("2. Search by Keyword")
    print("3. Search by Exact Name")
    print("4. View All (Forward)")
    print("5. View All (Backward)")
    print("6. Exit")


def main():
    manager = ContactManager()

    while True:
        show_menu()
        option = input("\nEnter option: ")

        if option == "1":
            name = input("Name: ").strip()
            phone = input("Phone: ").strip()

            if name == "" or phone == "":
                print("Name and phone cannot be empty.")
            else:
                manager.add_contact(name, phone)

        elif option == "2":
            keyword = input("Search keyword: ").strip()
            manager.search_by_keyword(keyword)

        elif option == "3":
            name = input("Exact name: ").strip()
            manager.search_by_exact_name(name)

        elif option == "4":
            manager.display_forward()

        elif option == "5":
            manager.display_backward()

        elif option == "6":
            print("Goodbye!")
            break

        else:
            print("Invalid option. Please choose a number from 1 to 6.")


if __name__ == "__main__":
    main()
