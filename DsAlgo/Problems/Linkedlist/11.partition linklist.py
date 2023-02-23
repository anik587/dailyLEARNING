# Given a linked list and a value x, partition it such that 
# all nodes less than x come before nodes greater than or 
# equal to x.


class Element(object):
    def __init__(self, value) -> None:
        self.value = value
        self.next = None

class LinkedList(object):
    def __init__(self, value) -> None:
        self.head = value

    def append(self, new_value):
        if self.head:
            current = self.head
            while  current.next:
                current = current.next
            current.next = new_value
        else:
            self.head = new_value

    def partition(self, parti):
        current = self.head
        smaller = Element(0)
        smL = LinkedList(smaller)
        larger = Element(0)
        laL = LinkedList(larger)
        while current.next:
            if current.value < parti:
                smL.next = Element(current.value)
            else:
                laL.next = Element(current.value)
            current = current.next
        self.head = smL.head.next
        new_current = self.head
        while new_current.next:
            new_current = new_current.next
        new_current.next = laL.head.next
        self.head = new_current


e1 = Element(1)
e2 = Element(3)
e3 = Element(7)
e4 = Element(5)
e5 = Element(8)
e6 = Element(2)
e7 = Element(5)

ll = LinkedList(e1)
ll.append(e2)
ll.append(e3)
ll.append(e4)
ll.append(e5)
ll.append(e6)
ll.append(e7)

ll.partition(e4)