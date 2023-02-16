# How to add or remove Nth Node from the end of a linked list


class Element(object):
    def __init__(self, value) -> None:
        self.value = value
        self.next = None


class LinkedList(object):
    def __init__(self, head) -> None:
        self.head = head

    def add_element(self, new_element):
        current = self.head
        if self.head:
            while current.next:
                current = current.next
            current.next = new_element
        else:
            self.head = new_element

        return
    
    def insertnthvalue(self, new_element, position):
        current = self.head

        if position == 1:
            new_element.next = current
            self.head = new_element
            return None

        counter = 1
        while current.next:
            if counter + 1 == position:
                new_element.next = current.next
                current.next = new_element
            current = current.next
            counter += 1
        return None
    
    def removenthvalue(self, position):
        current = self.head

        if position == 1:
            self.head = current.next
            return None

        counter = 1
        while current.next:
            if counter + 1 == position:
                current.next = current.next.next
            current = current.next
            counter += 1
        return None



e1 = Element(1)
e2 = Element(2)
e3 = Element(3)
e4 = Element(4)
e5 = Element(5)
e6 = Element(6)
e7 = Element(7)

ll = LinkedList(e1)
ll.add_element(e2)
ll.add_element(e3)
ll.add_element(e4)
ll.add_element(e5)
ll.add_element(e6)

print(ll.insertnthvalue(e7, 5))
print(ll.removenthvalue(4))
