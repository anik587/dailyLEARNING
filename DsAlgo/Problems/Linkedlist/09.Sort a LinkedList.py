class Element(object):
    def __init__(self, value=None, next=None) -> None:
        self.value = value
        self.next = next


class LinkedList(object):
    def __init__(self, head) -> None:
        self.head = head

    def append(self, new_value):
        if self.head:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_value
        else:
            self.head = new_value

    def printList(self):
        temp = self.head
        while temp:
            print(temp.value, end=" ")
            temp = temp.next

    def sortedInsert(self, head_ref, new_node):
        if (head_ref == None or (head_ref).value >= new_node.value):
            new_node.next = head_ref
            head_ref = new_node
        else:
            current = head_ref
            while (current.next != None and
                   current.next.value < new_node.value):
                current = current.next

            new_node.next = current.next
            current.next = new_node

        return head_ref

    def insertion_sort(self):
        sorted = None
        current = self.head
        while(current != None):
            next = current.next
            sorted = self.sortedInsert(sorted, current)
            current = next

        self.head = sorted




if __name__ == '__main__':
    # a list containing the data of the linked list.
    data = [12, 2, 1, 15]

    # points to the head node of the linked list
    head = None

    # constructing the linked list from last to first
    ll = LinkedList(Element(12))
    ll.append(Element(2))
    ll.append(Element(1))
    ll.append(Element(15))

    # printing the linked list before sorting
    print("Original Linked list: ")
    ll.printList()
    ll.insertion_sort()
    print("\nSorted Linked list: ")
    ll.printList()
