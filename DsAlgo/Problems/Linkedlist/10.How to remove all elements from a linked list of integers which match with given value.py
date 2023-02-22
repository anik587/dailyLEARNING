# How to remove all elements from a linked list of integers which match with given value
# case 1 : 1, 2, 2, 2, 5, 2, 7, 2
# case 2 : 2, 2, 2, 1, 2, 5
# case 3 : 1, 2, 2, 2, 2

class Element(object):
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList(object):
    def __init__(self, value):
        self.head = value

    def append(self, new_element):
        current = self.head
        if self.head:
            while current.next:
                current = current.next
            current.next = new_element
        else:
            self.head = new_element

    def removeElement(self, val):
        if self.head.value != val:
            e = Element(self.head.value)
            newList = LinkedList(e)
            current = self.head.next
        else:
            current = self.head
            while current.value == val:
                current = current.next
            e = Element(current.value)
            newList = LinkedList(e)
            current = current.next

        while current.next:
            if current.value != val:
                newList.append(Element(current.value))
            current = current.next
        if current.value != val:
            newList.append(Element(current.value))
        self.newList = newList
        pass

    def printList(self):
        current = self.newList.head
        while current.next:
            print(current.value, end=" ")
            current = current.next
        print(current.value, end=" ")
        pass


e1 = Element(1)
e2 = Element(2)
e3 = Element(2)
e4 = Element(2)
e5 = Element(5)
e6 = Element(2)
e7 = Element(7)
e8 = Element(2)

ll = LinkedList(e1)
ll.append(e2)
ll.append(e3)
ll.append(e4)
ll.append(e5)
ll.append(e6)
ll.append(e7)
ll.append(e8)

ll.removeElement(2)
ll.printList()