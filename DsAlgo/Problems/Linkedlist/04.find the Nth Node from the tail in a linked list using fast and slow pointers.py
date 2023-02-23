# How to find the Nth Node from the tail in a linked list using fast and slow pointers



class Element(object):
    def __init__(self, value) -> None:
        self.value = value
        self.next = None


class LinkedList(object):
    def __init__(self, head) -> None:
        self.head = head

    def append(self, new_element):
        current = self.head
        if self.head:
            while current.next:
                current = current.next
            current.next = new_element
        else:
            self.head = new_element

    def find_nth_from_tail(self, n):
        prev = None
        current = self.head
        while current.next:
            next = current.next
            current.next = prev
            prev = current
            current = next
        self.head = prev
        cur = self.head
        while cur.next and n > 0:
            n -= 1
            cur = cur.next
        return cur.value
        


e1 = Element(1)
e2 = Element(2)
e3 = Element(3)
e4 = Element(4)
e5 = Element(5)

ll = LinkedList(e1)
ll.append(e2)
ll.append(e3)
ll.append(e4)
ll.append(e4)

print(ll.find_nth_from_tail(2))

