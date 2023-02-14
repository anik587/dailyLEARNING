# reverse 1 withour recurrsion
# reverse 2 with recurrsion
# Iutput
# 1 2 3 
# Output
# 3 2 1 


class Element(object):
    def __init__(self, value) -> None:
        self.value = value
        self.next = None


class LinkedList(object):
    def __init__(self, head) -> None:
        self.head = head
        self.list = None

    def append(self, new_element):
        current = self.head
        if self.head:
            while current.next:
                current = current.next
            current.next = new_element
        else:
            self.head = new_element

    def reverse1(self):
        head = self.head
        previous, current = None, None
        while head.next is not None:
            current = head
            head = head.next
            current.next = previous
            previous = current
            head = current
        pass
        current = head
        head = head.next
        current.next = previous
        previous = current
        

    def printList(self):
        current = self.head
        while current.next is not None:
            print(current.value, end = " ")
            current = current.next
        print(current.value, end = " ")


e1 = Element(5)
e2 = Element(6)
e3 = Element(3)

ll = LinkedList(e1)
ll.append(e2)
ll.append(e3)
ll.reverse1()

ll.printList()